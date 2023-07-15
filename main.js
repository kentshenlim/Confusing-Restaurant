(()=>{"use strict";var n={753:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,".background-zigzag::after {\n  content: '';\n  flex-grow: 1;\n  height: 100%;\n  border-top-right-radius: 2rem;\n  background-color: #e5e5f7;\n  opacity: 0.8;\n  background: linear-gradient(135deg, #8e5e7055 25%, transparent 25%) -10px 0/\n      20px 20px,\n    linear-gradient(225deg, #8e5e70 25%, transparent 25%) -10px 0/ 20px 20px,\n    linear-gradient(315deg, #8e5e7055 25%, transparent 25%) 0px 0/ 20px 20px,\n    linear-gradient(45deg, #8e5e70 25%, #e5e5f7 25%) 0px 0/ 20px 20px;\n}\n\n.background-isometric::after {\n  content: '';\n  flex-grow: 1;\n  height: 100%;\n  border-top-right-radius: 2rem;\n  background-color: #e5e5f7;\n  opacity: 0.8;\n  background-image: linear-gradient(\n      30deg,\n      #8e5e70 12%,\n      transparent 12.5%,\n      transparent 87%,\n      #8e5e70 87.5%,\n      #8e5e70\n    ),\n    linear-gradient(\n      150deg,\n      #8e5e70 12%,\n      transparent 12.5%,\n      transparent 87%,\n      #8e5e70 87.5%,\n      #8e5e70\n    ),\n    linear-gradient(\n      30deg,\n      #8e5e70 12%,\n      transparent 12.5%,\n      transparent 87%,\n      #8e5e70 87.5%,\n      #8e5e70\n    ),\n    linear-gradient(\n      150deg,\n      #8e5e70 12%,\n      transparent 12.5%,\n      transparent 87%,\n      #8e5e70 87.5%,\n      #8e5e70\n    ),\n    linear-gradient(\n      60deg,\n      #8e5e7077 25%,\n      transparent 25.5%,\n      transparent 75%,\n      #8e5e7077 75%,\n      #8e5e7077\n    ),\n    linear-gradient(\n      60deg,\n      #8e5e7077 25%,\n      transparent 25.5%,\n      transparent 75%,\n      #8e5e7077 75%,\n      #8e5e7077\n    );\n  background-size: 20px 35px;\n  background-position: 0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px;\n}\n",""]);const p=i},426:(n,e,t)=>{t.d(e,{Z:()=>m});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),p=t(667),c=t.n(p),s=new URL(t(682),t.b),l=new URL(t(406),t.b),d=i()(a()),u=c()(s),f=c()(l);d.push([n.id,`@font-face {\n  font-family: pangolin;\n  src: url(${u});\n}\n\n@font-face {\n  font-family: infant;\n  src: url(${f});\n}\n\n* {\n  box-sizing: border-box;\n}\n\n#root {\n  width: 100vw;\n}\n\n.flex-horizontal {\n  display: flex;\n  align-items: center;\n}\n\n.flex-vertical {\n  display: flex;\n  flex-direction: column;\n}\n\nimg.shake:hover {\n  animation: shake 1s;\n  animation-iteration-count: infinite;\n}\n\n@keyframes shake {\n  0%,\n  25%,\n  100% {\n    transform: translate(0px, 3px);\n  }\n\n  50%,\n  75% {\n    transform: translate(0px, -3px);\n  }\n}\n\n/* Title component styling----------------------------------------------------*/\n.title-wrapper {\n  position: relative;\n  width: 80%;\n  height: 5rem;\n  padding: 1rem;\n  justify-content: space-between;\n  font-family: pangolin;\n  font-size: 2rem;\n  color: #726969;\n  letter-spacing: 0.2rem;\n}\n\n.title-wrapper::before,\n.title-wrapper::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  height: 50%;\n  height: 50%;\n  width: 100%;\n  z-index: -1;\n}\n\n.title-wrapper::before {\n  top: 0;\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n  background-color: #e85350;\n  box-shadow: 0px 0px 3px #e85350;\n}\n\n.title-wrapper::after {\n  bottom: 0;\n  border-bottom-left-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n  background-color: #fafafa;\n  box-shadow: 0px 0px 3px #fafafa;\n}\n\n.title-wrapper img {\n  height: 100%;\n  transition: all ease-in-out 0.8s;\n}\n\n.title-wrapper img:hover {\n  transform: rotate(360deg);\n}\n\n/* Pallet component styling---------------------------------------------------*/\n.pallet-wrapper {\n  width: 60%;\n  font-family: Infant;\n  border-radius: 2rem;\n  background-color: #e8e4e4;\n  border: solid #8f737394 3px;\n  box-shadow: 0px 0px 5px #8b6767;\n}\n\n.pallet-wrapper > div:first-child {\n  height: 4rem;\n}\n\n.pallet-wrapper > div:first-child > img {\n  height: 100%;\n}\n\n.pallet-wrapper > * {\n  margin: 1rem;\n}\n\n.pallet-wrapper h2 {\n  font-size: 2rem;\n  padding: 1rem;\n  font-family: pangolin;\n}\n\n.pallet-wrapper > :nth-child(2) {\n  align-self: center;\n  font-size: 1.2rem;\n}\n\n/* Day component styling -----------------------------------------------------*/\n.day-wrapper {\n  border: solid #6f487047 3px;\n  width: 15%;\n  aspect-ratio: 1 / 1;\n  flex-grow: 1;\n  border-radius: 1rem;\n  background-color: #6f487047;\n}\n\n.day-wrapper > * {\n  text-transform: uppercase;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  font-weight: bold;\n}\n\n.day-wrapper > *:last-child::before {\n  content: '→';\n}\n\n.day-wrapper:hover {\n  background-color: #6f487091;\n  cursor: pointer;\n}\n\n/* Hours styling -------------------------------------------------------------*/\n.pallet-wrapper.hours ul {\n  padding: 0;\n}\n\n.pallet-wrapper.hours li {\n  list-style: none;\n}\n\n/* Home page styling ---------------------------------------------------------*/\n.home-wrapper {\n  width: 70%;\n  align-items: center;\n  border: solid red 3px;\n  margin: 0 auto;\n  gap: 1rem;\n  padding-top: 1rem;\n}\n\n.home-wrapper .hours > :nth-child(2) {\n  flex-flow: wrap;\n  gap: 1%;\n  width: 90%;\n}\n`,""]);const m=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var p=0;p<this.length;p++){var c=this[p][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],p=0;p<n.length;p++){var c=n[p],s=r.base?c[0]+r.base:c[0],l=o[s]||0,d="".concat(s," ").concat(l);o[s]=l+1;var u=t(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=a(f,r);r.byIndex=p,e.splice(p,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var p=t(o[i]);e[p].references--}for(var c=r(n,a),s=0;s<o.length;s++){var l=t(o[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},682:(n,e,t)=>{n.exports=t.p+"df5f537c56b8f162c1d1.ttf"},406:(n,e,t)=>{n.exports=t.p+"8848a06be06ed59543e9.ttf"}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!n;)n=r[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"6c6b4cb944d0eedc032f.png",e=(()=>{function e(){const e=document.createElement("img");return e.src=n,e}return function(n){const t=document.createElement("div");t.classList.add("title-wrapper","flex-horizontal");const r=document.createElement("h1");r.textContent=n;const a=e(),o=e();return t.appendChild(a),t.appendChild(r),t.appendChild(o),t}})(),r=function(n,e,t,r,a){const o=document.createElement("div");o.classList.add("pallet-wrapper","flex-vertical",a);const i=document.createElement("img");i.src=e,i.classList.add("shake");const p=document.createElement("h2");p.textContent=n;const c=document.createElement("div");return c.classList.add("flex-horizontal",t),c.append(i),c.append(p),o.append(c),r&&o.appendChild(r),o};function a(n,e,t){const r=document.createElement("div");r.classList.add("day-wrapper","flex-vertical");const a=document.createElement("h3");a.textContent=n;const o=document.createElement("p");o.textContent=e;const i=document.createElement("p");return i.textContent=t,r.appendChild(a),r.appendChild(o),r.appendChild(i),r}const o=t.p+"a3ee1073f121d3d96200.png",i=t.p+"d82885c4f2e5bbee7570.png";var p=t(379),c=t.n(p),s=t(795),l=t.n(s),d=t(569),u=t.n(d),f=t(565),m=t.n(f),g=t(216),h=t.n(g),x=t(589),b=t.n(x),v=t(426),y={};y.styleTagTransform=b(),y.setAttributes=m(),y.insert=u().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=h(),c()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals;var w=t(753),C={};C.styleTagTransform=b(),C.setAttributes=m(),C.insert=u().bind(null,"head"),C.domAPI=l(),C.insertStyleElement=h(),c()(w.Z,C),w.Z&&w.Z.locals&&w.Z.locals,document.querySelector("body").append(function(){const n=document.createElement("div");n.classList.add("home-wrapper","flex-vertical");const t=e("PokéBités Café"),p={Mon:["1200","2100"],Tues:["1200","2100"],Wed:["1200","1800"],Thur:["1100","1930"],Fri:["1200","2100"],Sat:["0900","2300"]},c=r("Opening Hours",o,"background-zigzag",function(n){const e=document.createElement("div");e.classList.add("flex-horizontal");const t=Object.keys(n);for(let n=0;n<t.length;n+=1){const[r,o]=p[t[n]];e.appendChild(a(t[n],r,o))}return e}(p),"hours"),s=r("Location",i,"background-isometric",function(){const n=document.createElement("div");n.classList.add("flex-vertical");const e=document.createElement("h3");return e.textContent="Mirage Island (near Sky Pillar), Route 130, Hoenn",n.appendChild(e),n}(),"hours");return n.appendChild(t),n.appendChild(c),n.appendChild(s),n}())})()})();