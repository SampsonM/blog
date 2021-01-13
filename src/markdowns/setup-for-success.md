# Reusability in Vue3

__Published: *10 Sep 2020*__

Pre-Covid times were beautiful, you could travel to another country, sit in a room with hundreds of other people and listen to some lovely people talk about new tech. And this is exactly what I was able to do in February of this year.

I was lucky enough to go to VueJs Amsterdam which was packed full of talks on Vue3, its major changes and what 3rd party libraries are doing about it.

So this post is about what it got me really thinking about the most, reusability.

#
## Code re-use

Code reuse is favorable as it reduces your codes footprint, meaning less to maintain and test. It can also decrease development time for future projects, however in most scenarios it comes with the caveat of your code being more complex. But as long as it's understandable to yourself and your team, you're all set.

Developing with reusability in mind won't harm development time, but it takes a pragmatic decision by the developer to decide wether or not it is the time to refactor or write your code to be reusable from scratch.

An example could be a new UI component under A/B test, this doesn't have to be perfect for the test, but a test winner that has the potential to be used elsewhere in other projects could be refactored with reusability in mind.

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

As scoped-slots are used less as a solution to the code reuse problem for most developers I will focus on mixins

### Mixins

In the following code example we can see two mixins are passed to our App component, lets assume they are from two separate authors. The two mixins have update methods, so when a developer uses the searchMixin alongside the addressMixin we would have a naming collision.

Vue wouldn't know which mixin to take the update method from and throws an error.

We also have an unclear source of the update method which could only be figured out by reading the mixin source code, this results in a poor developer experience. A developer shouldn't have to read the source code of every mixin they use to debug some error.
 
```javascript
const searchMixin = {
  methods: {
    update(x) { console.log(x) }
  }
}

const addressMixin = {
  methods: {
    update(x) { console.log(x) }
  }
}

const App = {
  mixins: [searchMixin, addressMixin],
  data() {
    bar: 'hello'
  },
  methods: {
    keyPress() {
      this.update(this.bar)
    }
  }
}

```

#
## VueJS Amsterdam = vue 3 = logic reuse?

With Vue 3 knocking on our doors, it's the new composition API that it brings us and what stood out to me most at the conference.

The [composition API](https://composition-api.vuejs.org/#summary) introduces the setup function and brings with it an easier cleaner way to reuse code whilst maintaining Vue's reactivity.

It is an additional advanced syntax to Vue to compliment the options API we know in Vue 2, and it is entirely `OPTIONAL!`

It was particularly Greg Pollock's [talk](https://www.youtube.com/watch?v=FGKpOLG34xE&list=PLCxzy-hmQq9FnnpckFDeDtbpsUqxdheQn&index=20) which really helped me understand how the setup function helps us write cleaner and more modular code in Vue.

#
## How does Vue 3 improve logic reuse?

The new setup function allows you to extract logic, as you would with a mixin, but now gives a clear source of any properties or methods you may use. 

Naming collisions are also addressed. Thanks to javascript allowing you to rename a variable when destructuring, you can simply rename any imports when you come across any collisions.

This is a simple example and could easily be achieved using computed properties, but when building out more complex logic that requires use of methods, computed properties and lifecycle hooks you can use the setup function.

```javascript
const { ref, computed } = Vue

function capitalize(word) {
  const capitalizedWord = computed(() => {
    return word.value.charAt(0).toUpperCase() + word.value.slice(1)
  })

  return { capitalizedWord }
}

export default {
  name: 'bar',
  setup() {
    const bar = ref('bar')
    const { capitalizedWord: capitalizedBar } = capitalize(bar)

    return { capitalizedBar, bar }
  },
  template: `<div>{{capitalizedBar}} <input type="text" v-model="bar" ></div>`
}

```

## Final notes

Developer experience is key to keeping your team happy and stress free, if you can keep time spent on the mundane short and the complex interesting problems longer, developers will be happier. Less time on the repetitive and mundane also allows for more time to improve your product developing new features for your customers.

This is where reusability comes in, hopefully with these improvements we can improve developer experience and allow for a little more time on improving our products.


