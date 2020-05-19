# Why, oh why... CircleCI?

I'd like to write something profound here about how I decided to use <a href="https://circleci.com/docs/2.0/migrating-from-jenkins/" target="blank">CircleCI</a> because of the improved parallelism, or the existance of built in support for Docker compared to Jenkins...
<br/><br/>

But as it goes I use Jenkins daily so I thought it would be a nice change.
<br/><br/>

After some meddling though, inspecting the CircleCI GUI and reading the <a href="https://circleci.com/docs/2.0/configuration-reference/#section=configuration" target="blank">docs</a>, I actually really like it.
<br/><br/>

It was really easy to set up, the GUI is super intuitive and the docs are relatively straight forwards. The lack of stackoverflow questions related to circleci must count for something? <i>(or maybe they just exist in their forums instead?)</i>
<br/><br/>


## So how easy is it to set up?

Well, I always struggle using tech the first time as I get flustered and misread everything in a hurry to get it right, but this was a dream. Following the <a href="https://circleci.com/docs/2.0/first-steps/#section=getting-started">getting started steps</a>:
* you sign up to CircleCI with GitHub or BitBucket
* add your project
* confirm you'd like to add the default .circleci/config.yaml and set up branch
<br/><br/>

It has never been easier to create a new CI/CD pipeline!
<br/><br/>

Unfortunately I'm not working on commission and can't think of any downsides as of yet, but either way to get the pipeline running its easy.

## How do I test & deploy my app?
