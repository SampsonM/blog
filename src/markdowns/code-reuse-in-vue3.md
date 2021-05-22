# Code reusability in Vue3

__Published: *22 May 2021*__

Just before an international pandemic ensued I was just about to travel to another country, sit in a room with hundreds of other people and listen to some lovely people talk about new tech.

I was lucky enough to go to VueJs Amsterdam which was packed full of talks on Vue3, its major changes and what 3rd party libraries are doing about it.

So this post is about what it got me thinking about the most, reusability.

Also, this should have gone out a long time ago, but between Open University deadlines and having time off to build another camper van I missed it...

#
## Code re-use

Code reuse is favorable as it reduces your codes footprint, meaning less code to maintain and test. It can also decrease development time for future projects, however, when a project grows it comes with the potential of your codebase becoming too complex.

If we developed everything with reusability in mind we could harm development time, and it takes a pragmatic decision by developers to decide wether you want to refactor later or write your code to be reusable from the start.

An example could be a new UI component under A/B test, this doesn't have to be perfect for the test, but if it was likely to win the test should you just code it to be reusable for the get go? Probably.

```markdown
DRY - don't repeat yourself
```

We all know the benefits of DRY code but the challenge, especially working with a framework or large organization, is creating reusable code that is easy to understand and use.

#
## Logic reuse in Vue2

With Vue 2 you can create DRY code using mixins or scoped slots.
Mixins specifically are very easy to use, and if you know how to build vue components, you know how to write mixins.

Mixins and Scoped-slots do come with some disadvantages:

- Naming collisions
- Unclear source of data, methods, computed properties...
- Scoped slots inherently less performant

As scoped-slots are a less used solution for the code reuse problem, I will focus on mixins

### Mixins

In the following code example we can see two mixins are passed to our App component, lets assume they were authored by two different developers. The two mixins have "update" methods, so when a consumer of the mixins uses the both mixins together they would get a naming collision.

Vue wouldn't know which mixin to take the "update" method from and throws an error.

It's also unclear which mixin the "update" function came from, which would mean having to investigate the mixin source code and who can actually be fussed to do this?! A developer shouldn't have to read the source code of every mixin they use to figure out the origin of a method or computed property, it should be obvious!
 
<img src="/img/vue2-mixin-example.png"
     alt="vue2 mixin example"
     class="reactive-img" />

#
## VueJS Amsterdam = vue 3 = logic reuse?

With Vue 3 here and the new composition API we have a solution!

The [composition API](https://v3.vuejs.org/guide/composition-api-introduction.html#summary) introduces the setup function and brings with it a cleaner way to reuse code whilst maintaining Vue's reactivity.

It is an additional syntax to Vue and compliments the options API we know from Vue 2, and is entirely `OPTIONAL!`

Greg Pollock's [talk](https://www.youtube.com/watch?v=FGKpOLG34xE&list=PLCxzy-hmQq9FnnpckFDeDtbpsUqxdheQn&index=20) really helped me understand how the setup function allows us to write cleaner and more modular code in Vue.

#
## How does Vue 3 improve logic reuse?

The "setup" function allows you to extract reactive logic and expose it to the template as you would with a mixin, but now it gives a clear source of any properties or methods you may use.

Naming collisions are also addressed. Thanks to javascript you can rename a variable when destructuring, so you can simply rename any imports when a collision occurs.

We can see in the following examples the difference in syntax whilst achieving the same result, example 2 gives clarity on where methods originate using destructuring and allowing us to rename the variables at the same time.

<img src="/img/vue2-mixin-capitalization.png"
     alt="vue2 capitalization mixin example"
     class="reactive-img" />


Example 1: Vue 2 Mixins
</br>
</br>

<img src="/img/vue3-setup.png"
     alt="vue3 setup example"
     class="reactive-img" />

Example 2: Vue 3 setup function using the composition API
</br>
</br>

## Final bit...

Hopefully this gets you reading more into the Vue3 docs and having a nosey about the composition API, it's definitely worth the half an hour of reading before you end up bored or trapped in YouTube!

