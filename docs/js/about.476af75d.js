(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"51d7":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("d225"),o=n("b0b4"),a=function(){function t(e){var n=this;Object(i["a"])(this,t),this.element="string"===typeof e?document.querySelector(e):e,this.element&&this.element.addEventListener("touchstart",(function(t){n.xDown=t.touches[0].clientX,n.yDown=t.touches[0].clientY}),!1)}return Object(o["a"])(t,[{key:"onLeft",value:function(t){return this.onLeft=t,this}},{key:"onRight",value:function(t){return this.onRight=t,this}},{key:"onUp",value:function(t){return this.onUp=t,this}},{key:"onDown",value:function(t){return this.onDown=t,this}},{key:"run",value:function(){var t=this;this.element&&this.element.addEventListener("touchmove",(function(e){t.handleTouchMove(e)}),!1)}},{key:"handleTouchMove",value:function(t){if(this.xDown&&this.yDown){this.xDown&&t.preventDefault();var e=t.touches[0].clientX,n=t.touches[0].clientY;this.xDiff=this.xDown-e,this.yDiff=this.yDown-n,Math.abs(this.xDiff)>Math.abs(this.yDiff)?this.xDiff>0?this.onLeft():this.onRight():this.yDiff>0?this.onUp():this.onDown(),this.xDown=null,this.yDown=null}}}]),t}()},ca47:function(t,e,n){"use strict";var i=function(t,e){var n=e._c;return n("span",e._g({staticClass:"material-design-icon arrow-up-bold-box-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},e.listeners),[n("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21M12,7L7,12H10V16H14V12H17L12,7Z"}},[n("title",[e._v(e._s(e.props.title))])])])])},o=[],a=(n("c5f6"),{name:"ArrowUpBoldBoxIcon",props:{title:{type:String,default:"Arrow Up Bold Box icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}),s=a,r=n("2877"),u=Object(r["a"])(s,i,o,!0,null,null,null);e["a"]=u.exports},e9ad:function(t,e,n){},f26d:function(t,e,n){"use strict";var i=n("e9ad"),o=n.n(i);o.a},f820:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{appear:"",name:"about",mode:"in-out"}},[n("div",{staticClass:"about"},[n("router-link",{staticClass:"about__back",attrs:{to:"/"}},[n("arrow-up-bold-box")],1),n("div",{staticClass:"about__content"},[n("h1",{staticClass:"about__title"},[t._v("\n        Mark Sampson,\n        "),n("br"),t._v("Front End Developer\n      ")]),n("p",{staticClass:"about__text"},[t._v("\n        Currently working at\n        "),n("a",{staticClass:"about__link",attrs:{href:"https://www.moneysupermarket.com",target:"blank"}},[t._v("Moneysupermarket")]),t._v("\n        using VueJS & Typescript to build new features and optimize existing ones.\n        In my spare time I enjoy building websites and experimenting with tech.\n      ")])])],1)])},o=[],a=n("d225"),s=n("b0b4"),r=n("308d"),u=n("6bb5"),l=n("4e2b"),c=n("9ab4"),h=n("60a3"),p=n("4bb5"),f=n("51d7"),b=n("ca47"),d=function(t){function e(){return Object(a["a"])(this,e),Object(r["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(s["a"])(e,[{key:"mounted",value:function(){var t=this;new f["a"](".about").onDown((function(){return t.$router.push({path:"/"})})).run()}}]),e}(h["c"]);Object(c["a"])([p["b"]],d.prototype,"isAboutOpen",void 0),Object(c["a"])([p["a"]],d.prototype,"toggleMenu",void 0),d=Object(c["a"])([Object(h["a"])({components:{ArrowUpBoldBox:b["a"]}})],d);var v=d,w=v,y=(n("f26d"),n("2877")),m=Object(y["a"])(w,i,o,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=about.476af75d.js.map