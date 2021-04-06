(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7d9e"],{7928:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",[t("h1",[e._v("Reusability in Vue3")]),t("p",[t("strong",[e._v("Published: "),t("em",[e._v("10 Sep 2020")])])]),t("p",[e._v("Pre-Covid times were beautiful, you could travel to another country, sit in a room with hundreds of other people and listen to some lovely people talk about new tech. And this is exactly what I was able to do in February of this year.")]),t("p",[e._v("I was lucky enough to go to VueJs Amsterdam which was packed full of talks on Vue3, its major changes and what 3rd party libraries are doing about it.")]),t("p",[e._v("So this post is about what it got me really thinking about the most, reusability.")]),t("h1"),t("h2",[e._v("Code re-use")]),t("p",[e._v("Code reuse is favorable as it reduces your codes footprint, meaning less to maintain and test. It can also decrease development time for future projects, however in most scenarios it comes with the caveat of your code being more complex. But as long as it's understandable to yourself and your team, you're all set.")]),t("p",[e._v("Developing with reusability in mind won't harm development time, but it takes a pragmatic decision by the developer to decide wether or not it is the time to refactor or write your code to be reusable from scratch.")]),t("p",[e._v("An example could be a new UI component under A/B test, this doesn't have to be perfect for the test, but a test winner that has the potential to be used elsewhere in other projects could be refactored with reusability in mind.")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-markdown"}},[e._v("DRY - don't repeat yourself\n")])]),t("p",[e._v("We all know the benefits of DRY code but the challenge, especially working with a framework or large organization, is creating reusable code that is easy to understand and use.")]),t("h1"),t("h2",[e._v("Logic reuse in Vue2")]),t("p",[e._v("With Vue 2 you can create DRY code using mixins or scoped slots. Mixins specifically are very easy to use, and if you know how to build vue components, you know how to write mixins.")]),t("p",[e._v("Mixins and Scoped-slots do come with some disadvantages:")]),t("ul",[t("li",[e._v("Naming collisions")]),t("li",[e._v("Unclear source of data, methods, computed properties...")]),t("li",[e._v("Scoped slots inherently less performant")])]),t("p",[e._v("As scoped-slots are used less as a solution to the code reuse problem for most developers I will focus on mixins")]),t("h3",[e._v("Mixins")]),t("p",[e._v("In the following code example we can see two mixins are passed to our App component, lets assume they are from two separate authors. The two mixins have update methods, so when a developer uses the searchMixin alongside the addressMixin we would have a naming collision.")]),t("p",[e._v("Vue wouldn't know which mixin to take the update method from and throws an error.")]),t("p",[e._v("We also have an unclear source of the update method which could only be figured out by reading the mixin source code, this results in a poor developer experience. A developer shouldn't have to read the source code of every mixin they use to debug some error.")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" searchMixin = {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("methods")]),e._v(": {\n    update(x) { "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log(x) }\n  }\n}\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" addressMixin = {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("methods")]),e._v(": {\n    update(x) { "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log(x) }\n  }\n}\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" App = {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("mixins")]),e._v(": [searchMixin, addressMixin],\n  data() {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("bar")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'hello'")]),e._v("\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("methods")]),e._v(": {\n    keyPress() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".update("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".bar)\n    }\n  }\n}\n\n")])]),t("h1"),t("h2",[e._v("VueJS Amsterdam = vue 3 = logic reuse?")]),t("p",[e._v("With Vue 3 knocking on our doors, it's the new composition API that it brings us and what stood out to me most at the conference.")]),t("p",[e._v("The "),t("a",{attrs:{href:"https://composition-api.vuejs.org/#summary"}},[e._v("composition API")]),e._v(" introduces the setup function and brings with it an easier cleaner way to reuse code whilst maintaining Vue's reactivity.")]),t("p",[e._v("It is an additional advanced syntax to Vue to compliment the options API we know in Vue 2, and it is entirely "),t("code",{pre:!0},[e._v("OPTIONAL!")])]),t("p",[e._v("It was particularly Greg Pollock's "),t("a",{attrs:{href:"https://www.youtube.com/watch?v=FGKpOLG34xE&list=PLCxzy-hmQq9FnnpckFDeDtbpsUqxdheQn&index=20"}},[e._v("talk")]),e._v(" which really helped me understand how the setup function helps us write cleaner and more modular code in Vue.")]),t("h1"),t("h2",[e._v("How does Vue 3 improve logic reuse?")]),t("p",[e._v("The new setup function allows you to extract logic, as you would with a mixin, but now gives a clear source of any properties or methods you may use.")]),t("p",[e._v("Naming collisions are also addressed. Thanks to javascript allowing you to rename a variable when destructuring, you can simply rename any imports when you come across any collisions.")]),t("p",[e._v("This is a simple example and could easily be achieved using computed properties, but when building out more complex logic that requires use of methods, computed properties and lifecycle hooks you can use the setup function.")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" { ref, computed } = Vue\n\n"),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("capitalize")]),e._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("word")]),e._v(") ")]),e._v("{\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" capitalizedWord = computed("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("()")]),e._v(" =>")]),e._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" word.value.charAt("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0")]),e._v(").toUpperCase() + word.value.slice("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1")]),e._v(")\n  })\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" { capitalizedWord }\n}\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'bar'")]),e._v(",\n  setup() {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" bar = ref("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'bar'")]),e._v(")\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("capitalizedWord")]),e._v(": capitalizedBar } = capitalize(bar)\n\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" { capitalizedBar, bar }\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("template")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('`<div>{{capitalizedBar}} <input type="text" v-model="bar" ></div>`')]),e._v("\n}\n\n")])]),t("h2",[e._v("Final notes")]),t("p",[e._v("Developer experience is key to keeping your team happy and stress free, if you can keep time spent on the mundane short and the complex interesting problems longer, developers will be happier. Less time on the repetitive and mundane also allows for more time to improve your product developing new features for your customers.")]),t("p",[e._v("This is where reusability comes in, hopefully with these improvements we can improve developer experience and allow for a little more time on improving our products.")])])}],r=t("2877"),n={},i=Object(r["a"])(n,a,o,!1,null,null,null);s["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0d7d9e.458246b2.js.map