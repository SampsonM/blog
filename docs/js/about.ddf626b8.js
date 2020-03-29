(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"51d7":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("d225"),a=n("b0b4"),o=function(){function t(e){var n=this;Object(i["a"])(this,t),this.element="string"===typeof e?document.querySelector(e):e,this.element&&this.element.addEventListener("touchstart",(function(t){n.xDown=t.touches[0].clientX,n.yDown=t.touches[0].clientY}),!1)}return Object(a["a"])(t,[{key:"onLeft",value:function(t){return this.onLeft=t,this}},{key:"onRight",value:function(t){return this.onRight=t,this}},{key:"onUp",value:function(t){return this.onUp=t,this}},{key:"onDown",value:function(t){return this.onDown=t,this}},{key:"run",value:function(){var t=this;this.element&&this.element.addEventListener("touchmove",(function(e){t.handleTouchMove(e)}),!1)}},{key:"handleTouchMove",value:function(t){if(this.xDown&&this.yDown){this.xDown&&t.preventDefault();var e=t.touches[0].clientX,n=t.touches[0].clientY;this.xDiff=this.xDown-e,this.yDiff=this.yDown-n,Math.abs(this.xDiff)>Math.abs(this.yDiff)?this.xDiff>0?this.onLeft():this.onRight():this.yDiff>50?this.onUp():this.yDiff<-50&&this.onDown(),this.xDown=null,this.yDown=null}}}]),t}()},ca47:function(t,e,n){"use strict";var i=function(t,e){var n=e._c;return n("span",e._g({staticClass:"material-design-icon arrow-up-bold-box-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},e.listeners),[n("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21M12,7L7,12H10V16H14V12H17L12,7Z"}},[n("title",[e._v(e._s(e.props.title))])])])])},a=[],o=(n("c5f6"),{name:"ArrowUpBoldBoxIcon",props:{title:{type:String,default:"Arrow Up Bold Box icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}),s=o,r=n("2877"),u=Object(r["a"])(s,i,a,!0,null,null,null);e["a"]=u.exports},e9ad:function(t,e,n){},f26d:function(t,e,n){"use strict";var i=n("e9ad"),a=n.n(i);a.a},f820:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{appear:"",name:"about",mode:"in-out"}},[n("section",{staticClass:"about"},[n("div",{staticClass:"about__title-container"},[n("h1",{staticClass:"about__title"},[t._v("\n        Mark Sampson,\n        "),n("br"),t._v("Front End Developer\n      ")]),n("span",{staticClass:"about__back"},[n("router-link",{staticClass:"about__back-link",attrs:{to:"/"}},[n("arrow-up-bold-box")],1)],1)]),n("div",{staticClass:"about__content"},[n("p",{staticClass:"about__text-left"},[t._v("\n        Currently \n        "),n("a",{staticClass:"about__link",attrs:{href:"https://www.linkedin.com/in/mark-sampson-33995bb9/",target:"blank"}},[t._v("working")]),t._v("\n         at \n        "),n("a",{staticClass:"about__link",attrs:{href:"https://www.moneysupermarket.com",target:"blank"}},[t._v("Moneysupermarket")]),t._v(" \n        using VueJS & Typescript to build out new products and optimize existing ones.\n        In my spare time I enjoy building websites and experimenting with tech.\n      ")]),n("p",{staticClass:"about__text-right"},[t._v("\n        On the frontend I'm comfortable using VueJS, React and Typescript, and building any servers I tend to use NodeJs.\n        I have experience building databases with MongoDB, MLab and AWS. Other technologies used include ReactJS, \n        AngulaJS and a little Java.\n      ")]),n("p",{staticClass:"about__text-left"},[t._v("\n        My personal successes including adding Lighthouse testing to our \n        Jenkins build pipelines to improve accessibility and performance, \n        and building a validation framework for a new Energy Autoswitching product.\n      ")])])])])},a=[],o=n("d225"),s=n("b0b4"),r=n("308d"),u=n("6bb5"),l=n("4e2b"),c=n("9ab4"),h=n("60a3"),p=n("4bb5"),d=n("51d7"),b=n("ca47"),f=function(t){function e(){return Object(o["a"])(this,e),Object(r["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(s["a"])(e,[{key:"mounted",value:function(){var t=this;new d["a"](".about").onDown((function(){return t.$router.push({path:"/"})})).run()}}]),e}(h["c"]);Object(c["a"])([p["b"]],f.prototype,"isAboutOpen",void 0),Object(c["a"])([p["a"]],f.prototype,"toggleMenu",void 0),f=Object(c["a"])([Object(h["a"])({components:{ArrowUpBoldBox:b["a"]}})],f);var v=f,w=v,_=(n("f26d"),n("2877")),g=Object(_["a"])(w,i,a,!1,null,null,null);e["default"]=g.exports}}]);
//# sourceMappingURL=about.ddf626b8.js.map