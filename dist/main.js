(()=>{"use strict";var n={753:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,".background-zigzag::after {\n  content: '';\n  flex-grow: 1;\n  height: 100%;\n  border-top-right-radius: 2rem;\n  background-color: #e5e5f7;\n  opacity: 0.8;\n  background: linear-gradient(135deg, #8e5e7055 25%, transparent 25%) -10px 0/\n      20px 20px,\n    linear-gradient(225deg, #8e5e70 25%, transparent 25%) -10px 0/ 20px 20px,\n    linear-gradient(315deg, #8e5e7055 25%, transparent 25%) 0px 0/ 20px 20px,\n    linear-gradient(45deg, #8e5e70 25%, #e5e5f7 25%) 0px 0/ 20px 20px;\n}\n\n.background-isometric::after {\n  content: '';\n  flex-grow: 1;\n  height: 100%;\n  border-top-right-radius: 2rem;\n  background-color: #e5e5f7;\n  opacity: 0.8;\n  background-image: linear-gradient(\n      30deg,\n      #8e5e70 12%,\n      transparent 12.5%,\n      transparent 87%,\n      #8e5e70 87.5%,\n      #8e5e70\n    ),\n    linear-gradient(\n      150deg,\n      #8e5e70 12%,\n      transparent 12.5%,\n      transparent 87%,\n      #8e5e70 87.5%,\n      #8e5e70\n    ),\n    linear-gradient(\n      30deg,\n      #8e5e70 12%,\n      transparent 12.5%,\n      transparent 87%,\n      #8e5e70 87.5%,\n      #8e5e70\n    ),\n    linear-gradient(\n      150deg,\n      #8e5e70 12%,\n      transparent 12.5%,\n      transparent 87%,\n      #8e5e70 87.5%,\n      #8e5e70\n    ),\n    linear-gradient(\n      60deg,\n      #8e5e7077 25%,\n      transparent 25.5%,\n      transparent 75%,\n      #8e5e7077 75%,\n      #8e5e7077\n    ),\n    linear-gradient(\n      60deg,\n      #8e5e7077 25%,\n      transparent 25.5%,\n      transparent 75%,\n      #8e5e7077 75%,\n      #8e5e7077\n    );\n  background-size: 20px 35px;\n  background-position: 0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px;\n}\n\n.background-rectangle::after {\n  content: '';\n  flex-grow: 1;\n  height: 100%;\n  border-top-right-radius: 2rem;\n  background-color: #e5e5f7;\n  opacity: 0.8;\n  background-image: repeating-linear-gradient(\n      45deg,\n      #8e5e70 25%,\n      transparent 25%,\n      transparent 75%,\n      #8e5e70 75%,\n      #8e5e70\n    ),\n    repeating-linear-gradient(\n      45deg,\n      #8e5e70 25%,\n      #e5e5f7 25%,\n      #e5e5f7 75%,\n      #8e5e70 75%,\n      #8e5e70\n    );\n  background-position: 0 0, 10px 10px;\n  background-size: 20px 20px;\n}\n",""]);const c=i},426:(n,e,t)=>{t.d(e,{Z:()=>m});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),c=t(667),p=t.n(c),d=new URL(t(682),t.b),s=new URL(t(406),t.b),l=i()(a()),u=p()(d),f=p()(s);l.push([n.id,`@font-face {\n  font-family: pangolin;\n  src: url(${u});\n}\n\n@font-face {\n  font-family: infant;\n  src: url(${f});\n}\n\n* {\n  box-sizing: border-box;\n}\n\n#root {\n  width: 100vw;\n}\n\n/* Predefined class ----------------------------------------------------------*/\n.flex-horizontal {\n  display: flex;\n  align-items: center;\n}\n\n.flex-vertical {\n  display: flex;\n  flex-direction: column;\n}\n\n.img-round-corner {\n  border-radius: 1rem;\n}\n\nimg.shake:hover {\n  animation: shake 1s;\n  animation-iteration-count: infinite;\n}\n\n@keyframes shake {\n  0%,\n  25%,\n  100% {\n    transform: translate(0px, 3px);\n  }\n\n  50%,\n  75% {\n    transform: translate(0px, -3px);\n  }\n}\n\n/* Component: Title ----------------------------------------------------------*/\n.title-wrapper {\n  position: relative;\n  width: 80%;\n  height: 5rem;\n  padding: 1rem;\n  justify-content: space-between;\n  font-family: pangolin;\n  font-size: 2rem;\n  color: #726969;\n  letter-spacing: 0.2rem;\n}\n\n.title-wrapper::before,\n.title-wrapper::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  height: 50%;\n  height: 50%;\n  width: 100%;\n  z-index: -1;\n}\n\n.title-wrapper::before {\n  top: 0;\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n  background-color: #e85350;\n  box-shadow: 0px 0px 3px #e85350;\n}\n\n.title-wrapper::after {\n  bottom: 0;\n  border-bottom-left-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n  background-color: #fafafa;\n  box-shadow: 0px 0px 3px #fafafa;\n}\n\n.title-wrapper img {\n  height: 100%;\n  transition: all ease-in-out 0.8s;\n}\n\n.title-wrapper img:hover {\n  transform: rotate(360deg);\n}\n\n/* Component: Pallet ---------------------------------------------------------*/\n.pallet-wrapper {\n  width: 60%;\n  font-family: Infant;\n  border-radius: 2rem;\n  background-color: #e8e4e4;\n  border: solid #8f737394 3px;\n  box-shadow: 0px 0px 5px #8b6767;\n}\n\n.pallet-wrapper > div:first-child {\n  height: 4rem;\n}\n\n.pallet-wrapper > div:first-child > img {\n  height: 100%;\n}\n\n.pallet-wrapper > * {\n  margin: 1rem;\n}\n\n.pallet-wrapper h2 {\n  font-size: 2rem;\n  padding: 1rem;\n  font-family: pangolin;\n}\n\n.pallet-wrapper > :nth-child(2) {\n  align-self: center;\n  font-size: 1.2rem;\n}\n\n/* Component: Day ------------------------------------------------------------*/\n.day-wrapper {\n  border: solid #6f487047 3px;\n  width: 15%;\n  aspect-ratio: 1 / 1;\n  flex-grow: 1;\n  border-radius: 1rem;\n  background-color: #6f487047;\n}\n\n.day-wrapper > * {\n  text-transform: uppercase;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  font-weight: bold;\n}\n\n.day-wrapper > *:last-child::before {\n  content: '→';\n}\n\n.day-wrapper:hover {\n  background-color: #6f487091;\n  cursor: pointer;\n}\n\n/* Component: Review ---------------------------------------------------------*/\n.review-wrapper {\n  width: 100%;\n}\n\n.review-wrapper > :first-child {\n  width: 40%;\n  text-align: center;\n}\n\n.review-wrapper > :nth-child(2) {\n  border: solid green 3px;\n}\n\n/* Pages: Home ---------------------------------------------------------------*/\n/* Might be generic for pages, KIV */\n.home-wrapper {\n  width: 70%;\n  min-width: 800px;\n  align-items: center;\n  margin: 0 auto;\n  gap: 1rem;\n  padding-top: 1rem;\n}\n\n.home-wrapper > .hours > :nth-child(2) {\n  flex-flow: wrap;\n  gap: 1%;\n  width: 90%;\n}\n\n.home-wrapper > .location > :nth-child(2) {\n  width: 90%;\n}\n\n.home-wrapper > .location > :nth-child(2) img {\n  box-shadow: 0px 0px 30px rgb(61, 123, 128);\n  width: 80%;\n  margin: 0 auto;\n}\n\n.review {\n  border: solid green 3px;\n}\n\n.home-wrapper > .review > :nth-child(2) {\n  width: 90%;\n}\n`,""]);const m=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var p=this[c][0];null!=p&&(i[p]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);r&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var p=n[c],d=r.base?p[0]+r.base:p[0],s=o[d]||0,l="".concat(d," ").concat(s);o[d]=s+1;var u=t(l),f={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=a(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var p=r(n,a),d=0;d<o.length;d++){var s=t(o[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}o=p}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},682:(n,e,t)=>{n.exports=t.p+"df5f537c56b8f162c1d1.ttf"},406:(n,e,t)=>{n.exports=t.p+"8848a06be06ed59543e9.ttf"}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!n;)n=r[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"6c6b4cb944d0eedc032f.png",e=(()=>{function e(){const e=document.createElement("img");return e.src=n,e}return function(n){const t=document.createElement("div");t.classList.add("title-wrapper","flex-horizontal");const r=document.createElement("h1");r.textContent=n;const a=e(),o=e();return t.appendChild(a),t.appendChild(r),t.appendChild(o),t}})();function r(n,e,t,r,a){const o=document.createElement("div");o.classList.add("pallet-wrapper","flex-vertical",a);const i=document.createElement("img");i.src=e,i.classList.add("shake");const c=document.createElement("h2");c.textContent=n;const p=document.createElement("div");return p.classList.add("flex-horizontal",t),p.append(i),p.append(c),o.append(p),r&&o.appendChild(r),o}function a(n,e,t){const r=document.createElement("div");r.classList.add("day-wrapper","flex-vertical");const a=document.createElement("h3");a.textContent=n;const o=document.createElement("p");o.textContent=e;const i=document.createElement("p");return i.textContent=t,r.appendChild(a),r.appendChild(o),r.appendChild(i),r}const o=t.p+"a3ee1073f121d3d96200.png",i=t.p+"d82885c4f2e5bbee7570.png",c=t.p+"3157eea653915b5f1509.png",p=t.p+"5a8596bb696a3bec4cfd.png",d=t.p+"caaaed43bf29be54a14a.png",s=t.p+"57e6b476fb6dfff64e6f.png";var l=t(379),u=t.n(l),f=t(795),m=t.n(f),g=t(569),h=t.n(g),x=t(565),b=t.n(x),v=t(216),w=t.n(v),y=t(589),C=t.n(y),k=t(426),E={};E.styleTagTransform=C(),E.setAttributes=b(),E.insert=h().bind(null,"head"),E.domAPI=m(),E.insertStyleElement=w(),u()(k.Z,E),k.Z&&k.Z.locals&&k.Z.locals;var S=t(753),T={};T.styleTagTransform=C(),T.setAttributes=b(),T.insert=h().bind(null,"head"),T.domAPI=m(),T.insertStyleElement=w(),u()(S.Z,T),S.Z&&S.Z.locals&&S.Z.locals,document.querySelector("body").append(function(){const n=document.createElement("div");n.classList.add("home-wrapper","flex-vertical");const t=e("PokéBités Café"),l={Mon:["1200","2100"],Tues:["1200","2100"],Wed:["1200","1800"],Thur:["1100","1930"],Fri:["1200","2100"],Sat:["0900","2300"]},u=r("Opening Hours",o,"background-zigzag",function(n){const e=document.createElement("div");e.classList.add("flex-horizontal");const t=Object.keys(n);for(let n=0;n<t.length;n+=1){const[r,o]=l[t[n]];e.appendChild(a(t[n],r,o))}return e}(l),"hours"),f=r("Location",i,"background-isometric",function(n,e){const t=document.createElement("div");t.classList.add("flex-vertical");const r=document.createElement("h3");r.textContent="Mirage Island (near Sky Pillar), Route 130, Hoenn",t.appendChild(r);const a=document.createElement("img");return a.src=e,a.classList.add("img-round-corner"),t.appendChild(a),t}(0,p),"location"),m=r("Review",c,"background-rectangle",function(n){const e=document.createElement("div");return e.classList.add("flex-vertical"),n.forEach((n=>{const{name:t,imgSrc:r,reviewText:a}=n;e.appendChild(function(n,e,t){const r=document.createElement("div");r.classList.add("review-wrapper","flex-horizontal");const a=document.createElement("div");a.classList.add("flex-vertical");const o=document.createElement("h3");o.textContent=n;const i=document.createElement("img");i.src=e,i.classList.add("img-round-corner"),a.append(o,i);const c=document.createElement("blockquote");return c.textContent=t,r.appendChild(a),r.appendChild(c),r}(t,r,a))})),e}([{name:"Steven Stone",imgSrc:d,reviewText:"I like this"},{name:"May Birch",imgSrc:s,reviewText:"I like this"}]),"review");return n.appendChild(t),n.appendChild(u),n.appendChild(f),n.appendChild(m),n}())})()})();