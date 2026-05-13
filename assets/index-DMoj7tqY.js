(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();var Fe=!1,Re=!1,L=[],Le=-1;function Jr(e){Yr(e)}function Yr(e){L.includes(e)||L.push(e),Xr()}function Gr(e){let t=L.indexOf(e);t!==-1&&t>Le&&L.splice(t,1)}function Xr(){!Re&&!Fe&&(Fe=!0,queueMicrotask(Zr))}function Zr(){Fe=!1,Re=!0;for(let e=0;e<L.length;e++)L[e](),Le=e;L.length=0,Le=-1,Re=!1}var Y,V,G,It,$e=!0;function Qr(e){$e=!1,e(),$e=!0}function en(e){Y=e.reactive,G=e.release,V=t=>e.effect(t,{scheduler:r=>{$e?Jr(r):r()}}),It=e.raw}function vt(e){V=e}function tn(e){let t=()=>{};return[n=>{let i=V(n);return e._x_effects||(e._x_effects=new Set,e._x_runEffects=()=>{e._x_effects.forEach(o=>o())}),e._x_effects.add(i),t=()=>{i!==void 0&&(e._x_effects.delete(i),G(i))},i},()=>{t()}]}function Pt(e,t){let r=!0,n,i=V(()=>{let o=e();JSON.stringify(o),r?n=o:queueMicrotask(()=>{t(o,n),n=o}),r=!1});return()=>G(i)}var Ft=[],Rt=[],Lt=[];function rn(e){Lt.push(e)}function Ye(e,t){typeof t=="function"?(e._x_cleanups||(e._x_cleanups=[]),e._x_cleanups.push(t)):(t=e,Rt.push(t))}function $t(e){Ft.push(e)}function Nt(e,t,r){e._x_attributeCleanups||(e._x_attributeCleanups={}),e._x_attributeCleanups[t]||(e._x_attributeCleanups[t]=[]),e._x_attributeCleanups[t].push(r)}function zt(e,t){e._x_attributeCleanups&&Object.entries(e._x_attributeCleanups).forEach(([r,n])=>{(t===void 0||t.includes(r))&&(n.forEach(i=>i()),delete e._x_attributeCleanups[r])})}function nn(e){for(e._x_effects?.forEach(Gr);e._x_cleanups?.length;)e._x_cleanups.pop()()}var Ge=new MutationObserver(et),Xe=!1;function Ze(){Ge.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),Xe=!0}function Dt(){on(),Ge.disconnect(),Xe=!1}var te=[];function on(){let e=Ge.takeRecords();te.push(()=>e.length>0&&et(e));let t=te.length;queueMicrotask(()=>{if(te.length===t)for(;te.length>0;)te.shift()()})}function _(e){if(!Xe)return e();Dt();let t=e();return Ze(),t}var Qe=!1,me=[];function sn(){Qe=!0}function an(){Qe=!1,et(me),me=[]}function et(e){if(Qe){me=me.concat(e);return}let t=[],r=new Set,n=new Map,i=new Map;for(let o=0;o<e.length;o++)if(!e[o].target._x_ignoreMutationObserver&&(e[o].type==="childList"&&(e[o].removedNodes.forEach(s=>{s.nodeType===1&&s._x_marker&&r.add(s)}),e[o].addedNodes.forEach(s=>{if(s.nodeType===1){if(r.has(s)){r.delete(s);return}s._x_marker||t.push(s)}})),e[o].type==="attributes")){let s=e[o].target,a=e[o].attributeName,l=e[o].oldValue,c=()=>{n.has(s)||n.set(s,[]),n.get(s).push({name:a,value:s.getAttribute(a)})},u=()=>{i.has(s)||i.set(s,[]),i.get(s).push(a)};s.hasAttribute(a)&&l===null?c():s.hasAttribute(a)?(u(),c()):u()}i.forEach((o,s)=>{zt(s,o)}),n.forEach((o,s)=>{Ft.forEach(a=>a(s,o))});for(let o of r)t.some(s=>s.contains(o))||Rt.forEach(s=>s(o));for(let o of t)o.isConnected&&Lt.forEach(s=>s(o));t=null,r=null,n=null,i=null}function Bt(e){return B(D(e))}function ue(e,t,r){return e._x_dataStack=[t,...D(r||e)],()=>{e._x_dataStack=e._x_dataStack.filter(n=>n!==t)}}function D(e){return e._x_dataStack?e._x_dataStack:typeof ShadowRoot=="function"&&e instanceof ShadowRoot?D(e.host):e.parentNode?D(e.parentNode):[]}function B(e){return new Proxy({objects:e},ln)}var ln={ownKeys({objects:e}){return Array.from(new Set(e.flatMap(t=>Object.keys(t))))},has({objects:e},t){return t==Symbol.unscopables?!1:e.some(r=>Object.prototype.hasOwnProperty.call(r,t)||Reflect.has(r,t))},get({objects:e},t,r){return t=="toJSON"?cn:Reflect.get(e.find(n=>Reflect.has(n,t))||{},t,r)},set({objects:e},t,r,n){const i=e.find(s=>Object.prototype.hasOwnProperty.call(s,t))||e[e.length-1],o=Object.getOwnPropertyDescriptor(i,t);return o?.set&&o?.get?o.set.call(n,r)||!0:Reflect.set(i,t,r)}};function cn(){return Reflect.ownKeys(this).reduce((t,r)=>(t[r]=Reflect.get(this,r),t),{})}function tt(e){let t=n=>typeof n=="object"&&!Array.isArray(n)&&n!==null,r=(n,i="")=>{Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(([o,{value:s,enumerable:a}])=>{if(a===!1||s===void 0||typeof s=="object"&&s!==null&&s.__v_skip)return;let l=i===""?o:`${i}.${o}`;typeof s=="object"&&s!==null&&s._x_interceptor?n[o]=s.initialize(e,l,o):t(s)&&s!==n&&!(s instanceof Element)&&r(s,l)})};return r(e)}function Ht(e,t=()=>{}){let r={initialValue:void 0,_x_interceptor:!0,initialize(n,i,o){return e(this.initialValue,()=>un(n,i),s=>Ne(n,i,s),i,o)}};return t(r),n=>{if(typeof n=="object"&&n!==null&&n._x_interceptor){let i=r.initialize.bind(r);r.initialize=(o,s,a)=>{let l=n.initialize(o,s,a);return r.initialValue=l,i(o,s,a)}}else r.initialValue=n;return r}}function un(e,t){return t.split(".").reduce((r,n)=>r[n],e)}function Ne(e,t,r){if(typeof t=="string"&&(t=t.split(".")),t.length===1)e[t[0]]=r;else{if(t.length===0)throw error;return e[t[0]]||(e[t[0]]={}),Ne(e[t[0]],t.slice(1),r)}}var Kt={};function O(e,t){Kt[e]=t}function ae(e,t){let r=fn(t);return Object.entries(Kt).forEach(([n,i])=>{Object.defineProperty(e,`$${n}`,{get(){return i(t,r)},enumerable:!1})}),e}function fn(e){let[t,r]=Xt(e),n={interceptor:Ht,...t};return Ye(e,r),n}function dn(e,t,r,...n){try{return r(...n)}catch(i){le(i,e,t)}}function le(...e){return Vt(...e)}var Vt=hn;function pn(e){Vt=e}function hn(e,t,r=void 0){e=Object.assign(e??{message:"No error message given."},{el:t,expression:r}),console.warn(`Alpine Expression Error: ${e.message}

${r?'Expression: "'+r+`"

`:""}`,t),setTimeout(()=>{throw e},0)}var W=!0;function qt(e){let t=W;W=!1;let r=e();return W=t,r}function $(e,t,r={}){let n;return y(e,t)(i=>n=i,r),n}function y(...e){return Ut(...e)}var Ut=Jt;function gn(e){Ut=e}var Wt;function _n(e){Wt=e}function Jt(e,t){let r={};ae(r,e);let n=[r,...D(e)],i=typeof t=="function"?xn(n,t):mn(n,t,e);return dn.bind(null,e,t,i)}function xn(e,t){return(r=()=>{},{scope:n={},params:i=[],context:o}={})=>{if(!W){ce(r,t,B([n,...e]),i);return}let s=t.apply(B([n,...e]),i);ce(r,s)}}var Te={};function vn(e,t){if(Te[e])return Te[e];let r=Object.getPrototypeOf(async function(){}).constructor,n=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(async()=>{ ${e} })()`:e,o=(()=>{try{let s=new r(["__self","scope"],`with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`);return Object.defineProperty(s,"name",{value:`[Alpine] ${e}`}),s}catch(s){return le(s,t,e),Promise.resolve()}})();return Te[e]=o,o}function mn(e,t,r){let n=vn(t,r);return(i=()=>{},{scope:o={},params:s=[],context:a}={})=>{n.result=void 0,n.finished=!1;let l=B([o,...e]);if(typeof n=="function"){let c=n.call(a,n,l).catch(u=>le(u,r,t));n.finished?(ce(i,n.result,l,s,r),n.result=void 0):c.then(u=>{ce(i,u,l,s,r)}).catch(u=>le(u,r,t)).finally(()=>n.result=void 0)}}}function ce(e,t,r,n,i){if(W&&typeof t=="function"){let o=t.apply(r,n);o instanceof Promise?o.then(s=>ce(e,s,r,n)).catch(s=>le(s,i,t)):e(o)}else typeof t=="object"&&t instanceof Promise?t.then(o=>e(o)):e(t)}function bn(...e){return Wt(...e)}function yn(e,t,r={}){let n={};ae(n,e);let i=[n,...D(e)],o=B([r.scope??{},...i]),s=r.params??[];if(t.includes("await")){let a=Object.getPrototypeOf(async function(){}).constructor,l=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(async()=>{ ${t} })()`:t;return new a(["scope"],`with (scope) { let __result = ${l}; return __result }`).call(r.context,o)}else{let a=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(()=>{ ${t} })()`:t,c=new Function(["scope"],`with (scope) { let __result = ${a}; return __result }`).call(r.context,o);return typeof c=="function"&&W?c.apply(o,s):c}}var rt="x-";function X(e=""){return rt+e}function wn(e){rt=e}var be={};function v(e,t){return be[e]=t,{before(r){if(!be[r]){console.warn(String.raw`Cannot find directive \`${r}\`. \`${e}\` will use the default order of execution`);return}const n=R.indexOf(r);R.splice(n>=0?n:R.indexOf("DEFAULT"),0,e)}}}function En(e){return Object.keys(be).includes(e)}function nt(e,t,r){if(t=Array.from(t),e._x_virtualDirectives){let o=Object.entries(e._x_virtualDirectives).map(([a,l])=>({name:a,value:l})),s=Yt(o);o=o.map(a=>s.find(l=>l.name===a.name)?{name:`x-bind:${a.name}`,value:`"${a.value}"`}:a),t=t.concat(o)}let n={};return t.map(er((o,s)=>n[o]=s)).filter(rr).map(Cn(n,r)).sort(On).map(o=>An(e,o))}function Yt(e){return Array.from(e).map(er()).filter(t=>!rr(t))}var ze=!1,ie=new Map,Gt=Symbol();function Sn(e){ze=!0;let t=Symbol();Gt=t,ie.set(t,[]);let r=()=>{for(;ie.get(t).length;)ie.get(t).shift()();ie.delete(t)},n=()=>{ze=!1,r()};e(r),n()}function Xt(e){let t=[],r=a=>t.push(a),[n,i]=tn(e);return t.push(i),[{Alpine:Q,effect:n,cleanup:r,evaluateLater:y.bind(y,e),evaluate:$.bind($,e)},()=>t.forEach(a=>a())]}function An(e,t){let r=()=>{},n=be[t.type]||r,[i,o]=Xt(e);Nt(e,t.original,o);let s=()=>{e._x_ignore||e._x_ignoreSelf||(n.inline&&n.inline(e,t,i),n=n.bind(n,e,t,i),ze?ie.get(Gt).push(n):n())};return s.runCleanups=o,s}var Zt=(e,t)=>({name:r,value:n})=>(r.startsWith(e)&&(r=r.replace(e,t)),{name:r,value:n}),Qt=e=>e;function er(e=()=>{}){return({name:t,value:r})=>{let{name:n,value:i}=tr.reduce((o,s)=>s(o),{name:t,value:r});return n!==t&&e(n,t),{name:n,value:i}}}var tr=[];function it(e){tr.push(e)}function rr({name:e}){return nr().test(e)}var nr=()=>new RegExp(`^${rt}([^:^.]+)\\b`);function Cn(e,t){return({name:r,value:n})=>{r===n&&(n="");let i=r.match(nr()),o=r.match(/:([a-zA-Z0-9\-_:]+)/),s=r.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],a=t||e[r]||r;return{type:i?i[1]:null,value:o?o[1]:null,modifiers:s.map(l=>l.replace(".","")),expression:n,original:a}}}var De="DEFAULT",R=["ignore","ref","data","id","anchor","bind","init","for","model","modelable","transition","show","if",De,"teleport"];function On(e,t){let r=R.indexOf(e.type)===-1?De:e.type,n=R.indexOf(t.type)===-1?De:t.type;return R.indexOf(r)-R.indexOf(n)}function oe(e,t,r={}){e.dispatchEvent(new CustomEvent(t,{detail:r,bubbles:!0,composed:!0,cancelable:!0}))}function H(e,t){if(typeof ShadowRoot=="function"&&e instanceof ShadowRoot){Array.from(e.children).forEach(i=>H(i,t));return}let r=!1;if(t(e,()=>r=!0),r)return;let n=e.firstElementChild;for(;n;)H(n,t),n=n.nextElementSibling}function S(e,...t){console.warn(`Alpine Warning: ${e}`,...t)}var mt=!1;function Mn(){mt&&S("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),mt=!0,document.body||S("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),oe(document,"alpine:init"),oe(document,"alpine:initializing"),Ze(),rn(t=>k(t,H)),Ye(t=>Z(t)),$t((t,r)=>{nt(t,r).forEach(n=>n())});let e=t=>!we(t.parentElement,!0);Array.from(document.querySelectorAll(sr().join(","))).filter(e).forEach(t=>{k(t)}),oe(document,"alpine:initialized"),setTimeout(()=>{In()})}var ot=[],ir=[];function or(){return ot.map(e=>e())}function sr(){return ot.concat(ir).map(e=>e())}function ar(e){ot.push(e)}function lr(e){ir.push(e)}function we(e,t=!1){return K(e,r=>{if((t?sr():or()).some(i=>r.matches(i)))return!0})}function K(e,t){if(e){if(t(e))return e;if(e._x_teleportBack&&(e=e._x_teleportBack),e.parentNode instanceof ShadowRoot)return K(e.parentNode.host,t);if(e.parentElement)return K(e.parentElement,t)}}function kn(e){return or().some(t=>e.matches(t))}var cr=[];function Tn(e){cr.push(e)}var jn=1;function k(e,t=H,r=()=>{}){K(e,n=>n._x_ignore)||Sn(()=>{t(e,(n,i)=>{n._x_marker||(r(n,i),cr.forEach(o=>o(n,i)),nt(n,n.attributes).forEach(o=>o()),n._x_ignore||(n._x_marker=jn++),n._x_ignore&&i())})})}function Z(e,t=H){t(e,r=>{nn(r),zt(r),delete r._x_marker})}function In(){[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([t,r,n])=>{En(r)||n.some(i=>{if(document.querySelector(i))return S(`found "${i}", but missing ${t} plugin`),!0})})}var Be=[],st=!1;function at(e=()=>{}){return queueMicrotask(()=>{st||setTimeout(()=>{He()})}),new Promise(t=>{Be.push(()=>{e(),t()})})}function He(){for(st=!1;Be.length;)Be.shift()()}function Pn(){st=!0}function lt(e,t){return Array.isArray(t)?bt(e,t.join(" ")):typeof t=="object"&&t!==null?Fn(e,t):typeof t=="function"?lt(e,t()):bt(e,t)}function bt(e,t){let r=i=>i.split(" ").filter(o=>!e.classList.contains(o)).filter(Boolean),n=i=>(e.classList.add(...i),()=>{e.classList.remove(...i)});return t=t===!0?t="":t||"",n(r(t))}function Fn(e,t){let r=a=>a.split(" ").filter(Boolean),n=Object.entries(t).flatMap(([a,l])=>l?r(a):!1).filter(Boolean),i=Object.entries(t).flatMap(([a,l])=>l?!1:r(a)).filter(Boolean),o=[],s=[];return i.forEach(a=>{e.classList.contains(a)&&(e.classList.remove(a),s.push(a))}),n.forEach(a=>{e.classList.contains(a)||(e.classList.add(a),o.push(a))}),()=>{s.forEach(a=>e.classList.add(a)),o.forEach(a=>e.classList.remove(a))}}function Ee(e,t){return typeof t=="object"&&t!==null?Rn(e,t):Ln(e,t)}function Rn(e,t){let r={};return Object.entries(t).forEach(([n,i])=>{r[n]=e.style[n],n.startsWith("--")||(n=$n(n)),e.style.setProperty(n,i)}),setTimeout(()=>{e.style.length===0&&e.removeAttribute("style")}),()=>{Ee(e,r)}}function Ln(e,t){let r=e.getAttribute("style",t);return e.setAttribute("style",t),()=>{e.setAttribute("style",r||"")}}function $n(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Ke(e,t=()=>{}){let r=!1;return function(){r?t.apply(this,arguments):(r=!0,e.apply(this,arguments))}}v("transition",(e,{value:t,modifiers:r,expression:n},{evaluate:i})=>{typeof n=="function"&&(n=i(n)),n!==!1&&(!n||typeof n=="boolean"?zn(e,r,t):Nn(e,n,t))});function Nn(e,t,r){ur(e,lt,""),{enter:i=>{e._x_transition.enter.during=i},"enter-start":i=>{e._x_transition.enter.start=i},"enter-end":i=>{e._x_transition.enter.end=i},leave:i=>{e._x_transition.leave.during=i},"leave-start":i=>{e._x_transition.leave.start=i},"leave-end":i=>{e._x_transition.leave.end=i}}[r](t)}function zn(e,t,r){ur(e,Ee);let n=!t.includes("in")&&!t.includes("out")&&!r,i=n||t.includes("in")||["enter"].includes(r),o=n||t.includes("out")||["leave"].includes(r);t.includes("in")&&!n&&(t=t.filter((p,x)=>x<t.indexOf("out"))),t.includes("out")&&!n&&(t=t.filter((p,x)=>x>t.indexOf("out")));let s=!t.includes("opacity")&&!t.includes("scale"),a=s||t.includes("opacity"),l=s||t.includes("scale"),c=a?0:1,u=l?re(t,"scale",95)/100:1,d=re(t,"delay",0)/1e3,b=re(t,"origin","center"),w="opacity, transform",A=re(t,"duration",150)/1e3,h=re(t,"duration",75)/1e3,f="cubic-bezier(0.4, 0.0, 0.2, 1)";i&&(e._x_transition.enter.during={transformOrigin:b,transitionDelay:`${d}s`,transitionProperty:w,transitionDuration:`${A}s`,transitionTimingFunction:f},e._x_transition.enter.start={opacity:c,transform:`scale(${u})`},e._x_transition.enter.end={opacity:1,transform:"scale(1)"}),o&&(e._x_transition.leave.during={transformOrigin:b,transitionDelay:`${d}s`,transitionProperty:w,transitionDuration:`${h}s`,transitionTimingFunction:f},e._x_transition.leave.start={opacity:1,transform:"scale(1)"},e._x_transition.leave.end={opacity:c,transform:`scale(${u})`})}function ur(e,t,r={}){e._x_transition||(e._x_transition={enter:{during:r,start:r,end:r},leave:{during:r,start:r,end:r},in(n=()=>{},i=()=>{}){Ve(e,t,{during:this.enter.during,start:this.enter.start,end:this.enter.end},n,i)},out(n=()=>{},i=()=>{}){Ve(e,t,{during:this.leave.during,start:this.leave.start,end:this.leave.end},n,i)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(e,t,r,n){const i=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let o=()=>i(r);if(t){e._x_transition&&(e._x_transition.enter||e._x_transition.leave)?e._x_transition.enter&&(Object.entries(e._x_transition.enter.during).length||Object.entries(e._x_transition.enter.start).length||Object.entries(e._x_transition.enter.end).length)?e._x_transition.in(r):o():e._x_transition?e._x_transition.in(r):o();return}e._x_hidePromise=e._x_transition?new Promise((s,a)=>{e._x_transition.out(()=>{},()=>s(n)),e._x_transitioning&&e._x_transitioning.beforeCancel(()=>a({isFromCancelledTransition:!0}))}):Promise.resolve(n),queueMicrotask(()=>{let s=fr(e);s?(s._x_hideChildren||(s._x_hideChildren=[]),s._x_hideChildren.push(e)):i(()=>{let a=l=>{let c=Promise.all([l._x_hidePromise,...(l._x_hideChildren||[]).map(a)]).then(([u])=>u?.());return delete l._x_hidePromise,delete l._x_hideChildren,c};a(e).catch(l=>{if(!l.isFromCancelledTransition)throw l})})})};function fr(e){let t=e.parentNode;if(t)return t._x_hidePromise?t:fr(t)}function Ve(e,t,{during:r,start:n,end:i}={},o=()=>{},s=()=>{}){if(e._x_transitioning&&e._x_transitioning.cancel(),Object.keys(r).length===0&&Object.keys(n).length===0&&Object.keys(i).length===0){o(),s();return}let a,l,c;Dn(e,{start(){a=t(e,n)},during(){l=t(e,r)},before:o,end(){a(),c=t(e,i)},after:s,cleanup(){l(),c()}})}function Dn(e,t){let r,n,i,o=Ke(()=>{_(()=>{r=!0,n||t.before(),i||(t.end(),He()),t.after(),e.isConnected&&t.cleanup(),delete e._x_transitioning})});e._x_transitioning={beforeCancels:[],beforeCancel(s){this.beforeCancels.push(s)},cancel:Ke(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();o()}),finish:o},_(()=>{t.start(),t.during()}),Pn(),requestAnimationFrame(()=>{if(r)return;let s=Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,a=Number(getComputedStyle(e).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;s===0&&(s=Number(getComputedStyle(e).animationDuration.replace("s",""))*1e3),_(()=>{t.before()}),n=!0,requestAnimationFrame(()=>{r||(_(()=>{t.end()}),He(),setTimeout(e._x_transitioning.finish,s+a),i=!0)})})}function re(e,t,r){if(e.indexOf(t)===-1)return r;const n=e[e.indexOf(t)+1];if(!n||t==="scale"&&isNaN(n))return r;if(t==="duration"||t==="delay"){let i=n.match(/([0-9]+)ms/);if(i)return i[1]}return t==="origin"&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[n,e[e.indexOf(t)+2]].join(" "):n}var j=!1;function P(e,t=()=>{}){return(...r)=>j?t(...r):e(...r)}function Bn(e){return(...t)=>j&&e(...t)}var dr=[];function Se(e){dr.push(e)}function Hn(e,t){dr.forEach(r=>r(e,t)),j=!0,pr(()=>{k(t,(r,n)=>{n(r,()=>{})})}),j=!1}var qe=!1;function Kn(e,t){t._x_dataStack||(t._x_dataStack=e._x_dataStack),j=!0,qe=!0,pr(()=>{Vn(t)}),j=!1,qe=!1}function Vn(e){let t=!1;k(e,(n,i)=>{H(n,(o,s)=>{if(t&&kn(o))return s();t=!0,i(o,s)})})}function pr(e){let t=V;vt((r,n)=>{let i=t(r);return G(i),()=>{}}),e(),vt(t)}function hr(e,t,r,n=[]){switch(e._x_bindings||(e._x_bindings=Y({})),e._x_bindings[t]=r,t=n.includes("camel")?Zn(t):t,t){case"value":qn(e,r);break;case"style":Wn(e,r);break;case"class":Un(e,r);break;case"selected":case"checked":Jn(e,t,r);break;default:gr(e,t,r);break}}function qn(e,t){if(vr(e))e.attributes.value===void 0&&(e.value=t),window.fromModel&&(typeof t=="boolean"?e.checked=ve(e.value)===t:e.checked=yt(e.value,t));else if(ct(e))Number.isInteger(t)?e.value=t:!Array.isArray(t)&&typeof t!="boolean"&&![null,void 0].includes(t)?e.value=String(t):Array.isArray(t)?e.checked=t.some(r=>yt(r,e.value)):e.checked=!!t;else if(e.tagName==="SELECT")Xn(e,t);else{if(e.value===t)return;e.value=t===void 0?"":t}}function Un(e,t){e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedClasses=lt(e,t)}function Wn(e,t){e._x_undoAddedStyles&&e._x_undoAddedStyles(),e._x_undoAddedStyles=Ee(e,t)}function Jn(e,t,r){gr(e,t,r),Gn(e,t,r)}function gr(e,t,r){[null,void 0,!1].includes(r)&&ei(t)?e.removeAttribute(t):(_r(t)&&(r=t),Yn(e,t,r))}function Yn(e,t,r){e.getAttribute(t)!=r&&e.setAttribute(t,r)}function Gn(e,t,r){e[t]!==r&&(e[t]=r)}function Xn(e,t){const r=[].concat(t).map(n=>n+"");Array.from(e.options).forEach(n=>{n.selected=r.includes(n.value)})}function Zn(e){return e.toLowerCase().replace(/-(\w)/g,(t,r)=>r.toUpperCase())}function yt(e,t){return e==t}function ve(e){return[1,"1","true","on","yes",!0].includes(e)?!0:[0,"0","false","off","no",!1].includes(e)?!1:e?!!e:null}var Qn=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","shadowrootclonable","shadowrootdelegatesfocus","shadowrootserializable"]);function _r(e){return Qn.has(e)}function ei(e){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(e)}function ti(e,t,r){return e._x_bindings&&e._x_bindings[t]!==void 0?e._x_bindings[t]:xr(e,t,r)}function ri(e,t,r,n=!0){if(e._x_bindings&&e._x_bindings[t]!==void 0)return e._x_bindings[t];if(e._x_inlineBindings&&e._x_inlineBindings[t]!==void 0){let i=e._x_inlineBindings[t];return i.extract=n,qt(()=>$(e,i.expression))}return xr(e,t,r)}function xr(e,t,r){let n=e.getAttribute(t);return n===null?typeof r=="function"?r():r:n===""?!0:_r(t)?!![t,"true"].includes(n):n}function ct(e){return e.type==="checkbox"||e.localName==="ui-checkbox"||e.localName==="ui-switch"}function vr(e){return e.type==="radio"||e.localName==="ui-radio"}function mr(e,t){let r;return function(){const n=this,i=arguments,o=function(){r=null,e.apply(n,i)};clearTimeout(r),r=setTimeout(o,t)}}function br(e,t){let r;return function(){let n=this,i=arguments;r||(e.apply(n,i),r=!0,setTimeout(()=>r=!1,t))}}function yr({get:e,set:t},{get:r,set:n}){let i=!0,o,s=V(()=>{let a=e(),l=r();if(i)n(je(a)),i=!1;else{let c=JSON.stringify(a),u=JSON.stringify(l);c!==o?n(je(a)):c!==u&&t(je(l))}o=JSON.stringify(e()),JSON.stringify(r())});return()=>{G(s)}}function je(e){return typeof e=="object"?JSON.parse(JSON.stringify(e)):e}function ni(e){(Array.isArray(e)?e:[e]).forEach(r=>r(Q))}var F={},wt=!1;function ii(e,t){if(wt||(F=Y(F),wt=!0),t===void 0)return F[e];F[e]=t,tt(F[e]),typeof t=="object"&&t!==null&&t.hasOwnProperty("init")&&typeof t.init=="function"&&F[e].init()}function oi(){return F}var wr={};function si(e,t){let r=typeof t!="function"?()=>t:t;return e instanceof Element?Er(e,r()):(wr[e]=r,()=>{})}function ai(e){return Object.entries(wr).forEach(([t,r])=>{Object.defineProperty(e,t,{get(){return(...n)=>r(...n)}})}),e}function Er(e,t,r){let n=[];for(;n.length;)n.pop()();let i=Object.entries(t).map(([s,a])=>({name:s,value:a})),o=Yt(i);return i=i.map(s=>o.find(a=>a.name===s.name)?{name:`x-bind:${s.name}`,value:`"${s.value}"`}:s),nt(e,i,r).map(s=>{n.push(s.runCleanups),s()}),()=>{for(;n.length;)n.pop()()}}var Sr={};function li(e,t){Sr[e]=t}function ci(e,t){return Object.entries(Sr).forEach(([r,n])=>{Object.defineProperty(e,r,{get(){return(...i)=>n.bind(t)(...i)},enumerable:!1})}),e}var ui={get reactive(){return Y},get release(){return G},get effect(){return V},get raw(){return It},version:"3.15.5",flushAndStopDeferringMutations:an,dontAutoEvaluateFunctions:qt,disableEffectScheduling:Qr,startObservingMutations:Ze,stopObservingMutations:Dt,setReactivityEngine:en,onAttributeRemoved:Nt,onAttributesAdded:$t,closestDataStack:D,skipDuringClone:P,onlyDuringClone:Bn,addRootSelector:ar,addInitSelector:lr,setErrorHandler:pn,interceptClone:Se,addScopeToNode:ue,deferMutations:sn,mapAttributes:it,evaluateLater:y,interceptInit:Tn,initInterceptors:tt,injectMagics:ae,setEvaluator:gn,setRawEvaluator:_n,mergeProxies:B,extractProp:ri,findClosest:K,onElRemoved:Ye,closestRoot:we,destroyTree:Z,interceptor:Ht,transition:Ve,setStyles:Ee,mutateDom:_,directive:v,entangle:yr,throttle:br,debounce:mr,evaluate:$,evaluateRaw:bn,initTree:k,nextTick:at,prefixed:X,prefix:wn,plugin:ni,magic:O,store:ii,start:Mn,clone:Kn,cloneNode:Hn,bound:ti,$data:Bt,watch:Pt,walk:H,data:li,bind:si},Q=ui;function fi(e,t){const r=Object.create(null),n=e.split(",");for(let i=0;i<n.length;i++)r[n[i]]=!0;return i=>!!r[i]}var di=Object.freeze({}),pi=Object.prototype.hasOwnProperty,Ae=(e,t)=>pi.call(e,t),N=Array.isArray,se=e=>Ar(e)==="[object Map]",hi=e=>typeof e=="string",ut=e=>typeof e=="symbol",Ce=e=>e!==null&&typeof e=="object",gi=Object.prototype.toString,Ar=e=>gi.call(e),Cr=e=>Ar(e).slice(8,-1),ft=e=>hi(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_i=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},xi=_i(e=>e.charAt(0).toUpperCase()+e.slice(1)),Or=(e,t)=>e!==t&&(e===e||t===t),Ue=new WeakMap,ne=[],M,z=Symbol("iterate"),We=Symbol("Map key iterate");function vi(e){return e&&e._isEffect===!0}function mi(e,t=di){vi(e)&&(e=e.raw);const r=wi(e,t);return t.lazy||r(),r}function bi(e){e.active&&(Mr(e),e.options.onStop&&e.options.onStop(),e.active=!1)}var yi=0;function wi(e,t){const r=function(){if(!r.active)return e();if(!ne.includes(r)){Mr(r);try{return Si(),ne.push(r),M=r,e()}finally{ne.pop(),kr(),M=ne[ne.length-1]}}};return r.id=yi++,r.allowRecurse=!!t.allowRecurse,r._isEffect=!0,r.active=!0,r.raw=e,r.deps=[],r.options=t,r}function Mr(e){const{deps:t}=e;if(t.length){for(let r=0;r<t.length;r++)t[r].delete(e);t.length=0}}var J=!0,dt=[];function Ei(){dt.push(J),J=!1}function Si(){dt.push(J),J=!0}function kr(){const e=dt.pop();J=e===void 0?!0:e}function C(e,t,r){if(!J||M===void 0)return;let n=Ue.get(e);n||Ue.set(e,n=new Map);let i=n.get(r);i||n.set(r,i=new Set),i.has(M)||(i.add(M),M.deps.push(i),M.options.onTrack&&M.options.onTrack({effect:M,target:e,type:t,key:r}))}function I(e,t,r,n,i,o){const s=Ue.get(e);if(!s)return;const a=new Set,l=u=>{u&&u.forEach(d=>{(d!==M||d.allowRecurse)&&a.add(d)})};if(t==="clear")s.forEach(l);else if(r==="length"&&N(e))s.forEach((u,d)=>{(d==="length"||d>=n)&&l(u)});else switch(r!==void 0&&l(s.get(r)),t){case"add":N(e)?ft(r)&&l(s.get("length")):(l(s.get(z)),se(e)&&l(s.get(We)));break;case"delete":N(e)||(l(s.get(z)),se(e)&&l(s.get(We)));break;case"set":se(e)&&l(s.get(z));break}const c=u=>{u.options.onTrigger&&u.options.onTrigger({effect:u,target:e,key:r,type:t,newValue:n,oldValue:i,oldTarget:o}),u.options.scheduler?u.options.scheduler(u):u()};a.forEach(c)}var Ai=fi("__proto__,__v_isRef,__isVue"),Tr=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(ut)),Ci=jr(),Oi=jr(!0),Et=Mi();function Mi(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...r){const n=g(this);for(let o=0,s=this.length;o<s;o++)C(n,"get",o+"");const i=n[t](...r);return i===-1||i===!1?n[t](...r.map(g)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...r){Ei();const n=g(this)[t].apply(this,r);return kr(),n}}),e}function jr(e=!1,t=!1){return function(n,i,o){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_raw"&&o===(e?t?Hi:Rr:t?Bi:Fr).get(n))return n;const s=N(n);if(!e&&s&&Ae(Et,i))return Reflect.get(Et,i,o);const a=Reflect.get(n,i,o);return(ut(i)?Tr.has(i):Ai(i))||(e||C(n,"get",i),t)?a:Je(a)?!s||!ft(i)?a.value:a:Ce(a)?e?Lr(a):_t(a):a}}var ki=Ti();function Ti(e=!1){return function(r,n,i,o){let s=r[n];if(!e&&(i=g(i),s=g(s),!N(r)&&Je(s)&&!Je(i)))return s.value=i,!0;const a=N(r)&&ft(n)?Number(n)<r.length:Ae(r,n),l=Reflect.set(r,n,i,o);return r===g(o)&&(a?Or(i,s)&&I(r,"set",n,i,s):I(r,"add",n,i)),l}}function ji(e,t){const r=Ae(e,t),n=e[t],i=Reflect.deleteProperty(e,t);return i&&r&&I(e,"delete",t,void 0,n),i}function Ii(e,t){const r=Reflect.has(e,t);return(!ut(t)||!Tr.has(t))&&C(e,"has",t),r}function Pi(e){return C(e,"iterate",N(e)?"length":z),Reflect.ownKeys(e)}var Fi={get:Ci,set:ki,deleteProperty:ji,has:Ii,ownKeys:Pi},Ri={get:Oi,set(e,t){return console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},pt=e=>Ce(e)?_t(e):e,ht=e=>Ce(e)?Lr(e):e,gt=e=>e,Oe=e=>Reflect.getPrototypeOf(e);function de(e,t,r=!1,n=!1){e=e.__v_raw;const i=g(e),o=g(t);t!==o&&!r&&C(i,"get",t),!r&&C(i,"get",o);const{has:s}=Oe(i),a=n?gt:r?ht:pt;if(s.call(i,t))return a(e.get(t));if(s.call(i,o))return a(e.get(o));e!==i&&e.get(t)}function pe(e,t=!1){const r=this.__v_raw,n=g(r),i=g(e);return e!==i&&!t&&C(n,"has",e),!t&&C(n,"has",i),e===i?r.has(e):r.has(e)||r.has(i)}function he(e,t=!1){return e=e.__v_raw,!t&&C(g(e),"iterate",z),Reflect.get(e,"size",e)}function St(e){e=g(e);const t=g(this);return Oe(t).has.call(t,e)||(t.add(e),I(t,"add",e,e)),this}function At(e,t){t=g(t);const r=g(this),{has:n,get:i}=Oe(r);let o=n.call(r,e);o?Pr(r,n,e):(e=g(e),o=n.call(r,e));const s=i.call(r,e);return r.set(e,t),o?Or(t,s)&&I(r,"set",e,t,s):I(r,"add",e,t),this}function Ct(e){const t=g(this),{has:r,get:n}=Oe(t);let i=r.call(t,e);i?Pr(t,r,e):(e=g(e),i=r.call(t,e));const o=n?n.call(t,e):void 0,s=t.delete(e);return i&&I(t,"delete",e,void 0,o),s}function Ot(){const e=g(this),t=e.size!==0,r=se(e)?new Map(e):new Set(e),n=e.clear();return t&&I(e,"clear",void 0,void 0,r),n}function ge(e,t){return function(n,i){const o=this,s=o.__v_raw,a=g(s),l=t?gt:e?ht:pt;return!e&&C(a,"iterate",z),s.forEach((c,u)=>n.call(i,l(c),l(u),o))}}function _e(e,t,r){return function(...n){const i=this.__v_raw,o=g(i),s=se(o),a=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,c=i[e](...n),u=r?gt:t?ht:pt;return!t&&C(o,"iterate",l?We:z),{next(){const{value:d,done:b}=c.next();return b?{value:d,done:b}:{value:a?[u(d[0]),u(d[1])]:u(d),done:b}},[Symbol.iterator](){return this}}}}function T(e){return function(...t){{const r=t[0]?`on key "${t[0]}" `:"";console.warn(`${xi(e)} operation ${r}failed: target is readonly.`,g(this))}return e==="delete"?!1:this}}function Li(){const e={get(o){return de(this,o)},get size(){return he(this)},has:pe,add:St,set:At,delete:Ct,clear:Ot,forEach:ge(!1,!1)},t={get(o){return de(this,o,!1,!0)},get size(){return he(this)},has:pe,add:St,set:At,delete:Ct,clear:Ot,forEach:ge(!1,!0)},r={get(o){return de(this,o,!0)},get size(){return he(this,!0)},has(o){return pe.call(this,o,!0)},add:T("add"),set:T("set"),delete:T("delete"),clear:T("clear"),forEach:ge(!0,!1)},n={get(o){return de(this,o,!0,!0)},get size(){return he(this,!0)},has(o){return pe.call(this,o,!0)},add:T("add"),set:T("set"),delete:T("delete"),clear:T("clear"),forEach:ge(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=_e(o,!1,!1),r[o]=_e(o,!0,!1),t[o]=_e(o,!1,!0),n[o]=_e(o,!0,!0)}),[e,r,t,n]}var[$i,Ni]=Li();function Ir(e,t){const r=e?Ni:$i;return(n,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?n:Reflect.get(Ae(r,i)&&i in n?r:n,i,o)}var zi={get:Ir(!1)},Di={get:Ir(!0)};function Pr(e,t,r){const n=g(r);if(n!==r&&t.call(e,n)){const i=Cr(e);console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var Fr=new WeakMap,Bi=new WeakMap,Rr=new WeakMap,Hi=new WeakMap;function Ki(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vi(e){return e.__v_skip||!Object.isExtensible(e)?0:Ki(Cr(e))}function _t(e){return e&&e.__v_isReadonly?e:$r(e,!1,Fi,zi,Fr)}function Lr(e){return $r(e,!0,Ri,Di,Rr)}function $r(e,t,r,n,i){if(!Ce(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=i.get(e);if(o)return o;const s=Vi(e);if(s===0)return e;const a=new Proxy(e,s===2?n:r);return i.set(e,a),a}function g(e){return e&&g(e.__v_raw)||e}function Je(e){return!!(e&&e.__v_isRef===!0)}O("nextTick",()=>at);O("dispatch",e=>oe.bind(oe,e));O("watch",(e,{evaluateLater:t,cleanup:r})=>(n,i)=>{let o=t(n),a=Pt(()=>{let l;return o(c=>l=c),l},i);r(a)});O("store",oi);O("data",e=>Bt(e));O("root",e=>we(e));O("refs",e=>(e._x_refs_proxy||(e._x_refs_proxy=B(qi(e))),e._x_refs_proxy));function qi(e){let t=[];return K(e,r=>{r._x_refs&&t.push(r._x_refs)}),t}var Ie={};function Nr(e){return Ie[e]||(Ie[e]=0),++Ie[e]}function Ui(e,t){return K(e,r=>{if(r._x_ids&&r._x_ids[t])return!0})}function Wi(e,t){e._x_ids||(e._x_ids={}),e._x_ids[t]||(e._x_ids[t]=Nr(t))}O("id",(e,{cleanup:t})=>(r,n=null)=>{let i=`${r}${n?`-${n}`:""}`;return Ji(e,i,t,()=>{let o=Ui(e,r),s=o?o._x_ids[r]:Nr(r);return n?`${r}-${s}-${n}`:`${r}-${s}`})});Se((e,t)=>{e._x_id&&(t._x_id=e._x_id)});function Ji(e,t,r,n){if(e._x_id||(e._x_id={}),e._x_id[t])return e._x_id[t];let i=n();return e._x_id[t]=i,r(()=>{delete e._x_id[t]}),i}O("el",e=>e);zr("Focus","focus","focus");zr("Persist","persist","persist");function zr(e,t,r){O(t,n=>S(`You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`,n))}v("modelable",(e,{expression:t},{effect:r,evaluateLater:n,cleanup:i})=>{let o=n(t),s=()=>{let u;return o(d=>u=d),u},a=n(`${t} = __placeholder`),l=u=>a(()=>{},{scope:{__placeholder:u}}),c=s();l(c),queueMicrotask(()=>{if(!e._x_model)return;e._x_removeModelListeners.default();let u=e._x_model.get,d=e._x_model.set,b=yr({get(){return u()},set(w){d(w)}},{get(){return s()},set(w){l(w)}});i(b)})});v("teleport",(e,{modifiers:t,expression:r},{cleanup:n})=>{e.tagName.toLowerCase()!=="template"&&S("x-teleport can only be used on a <template> tag",e);let i=Mt(r),o=e.content.cloneNode(!0).firstElementChild;e._x_teleport=o,o._x_teleportBack=e,e.setAttribute("data-teleport-template",!0),o.setAttribute("data-teleport-target",!0),e._x_forwardEvents&&e._x_forwardEvents.forEach(a=>{o.addEventListener(a,l=>{l.stopPropagation(),e.dispatchEvent(new l.constructor(l.type,l))})}),ue(o,{},e);let s=(a,l,c)=>{c.includes("prepend")?l.parentNode.insertBefore(a,l):c.includes("append")?l.parentNode.insertBefore(a,l.nextSibling):l.appendChild(a)};_(()=>{s(o,i,t),P(()=>{k(o)})()}),e._x_teleportPutBack=()=>{let a=Mt(r);_(()=>{s(e._x_teleport,a,t)})},n(()=>_(()=>{o.remove(),Z(o)}))});var Yi=document.createElement("div");function Mt(e){let t=P(()=>document.querySelector(e),()=>Yi)();return t||S(`Cannot find x-teleport element for selector: "${e}"`),t}var Dr=()=>{};Dr.inline=(e,{modifiers:t},{cleanup:r})=>{t.includes("self")?e._x_ignoreSelf=!0:e._x_ignore=!0,r(()=>{t.includes("self")?delete e._x_ignoreSelf:delete e._x_ignore})};v("ignore",Dr);v("effect",P((e,{expression:t},{effect:r})=>{r(y(e,t))}));function U(e,t,r,n){let i=e,o=l=>n(l),s={},a=(l,c)=>u=>c(l,u);if(r.includes("dot")&&(t=Gi(t)),r.includes("camel")&&(t=Xi(t)),r.includes("passive")&&(s.passive=!0),r.includes("capture")&&(s.capture=!0),r.includes("window")&&(i=window),r.includes("document")&&(i=document),r.includes("debounce")){let l=r[r.indexOf("debounce")+1]||"invalid-wait",c=ye(l.split("ms")[0])?Number(l.split("ms")[0]):250;o=mr(o,c)}if(r.includes("throttle")){let l=r[r.indexOf("throttle")+1]||"invalid-wait",c=ye(l.split("ms")[0])?Number(l.split("ms")[0]):250;o=br(o,c)}return r.includes("prevent")&&(o=a(o,(l,c)=>{c.preventDefault(),l(c)})),r.includes("stop")&&(o=a(o,(l,c)=>{c.stopPropagation(),l(c)})),r.includes("once")&&(o=a(o,(l,c)=>{l(c),i.removeEventListener(t,o,s)})),(r.includes("away")||r.includes("outside"))&&(i=document,o=a(o,(l,c)=>{e.contains(c.target)||c.target.isConnected!==!1&&(e.offsetWidth<1&&e.offsetHeight<1||e._x_isShown!==!1&&l(c))})),r.includes("self")&&(o=a(o,(l,c)=>{c.target===e&&l(c)})),(Qi(t)||Br(t))&&(o=a(o,(l,c)=>{eo(c,r)||l(c)})),i.addEventListener(t,o,s),()=>{i.removeEventListener(t,o,s)}}function Gi(e){return e.replace(/-/g,".")}function Xi(e){return e.toLowerCase().replace(/-(\w)/g,(t,r)=>r.toUpperCase())}function ye(e){return!Array.isArray(e)&&!isNaN(e)}function Zi(e){return[" ","_"].includes(e)?e:e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function Qi(e){return["keydown","keyup"].includes(e)}function Br(e){return["contextmenu","click","mouse"].some(t=>e.includes(t))}function eo(e,t){let r=t.filter(o=>!["window","document","prevent","stop","once","capture","self","away","outside","passive","preserve-scroll","blur","change","lazy"].includes(o));if(r.includes("debounce")){let o=r.indexOf("debounce");r.splice(o,ye((r[o+1]||"invalid-wait").split("ms")[0])?2:1)}if(r.includes("throttle")){let o=r.indexOf("throttle");r.splice(o,ye((r[o+1]||"invalid-wait").split("ms")[0])?2:1)}if(r.length===0||r.length===1&&kt(e.key).includes(r[0]))return!1;const i=["ctrl","shift","alt","meta","cmd","super"].filter(o=>r.includes(o));return r=r.filter(o=>!i.includes(o)),!(i.length>0&&i.filter(s=>((s==="cmd"||s==="super")&&(s="meta"),e[`${s}Key`])).length===i.length&&(Br(e.type)||kt(e.key).includes(r[0])))}function kt(e){if(!e)return[];e=Zi(e);let t={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return t[e]=e,Object.keys(t).map(r=>{if(t[r]===e)return r}).filter(r=>r)}v("model",(e,{modifiers:t,expression:r},{effect:n,cleanup:i})=>{let o=e;t.includes("parent")&&(o=e.parentNode);let s=y(o,r),a;typeof r=="string"?a=y(o,`${r} = __placeholder`):typeof r=="function"&&typeof r()=="string"?a=y(o,`${r()} = __placeholder`):a=()=>{};let l=()=>{let h;return s(f=>h=f),Tt(h)?h.get():h},c=h=>{let f;s(p=>f=p),Tt(f)?f.set(h):a(()=>{},{scope:{__placeholder:h}})};typeof r=="string"&&e.type==="radio"&&_(()=>{e.hasAttribute("name")||e.setAttribute("name",r)});let u=t.includes("change")||t.includes("lazy"),d=t.includes("blur"),b=t.includes("enter"),w=u||d||b,A;if(j)A=()=>{};else if(w){let h=[],f=p=>c(xe(e,t,p,l()));u&&h.push(U(e,"change",t,f)),d&&h.push(U(e,"blur",t,f)),b&&h.push(U(e,"keydown",t,p=>{p.key==="Enter"&&f(p)})),A=()=>h.forEach(p=>p())}else{let h=e.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(e.type)?"change":"input";A=U(e,h,t,f=>{c(xe(e,t,f,l()))})}if(t.includes("fill")&&([void 0,null,""].includes(l())||ct(e)&&Array.isArray(l())||e.tagName.toLowerCase()==="select"&&e.multiple)&&c(xe(e,t,{target:e},l())),e._x_removeModelListeners||(e._x_removeModelListeners={}),e._x_removeModelListeners.default=A,i(()=>e._x_removeModelListeners.default()),e.form){let h=U(e.form,"reset",[],f=>{at(()=>e._x_model&&e._x_model.set(xe(e,t,{target:e},l())))});i(()=>h())}e._x_model={get(){return l()},set(h){c(h)}},e._x_forceModelUpdate=h=>{h===void 0&&typeof r=="string"&&r.match(/\./)&&(h=""),window.fromModel=!0,_(()=>hr(e,"value",h)),delete window.fromModel},n(()=>{let h=l();t.includes("unintrusive")&&document.activeElement.isSameNode(e)||e._x_forceModelUpdate(h)})});function xe(e,t,r,n){return _(()=>{if(r instanceof CustomEvent&&r.detail!==void 0)return r.detail!==null&&r.detail!==void 0?r.detail:r.target.value;if(ct(e))if(Array.isArray(n)){let i=null;return t.includes("number")?i=Pe(r.target.value):t.includes("boolean")?i=ve(r.target.value):i=r.target.value,r.target.checked?n.includes(i)?n:n.concat([i]):n.filter(o=>!to(o,i))}else return r.target.checked;else{if(e.tagName.toLowerCase()==="select"&&e.multiple)return t.includes("number")?Array.from(r.target.selectedOptions).map(i=>{let o=i.value||i.text;return Pe(o)}):t.includes("boolean")?Array.from(r.target.selectedOptions).map(i=>{let o=i.value||i.text;return ve(o)}):Array.from(r.target.selectedOptions).map(i=>i.value||i.text);{let i;return vr(e)?r.target.checked?i=r.target.value:i=n:i=r.target.value,t.includes("number")?Pe(i):t.includes("boolean")?ve(i):t.includes("trim")?i.trim():i}}})}function Pe(e){let t=e?parseFloat(e):null;return ro(t)?t:e}function to(e,t){return e==t}function ro(e){return!Array.isArray(e)&&!isNaN(e)}function Tt(e){return e!==null&&typeof e=="object"&&typeof e.get=="function"&&typeof e.set=="function"}v("cloak",e=>queueMicrotask(()=>_(()=>e.removeAttribute(X("cloak")))));lr(()=>`[${X("init")}]`);v("init",P((e,{expression:t},{evaluate:r})=>typeof t=="string"?!!t.trim()&&r(t,{},!1):r(t,{},!1)));v("text",(e,{expression:t},{effect:r,evaluateLater:n})=>{let i=n(t);r(()=>{i(o=>{_(()=>{e.textContent=o})})})});v("html",(e,{expression:t},{effect:r,evaluateLater:n})=>{let i=n(t);r(()=>{i(o=>{_(()=>{e.innerHTML=o,e._x_ignoreSelf=!0,k(e),delete e._x_ignoreSelf})})})});it(Zt(":",Qt(X("bind:"))));var Hr=(e,{value:t,modifiers:r,expression:n,original:i},{effect:o,cleanup:s})=>{if(!t){let l={};ai(l),y(e,n)(u=>{Er(e,u,i)},{scope:l});return}if(t==="key")return no(e,n);if(e._x_inlineBindings&&e._x_inlineBindings[t]&&e._x_inlineBindings[t].extract)return;let a=y(e,n);o(()=>a(l=>{l===void 0&&typeof n=="string"&&n.match(/\./)&&(l=""),_(()=>hr(e,t,l,r))})),s(()=>{e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedStyles&&e._x_undoAddedStyles()})};Hr.inline=(e,{value:t,modifiers:r,expression:n})=>{t&&(e._x_inlineBindings||(e._x_inlineBindings={}),e._x_inlineBindings[t]={expression:n,extract:!1})};v("bind",Hr);function no(e,t){e._x_keyExpression=t}ar(()=>`[${X("data")}]`);v("data",(e,{expression:t},{cleanup:r})=>{if(io(e))return;t=t===""?"{}":t;let n={};ae(n,e);let i={};ci(i,n);let o=$(e,t,{scope:i});(o===void 0||o===!0)&&(o={}),ae(o,e);let s=Y(o);tt(s);let a=ue(e,s);s.init&&$(e,s.init),r(()=>{s.destroy&&$(e,s.destroy),a()})});Se((e,t)=>{e._x_dataStack&&(t._x_dataStack=e._x_dataStack,t.setAttribute("data-has-alpine-state",!0))});function io(e){return j?qe?!0:e.hasAttribute("data-has-alpine-state"):!1}v("show",(e,{modifiers:t,expression:r},{effect:n})=>{let i=y(e,r);e._x_doHide||(e._x_doHide=()=>{_(()=>{e.style.setProperty("display","none",t.includes("important")?"important":void 0)})}),e._x_doShow||(e._x_doShow=()=>{_(()=>{e.style.length===1&&e.style.display==="none"?e.removeAttribute("style"):e.style.removeProperty("display")})});let o=()=>{e._x_doHide(),e._x_isShown=!1},s=()=>{e._x_doShow(),e._x_isShown=!0},a=()=>setTimeout(s),l=Ke(d=>d?s():o(),d=>{typeof e._x_toggleAndCascadeWithTransitions=="function"?e._x_toggleAndCascadeWithTransitions(e,d,s,o):d?a():o()}),c,u=!0;n(()=>i(d=>{!u&&d===c||(t.includes("immediate")&&(d?a():o()),l(d),c=d,u=!1)}))});v("for",(e,{expression:t},{effect:r,cleanup:n})=>{let i=so(t),o=y(e,i.items),s=y(e,e._x_keyExpression||"index");e._x_prevKeys=[],e._x_lookup={},r(()=>oo(e,i,o,s)),n(()=>{Object.values(e._x_lookup).forEach(a=>_(()=>{Z(a),a.remove()})),delete e._x_prevKeys,delete e._x_lookup})});function oo(e,t,r,n){let i=s=>typeof s=="object"&&!Array.isArray(s),o=e;r(s=>{ao(s)&&s>=0&&(s=Array.from(Array(s).keys(),f=>f+1)),s===void 0&&(s=[]);let a=e._x_lookup,l=e._x_prevKeys,c=[],u=[];if(i(s))s=Object.entries(s).map(([f,p])=>{let x=jt(t,p,f,s);n(m=>{u.includes(m)&&S("Duplicate key on x-for",e),u.push(m)},{scope:{index:f,...x}}),c.push(x)});else for(let f=0;f<s.length;f++){let p=jt(t,s[f],f,s);n(x=>{u.includes(x)&&S("Duplicate key on x-for",e),u.push(x)},{scope:{index:f,...p}}),c.push(p)}let d=[],b=[],w=[],A=[];for(let f=0;f<l.length;f++){let p=l[f];u.indexOf(p)===-1&&w.push(p)}l=l.filter(f=>!w.includes(f));let h="template";for(let f=0;f<u.length;f++){let p=u[f],x=l.indexOf(p);if(x===-1)l.splice(f,0,p),d.push([h,f]);else if(x!==f){let m=l.splice(f,1)[0],E=l.splice(x-1,1)[0];l.splice(f,0,E),l.splice(x,0,m),b.push([m,E])}else A.push(p);h=p}for(let f=0;f<w.length;f++){let p=w[f];p in a&&(_(()=>{Z(a[p]),a[p].remove()}),delete a[p])}for(let f=0;f<b.length;f++){let[p,x]=b[f],m=a[p],E=a[x],q=document.createElement("div");_(()=>{E||S('x-for ":key" is undefined or invalid',o,x,a),E.after(q),m.after(E),E._x_currentIfEl&&E.after(E._x_currentIfEl),q.before(m),m._x_currentIfEl&&m.after(m._x_currentIfEl),q.remove()}),E._x_refreshXForScope(c[u.indexOf(x)])}for(let f=0;f<d.length;f++){let[p,x]=d[f],m=p==="template"?o:a[p];m._x_currentIfEl&&(m=m._x_currentIfEl);let E=c[x],q=u[x],ee=document.importNode(o.content,!0).firstElementChild,xt=Y(E);ue(ee,xt,o),ee._x_refreshXForScope=qr=>{Object.entries(qr).forEach(([Ur,Wr])=>{xt[Ur]=Wr})},_(()=>{m.after(ee),P(()=>k(ee))()}),typeof q=="object"&&S("x-for key cannot be an object, it must be a string or an integer",o),a[q]=ee}for(let f=0;f<A.length;f++)a[A[f]]._x_refreshXForScope(c[u.indexOf(A[f])]);o._x_prevKeys=u})}function so(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,r=/^\s*\(|\)\s*$/g,n=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,i=e.match(n);if(!i)return;let o={};o.items=i[2].trim();let s=i[1].replace(r,"").trim(),a=s.match(t);return a?(o.item=s.replace(t,"").trim(),o.index=a[1].trim(),a[2]&&(o.collection=a[2].trim())):o.item=s,o}function jt(e,t,r,n){let i={};return/^\[.*\]$/.test(e.item)&&Array.isArray(t)?e.item.replace("[","").replace("]","").split(",").map(s=>s.trim()).forEach((s,a)=>{i[s]=t[a]}):/^\{.*\}$/.test(e.item)&&!Array.isArray(t)&&typeof t=="object"?e.item.replace("{","").replace("}","").split(",").map(s=>s.trim()).forEach(s=>{i[s]=t[s]}):i[e.item]=t,e.index&&(i[e.index]=r),e.collection&&(i[e.collection]=n),i}function ao(e){return!Array.isArray(e)&&!isNaN(e)}function Kr(){}Kr.inline=(e,{expression:t},{cleanup:r})=>{let n=we(e);n._x_refs||(n._x_refs={}),n._x_refs[t]=e,r(()=>delete n._x_refs[t])};v("ref",Kr);v("if",(e,{expression:t},{effect:r,cleanup:n})=>{e.tagName.toLowerCase()!=="template"&&S("x-if can only be used on a <template> tag",e);let i=y(e,t),o=()=>{if(e._x_currentIfEl)return e._x_currentIfEl;let a=e.content.cloneNode(!0).firstElementChild;return ue(a,{},e),_(()=>{e.after(a),P(()=>k(a))()}),e._x_currentIfEl=a,e._x_undoIf=()=>{_(()=>{Z(a),a.remove()}),delete e._x_currentIfEl},a},s=()=>{e._x_undoIf&&(e._x_undoIf(),delete e._x_undoIf)};r(()=>i(a=>{a?o():s()})),n(()=>e._x_undoIf&&e._x_undoIf())});v("id",(e,{expression:t},{evaluate:r})=>{r(t).forEach(i=>Wi(e,i))});Se((e,t)=>{e._x_ids&&(t._x_ids=e._x_ids)});it(Zt("@",Qt(X("on:"))));v("on",P((e,{value:t,modifiers:r,expression:n},{cleanup:i})=>{let o=n?y(e,n):()=>{};e.tagName.toLowerCase()==="template"&&(e._x_forwardEvents||(e._x_forwardEvents=[]),e._x_forwardEvents.includes(t)||e._x_forwardEvents.push(t));let s=U(e,t,r,a=>{o(()=>{},{scope:{$event:a},params:[a]})});i(()=>s())}));Me("Collapse","collapse","collapse");Me("Intersect","intersect","intersect");Me("Focus","trap","focus");Me("Mask","mask","mask");function Me(e,t,r){v(t,n=>S(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`,n))}Q.setEvaluator(Jt);Q.setRawEvaluator(yn);Q.setReactivityEngine({reactive:_t,effect:mi,release:bi,raw:g});var lo=Q,ke=lo;const co=`<nav\r
  class="bg-[#D32F2F] text-white py-3 border-b-4 border-white relative z-30 shadow-md"\r
>\r
  <div class="container mx-auto px-4 flex justify-between items-center">\r
    <div class="flex items-center gap-3">\r
      <img\r
        src="logo.avif"\r
        alt="Importaciones PeruTruck"\r
        class="h-12 md:h-16 w-auto mix-blend-screen object-contain"\r
      />\r
      <h1\r
        class="font-extrabold uppercase tracking-wider leading-tight text-sm md:text-2xl flex flex-col md:block"\r
      >\r
        Importaciones\r
        <span class="md:ml-1">PeruTruck</span>\r
      </h1>\r
    </div>\r
\r
    <div class="flex items-center gap-2 md:gap-4">\r
      <a\r
        href="#cotizacion"\r
        class="border-2 border-white text-white font-bold uppercase tracking-wide text-[10px] md:text-sm px-3 md:px-5 py-2 rounded-full hover:bg-white hover:text-[#D32F2F] transition duration-300"\r
      >\r
        Generar Cotización\r
      </a>\r
\r
      <a\r
        href="#footer-mount"\r
        class="bg-white text-[#D32F2F] font-bold uppercase tracking-wide text-[10px] md:text-sm px-3 md:px-5 py-2 rounded-full shadow-sm hover:bg-black hover:text-white transition duration-300 border-2 border-transparent hover:border-white"\r
      >\r
        Contáctanos\r
      </a>\r
    </div>\r
  </div>\r
</nav>\r
`,uo=()=>co,fo=`<header\r
  class="relative w-full bg-gray-900 overflow-hidden h-[300px] md:h-[500px] lg:h-[600px]"\r
>\r
  <div class="relative w-full h-full">\r
    <img\r
      src="banner2.avif"\r
      alt="Banner Promocional Scania"\r
      class="w-full h-full object-cover object-center block"\r
    />\r
\r
    <div\r
      class="absolute inset-0 bg-gradient-to-l from-black/50 via-transparent to-transparent"\r
    ></div>\r
\r
    <div\r
      class="absolute inset-0 container mx-auto px-4 flex justify-end items-center"\r
    >\r
      <img\r
        src="logo-perutruck.avif"\r
        alt="Importaciones PeruTruck"\r
        class="w-24 sm:w-40 md:w-80 lg:w-[450px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] opacity-90 mr-2 md:mr-10"\r
      />\r
    </div>\r
  </div>\r
</header>\r
\r
<div class="bg-[#D32F2F] py-3 shadow-lg relative z-20 border-t-4 border-white">\r
  <div class="container mx-auto text-center">\r
    <h2\r
      class="text-white font-extrabold italic text-sm md:text-3xl uppercase tracking-wider drop-shadow-md"\r
    >\r
      El Supermercado del Transportista\r
    </h2>\r
  </div>\r
</div>\r
`,po=()=>fo,ho=`<footer\r
  class="bg-[#333333] text-gray-300 py-12 border-t-[6px] border-gray-500 relative z-10"\r
>\r
  <div class="container mx-auto px-4">\r
    <h4\r
      class="text-white font-bold text-xl mb-8 uppercase pb-2 border-b border-gray-500 inline-block"\r
    >\r
      Contáctanos\r
    </h4>\r
    <p class="mb-6 text-lg">Llámanos a la línea de atención al cliente</p>\r
\r
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">\r
      <div class="space-y-6">\r
        <div class="flex items-start gap-4">\r
          <svg\r
            class="w-7 h-7 text-gray-400 mt-1"\r
            fill="none"\r
            stroke="currentColor"\r
            viewBox="0 0 24 24"\r
          >\r
            <path\r
              stroke-linecap="round"\r
              stroke-linejoin="round"\r
              stroke-width="2"\r
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"\r
            ></path>\r
          </svg>\r
          <div>\r
            <p class="font-bold text-white text-lg">Para ventas:</p>\r
            <p class="text-xl">01 5124490 (Opción 1)</p>\r
          </div>\r
        </div>\r
        <div class="flex items-start gap-4">\r
          <svg\r
            class="w-7 h-7 text-gray-400 mt-1"\r
            fill="none"\r
            stroke="currentColor"\r
            viewBox="0 0 24 24"\r
          >\r
            <path\r
              stroke-linecap="round"\r
              stroke-linejoin="round"\r
              stroke-width="2"\r
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"\r
            ></path>\r
          </svg>\r
          <div>\r
            <p class="font-bold text-white text-lg">\r
              Para servicio al cliente:\r
            </p>\r
            <p class="text-xl">01 5124490 (Opción 2)</p>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="space-y-6">\r
        <div class="flex items-start gap-4">\r
          <svg\r
            class="w-7 h-7 mt-1 text-gray-400"\r
            fill="none"\r
            stroke="currentColor"\r
            viewBox="0 0 24 24"\r
          >\r
            <path\r
              stroke-linecap="round"\r
              stroke-linejoin="round"\r
              stroke-width="2"\r
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"\r
            ></path>\r
          </svg>\r
          <div>\r
            <p class="font-bold text-white text-lg">Horario:</p>\r
            <p>Lu a Vi 8:30 a 18:00 hrs.</p>\r
            <p>Sáb 9:00 a 13:00 hrs.</p>\r
          </div>\r
        </div>\r
\r
        <div class="flex items-start gap-4">\r
          <svg\r
            class="w-7 h-7 mt-1 text-gray-400"\r
            fill="none"\r
            stroke="currentColor"\r
            viewBox="0 0 24 24"\r
          >\r
            <path\r
              stroke-linecap="round"\r
              stroke-linejoin="round"\r
              stroke-width="2"\r
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"\r
            ></path>\r
            <path\r
              stroke-linecap="round"\r
              stroke-linejoin="round"\r
              stroke-width="2"\r
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"\r
            ></path>\r
          </svg>\r
          <p class="text-lg leading-relaxed">\r
            Av. Argentina 4090 Urb. Tarapacá, Callao, Callao.\r
          </p>\r
        </div>\r
\r
        <div class="pt-4">\r
          <button\r
            class="flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#333333] transition duration-300"\r
          >\r
            <svg\r
              xmlns="http://www.w3.org/2000/svg"\r
              fill="none"\r
              viewBox="0 0 24 24"\r
              stroke-width="2"\r
              stroke="currentColor"\r
              class="w-5 h-5"\r
            >\r
              <path\r
                stroke-linecap="round"\r
                stroke-linejoin="round"\r
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"\r
              />\r
            </svg>\r
            Contacto\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</footer>\r
`,go=()=>ho,_o=`<div class="fixed bottom-8 right-8 z-50 flex flex-col gap-4">\r
  <a\r
    href="#cotizacion"\r
    class="bg-[#D32F2F] p-4 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:scale-110 hover:shadow-[0_6px_16px_rgba(0,0,0,0.4)] transition duration-300 flex items-center justify-center group relative"\r
    title="Solicitar Cotización"\r
  >\r
    <span\r
      class="absolute right-16 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"\r
    >\r
      Crear Cotización\r
    </span>\r
\r
    <svg\r
      class="w-8 h-8 text-white"\r
      fill="none"\r
      stroke="currentColor"\r
      viewBox="0 0 24 24"\r
      xmlns="http://www.w3.org/2000/svg"\r
    >\r
      <path\r
        stroke-linecap="round"\r
        stroke-linejoin="round"\r
        stroke-width="2"\r
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"\r
      ></path>\r
    </svg>\r
  </a>\r
\r
  <a\r
    href="https://wa.me/tu-numero"\r
    target="_blank"\r
    class="bg-[#25D366] p-4 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:scale-110 hover:shadow-[0_6px_16px_rgba(0,0,0,0.4)] transition duration-300 flex items-center justify-center animate-bounce-slow"\r
  >\r
    <svg\r
      class="w-8 h-8 text-white"\r
      fill="currentColor"\r
      viewBox="0 0 24 24"\r
      xmlns="http://www.w3.org/2000/svg"\r
    >\r
      <path\r
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"\r
      />\r
    </svg>\r
  </a>\r
</div>\r
`,xo=()=>_o,vo=`<section\r
  class="bg-gray-100 py-16 relative z-10"\r
  x-data="categoriesComponent"\r
  @keydown.escape.window="closeModal()"\r
>\r
  <div class="container mx-auto px-4">\r
    <div class="text-center mb-12">\r
      <h3\r
        class="text-3xl font-extrabold text-gray-800 uppercase tracking-widest"\r
      >\r
        Nuestros Productos\r
      </h3>\r
      <div class="h-1 w-20 bg-[#D32F2F] mx-auto mt-3"></div>\r
    </div>\r
\r
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">\r
      <template x-for="cat in categories" :key="cat.title">\r
        <div\r
          class="group relative bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden border-t-4 border-[#D32F2F] flex flex-col"\r
          @click="openModal(cat)"\r
        >\r
          <div\r
            class="absolute -right-10 -top-10 w-32 h-32 bg-gray-50 rounded-full transition-transform group-hover:scale-150 z-0"\r
          ></div>\r
\r
          <div\r
            class="p-6 flex flex-col items-center text-center h-full relative z-10"\r
          >\r
            <div\r
              class="h-24 w-24 text-[#D32F2F] mb-4 transition-transform duration-500 group-hover:scale-110"\r
              x-html="cat.img"\r
            ></div>\r
\r
            <h3\r
              class="text-lg font-black text-gray-900 uppercase leading-tight mb-1"\r
              x-text="cat.title"\r
            ></h3>\r
            <p\r
              class="text-xs text-gray-500 font-medium tracking-wide mb-6"\r
              x-text="cat.subtitle"\r
            ></p>\r
\r
            <div class="mt-auto">\r
              <span\r
                class="inline-flex items-center text-sm font-bold text-[#D32F2F] group-hover:text-black transition-colors border-b-2 border-transparent group-hover:border-[#D32F2F] pb-0.5"\r
              >\r
                <span x-text="cat.cta"></span>\r
                <svg\r
                  xmlns="http://www.w3.org/2000/svg"\r
                  class="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform"\r
                  fill="none"\r
                  viewBox="0 0 24 24"\r
                  stroke="currentColor"\r
                >\r
                  <path\r
                    stroke-linecap="round"\r
                    stroke-linejoin="round"\r
                    stroke-width="2"\r
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"\r
                  />\r
                </svg>\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
      </template>\r
    </div>\r
  </div>\r
\r
  <template x-teleport="body">\r
    <div\r
      class="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"\r
      x-show="modalOpen"\r
      x-transition:enter="transition ease-out duration-300"\r
      x-transition:enter-start="opacity-0"\r
      x-transition:enter-end="opacity-100"\r
      x-transition:leave="transition ease-in duration-200"\r
      x-transition:leave-start="opacity-100"\r
      x-transition:leave-end="opacity-0"\r
    >\r
      <div\r
        class="bg-white rounded-xl shadow-2xl w-full max-w-2xl relative overflow-hidden flex flex-col md:flex-row"\r
        @click.outside="closeModal()"\r
        x-transition:enter="transition ease-out duration-300 transform"\r
        x-transition:enter-start="opacity-0 scale-95 translate-y-4"\r
        x-transition:enter-end="opacity-100 scale-100 translate-y-0"\r
        x-transition:leave="transition ease-in duration-200 transform"\r
        x-transition:leave-start="opacity-100 scale-100 translate-y-0"\r
        x-transition:leave-end="opacity-0 scale-95 translate-y-4"\r
      >\r
        <button\r
          @click="closeModal()"\r
          class="absolute top-4 right-4 z-50 text-gray-400 hover:text-[#D32F2F] transition-colors"\r
        >\r
          <svg\r
            xmlns="http://www.w3.org/2000/svg"\r
            class="h-8 w-8"\r
            fill="none"\r
            viewBox="0 0 24 24"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <path\r
              stroke-linecap="round"\r
              stroke-linejoin="round"\r
              d="M6 18L18 6M6 6l12 12"\r
            />\r
          </svg>\r
        </button>\r
\r
        <div\r
          class="w-full md:w-2/5 bg-gray-100 flex items-center justify-center p-8 border-r-0 md:border-r border-gray-200 relative"\r
        >\r
          <div\r
            class="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"\r
          ></div>\r
          <div\r
            class="w-32 h-32 text-[#D32F2F] drop-shadow-xl relative z-10"\r
            x-html="selectedCat.img"\r
          ></div>\r
        </div>\r
\r
        <div class="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center">\r
          <div class="mb-4">\r
            <h4\r
              class="text-[#D32F2F] font-bold text-xs uppercase tracking-widest mb-1"\r
              x-text="selectedCat.subtitle"\r
            ></h4>\r
            <h2\r
              class="text-3xl font-extrabold text-gray-900 uppercase leading-none"\r
              x-text="selectedCat.title"\r
            ></h2>\r
          </div>\r
          <div class="h-1 w-16 bg-gray-300 mb-6"></div>\r
          <p\r
            class="text-gray-600 leading-relaxed text-sm md:text-base mb-8"\r
            x-text="selectedCat.description"\r
          ></p>\r
          <button\r
            @click="closeModal()"\r
            class="self-start bg-[#D32F2F] text-white px-8 py-2 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-gray-900 transition-colors duration-300 shadow-md"\r
          >\r
            Entendido\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </template>\r
</section>\r
`,mo=[{title:"MOTOR Y COMPONENTES",subtitle:"El corazón de tu camión",img:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>',cta:"Ver repuestos",description:"Soluciones integrales para el tren motriz. Incluye culatas, kits de anillos, pistones, turbos y bombas de aceite. Diseñados para maximizar la eficiencia de combustible."},{title:"SENSORES Y ELECTRÓNICA",subtitle:"Precisión y Control",img:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M9.375 9L15 14.625M9.375 14.625L15 9m-12 5.625v-11.25c0-.621.504-1.125 1.125-1.125h16.5c.621 0 1.125.504 1.125 1.125v11.25m-18.75 0h18.75m-18.75 0v6c0 .621.504 1.125 1.125 1.125h16.5c.621 0 1.125-.504 1.125-1.125v-6" /></svg>',cta:"Ver sensores",description:"Componentes de gestión electrónica avanzada. Desde sensores de presión y temperatura hasta módulos ECU, alternadores y arrancadores de alto rendimiento."},{title:"TRANSMISIÓN Y EMBRAGUE",subtitle:"Transferencia de Potencia",img:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>',cta:"Ver transmisión",description:"Componentes especializados para la transmisión de torque. Ofrecemos kits de embrague, platos opresores, collarines y repuestos de caja de cambios."},{title:"SUSPENSIÓN Y DIRECCIÓN",subtitle:"Estabilidad en Ruta",img:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" /></svg>',cta:"Ver suspensión",description:"Sistemas reforzados para el control del vehículo. Incluye amortiguadores, muelles, barras estabilizadoras y terminales de dirección."},{title:"VÁLVULAS Y SISTEMAS",subtitle:"Control de Fluidos",img:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v13.5m0 0l-3.375-3.375M12 16.5l3.375-3.375M6.75 19.5h10.5" /></svg>',cta:"Ver válvulas",description:"Válvulas de admisión, escape y componentes de control de aire de alta precisión fabricadas con aleaciones resistentes al calor extremo."},{title:"FILTROS DE ALTO FLUJO",subtitle:"Protección Garantizada",img:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.75 9.75 0 009.75-9.75V5.25L12 3 2.25 5.25v6A9.75 9.75 0 0012 21z" /></svg>',cta:"Ver filtros",description:"Máxima protección contra impurezas con tecnología de microfiltración que previene el desgaste prematuro de los componentes internos."},{title:"SISTEMAS DE FRENADO",subtitle:"Seguridad Total",img:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.033A9.75 9.75 0 0012 21.75a9.75 9.75 0 000-19.033zM12 16.5h.008v.008H12v-.008z" /></svg>',cta:"Ver frenos",description:"Componentes de seguridad crítica: Forros de freno de alta fricción, pulmones de aire, tambores y zapatas de gran potencia."},{title:"ACCESORIOS Y CARROCERÍA",subtitle:"Equipamiento Externo",img:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18h16.5a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-1.5 1.5H3.75A1.5 1.5 0 012.25 19.5V4.5A1.5 1.5 0 013.75 3z" /></svg>',cta:"Ver accesorios",description:"Mantenimiento estético y funcional. Espejos, faros, manijas y componentes estructurales de carrocería originales."}],Vr=()=>({modalOpen:!1,selectedCat:{},categories:mo,openModal(e){this.selectedCat=e,this.modalOpen=!0,document.body.style.overflow="hidden"},closeModal(){this.modalOpen=!1,document.body.style.overflow=""}});ke.data("categoriesComponent",Vr);const fe=(e,t)=>{const r=document.getElementById(e);r&&(r.innerHTML=t)};fe("navbar-mount",uo());fe("hero-mount",po());fe("categories-mount",vo);fe("footer-mount",go());fe("floating-btn-mount",xo());ke.data("categoriesComponent",Vr);window.Alpine=ke;ke.start();
