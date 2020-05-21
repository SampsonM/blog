(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf667"],{"640c":function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},r=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("CircleCI Setup for a front end app!")]),a("p",[s._v("I'd like to write something profound here about how I decided to use "),a("a",{attrs:{href:"https://circleci.com/docs/2.0/migrating-from-jenkins/",target:"blank"}},[s._v("CircleCI")]),s._v(" because of the improved parallelism, or the existance of built in support for Docker compared to Jenkins...")]),a("p",[s._v("But as it goes I use Jenkins daily so I thought it would be a nice change.")]),a("p",[s._v("After some meddling though, inspecting the CircleCI GUI and reading the "),a("a",{attrs:{href:"https://circleci.com/docs/2.0/configuration-reference/#section=configuration",target:"blank"}},[s._v("docs")]),s._v(", I actually really like it.")]),a("p",[s._v("It was easy to set up, the GUI is super intuitive and the docs are relatively straight forwards. The lack of stackoverflow questions related to circleci must count for something? "),a("i",[s._v("(or maybe they just exist in their forums instead?)")])]),a("h2",[s._v("So how easy is it to set up?")]),a("p",[s._v("Well, easy. Following the "),a("a",{attrs:{href:"https://circleci.com/docs/2.0/first-steps/#section=getting-started",target:"blank"}},[s._v("getting started steps")]),s._v(" all you need to do is:")]),a("ul",[a("li",[s._v("Sign up to CircleCI with GitHub or BitBucket")]),a("li",[s._v("Add your project")]),a("li",[s._v("Confirm you'd like to add the default .circleci/config.yaml and set up branch")])]),a("p",[s._v("It has never been easier to create a new CI/CD pipeline!")]),a("p",[s._v("Unfortunately I'm not working on commission and can't think of any downsides as of yet, but either way to get the pipeline running its easy.")]),a("h2",[s._v("What is config.yaml?")]),a("p",[s._v("In your repo, on a "),a("em",[s._v("circleci-project-setup branch")]),s._v(" in a new "),a("em",[s._v(".circleci")]),s._v(" directory, you should now have a "),a("em",[s._v("config.yaml")]),s._v(" that looks like this.")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-yaml"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# Use the latest 2.1 version of CircleCI pipeline process engine. See: https://circleci.com/docs/2.0/configuration-reference")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("version:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2.1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# Use a package of configuration called an orb.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orbs:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# Declare a dependency on the welcome-orb")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("  welcome:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("circleci/welcome-orb@0.4.1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# Orchestrate or schedule a set of jobs")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("workflows:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('# Name the workflow "welcome"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("  welcome:")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# Run the welcome/run job in its own container")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("    jobs:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-bullet"}},[s._v("      -")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("welcome/run")]),s._v("\n")])]),a("p",[s._v("So lets talk through each of the basic components here.")]),a("p",[a("strong",[s._v("orbs")]),s._v(" are shareable packages of CircleCI config. An orb has its own config that will look similar to your own and runs its own set of jobs run some commands, but they still run in your execution context. In our example we don't need any orbs so we can delete this.")]),a("p",[a("strong",[s._v("Workflows")]),s._v(" contain the jobs that you want to run and the triggers that decide when to run them. They run in parallel unless you explicitly "),a("a",{attrs:{href:"https://circleci.com/docs/2.0/configuration-reference/#requires",target:"blank"}},[s._v("require")]),s._v(" another job to finish before starting.")]),a("p",[s._v("In our example we have a single job running "),a("em",[s._v("welcome/run")]),s._v(", this simply runs the "),a("em",[s._v("welcome")]),s._v(" orbs job called "),a("em",[s._v("run")]),s._v(", which runs its own set of steps seen "),a("a",{attrs:{href:"https://circleci.com/orbs/registry/orb/circleci/welcome-orb",target:"blank"}},[s._v("in the orb source on line 12")]),s._v(".")]),a("h2",[s._v("How do I run my own jobs?")]),a("p",[s._v("To run your own jobs you need a few things:")]),a("ul",[a("li",[s._v("Your job")]),a("li",[s._v("An execution context")]),a("li",[s._v("Job steps")])]),a("p",[a("strong",[s._v("Your job")]),s._v(" needs to be created in the root of your "),a("em",[s._v("config.yaml")]),s._v(", here we named our job "),a("em",[s._v("deploy-ui")])]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-yaml"}},[a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("version:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2.1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("jobs:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# Your job name")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("  deploy-ui:")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("workflows:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("  welcome:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("    jobs:")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# Matches your desired job name")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-bullet"}},[s._v("      -")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("deploy-ui")]),s._v("\n")])]),a("p",[a("strong",[s._v("The Execution context")]),s._v(" is the container that you run your job steps in, we require node for our build so we use a docker image that has node."),a("br"),s._v(" CircleCI runs any docker image so you have the "),a("a",{attrs:{href:"https://hub.docker.com/search?q=node&type=image",target:"blank"}},[s._v("dockerhub")]),s._v(" at your disposal to build any environment, how exciting!")]),a("p",[s._v("Note: Each executor is created fresh for each job so your build files or node_modules will not persist into the next job, but we have a trick for that!")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-yaml"}},[a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("executors:")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# Use a name that makes sense to you here i.e node-12-executor")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("  node-12-executor:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("    docker:")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# Image which will be pulled in from docker hub by circleci")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("      - image:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("circleci/node:12")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# Directory you want context/repo to live in")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("    working_directory:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("~/example")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("jobs:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("  deploy-ui:")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# Reference your executor here to build a container including node-12")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("    executor:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("node-12-executor")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("workflows:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("...")]),s._v("\n")])]),a("p",[a("strong",[s._v("Job steps")]),s._v(", now you have a container with node installed you need to checkout your repo, install your node_modules and build your app!")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-yaml"}},[a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("executors:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("...")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("jobs:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("  deploy-ui:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("    executor:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("node-12-executor")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("    steps:")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# CircleCI is linked to your repo so it knows to checkout your repo! equivalant of - git clone <YOUR_REPO>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-bullet"}},[s._v("      -")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("checkout")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# run is used to invoke command-line programs")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("      - run:")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# Selected name will appear in the circleci pipeline GUI")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("          name:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("INSTALL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-bullet"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("dependencies")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('# working_directory is the equivalant of "cd ./app", if you need to cd into a')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# folder in your repo do it here or in the command section")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("          working_directory:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("./app")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# bash command you want to run")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("          command:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("install")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("      - run:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("          name:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("BUILD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-bullet"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("App")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("          working_directory:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("./app")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# Multi line commands can be done as follows")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("          command:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("|\n              # cd ./app\n              npm run build\n\n")]),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("workflows:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("...")]),s._v("\n")])]),a("h2",[s._v("Filter your workflow")]),a("p",[s._v("Filtering your jobs at the workflow level is the easiest/ cleanest method imo, it allows you to filter when to run certain jobs based on branch or tags.")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-yaml"}},[a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("workflows:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("  test_and_deploy:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("    jobs:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("      - deploy-ui:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("          filters:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("            branches:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("              only:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("master")]),s._v("\n")])]),a("h2",[s._v("I have to install node_modules again?!")]),a("p",[s._v("Wrong! Lets looks at caching!")]),a("p",[s._v("We can cache our dependencies by using circleci's "),a("em",[s._v("restore_cache")]),s._v(" and "),a("em",[s._v("save_cache")]),s._v(" steps. This will create a cache using the given key, we create a checksum of the package-lock file to check if any dependencies have updated. If the package-lock has updated then we carry on as normal and install all dependencies then create a new cache after!")]),a("p",[s._v("As npm only installs required dependencies you can speed up your pipeline hugely caching dependencies, and the cache will live for 30 days too!")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-yaml"}},[a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("jobs:")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("deploy-ui:")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("executor:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("node-12-executor")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("    steps:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("      - restore_cache:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("          keys:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-bullet"}},[s._v("            -")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("node-v1-{{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v(".Branch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("}}-{{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("checksum")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"package-lock.json"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("}}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-bullet"}},[s._v("            -")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("node-v1-{{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v(".Branch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("}}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("      - run:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("          name:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("INSTALL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-bullet"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("dependencies")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("          working_directory:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("          command:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("install")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("      - save_cache:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("          key:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("node-v1-{{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v(".Branch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("}}-{{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("checksum")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"package-lock.json"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("}}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("          paths:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-bullet"}},[s._v("            -")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("./node_modules")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("...")]),s._v("\n")])]),a("h2",[s._v("I have numerous installs now my config is huge!!")]),a("p",[s._v("Create a command and paramterise your caching!")]),a("p",[s._v("Commands are great, similar to orbs except they live in your config. You can parameterise them and reuse them wherever you need.")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-yaml"}},[a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("commands:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("  restore-save-cache:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("    description:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Save and retore cache"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("    parameters:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("      checksumFile:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("        type:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("string")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("      paths:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("        type:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("string")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("      whichDeps:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("        type:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("string")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("    steps:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("      - restore_cache:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("          keys:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-bullet"}},[s._v("            -")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("node-v1-{{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v(".Branch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("}}-{{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("checksum")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"<< parameters.checksumFile >>"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("}}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-bullet"}},[s._v("            -")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("node-v1-{{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v(".Branch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("}}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("      - run:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("          name:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("INSTALL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-bullet"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("parameters.whichDeps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v(">>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("dependencies")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("          working_directory:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("parameters.paths")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v(">>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("          command:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("install")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("      - save_cache:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("          key:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("node-v1-{{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v(".Branch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("}}-{{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("checksum")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"<< parameters.checksumFile >>"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("}}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("          paths:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-bullet"}},[s._v("            -")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("parameters.paths")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v(">>/node_modules")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("jobs:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("  deploy-ui:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("    executor:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("node-12-executor")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("    steps:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-bullet"}},[s._v("      -")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("checkout")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# Use your command here and pas in parameters as follows")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("      - restore-save-cache:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("          checksumFile:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("./package-lock.json")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("          paths:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("          whichDeps:")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"App"')]),s._v("\n")])]),a("br"),a("p",[s._v("CircleCI is a super useful tool to automate your pipelines, you can deploy on pull requests or commit. Either way I'm lazy in a good way and will be using circleci for all my future builds!")]),a("p",[s._v("Hopefully this will be useful to someone, most likely me when I use circleci again for the first time in months.")]),a("p",[s._v("If you have any questions you can message me on "),a("a",{attrs:{href:"https://www.linkedin.com/in/mark-sampson-33995bb9/",target:"blank"}},[s._v("linkedIn")]),s._v(".")]),a("h2",[s._v("TOP TIP: Use this "),a("a",{attrs:{href:"https://circleci.com/docs/2.0/configuration-reference/#section=configuration",target:"blank"}},[s._v("config guide")])])])}],n=a("2877"),l={},p=Object(n["a"])(l,e,r,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0cf667.fcb2bec5.js.map