const a={};function u(i,t){return new Promise((s,e)=>{const o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=i,n.onreadystatechange=()=>{s(void 0)},n.onload=()=>{s(void 0)},n.onerror=()=>{e(),delete a[t]},o.appendChild(n)})}function c(i,t,s){return new Promise((e,o)=>{const n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("script");r.src=i,s&&(r.type=s),r.onload=()=>{e(void 0)},r.onerror=()=>{o(),delete a[t]},n.appendChild(r)})}function m(i){return new Promise(t=>{const s=`importScripts( "${i}" );`,e=document.head||document.getElementsByTagName("head")[0],o=document.createElement("noscript");o.textContent=s,o.id="restar-worker",e.appendChild(o),t(void 0)})}function h(i,t,s,e){if(i[e]){if(i[e]==="css")return u(s,t);if(i[e]==="restar-worker")return m(s);if(i[e]==="module")return c(s,t,"module")}return c(s,t)}function f(i,t,s){const e=i.join(",");return a[e]||(s?a[e]=i.reduce((o,n,r)=>o.then(()=>h(t,e,n,r)),Promise.resolve()):a[e]=Promise.all(i.map((o,n)=>h(t,e,o,n)))),a[e]}const g="4.3.2",p="10.2.1",T="2.1.1",C={"//":"This is a generated file. Run generateCDN script file to update",shaka:g,highcharts:p,modelViewer:T},y=3;class w{constructor(t,{key:s,files:e,types:o,setLoading:n,handleSuccess:r,handleError:l,stagger:d}){this.self=t,this.retryTimes=0,this.setLoading=n,this.handleError=l,this.handleSuccess=r,this.files=e,this.types=o,this.key=s,this.stagger=!!d,this._setFiles()}setOverrides(t,s){return this._setFiles(t,s),this}_setFiles(t,s){this.cdnFiles=[],this.url=`https://ir.ebaystatic.com/cr/v/c1/ebayui/${this.key}/v${s||C[this.key]}`;for(let e=0;e<this.files.length;e++)t&&t[e]?this.cdnFiles[e]=t[e]:this.cdnFiles[e]=`${this.url}/${this.files[e]}`}mount(){this.isLoaded=!1,document.readyState==="complete"?this.loadCDN():this.self.subscribeTo(window).once("load",this.loadCDN.bind(this))}loadCDN(){const t=window.requestIdleCallback||function(e,o){return setTimeout(()=>{e()},o.timeout)},s=window.cancelIdleCallback||function(e){clearTimeout(e)};this.retryTimes=0,this.setLoading(!1),s(this.loadDelay),this.setLoading(!0),this.loadDelay=t(()=>this._loadCDN(),{timeout:100})}_catchError(t){clearTimeout(this.retryTimeout),this.retryTimes+=1,this.retryTimes<y?this.retryTimeout=setTimeout(()=>this._loadCDN(),2e3):(this.setLoading(!1),this.handleError(t))}_loadCDN(){f(this.cdnFiles??[],this.types,this.stagger).then(()=>{this.setLoading(!1),this.handleSuccess()}).catch(t=>{this._catchError(t)})}}export{w as C};
