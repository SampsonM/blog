# CircleCI Setup for a front end app!

I'd like to write something profound here about how I decided to use <a href="https://circleci.com/docs/2.0/migrating-from-jenkins/" target="blank">CircleCI</a> because of the improved parallelism, or the existance of built in support for Docker compared to Jenkins...

But as it goes I use Jenkins daily so I thought it would be a nice change.

After some meddling though, inspecting the CircleCI GUI and reading the <a href="https://circleci.com/docs/2.0/configuration-reference/#section=configuration" target="blank">docs</a>, I actually really like it.

It was easy to set up, the GUI is super intuitive and the docs are relatively straight forwards. The lack of stackoverflow questions related to circleci must count for something? <i>(or maybe they just exist in their forums instead?)</i>


## So how easy is it to set up?

Well, easy. Following the <a href="https://circleci.com/docs/2.0/first-steps/#section=getting-started" target="blank">getting started steps</a> all you need to do is:

* Sign up to CircleCI with GitHub or BitBucket
* Add your project
* Confirm you'd like to add the default .circleci/config.yaml and set up branch

It has never been easier to create a new CI/CD pipeline!

Unfortunately I'm not working on commission and can't think of any downsides as of yet, but either way to get the pipeline running its easy.

## What is config.yaml?

In your repo, on a *circleci-project-setup branch* in a new *.circleci* directory, you should now have a *config.yaml* that looks like this.

```yaml
# Use the latest 2.1 version of CircleCI pipeline process engine. See: https://circleci.com/docs/2.0/configuration-reference
version: 2.1
# Use a package of configuration called an orb.
orbs:
  # Declare a dependency on the welcome-orb
  welcome: circleci/welcome-orb@0.4.1
# Orchestrate or schedule a set of jobs
workflows:
  # Name the workflow "welcome"
  welcome:
    # Run the welcome/run job in its own container
    jobs:
      - welcome/run
```

So lets talk through each of the basic components here.

**orbs** are shareable packages of CircleCI config. An orb has its own config that will look similar to your own and runs its own set of jobs run some commands, but they still run in your execution context. In our example we don't need any orbs so we can delete this.

**Workflows** contain the jobs that you want to run and the triggers that decide when to run them. They run in parallel unless you explicitly <a href="https://circleci.com/docs/2.0/configuration-reference/#requires" target="blank">require</a> another job to finish before starting.

In our example we have a single job running *welcome/run*, this simply runs the *welcome* orbs job called *run*, which runs its own set of steps seen <a href="https://circleci.com/orbs/registry/orb/circleci/welcome-orb" target="blank">in the orb source on line 12</a>.


## How do I run my own jobs?

To run your own jobs you need a few things:

* Your job
* An execution context
* Job steps

**Your job** needs to be created in the root of your *config.yaml*, here we named our job *deploy-ui*

```yaml
version: 2.1

jobs:
  # Your job name
  deploy-ui:

workflows:
  welcome:
    jobs:
      # Matches your desired job name
      - deploy-ui
```

**The Execution context** is the container that you run your job steps in, we require node for our build so we use a docker image that has node.<br/>
CircleCI runs any docker image so you have the <a href="https://hub.docker.com/search?q=node&type=image" target="blank">dockerhub</a> at your disposal to build any environment, how exciting!

Note: Each executor is created fresh for each job so your build files or node_modules will not persist into the next job, but we have a trick for that!

```yaml
executors:
  # Use a name that makes sense to you here i.e node-12-executor
  node-12-executor:
    docker:
      # Image which will be pulled in from docker hub by circleci
      - image: circleci/node:12
    # Directory you want context/repo to live in
    working_directory: ~/example

jobs:
  deploy-ui:
    # Reference your executor here to build a container including node-12
    executor: node-12-executor

workflows:
...
```


**Job steps**, now you have a container with node installed you need to checkout your repo, install your node_modules and build your app!

```yaml
executors:
...

jobs:
  deploy-ui:
    executor: node-12-executor
    steps:
      # CircleCI is linked to your repo so it knows to checkout your repo! equivalant of - git clone <YOUR_REPO>
      - checkout

      # run is used to invoke command-line programs
      - run:
          # Selected name will appear in the circleci pipeline GUI
          name: INSTALL - dependencies
          # working_directory is the equivalant of "cd ./app", if you need to cd into a
          # folder in your repo do it here or in the command section
          working_directory: ./app
          # bash command you want to run
          command: npm install

      - run:
          name: BUILD - App
          working_directory: ./app
          # Multi line commands can be done as follows
          command: |
              # cd ./app
              npm run build

workflows:
...
```


## Filter your workflow

Filtering your jobs at the workflow level is the easiest/ cleanest method imo, it allows you to filter when to run certain jobs based on branch or tags.

```yaml
workflows:
  test_and_deploy:
    jobs:
      - deploy-ui:
          filters:
            branches:
              only: master
```

## I have to install node_modules again?!

Wrong! Lets looks at caching!

We can cache our dependencies by using circleci's *restore_cache* and *save_cache* steps.
This will create a cache using the given key, we create a checksum of the package-lock file to check if any dependencies have updated. If the package-lock has updated then we carry on as normal and install all dependencies then create a new cache after!

As npm only installs required dependencies you can speed up your pipeline hugely caching dependencies, and the cache will live for 30 days too!

```yaml
jobs:
	deploy-ui:
		executor: node-12-executor
    steps:
      - restore_cache:
          keys:
            - node-v1-{{ .Branch }}-{{ checksum "package-lock.json" }}
            - node-v1-{{ .Branch }}
      - run:
          name: INSTALL - dependencies
          working_directory: .
          command: npm install
      - save_cache:
          key: node-v1-{{ .Branch }}-{{ checksum "package-lock.json" }}
          paths:
            - ./node_modules
...
```

## I have numerous installs now my config is huge!!

Create a command and paramterise your caching!

Commands are great, similar to orbs except they live in your config.
You can parameterise them and reuse them wherever you need.

```yaml
commands:
  restore-save-cache:
    description: "Save and retore cache"
    parameters:
      checksumFile:
        type: string
      paths:
        type: string
      whichDeps:
        type: string
    steps:
      - restore_cache:
          keys:
            - node-v1-{{ .Branch }}-{{ checksum "<< parameters.checksumFile >>" }}
            - node-v1-{{ .Branch }}
      - run:
          name: INSTALL - << parameters.whichDeps >> dependencies
          working_directory: << parameters.paths >>
          command: npm install
      - save_cache:
          key: node-v1-{{ .Branch }}-{{ checksum "<< parameters.checksumFile >>" }}
          paths:
            - << parameters.paths >>/node_modules

jobs:
  deploy-ui:
    executor: node-12-executor
    steps:
      - checkout

      # Use your command here and pas in parameters as follows
      - restore-save-cache:
          checksumFile: ./package-lock.json
          paths: .
          whichDeps: "App"
```

<br/>

CircleCI is a super useful tool to automate your pipelines, you can deploy on pull requests or commit. Either way I'm lazy in a good way and will be using circleci for all my future builds!

Hopefully this will be useful to someone, most likely me when I use circleci again for the first time in months.

If you have any questions you can message me on <a href="https://www.linkedin.com/in/mark-sampson-33995bb9/" target="blank">linkedIn</a>.


## TOP TIP: Use this <a href="https://circleci.com/docs/2.0/configuration-reference/#section=configuration" target="blank">config guide</a>
