(()=>{"use strict";var e={753:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,".background-zigzag::after {\n  content: '';\n  flex-grow: 1;\n  height: 100%;\n  border-top-right-radius: 2rem;\n  background-color: #e5e5f7;\n  opacity: 0.8;\n  background: linear-gradient(135deg, #8e5e7055 25%, transparent 25%) -10px 0/\n      20px 20px,\n    linear-gradient(225deg, #8e5e70 25%, transparent 25%) -10px 0/ 20px 20px,\n    linear-gradient(315deg, #8e5e7055 25%, transparent 25%) 0px 0/ 20px 20px,\n    linear-gradient(45deg, #8e5e70 25%, #e5e5f7 25%) 0px 0/ 20px 20px;\n}\n\n.background-isometric::after {\n  content: '';\n  flex-grow: 1;\n  height: 100%;\n  border-top-right-radius: 2rem;\n  background-color: #e5e5f7;\n  opacity: 0.8;\n  background-image: linear-gradient(\n      30deg,\n      #8e5e70 12%,\n      transparent 12.5%,\n      transparent 87%,\n      #8e5e70 87.5%,\n      #8e5e70\n    ),\n    linear-gradient(\n      150deg,\n      #8e5e70 12%,\n      transparent 12.5%,\n      transparent 87%,\n      #8e5e70 87.5%,\n      #8e5e70\n    ),\n    linear-gradient(\n      30deg,\n      #8e5e70 12%,\n      transparent 12.5%,\n      transparent 87%,\n      #8e5e70 87.5%,\n      #8e5e70\n    ),\n    linear-gradient(\n      150deg,\n      #8e5e70 12%,\n      transparent 12.5%,\n      transparent 87%,\n      #8e5e70 87.5%,\n      #8e5e70\n    ),\n    linear-gradient(\n      60deg,\n      #8e5e7077 25%,\n      transparent 25.5%,\n      transparent 75%,\n      #8e5e7077 75%,\n      #8e5e7077\n    ),\n    linear-gradient(\n      60deg,\n      #8e5e7077 25%,\n      transparent 25.5%,\n      transparent 75%,\n      #8e5e7077 75%,\n      #8e5e7077\n    );\n  background-size: 20px 35px;\n  background-position: 0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px;\n}\n\n.background-rectangle::after {\n  content: '';\n  flex-grow: 1;\n  height: 100%;\n  border-top-right-radius: 2rem;\n  background-color: #e5e5f7;\n  opacity: 0.8;\n  background-image: repeating-linear-gradient(\n      45deg,\n      #8e5e70 25%,\n      transparent 25%,\n      transparent 75%,\n      #8e5e70 75%,\n      #8e5e70\n    ),\n    repeating-linear-gradient(\n      45deg,\n      #8e5e70 25%,\n      #e5e5f7 25%,\n      #e5e5f7 75%,\n      #8e5e70 75%,\n      #8e5e70\n    );\n  background-position: 0 0, 10px 10px;\n  background-size: 20px 20px;\n}\n",""]);const c=i},890:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,"/* Reference: https://codepen.io/stephenpaton-tech/full/JjRvGmY */\n/* ===== Scrollbar CSS ===== */\n/* Firefox */\n* {\n  scrollbar-width: auto;\n  scrollbar-color: #eccfcfbb #eccfcfbb;\n}\n\n/* Chrome, Edge, and Safari */\n*::-webkit-scrollbar {\n  width: 10px;\n}\n\n*::-webkit-scrollbar-track {\n  background: #e8e4e4;\n}\n\n*::-webkit-scrollbar-thumb {\n  background-color: #aa9b7bc7;\n  border-radius: 10px;\n}\n",""]);const c=i},426:(e,n,t)=>{t.d(n,{Z:()=>g});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),c=t(667),s=t.n(c),d=new URL(t(682),t.b),l=new URL(t(406),t.b),p=new URL(t(661),t.b),u=i()(a()),m=s()(d),f=s()(l),h=s()(p);u.push([e.id,`@font-face {\n  font-family: pangolin;\n  src: url(${m});\n}\n\n@font-face {\n  font-family: infant;\n  src: url(${f});\n}\n\n* {\n  box-sizing: border-box;\n}\n\n#root {\n  width: 100vw;\n}\n\nbody {\n  background-image: url(${h});\n  padding: 0;\n  margin: 0;\n}\n\n/* Predefined class ----------------------------------------------------------*/\n.flex-horizontal {\n  display: flex;\n  align-items: center;\n}\n\n.flex-vertical {\n  display: flex;\n  flex-direction: column;\n}\n\n.img-round-corner {\n  border-radius: 1rem;\n}\n\nimg.shake:hover {\n  animation: shake 1s;\n  animation-iteration-count: infinite;\n}\n\n@keyframes shake {\n  0%,\n  25%,\n  100% {\n    transform: translate(0px, 3px);\n  }\n\n  50%,\n  75% {\n    transform: translate(0px, -3px);\n  }\n}\n\n/* Component: Title ----------------------------------------------------------*/\n.title-wrapper {\n  position: relative;\n  width: 80%;\n  height: 5rem;\n  padding: 1rem;\n  justify-content: space-between;\n  font-family: pangolin;\n  font-size: 2rem;\n  letter-spacing: 0.2rem;\n  /* color: #554e4efd; */\n  color: transparent;\n  -webkit-text-stroke: 1px black;\n}\n\n.title-wrapper::before,\n.title-wrapper::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  height: 50%;\n  height: 50%;\n  width: 100%;\n  z-index: -1;\n}\n\n.title-wrapper::before {\n  top: 0;\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n  background-color: #c04341de;\n  box-shadow: 0px 0px 3px #e85350;\n}\n\n.title-wrapper::after {\n  bottom: 0;\n  border-bottom-left-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n  background-color: #ceccccc5;\n  box-shadow: 0px 0px 3px #dad9d9;\n}\n\n.title-wrapper img {\n  height: 100%;\n  transition: all ease-in-out 0.8s;\n}\n\n.title-wrapper img:hover {\n  transform: rotate(360deg);\n}\n\n/* Component: Pallet ---------------------------------------------------------*/\n.pallet-wrapper {\n  width: 60%;\n  font-family: Infant;\n  border-radius: 2rem;\n  background-color: #e8e4e4d5;\n  box-shadow: 0px 0px 10px #aa9b7b;\n}\n\n.pallet-wrapper > div:first-child {\n  height: 4rem;\n}\n\n.pallet-wrapper > div:first-child > img {\n  height: 100%;\n}\n\n.pallet-wrapper > * {\n  margin: 1rem;\n}\n\n.pallet-wrapper h2 {\n  font-size: 2rem;\n  padding: 1rem;\n  font-family: pangolin;\n}\n\n.pallet-wrapper > :nth-child(2) {\n  align-self: center;\n  font-size: 1.2rem;\n}\n\n/* Component: Day ------------------------------------------------------------*/\n.day-wrapper {\n  border: solid #6f487047 3px;\n  width: 15%;\n  aspect-ratio: 1 / 1;\n  flex-grow: 1;\n  border-radius: 1rem;\n  background-color: #6f487047;\n}\n\n.day-wrapper > * {\n  text-transform: uppercase;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  font-weight: bold;\n}\n\n.day-wrapper > *:last-child::before {\n  content: '→';\n}\n\n.day-wrapper:hover {\n  background-color: #6f487091;\n  cursor: pointer;\n}\n\n/* Component: Review ---------------------------------------------------------*/\n.review-wrapper {\n  width: 100%;\n  padding-bottom: 0.5rem;\n  border-bottom: solid #b4a5a567 3px;\n  justify-content: space-around;\n}\n\n.review-wrapper > :first-child {\n  width: 40%;\n  text-align: center;\n}\n\n.review-wrapper > :nth-child(2) {\n  width: 55%;\n  margin: 0;\n  align-self: flex-end;\n}\n\n.review-wrapper > :nth-child(2)::before,\n.review-wrapper > :nth-child(2)::after {\n  content: '"';\n}\n\n/* Pages: general styling ----------------------------------------------------*/\n.page {\n  width: 70%;\n  min-width: 800px;\n  align-items: center;\n  margin: 0 auto;\n  gap: 1rem;\n  padding-block: 1rem;\n  background-color: #9d9d9d63;\n  border-radius: 1rem;\n  box-shadow: 0px 0px 20px rgb(54, 53, 53);\n}\n\n.page > :first-child {\n  z-index: 1;\n}\n\n.page > :not(:first-child) > :nth-child(2) {\n  width: 90%;\n}\n\n/* Pages: Home ---------------------------------------------------------------*/\n.home-wrapper .about {\n  align-items: center;\n}\n\n.home-wrapper .about > :nth-child(2) > img {\n  width: 100%;\n  box-shadow: 0px 0px 30px rgb(61, 123, 128);\n}\n\n.home-wrapper > .hours > :nth-child(2) {\n  flex-flow: wrap;\n  gap: 1%;\n}\n\n.home-wrapper > .location > :nth-child(2) img {\n  box-shadow: 0px 0px 30px rgb(61, 123, 128);\n  width: 80%;\n  margin: 0 auto;\n}\n\n/* Pages: Menu ---------------------------------------------------------------*/\n.menu-wrapper .commit {\n  align-items: center;\n}\n\n.menu-wrapper .commit > div:nth-child(2) > div {\n  width: 100%;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.menu-wrapper .commit > div:not(:first-child) img {\n  flex-shrink: 1;\n  width: 30%;\n  cursor: pointer;\n  transition: all ease-in-out 0.1s;\n  box-shadow: 0px 0px 30px rgb(61, 123, 128);\n}\n\n.menu-wrapper .commit > div img:hover {\n  transform: scale(1.1);\n}\n\n.meal-selection {\n  align-items: center;\n  text-align: center;\n}\n\n.choice-wrapper {\n  align-items: center;\n  padding-top: 1rem;\n}\n\n.choice-wrapper:not(:last-child) {\n  border-bottom: solid #b4a5a567 3px;\n}\n\n.meal-selection img {\n  width: 60%;\n  border-radius: 0.5rem;\n  box-shadow: 0px 0px 30px rgb(61, 123, 128);\n}\n\n.pokemon-dollar::before {\n  content: '₽ ';\n}\n\n/* Pages: Contact ------------------------------------------------------------*/\n.worker-pallet {\n  justify-content: space-around;\n}\n.worker-pallet > :first-child {\n  width: 40%;\n}\n\n.worker-pallet > :nth-child(2) {\n  width: 55%;\n}\n\n.worker-pallet > :nth-child(2) > * {\n  margin: 0;\n}\n\n.worker-pallet address::before {\n  content: 'PokéNav: ';\n  font-style: normal;\n}\n\n/* Tab switcher --------------------------------------------------------------*/\nnav {\n  height: 3rem;\n  width: 70%;\n  min-width: 800px;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  margin-bottom: 1rem;\n  gap: 1rem;\n  padding-block: 1rem;\n  background-color: #9d9d9d63;\n  border-radius: 1rem;\n  box-shadow: 0px 0px 20px rgb(54, 53, 53);\n  position: sticky;\n  top: 0;\n  z-index: 2;\n}\n\nnav button {\n  font-family: Pangolin;\n  font-size: 1.5rem;\n}\n`,""]);const g=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=r(e,a),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},682:(e,n,t)=>{e.exports=t.p+"df5f537c56b8f162c1d1.ttf"},406:(e,n,t)=>{e.exports=t.p+"8848a06be06ed59543e9.ttf"},661:(e,n,t)=>{e.exports=t.p+"9c777f31698f455ebdc1.png"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=t.p+"6c6b4cb944d0eedc032f.png",n=(()=>{function n(){const n=document.createElement("img");return n.src=e,n}return function(e){const t=document.createElement("div");t.classList.add("title-wrapper","flex-horizontal");const r=document.createElement("h1");r.textContent=e;const a=n(),o=n();return t.append(a,r,o),t}})();function r(e,n,t,r,a){const o=document.createElement("div");o.classList.add("pallet-wrapper","flex-vertical",a);const i=document.createElement("img");i.src=n,i.classList.add("shake");const c=document.createElement("h2");c.textContent=e;const s=document.createElement("div");return s.classList.add("flex-horizontal",t),s.append(i,c),o.append(s),r&&o.appendChild(r),o}function a(e,n,t){const r=document.createElement("div");r.classList.add("day-wrapper","flex-vertical");const a=document.createElement("h3");a.textContent=e;const o=document.createElement("p");o.textContent=n;const i=document.createElement("p");return i.textContent=t,r.append(a,o,i),r}const o=t.p+"f2882d2e1b6162d044f3.png",i=t.p+"a3ee1073f121d3d96200.png",c=t.p+"d82885c4f2e5bbee7570.png",s=t.p+"3157eea653915b5f1509.png",d=t.p+"7a7d9e6ee765c7c99ead.png",l=t.p+"5a8596bb696a3bec4cfd.png",p=t.p+"caaaed43bf29be54a14a.png",u=t.p+"57e6b476fb6dfff64e6f.png";function m(){const e=document.createElement("div");e.classList.add("page","home-wrapper","flex-vertical");const t=n("PokéBités Café"),m=r("About",o,"n",function(e,n){const t=document.createElement("div"),r=document.createElement("img");r.classList.add("img-round-corner"),r.src=e;const a=document.createElement("h3");return a.textContent="At Mirage Island, we invite you to embark on a journey like no other, where the boundaries between fantasy and reality blur, and your senses are awakened to a world of culinary enchantment. Nestled on a mirage island, a hidden oasis seemingly born from the dreams of wanderers, our restaurant is a testament to the magic that can unfold when imagination meets exquisite cuisine.",t.append(r,a),t}(d),"about"),f={Mon:["1200","2100"],Tues:["1200","2100"],Wed:["1200","1800"],Thur:["1100","1930"],Fri:["1200","2100"],Sat:["0900","2300"]},h=r("Opening Hours",i,"background-zigzag",function(e){const n=document.createElement("div");n.classList.add("flex-horizontal");const t=Object.keys(e);for(let e=0;e<t.length;e+=1){const[r,o]=f[t[e]];n.appendChild(a(t[e],r,o))}return n}(f),"hours"),g=r("Location",c,"background-isometric",function(e,n){const t=document.createElement("div");t.classList.add("flex-vertical");const r=document.createElement("h3");r.textContent="Mirage Island (near Sky Pillar), Route 130, Hoenn",t.appendChild(r);const a=document.createElement("img");return a.src=n,a.classList.add("img-round-corner"),t.appendChild(a),t}(0,l),"location"),b=r("Review",s,"background-rectangle",function(e){const n=document.createElement("div");return n.classList.add("flex-vertical"),e.forEach((e=>{const{name:t,imgSrc:r,reviewText:a}=e;n.appendChild(function(e,n,t){const r=document.createElement("div");r.classList.add("review-wrapper","flex-horizontal");const a=document.createElement("div");a.classList.add("flex-vertical");const o=document.createElement("h3");o.textContent=e;const i=document.createElement("img");i.src=n,i.classList.add("img-round-corner"),a.append(o,i);const c=document.createElement("blockquote");return c.textContent=t,r.append(a,c),r}(t,r,a))})),n}([{name:"Steven Stone, League Champion",imgSrc:p,reviewText:"When I first heard about a restaurant located on a mirage island, I couldn't help but be intrigued. Skepticism mixed with curiosity as I set foot on this mystical oasis, unsure of what to expect. But from the moment I stepped inside, my doubts were shattered, and I was transported into a world of culinary delight."},{name:"May Birch, Professional Trainer",imgSrc:u,reviewText:"While dining at Mirage Island comes with a premium price tag, it is worth every penny. This is not just a restaurant; it is an escape from reality, an immersive journey for your taste buds and soul. Whether you're seeking a romantic dinner under the stars or a unique culinary adventure, Mirage Island delivers beyond expectations."}]),"review");return e.append(t,m,h,g,b),e}const f=t.p+"3edf788f99b40a17b217.png",h=t.p+"5ed7f8fdec452ccb29fe.png",g=t.p+"718b9b34a996fed4797e.png",b=t.p+"47f2ab247fb3de58b282.png",x=t.p+"8e6d36f0b32464e6ac1e.png",w=t.p+"232df06709669249c7d6.png",v=t.p+"bb614e151a34404bf9c1.png",y=t.p+"aa8d9b6a4af11e79c45f.png",k=t.p+"eff8cd434d64a74031a8.png",E=t.p+"1b02ff64de6e67044bff.png",C=t.p+"c19e2b6173642577dc8b.png",L=t.p+"23941a89e990437d07e5.png",S=t.p+"3a53a0ddf533ff40851d.png";function P(){const e=document.createElement("div");e.classList.add("page","menu-wrapper","flex-vertical");const t=n("Menu"),a=r("Commitment",f,"n",function(e,n){const t=document.createElement("div"),r=document.createElement("h3");r.textContent="At PokéBités Café, we take great pride in providing our customers with an exceptional dining experience, and it all begins with our unwavering commitment to using only the highest quality ingredients in every dish we prepare. We believe that using the freshest and finest ingredients is the cornerstone of creating delicious and memorable meals that leave a lasting impression on our guests. Our commitment has earned us several prestigious awards.";const a=document.createElement("div");return a.classList.add("flex-horizontal"),n.forEach((e=>{const n=document.createElement("img");n.classList.add("img-round-corner"),n.src=e,a.appendChild(n)})),t.append(r,a),t}(0,[x,w,v]),"commit");function o(e,n){const t=document.createElement("div");return t.classList.add("meal-selection",n,"flex-vertical"),e.forEach((e=>{const{imSrc:n,mealName:r,description:a,price:o}=e,i=document.createElement("div");i.classList.add("flex-vertical","choice-wrapper");const c=document.createElement("img");c.src=n;const s=document.createElement("h3");s.textContent=r;const d=document.createElement("p");d.textContent=a;const l=document.createElement("p");l.classList.add("pokemon-dollar"),l.textContent=o,i.append(c,s,d,l),t.appendChild(i)})),t}const i=r("Amuse-bouche",h,"background-isometric",o([{imSrc:y,mealName:"Citrus Delight Platter",description:"A refreshing appetizer that captures the essence of the bountiful Mirage Island. This delectable dish is an ode to the island's unique blend of flavors, combining zesty lemons, delightful candies, and succulent berries.",price:150},{imSrc:k,mealName:"Pikachu's Pancake Medley",description:"A whimsical creation inspired by the playful spirit of everyone's favorite Electric-type Pokémon, this dish is a true celebration of flavors and artistry. The pancakes are lovingly paired with a variety of luscious fruits that pay homage to the lush vegetation found on Mirage Island.",price:225}],"appetizer"),"appetizer"),c=r("Plat Principal",g,"background-zigzag",o([{imSrc:E,mealName:"Mirage Island Beef Stew",description:"This soul-warming creation is a tribute to the rich, diverse flavors of the Pokémon world and the heartwarming hospitality found on Mirage Island. At the heart of this savory masterpiece lies tender, succulent beef, slow-cooked to perfection. Complementing the savory notes are an assortment of fresh vegetables, locally sourced from the abundant fields of Mirage Island.",price:650},{imSrc:C,mealName:"Enchanted Isle Carbonara",description:"A fusion of traditional Italian flavors and the enchanting allure of Mirage Island, this pasta delight promises a memorable dining experience like no other. Nestled in a bed of perfectly al dente spaghetti, this dish boasts a luxurious creamy sauce that envelops every strand with velvety goodness. To elevate the experience further, the Pokémon Carbonara Spaghetti is adorned with a sprinkle of crisp and savory bacon bits.",price:550}],"main"),"main"),s=r("Dessert",b,"background-rectangle",o([{imSrc:L,mealName:"Magical Lantern Fantasy",description:"Behold a delightful spectacle of a pink-brown chocolate ice cream cookie, skillfully crafted to resemble the enchanting lanterns that illuminate the island's starry nights. Perched atop this dreamy creation is an edible lantern doll, a testament to the culinary artistry that brings this fantasy to life.",price:275},{imSrc:S,mealName:"Berry Bliss Tiramisu",description:"This delectable treat artfully combines the rich heritage of Italian Tiramisu with the vibrancy of Mirage Island's ripest strawberries. Each heavenly spoonful unveils layers of creamy mascarpone cheese elegantly intertwined with delicate ladyfinger biscuits, expertly soaked in a symphony of espresso and a hint of amaretto.",price:200}],"dessert"),"dessert");return e.append(t,a,i,c,s),e}const M=t.p+"c5790c6d1b608e220fa7.png",T=t.p+"20907db0df8b33ea0035.png",z=t.p+"fbe032b689a7190a10f9.png",I=t.p+"0d6e191b40fd084419ea.png",A=t.p+"6d619406b8a7fea8a53b.png",j=t.p+"0f009d9e8c374247d83d.png";function N(){const e=document.createElement("div");e.classList.add("page","contact-wrapper","flex-vertical");const t=n("Contact");function a(e,n,t,r){const a=document.createElement("div");a.classList.add("worker-pallet","flex-horizontal");const o=document.createElement("img");o.classList.add("img-round-corner"),o.src=r;const i=document.createElement("div");i.classList.add("worker-pallet-info","flex-vertical");const c=document.createElement("h3");c.textContent=e;const s=document.createElement("p");s.textContent=n;const d=document.createElement("address");return d.textContent=t,i.append(c,s,d),a.append(o,i),a}const o=r("Restaurateur",M,"background-rectangle",a("Brendan Birch","Meet me, a former Pokémon Champion turned restaurateur on Mirage Island. Discover the enchanting fusion of Pokémon wonder and gastronomic delights in our extraordinary restaurant, where victory and passion create culinary magic.","#87131",I),"owner"),i=r("Chef",T,"background-isometric",a("Flannery","Embrace the Flame with Your Culinary Sorceress - A former Fire Gym Leader, conjuring perfect dishes with the fiery passion of my Pokémon companions. Let's ignite your senses on a magical gastronomic journey like no other.","#82955",A),"chef"),c=r("Waiter",z,"background-zigzag",a("Brendan's Machoke","With its immense strength and attentive spirit, Machoke serves you with unparalleled grace. Prepare to be delighted as Machoke adds a touch of Pokémon magic to your dining experience, ensuring each moment is a taste of culinary enchantment.","NA",j),"waiter");return e.append(t,o,i,c),e}var Z=t(379),B=t.n(Z),R=t(795),F=t.n(R),q=t(569),O=t.n(q),W=t(565),$=t.n(W),H=t(216),U=t.n(H),D=t(589),_=t.n(D),G=t(426),J={};J.styleTagTransform=_(),J.setAttributes=$(),J.insert=O().bind(null,"head"),J.domAPI=F(),J.insertStyleElement=U(),B()(G.Z,J),G.Z&&G.Z.locals&&G.Z.locals;var Y=t(753),Q={};Q.styleTagTransform=_(),Q.setAttributes=$(),Q.insert=O().bind(null,"head"),Q.domAPI=F(),Q.insertStyleElement=U(),B()(Y.Z,Q),Y.Z&&Y.Z.locals&&Y.Z.locals;var K=t(890),V={};V.styleTagTransform=_(),V.setAttributes=$(),V.insert=O().bind(null,"head"),V.domAPI=F(),V.insertStyleElement=U(),B()(K.Z,V),K.Z&&K.Z.locals&&K.Z.locals,(()=>{const e=document.querySelector("body"),[n,t,r]=[m(),P(),N()],a={home:n,menu:t,contact:r};function o(n){const t=n.target.getAttribute("data-direct"),r=a[t];e.removeChild(e.lastChild),e.appendChild(r)}const i=document.createElement("nav");i.classList.add("flex-horizontal");const c=document.createElement("button");c.setAttribute("data-direct","home"),c.textContent="Home";const s=document.createElement("button");s.setAttribute("data-direct","menu"),s.textContent="Menu";const d=document.createElement("button");d.setAttribute("data-direct","contact"),d.textContent="Contact";const l=[c,s,d];l.forEach((e=>{e.onclick=o})),i.append(...l),e.append(i,n)})()})()})();