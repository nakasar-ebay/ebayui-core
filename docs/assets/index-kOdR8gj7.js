import{r as xe,b as Ie,p as U,g as b,f as He,d as Re,t as Me}from"./registry-EgEQwbXk.js";/* empty css                    */import{_ as d}from"./dynamic-tag-7vXwaVzE.js";import{_ as Ke}from"./index-YaSSGaP-.js";import{_ as V}from"./render-tag-_0PNNh6Y.js";import{_ as O}from"./index-VGoHc-V3.js";import"./preserve-attrs-lolIpBRv.js";import{s as Ue}from"./index-ERL0bCNR.js";import{r as ne,h as Ve}from"./index--8xUDD5P.js";let c,h,B,C,S,N,P,se,le;function qe(){const e=document.createElement("div");return e.setAttribute("aria-hidden","true"),e.setAttribute("tabindex","0"),e.className="keyboard-trap-boundary",e}function q(){se.focus()}function z(){le.focus()}function ze(){h=qe(),B=h.cloneNode(),C=h.cloneNode(),S=h.cloneNode(),N=h.cloneNode(),P=h.cloneNode(),h.addEventListener("focus",q),B.addEventListener("focus",q),C.addEventListener("focus",z),S.addEventListener("focus",q),N.addEventListener("focus",z),P.addEventListener("focus",z)}function re(){return c&&(h=w(h),B=w(B),C=w(C),S=w(S),N=w(N),P=w(P),c.classList.remove("keyboard-trap--active"),c.dispatchEvent(new CustomEvent("keyboardUntrap",{bubbles:!0})),c=null),c}function w(e){const t=e.parentNode;return t?t.removeChild(e):e}function Xe(e){h?re():ze(),c=e;const t=typeof document>"u"?null:document.body,i=Ue(c,!0);return se=i[0],le=i[i.length-1],t.insertBefore(h,t.childNodes[0]),c.parentNode.insertBefore(B,c),c.insertBefore(C,c.childNodes[0]),c.appendChild(S),c.parentNode.insertBefore(N,c.nextElementSibling),t.appendChild(P),c.dispatchEvent(new CustomEvent("keyboardTrap",{bubbles:!0})),c.classList.add("keyboard-trap--active"),c}const Ye=e=>e.nodeType===1&&e.tagName.toLowerCase()!=="body"&&e.tagName.toLowerCase()!=="html",Ze=e=>e.nodeType===1&&e.tagName.toLowerCase()!=="script",Ge=(e,t)=>e.concat(t);function oe(e,t=[]){const i=e.previousSibling;return i?(t.push(i),oe(i,t)):t}function ae(e,t=[]){const i=e.nextSibling;return i?(t.push(i),ae(i,t)):t}function ce(e){return oe(e).concat(ae(e)).filter(Ze)}function ue(e,t=[]){const i=e.parentNode;return i?(t.push(i),ue(i,t)):t}function de(e){return ue(e).filter(Ye)}function Je(e){return de(e).map(t=>ce(t)).reduce(Ge,[])}let A,p,F;const j=e=>e.tagName.toLowerCase()!=="svg";function D(e,t){let i;return t===!1?i=$(e,"aria-hidden","false"):i=$(e,"hidden",!1),i}function ee(e,t){let i;return t===!1?i=$(e,"aria-hidden","true"):i=$(e,"hidden",!0),i}function $(e,t,i){const n=typeof i=="boolean";return{el:e,attributeName:t,cleanValue:n?e[t]:e.getAttribute(t),dirtyValue:i,isProperty:n}}function Qe(e){e.isProperty===!0?e.el[e.attributeName]=e.dirtyValue:e.el.setAttribute(e.attributeName,e.dirtyValue)}function We(e){e.cleanValue?e.isProperty===!0?e.el[e.attributeName]=e.cleanValue:e.el.setAttribute(e.attributeName,e.cleanValue):e.el.removeAttribute(e.attributeName)}function fe(){p&&(F.forEach(e=>We(e)),F=[],A&&A.setAttribute("role","main"),p.dispatchEvent(new CustomEvent("screenreaderUntrap",{bubbles:!0})),p=null)}const Oe={useHiddenProperty:!1};function je(e,t){fe();const i=Object.assign({},Oe,t);p=e,A=document.querySelector('main, [role="main"]'),A&&A.setAttribute("role","presentation");const n=de(p);let l=ce(p),o=Je(p);i.useHiddenProperty===!0&&(l=l.filter(j),o=o.filter(j)),F=[D(p,i.useHiddenProperty)].concat(n.map(a=>D(a,i.useHiddenProperty))).concat(l.map(a=>ee(a,i.useHiddenProperty))).concat(o.map(a=>ee(a,i.useHiddenProperty))),F.forEach(a=>Qe(a)),p.dispatchEvent(new CustomEvent("screenreaderTrap",{bubbles:!0}))}let he,k,x=!1;function pe(){if(!x){const{body:e}=document,{pageXOffset:t,pageYOffset:i}=window,{width:n,height:l,marginTop:o,marginLeft:a}=getComputedStyle(e);let r="position:fixed;overflow:hidden;";he=[t,i],k=e.getAttribute("style"),r+=`height:${l};`,r+=`width:${n};`,i&&(r+=`margin-top:${-1*(i-parseInt(o,10))}px;`),t&&(r+=`margin-left:${-1*(t-parseInt(a,10))}px`),k&&(r=`${k};${r}`),e.setAttribute("style",r),ne.addEventListener("",ge),x=!0}}function me(){if(x){const{body:e}=document;k?e.setAttribute("style",k):e.removeAttribute("style"),window.scrollTo(...he),ne.removeEventListener("",ge),x=!1}}function ge(){me(),pe()}const X="transitionend",te=({el:e,className:t,waitFor:i},n)=>{let l,o=0;const a=i?i.length:0,r=e.classList,f=`${t}-init`;if(!("ontransitionend"in e)){const u=setTimeout(n,0);return()=>clearTimeout(u)}let g=De(()=>{g=void 0,r.add(t),r.remove(f),a?i.forEach(u=>u.addEventListener(X,m)):(v(),n&&n())});return r.add(f),v;function v(){if(!l){l=!0;for(let u=o;u<a;u++)i[u].removeEventListener(X,m);g?(g(),r.remove(f)):r.remove(t)}}function m({target:u}){u==null||u.removeEventListener(X,m),++o===a&&(l=!0,r.remove(t),n&&n())}};function De(e){let t;return t=requestAnimationFrame(()=>{t=requestAnimationFrame(e)}),()=>{t&&(cancelAnimationFrame(t),t=0)}}class et extends Marko.Component{get useHiddenProperty(){return this.input.useHiddenProperty||!1}trackLastClick(t){if(t.defaultPrevented||t.metaKey||t.ctrlKey||t.shiftKey||t.button!==0)return;let i=t.target;for(;i!==null&&i.nodeName!=="BUTTON";)i=i.parentNode;this.clickTarget=i}getActiveElement(t){let i=null;t&&t.closeFocus&&(i=document.getElementById(t.closeFocus));const n=document.activeElement===document.body?this.clickTarget:document.activeElement;return i||n}handleStartClick({target:t}){this.startEl=t}handleScroll(){this.emit("scroll")}handleKeydown(t){Ve(t,()=>{this.state.open=!1})}handleDialogClick({target:t,clientY:i}){const{closeEl:n,windowEl:l,startEl:o}=this;if(this.startEl=null,this.input.buttonPosition!=="hidden"&&!(l!=null&&l.contains(o??null))){if(!(n!=null&&n.contains(t))&&(l!=null&&l.contains(t))){const{bottom:a}=l.getBoundingClientRect(),{paddingBottom:r}=getComputedStyle(l),f=a-parseInt(r,10);if(i<f)return}this.state.open=!1}}handleCloseButtonClick(){this.state.open=!1}onInput(t){t.isModal=t.isModal!==!1,this.isAnimating||(this.state={open:t.open||!1})}onRender(){typeof window<"u"&&this._release()}onMount(){this.rootEl=this.getEl()??null,this.windowEl=this.getEl("window")??null,this.closeEl=this.getEl("close")??null,this.bodyEl=this.getEl("body")??null,this.input.transitionEl==="root"?this.transitionEls=[this.rootEl]:this.input.transitionEl==="window"?this.transitionEls=[this.windowEl]:this.transitionEls=[this.windowEl,this.rootEl],this.subscribeTo(this.rootEl).on("click",()=>{}),this._trap({firstRender:!0})}onUpdate(){this._trap({firstRender:!1})}_triggerFocus(t){this.input.isModal&&t&&t.focus()}_triggerBodyScroll(t){this.input.isModal&&(t?pe():me())}onDestroy(){this._cancelAsync(),this._release(),this.isTrapped&&this._triggerBodyScroll(!1)}_getTrapCallback(t,i,n){const l=this.input.isModal&&(t||i&&!n),o=this.useHiddenProperty;return()=>{l&&(je(this.el,{useHiddenProperty:o}),o||Xe(this.windowEl))}}_trap(t){var g,v;const{isTrapped:i,restoreTrap:n}=this,l=this.isTrapped=this.state.open,o=t&&t.firstRender,a=l!==i,r=this.input.focus&&document.getElementById(this.input.focus)||this.closeEl,f=this._getTrapCallback(n??!1,l,i??!1);if(o&&this.input.isModal&&l&&(this._prevFocusEl=this.getActiveElement(this.input),r&&this._triggerFocus(r),this._triggerBodyScroll(!0)),a){this._cancelAsync();const m=()=>{var u,T,E;if(this.cancelTransition=void 0,f(),l)(u=this.rootEl)==null||u.removeAttribute("hidden"),this._triggerFocus(r),this.emit("open"),this.isAnimating=!1;else{this._triggerBodyScroll(!1);const _=this.getActiveElement(this.input);(T=this.rootEl)==null||T.setAttribute("hidden",""),this.emit("close"),this.isAnimating=!1,_===this.getActiveElement(this.input)&&document.documentElement.contains(this._prevFocusEl??null)&&((E=this._prevFocusEl)==null||E.focus()),this.cancelScrollReset=setTimeout(()=>{var H,L;(L=(H=this.rootEl)==null?void 0:H.parentNode)==null||L.replaceChild(this.rootEl,this.rootEl),this.cancelScrollReset=void 0},20)}};l?o?(this.isAnimating=!1,(g=this.rootEl)==null||g.removeAttribute("hidden"),f()):(this._prevFocusEl=this.getActiveElement(this.input),this._triggerBodyScroll(!0),this.isAnimating=!0,this.cancelTransition=te({el:this.rootEl,className:`${this.input.classPrefix}--show`,waitFor:this.transitionEls??[]},m)):o?(this.isAnimating=!1,(v=this.rootEl)==null||v.setAttribute("hidden","")):(this.isAnimating=!0,this.cancelTransition=te({el:this.rootEl,className:`${this.input.classPrefix}--hide`,waitFor:this.transitionEls??[]},m))}else n&&f()}_release(){this.isTrapped&&this.input.isModal?(this.restoreTrap=this.state.open,fe(this.el),this.useHiddenProperty||re(this.windowEl)):this.restoreTrap=!1}_cancelAsync(){this.cancelScrollReset&&(clearTimeout(this.cancelScrollReset),this.cancelScrollReset=void 0),this.cancelTransition&&(this.cancelTransition(),this.cancelTransition=void 0)}}const Y="ZSiMe4+1",I=Me(Y),ie=typeof window<"u";xe.r(Y,()=>I);const Ee=et;I._=Ie(function(e,t,i,n,l,o){const{open:a,classPrefix:r,class:f,focus:g,closeFocus:v,a11yCloseText:m,windowClass:u,baseEl:T="div",header:E,footer:_,transitionEl:H,isModal:L,closeButton:Z,closeButtonClass:ye,closeButtonText:R,ignoreEscape:be,windowType:G,mainId:ve,ariaLabelledby:we,buttonPosition:y="right",useHiddenProperty:tt,top:J,action:M,prevButton:K,role:Te,renderBody:_e,...Ae}=e,{id:ke,as:Be,class:Ce,renderBody:Se,...Ne}=E||{},{id:it,class:Pe,a11yText:Le,renderBody:nt,...Fe}=K||{};function Q(s){d(s,Be||"h2",()=>({class:[Ce,`${r}__title`],...U(Ne),id:ke||n.getElId("dialog-title")}),$e=>{d($e,Se,null,null,null,null,i,"2")},null,null,i,"1")}function W(s){y!=="hidden"&&(s.be("button",{class:b([R?"fake-link":"icon-btn",ye,`${r}__close`]),type:"button","aria-label":m},"@close",n,null,0,{onclick:i.d("click","handleCloseButtonClick",!1)}),R?s.t(R,n):Z?d(s,Z,null,null,null,null,i,"4"):V(Ke,{},s,i,"5"),s.ee())}d(t,T,()=>({...U(Ae),"aria-labelledby":we||E&&n.getElId("dialog-title"),"aria-modal":"true",role:Te||"dialog",class:[r,f],hidden:!l.open,"aria-live":!L&&"polite"}),s=>{l.open&&ie&&!be&&V(O,{to:typeof window=="object"&&document,__events:["on","keydown"]},s,i,"7",[["keydown","handleKeydown",!1]]),!l.open&&ie&&V(O,{to:typeof window=="object"&&window,__events:["on","click"]},s,i,"8",[["click","trackLastClick",!1]]),s.be("div",{class:b([G?`${r}__${G}-window`:`${r}__window`,u])},"@window",n,null,1,{onmouseenter:i.d("mouseenter","emit",!1,["mouseEnter"]),onmouseleave:i.d("mouseleave","emit",!1,["mouseLeave"])}),J&&d(s,J.renderBody,null,null,null,null,i,"9"),s.be("div",{class:b(`${r}__header`)},"10",n,null,1),K&&(s.be("button",He(U(Fe),{class:b(["icon-btn","lightbox-dialog__prev",Pe]),type:"button","aria-label":Le}),"11",n,null,4,{onclick:i.d("click","emit",!1,["prevButtonClick"])}),d(s,K,null,null,null,null,i,"12"),s.ee()),E&&y==="right"&&d(s,Q,null,null,null,null,i,"13"),y!=="bottom"&&d(s,W,null,null,null,null,i,"14"),E&&(y==="left"||y==="hidden")&&d(s,Q,null,null,null,null,i,"15"),s.ee(),s.be("div",{id:ve,class:b(`${r}__main`)},"@body",n,null,1,{onscroll:i.d("scroll","handleScroll",!1)}),d(s,_e,null,null,null,null,i,"16"),s.ee(),M&&(s.be("span",{class:b(`${r}__actions`)},"17",n,null,1),d(s,M&&M.renderBody,null,null,null,null,i,"18"),s.ee()),(_||y==="bottom")&&(s.be("div",{class:b(`${r}__footer`)},"19",n,null,1),d(s,_&&_.renderBody,null,null,null,null,i,"20"),y==="bottom"&&d(s,W,null,null,null,null,i,"21"),s.ee()),s.ee()},null,{pa:["hidden"]},i,"6",[["click","handleDialogClick",!1],["mousedown","handleStartClick",!1]])},{t:Y},Ee);I.Component=Re(Ee,I._);export{I as _};
