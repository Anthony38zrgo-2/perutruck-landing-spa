(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();var Ie=!1,Re=!1,F=[],$e=-1;function Ur(e){Jr(e)}function Jr(e){F.includes(e)||F.push(e),Yr()}function Gr(e){let t=F.indexOf(e);t!==-1&&t>$e&&F.splice(t,1)}function Yr(){!Re&&!Ie&&(Ie=!0,queueMicrotask(Xr))}function Xr(){Ie=!1,Re=!0;for(let e=0;e<F.length;e++)F[e](),$e=e;F.length=0,$e=-1,Re=!1}var G,q,Y,jt,Fe=!0;function Zr(e){Fe=!1,e(),Fe=!0}function Qr(e){G=e.reactive,Y=e.release,q=t=>e.effect(t,{scheduler:r=>{Fe?Ur(r):r()}}),jt=e.raw}function xt(e){q=e}function en(e){let t=()=>{};return[n=>{let i=q(n);return e._x_effects||(e._x_effects=new Set,e._x_runEffects=()=>{e._x_effects.forEach(o=>o())}),e._x_effects.add(i),t=()=>{i!==void 0&&(e._x_effects.delete(i),Y(i))},i},()=>{t()}]}function Pt(e,t){let r=!0,n,i=q(()=>{let o=e();JSON.stringify(o),r?n=o:queueMicrotask(()=>{t(o,n),n=o}),r=!1});return()=>Y(i)}var It=[],Rt=[],$t=[];function tn(e){$t.push(e)}function Je(e,t){typeof t=="function"?(e._x_cleanups||(e._x_cleanups=[]),e._x_cleanups.push(t)):(t=e,Rt.push(t))}function Ft(e){It.push(e)}function Lt(e,t,r){e._x_attributeCleanups||(e._x_attributeCleanups={}),e._x_attributeCleanups[t]||(e._x_attributeCleanups[t]=[]),e._x_attributeCleanups[t].push(r)}function Nt(e,t){e._x_attributeCleanups&&Object.entries(e._x_attributeCleanups).forEach(([r,n])=>{(t===void 0||t.includes(r))&&(n.forEach(i=>i()),delete e._x_attributeCleanups[r])})}function rn(e){for(e._x_effects?.forEach(Gr);e._x_cleanups?.length;)e._x_cleanups.pop()()}var Ge=new MutationObserver(Qe),Ye=!1;function Xe(){Ge.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),Ye=!0}function Dt(){nn(),Ge.disconnect(),Ye=!1}var te=[];function nn(){let e=Ge.takeRecords();te.push(()=>e.length>0&&Qe(e));let t=te.length;queueMicrotask(()=>{if(te.length===t)for(;te.length>0;)te.shift()()})}function g(e){if(!Ye)return e();Dt();let t=e();return Xe(),t}var Ze=!1,ve=[];function on(){Ze=!0}function an(){Ze=!1,Qe(ve),ve=[]}function Qe(e){if(Ze){ve=ve.concat(e);return}let t=[],r=new Set,n=new Map,i=new Map;for(let o=0;o<e.length;o++)if(!e[o].target._x_ignoreMutationObserver&&(e[o].type==="childList"&&(e[o].removedNodes.forEach(a=>{a.nodeType===1&&a._x_marker&&r.add(a)}),e[o].addedNodes.forEach(a=>{if(a.nodeType===1){if(r.has(a)){r.delete(a);return}a._x_marker||t.push(a)}})),e[o].type==="attributes")){let a=e[o].target,s=e[o].attributeName,l=e[o].oldValue,c=()=>{n.has(a)||n.set(a,[]),n.get(a).push({name:s,value:a.getAttribute(s)})},u=()=>{i.has(a)||i.set(a,[]),i.get(a).push(s)};a.hasAttribute(s)&&l===null?c():a.hasAttribute(s)?(u(),c()):u()}i.forEach((o,a)=>{Nt(a,o)}),n.forEach((o,a)=>{It.forEach(s=>s(a,o))});for(let o of r)t.some(a=>a.contains(o))||Rt.forEach(a=>a(o));for(let o of t)o.isConnected&&$t.forEach(a=>a(o));t=null,r=null,n=null,i=null}function Bt(e){return z(B(e))}function ue(e,t,r){return e._x_dataStack=[t,...B(r||e)],()=>{e._x_dataStack=e._x_dataStack.filter(n=>n!==t)}}function B(e){return e._x_dataStack?e._x_dataStack:typeof ShadowRoot=="function"&&e instanceof ShadowRoot?B(e.host):e.parentNode?B(e.parentNode):[]}function z(e){return new Proxy({objects:e},sn)}var sn={ownKeys({objects:e}){return Array.from(new Set(e.flatMap(t=>Object.keys(t))))},has({objects:e},t){return t==Symbol.unscopables?!1:e.some(r=>Object.prototype.hasOwnProperty.call(r,t)||Reflect.has(r,t))},get({objects:e},t,r){return t=="toJSON"?ln:Reflect.get(e.find(n=>Reflect.has(n,t))||{},t,r)},set({objects:e},t,r,n){const i=e.find(a=>Object.prototype.hasOwnProperty.call(a,t))||e[e.length-1],o=Object.getOwnPropertyDescriptor(i,t);return o?.set&&o?.get?o.set.call(n,r)||!0:Reflect.set(i,t,r)}};function ln(){return Reflect.ownKeys(this).reduce((t,r)=>(t[r]=Reflect.get(this,r),t),{})}function et(e){let t=n=>typeof n=="object"&&!Array.isArray(n)&&n!==null,r=(n,i="")=>{Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(([o,{value:a,enumerable:s}])=>{if(s===!1||a===void 0||typeof a=="object"&&a!==null&&a.__v_skip)return;let l=i===""?o:`${i}.${o}`;typeof a=="object"&&a!==null&&a._x_interceptor?n[o]=a.initialize(e,l,o):t(a)&&a!==n&&!(a instanceof Element)&&r(a,l)})};return r(e)}function zt(e,t=()=>{}){let r={initialValue:void 0,_x_interceptor:!0,initialize(n,i,o){return e(this.initialValue,()=>cn(n,i),a=>Le(n,i,a),i,o)}};return t(r),n=>{if(typeof n=="object"&&n!==null&&n._x_interceptor){let i=r.initialize.bind(r);r.initialize=(o,a,s)=>{let l=n.initialize(o,a,s);return r.initialValue=l,i(o,a,s)}}else r.initialValue=n;return r}}function cn(e,t){return t.split(".").reduce((r,n)=>r[n],e)}function Le(e,t,r){if(typeof t=="string"&&(t=t.split(".")),t.length===1)e[t[0]]=r;else{if(t.length===0)throw error;return e[t[0]]||(e[t[0]]={}),Le(e[t[0]],t.slice(1),r)}}var Kt={};function C(e,t){Kt[e]=t}function se(e,t){let r=un(t);return Object.entries(Kt).forEach(([n,i])=>{Object.defineProperty(e,`$${n}`,{get(){return i(t,r)},enumerable:!1})}),e}function un(e){let[t,r]=Yt(e),n={interceptor:zt,...t};return Je(e,r),n}function fn(e,t,r,...n){try{return r(...n)}catch(i){le(i,e,t)}}function le(...e){return Ht(...e)}var Ht=pn;function dn(e){Ht=e}function pn(e,t,r=void 0){e=Object.assign(e??{message:"No error message given."},{el:t,expression:r}),console.warn(`Alpine Expression Error: ${e.message}

${r?'Expression: "'+r+`"

`:""}`,t),setTimeout(()=>{throw e},0)}var U=!0;function qt(e){let t=U;U=!1;let r=e();return U=t,r}function L(e,t,r={}){let n;return y(e,t)(i=>n=i,r),n}function y(...e){return Vt(...e)}var Vt=Ut;function hn(e){Vt=e}var Wt;function _n(e){Wt=e}function Ut(e,t){let r={};se(r,e);let n=[r,...B(e)],i=typeof t=="function"?gn(n,t):mn(n,t,e);return fn.bind(null,e,t,i)}function gn(e,t){return(r=()=>{},{scope:n={},params:i=[],context:o}={})=>{if(!U){ce(r,t,z([n,...e]),i);return}let a=t.apply(z([n,...e]),i);ce(r,a)}}var ke={};function xn(e,t){if(ke[e])return ke[e];let r=Object.getPrototypeOf(async function(){}).constructor,n=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(async()=>{ ${e} })()`:e,o=(()=>{try{let a=new r(["__self","scope"],`with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`);return Object.defineProperty(a,"name",{value:`[Alpine] ${e}`}),a}catch(a){return le(a,t,e),Promise.resolve()}})();return ke[e]=o,o}function mn(e,t,r){let n=xn(t,r);return(i=()=>{},{scope:o={},params:a=[],context:s}={})=>{n.result=void 0,n.finished=!1;let l=z([o,...e]);if(typeof n=="function"){let c=n.call(s,n,l).catch(u=>le(u,r,t));n.finished?(ce(i,n.result,l,a,r),n.result=void 0):c.then(u=>{ce(i,u,l,a,r)}).catch(u=>le(u,r,t)).finally(()=>n.result=void 0)}}}function ce(e,t,r,n,i){if(U&&typeof t=="function"){let o=t.apply(r,n);o instanceof Promise?o.then(a=>ce(e,a,r,n)).catch(a=>le(a,i,t)):e(o)}else typeof t=="object"&&t instanceof Promise?t.then(o=>e(o)):e(t)}function vn(...e){return Wt(...e)}function bn(e,t,r={}){let n={};se(n,e);let i=[n,...B(e)],o=z([r.scope??{},...i]),a=r.params??[];if(t.includes("await")){let s=Object.getPrototypeOf(async function(){}).constructor,l=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(async()=>{ ${t} })()`:t;return new s(["scope"],`with (scope) { let __result = ${l}; return __result }`).call(r.context,o)}else{let s=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(()=>{ ${t} })()`:t,c=new Function(["scope"],`with (scope) { let __result = ${s}; return __result }`).call(r.context,o);return typeof c=="function"&&U?c.apply(o,a):c}}var tt="x-";function X(e=""){return tt+e}function yn(e){tt=e}var be={};function m(e,t){return be[e]=t,{before(r){if(!be[r]){console.warn(String.raw`Cannot find directive \`${r}\`. \`${e}\` will use the default order of execution`);return}const n=$.indexOf(r);$.splice(n>=0?n:$.indexOf("DEFAULT"),0,e)}}}function wn(e){return Object.keys(be).includes(e)}function rt(e,t,r){if(t=Array.from(t),e._x_virtualDirectives){let o=Object.entries(e._x_virtualDirectives).map(([s,l])=>({name:s,value:l})),a=Jt(o);o=o.map(s=>a.find(l=>l.name===s.name)?{name:`x-bind:${s.name}`,value:`"${s.value}"`}:s),t=t.concat(o)}let n={};return t.map(Qt((o,a)=>n[o]=a)).filter(tr).map(Sn(n,r)).sort(On).map(o=>An(e,o))}function Jt(e){return Array.from(e).map(Qt()).filter(t=>!tr(t))}var Ne=!1,ie=new Map,Gt=Symbol();function En(e){Ne=!0;let t=Symbol();Gt=t,ie.set(t,[]);let r=()=>{for(;ie.get(t).length;)ie.get(t).shift()();ie.delete(t)},n=()=>{Ne=!1,r()};e(r),n()}function Yt(e){let t=[],r=s=>t.push(s),[n,i]=en(e);return t.push(i),[{Alpine:Q,effect:n,cleanup:r,evaluateLater:y.bind(y,e),evaluate:L.bind(L,e)},()=>t.forEach(s=>s())]}function An(e,t){let r=()=>{},n=be[t.type]||r,[i,o]=Yt(e);Lt(e,t.original,o);let a=()=>{e._x_ignore||e._x_ignoreSelf||(n.inline&&n.inline(e,t,i),n=n.bind(n,e,t,i),Ne?ie.get(Gt).push(n):n())};return a.runCleanups=o,a}var Xt=(e,t)=>({name:r,value:n})=>(r.startsWith(e)&&(r=r.replace(e,t)),{name:r,value:n}),Zt=e=>e;function Qt(e=()=>{}){return({name:t,value:r})=>{let{name:n,value:i}=er.reduce((o,a)=>a(o),{name:t,value:r});return n!==t&&e(n,t),{name:n,value:i}}}var er=[];function nt(e){er.push(e)}function tr({name:e}){return rr().test(e)}var rr=()=>new RegExp(`^${tt}([^:^.]+)\\b`);function Sn(e,t){return({name:r,value:n})=>{r===n&&(n="");let i=r.match(rr()),o=r.match(/:([a-zA-Z0-9\-_:]+)/),a=r.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],s=t||e[r]||r;return{type:i?i[1]:null,value:o?o[1]:null,modifiers:a.map(l=>l.replace(".","")),expression:n,original:s}}}var De="DEFAULT",$=["ignore","ref","data","id","anchor","bind","init","for","model","modelable","transition","show","if",De,"teleport"];function On(e,t){let r=$.indexOf(e.type)===-1?De:e.type,n=$.indexOf(t.type)===-1?De:t.type;return $.indexOf(r)-$.indexOf(n)}function oe(e,t,r={}){e.dispatchEvent(new CustomEvent(t,{detail:r,bubbles:!0,composed:!0,cancelable:!0}))}function K(e,t){if(typeof ShadowRoot=="function"&&e instanceof ShadowRoot){Array.from(e.children).forEach(i=>K(i,t));return}let r=!1;if(t(e,()=>r=!0),r)return;let n=e.firstElementChild;for(;n;)K(n,t),n=n.nextElementSibling}function A(e,...t){console.warn(`Alpine Warning: ${e}`,...t)}var mt=!1;function Cn(){mt&&A("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),mt=!0,document.body||A("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),oe(document,"alpine:init"),oe(document,"alpine:initializing"),Xe(),tn(t=>k(t,K)),Je(t=>Z(t)),Ft((t,r)=>{rt(t,r).forEach(n=>n())});let e=t=>!we(t.parentElement,!0);Array.from(document.querySelectorAll(or().join(","))).filter(e).forEach(t=>{k(t)}),oe(document,"alpine:initialized"),setTimeout(()=>{jn()})}var it=[],nr=[];function ir(){return it.map(e=>e())}function or(){return it.concat(nr).map(e=>e())}function ar(e){it.push(e)}function sr(e){nr.push(e)}function we(e,t=!1){return H(e,r=>{if((t?or():ir()).some(i=>r.matches(i)))return!0})}function H(e,t){if(e){if(t(e))return e;if(e._x_teleportBack&&(e=e._x_teleportBack),e.parentNode instanceof ShadowRoot)return H(e.parentNode.host,t);if(e.parentElement)return H(e.parentElement,t)}}function Mn(e){return ir().some(t=>e.matches(t))}var lr=[];function kn(e){lr.push(e)}var Tn=1;function k(e,t=K,r=()=>{}){H(e,n=>n._x_ignore)||En(()=>{t(e,(n,i)=>{n._x_marker||(r(n,i),lr.forEach(o=>o(n,i)),rt(n,n.attributes).forEach(o=>o()),n._x_ignore||(n._x_marker=Tn++),n._x_ignore&&i())})})}function Z(e,t=K){t(e,r=>{rn(r),Nt(r),delete r._x_marker})}function jn(){[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([t,r,n])=>{wn(r)||n.some(i=>{if(document.querySelector(i))return A(`found "${i}", but missing ${t} plugin`),!0})})}var Be=[],ot=!1;function at(e=()=>{}){return queueMicrotask(()=>{ot||setTimeout(()=>{ze()})}),new Promise(t=>{Be.push(()=>{e(),t()})})}function ze(){for(ot=!1;Be.length;)Be.shift()()}function Pn(){ot=!0}function st(e,t){return Array.isArray(t)?vt(e,t.join(" ")):typeof t=="object"&&t!==null?In(e,t):typeof t=="function"?st(e,t()):vt(e,t)}function vt(e,t){let r=i=>i.split(" ").filter(o=>!e.classList.contains(o)).filter(Boolean),n=i=>(e.classList.add(...i),()=>{e.classList.remove(...i)});return t=t===!0?t="":t||"",n(r(t))}function In(e,t){let r=s=>s.split(" ").filter(Boolean),n=Object.entries(t).flatMap(([s,l])=>l?r(s):!1).filter(Boolean),i=Object.entries(t).flatMap(([s,l])=>l?!1:r(s)).filter(Boolean),o=[],a=[];return i.forEach(s=>{e.classList.contains(s)&&(e.classList.remove(s),a.push(s))}),n.forEach(s=>{e.classList.contains(s)||(e.classList.add(s),o.push(s))}),()=>{a.forEach(s=>e.classList.add(s)),o.forEach(s=>e.classList.remove(s))}}function Ee(e,t){return typeof t=="object"&&t!==null?Rn(e,t):$n(e,t)}function Rn(e,t){let r={};return Object.entries(t).forEach(([n,i])=>{r[n]=e.style[n],n.startsWith("--")||(n=Fn(n)),e.style.setProperty(n,i)}),setTimeout(()=>{e.style.length===0&&e.removeAttribute("style")}),()=>{Ee(e,r)}}function $n(e,t){let r=e.getAttribute("style",t);return e.setAttribute("style",t),()=>{e.setAttribute("style",r||"")}}function Fn(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Ke(e,t=()=>{}){let r=!1;return function(){r?t.apply(this,arguments):(r=!0,e.apply(this,arguments))}}m("transition",(e,{value:t,modifiers:r,expression:n},{evaluate:i})=>{typeof n=="function"&&(n=i(n)),n!==!1&&(!n||typeof n=="boolean"?Nn(e,r,t):Ln(e,n,t))});function Ln(e,t,r){cr(e,st,""),{enter:i=>{e._x_transition.enter.during=i},"enter-start":i=>{e._x_transition.enter.start=i},"enter-end":i=>{e._x_transition.enter.end=i},leave:i=>{e._x_transition.leave.during=i},"leave-start":i=>{e._x_transition.leave.start=i},"leave-end":i=>{e._x_transition.leave.end=i}}[r](t)}function Nn(e,t,r){cr(e,Ee);let n=!t.includes("in")&&!t.includes("out")&&!r,i=n||t.includes("in")||["enter"].includes(r),o=n||t.includes("out")||["leave"].includes(r);t.includes("in")&&!n&&(t=t.filter((p,x)=>x<t.indexOf("out"))),t.includes("out")&&!n&&(t=t.filter((p,x)=>x>t.indexOf("out")));let a=!t.includes("opacity")&&!t.includes("scale"),s=a||t.includes("opacity"),l=a||t.includes("scale"),c=s?0:1,u=l?re(t,"scale",95)/100:1,d=re(t,"delay",0)/1e3,b=re(t,"origin","center"),w="opacity, transform",S=re(t,"duration",150)/1e3,h=re(t,"duration",75)/1e3,f="cubic-bezier(0.4, 0.0, 0.2, 1)";i&&(e._x_transition.enter.during={transformOrigin:b,transitionDelay:`${d}s`,transitionProperty:w,transitionDuration:`${S}s`,transitionTimingFunction:f},e._x_transition.enter.start={opacity:c,transform:`scale(${u})`},e._x_transition.enter.end={opacity:1,transform:"scale(1)"}),o&&(e._x_transition.leave.during={transformOrigin:b,transitionDelay:`${d}s`,transitionProperty:w,transitionDuration:`${h}s`,transitionTimingFunction:f},e._x_transition.leave.start={opacity:1,transform:"scale(1)"},e._x_transition.leave.end={opacity:c,transform:`scale(${u})`})}function cr(e,t,r={}){e._x_transition||(e._x_transition={enter:{during:r,start:r,end:r},leave:{during:r,start:r,end:r},in(n=()=>{},i=()=>{}){He(e,t,{during:this.enter.during,start:this.enter.start,end:this.enter.end},n,i)},out(n=()=>{},i=()=>{}){He(e,t,{during:this.leave.during,start:this.leave.start,end:this.leave.end},n,i)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(e,t,r,n){const i=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let o=()=>i(r);if(t){e._x_transition&&(e._x_transition.enter||e._x_transition.leave)?e._x_transition.enter&&(Object.entries(e._x_transition.enter.during).length||Object.entries(e._x_transition.enter.start).length||Object.entries(e._x_transition.enter.end).length)?e._x_transition.in(r):o():e._x_transition?e._x_transition.in(r):o();return}e._x_hidePromise=e._x_transition?new Promise((a,s)=>{e._x_transition.out(()=>{},()=>a(n)),e._x_transitioning&&e._x_transitioning.beforeCancel(()=>s({isFromCancelledTransition:!0}))}):Promise.resolve(n),queueMicrotask(()=>{let a=ur(e);a?(a._x_hideChildren||(a._x_hideChildren=[]),a._x_hideChildren.push(e)):i(()=>{let s=l=>{let c=Promise.all([l._x_hidePromise,...(l._x_hideChildren||[]).map(s)]).then(([u])=>u?.());return delete l._x_hidePromise,delete l._x_hideChildren,c};s(e).catch(l=>{if(!l.isFromCancelledTransition)throw l})})})};function ur(e){let t=e.parentNode;if(t)return t._x_hidePromise?t:ur(t)}function He(e,t,{during:r,start:n,end:i}={},o=()=>{},a=()=>{}){if(e._x_transitioning&&e._x_transitioning.cancel(),Object.keys(r).length===0&&Object.keys(n).length===0&&Object.keys(i).length===0){o(),a();return}let s,l,c;Dn(e,{start(){s=t(e,n)},during(){l=t(e,r)},before:o,end(){s(),c=t(e,i)},after:a,cleanup(){l(),c()}})}function Dn(e,t){let r,n,i,o=Ke(()=>{g(()=>{r=!0,n||t.before(),i||(t.end(),ze()),t.after(),e.isConnected&&t.cleanup(),delete e._x_transitioning})});e._x_transitioning={beforeCancels:[],beforeCancel(a){this.beforeCancels.push(a)},cancel:Ke(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();o()}),finish:o},g(()=>{t.start(),t.during()}),Pn(),requestAnimationFrame(()=>{if(r)return;let a=Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,s=Number(getComputedStyle(e).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;a===0&&(a=Number(getComputedStyle(e).animationDuration.replace("s",""))*1e3),g(()=>{t.before()}),n=!0,requestAnimationFrame(()=>{r||(g(()=>{t.end()}),ze(),setTimeout(e._x_transitioning.finish,a+s),i=!0)})})}function re(e,t,r){if(e.indexOf(t)===-1)return r;const n=e[e.indexOf(t)+1];if(!n||t==="scale"&&isNaN(n))return r;if(t==="duration"||t==="delay"){let i=n.match(/([0-9]+)ms/);if(i)return i[1]}return t==="origin"&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[n,e[e.indexOf(t)+2]].join(" "):n}var j=!1;function I(e,t=()=>{}){return(...r)=>j?t(...r):e(...r)}function Bn(e){return(...t)=>j&&e(...t)}var fr=[];function Ae(e){fr.push(e)}function zn(e,t){fr.forEach(r=>r(e,t)),j=!0,dr(()=>{k(t,(r,n)=>{n(r,()=>{})})}),j=!1}var qe=!1;function Kn(e,t){t._x_dataStack||(t._x_dataStack=e._x_dataStack),j=!0,qe=!0,dr(()=>{Hn(t)}),j=!1,qe=!1}function Hn(e){let t=!1;k(e,(n,i)=>{K(n,(o,a)=>{if(t&&Mn(o))return a();t=!0,i(o,a)})})}function dr(e){let t=q;xt((r,n)=>{let i=t(r);return Y(i),()=>{}}),e(),xt(t)}function pr(e,t,r,n=[]){switch(e._x_bindings||(e._x_bindings=G({})),e._x_bindings[t]=r,t=n.includes("camel")?Xn(t):t,t){case"value":qn(e,r);break;case"style":Wn(e,r);break;case"class":Vn(e,r);break;case"selected":case"checked":Un(e,t,r);break;default:hr(e,t,r);break}}function qn(e,t){if(xr(e))e.attributes.value===void 0&&(e.value=t),window.fromModel&&(typeof t=="boolean"?e.checked=me(e.value)===t:e.checked=bt(e.value,t));else if(lt(e))Number.isInteger(t)?e.value=t:!Array.isArray(t)&&typeof t!="boolean"&&![null,void 0].includes(t)?e.value=String(t):Array.isArray(t)?e.checked=t.some(r=>bt(r,e.value)):e.checked=!!t;else if(e.tagName==="SELECT")Yn(e,t);else{if(e.value===t)return;e.value=t===void 0?"":t}}function Vn(e,t){e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedClasses=st(e,t)}function Wn(e,t){e._x_undoAddedStyles&&e._x_undoAddedStyles(),e._x_undoAddedStyles=Ee(e,t)}function Un(e,t,r){hr(e,t,r),Gn(e,t,r)}function hr(e,t,r){[null,void 0,!1].includes(r)&&Qn(t)?e.removeAttribute(t):(_r(t)&&(r=t),Jn(e,t,r))}function Jn(e,t,r){e.getAttribute(t)!=r&&e.setAttribute(t,r)}function Gn(e,t,r){e[t]!==r&&(e[t]=r)}function Yn(e,t){const r=[].concat(t).map(n=>n+"");Array.from(e.options).forEach(n=>{n.selected=r.includes(n.value)})}function Xn(e){return e.toLowerCase().replace(/-(\w)/g,(t,r)=>r.toUpperCase())}function bt(e,t){return e==t}function me(e){return[1,"1","true","on","yes",!0].includes(e)?!0:[0,"0","false","off","no",!1].includes(e)?!1:e?!!e:null}var Zn=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","shadowrootclonable","shadowrootdelegatesfocus","shadowrootserializable"]);function _r(e){return Zn.has(e)}function Qn(e){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(e)}function ei(e,t,r){return e._x_bindings&&e._x_bindings[t]!==void 0?e._x_bindings[t]:gr(e,t,r)}function ti(e,t,r,n=!0){if(e._x_bindings&&e._x_bindings[t]!==void 0)return e._x_bindings[t];if(e._x_inlineBindings&&e._x_inlineBindings[t]!==void 0){let i=e._x_inlineBindings[t];return i.extract=n,qt(()=>L(e,i.expression))}return gr(e,t,r)}function gr(e,t,r){let n=e.getAttribute(t);return n===null?typeof r=="function"?r():r:n===""?!0:_r(t)?!![t,"true"].includes(n):n}function lt(e){return e.type==="checkbox"||e.localName==="ui-checkbox"||e.localName==="ui-switch"}function xr(e){return e.type==="radio"||e.localName==="ui-radio"}function mr(e,t){let r;return function(){const n=this,i=arguments,o=function(){r=null,e.apply(n,i)};clearTimeout(r),r=setTimeout(o,t)}}function vr(e,t){let r;return function(){let n=this,i=arguments;r||(e.apply(n,i),r=!0,setTimeout(()=>r=!1,t))}}function br({get:e,set:t},{get:r,set:n}){let i=!0,o,a=q(()=>{let s=e(),l=r();if(i)n(Te(s)),i=!1;else{let c=JSON.stringify(s),u=JSON.stringify(l);c!==o?n(Te(s)):c!==u&&t(Te(l))}o=JSON.stringify(e()),JSON.stringify(r())});return()=>{Y(a)}}function Te(e){return typeof e=="object"?JSON.parse(JSON.stringify(e)):e}function ri(e){(Array.isArray(e)?e:[e]).forEach(r=>r(Q))}var R={},yt=!1;function ni(e,t){if(yt||(R=G(R),yt=!0),t===void 0)return R[e];R[e]=t,et(R[e]),typeof t=="object"&&t!==null&&t.hasOwnProperty("init")&&typeof t.init=="function"&&R[e].init()}function ii(){return R}var yr={};function oi(e,t){let r=typeof t!="function"?()=>t:t;return e instanceof Element?wr(e,r()):(yr[e]=r,()=>{})}function ai(e){return Object.entries(yr).forEach(([t,r])=>{Object.defineProperty(e,t,{get(){return(...n)=>r(...n)}})}),e}function wr(e,t,r){let n=[];for(;n.length;)n.pop()();let i=Object.entries(t).map(([a,s])=>({name:a,value:s})),o=Jt(i);return i=i.map(a=>o.find(s=>s.name===a.name)?{name:`x-bind:${a.name}`,value:`"${a.value}"`}:a),rt(e,i,r).map(a=>{n.push(a.runCleanups),a()}),()=>{for(;n.length;)n.pop()()}}var Er={};function si(e,t){Er[e]=t}function li(e,t){return Object.entries(Er).forEach(([r,n])=>{Object.defineProperty(e,r,{get(){return(...i)=>n.bind(t)(...i)},enumerable:!1})}),e}var ci={get reactive(){return G},get release(){return Y},get effect(){return q},get raw(){return jt},version:"3.15.5",flushAndStopDeferringMutations:an,dontAutoEvaluateFunctions:qt,disableEffectScheduling:Zr,startObservingMutations:Xe,stopObservingMutations:Dt,setReactivityEngine:Qr,onAttributeRemoved:Lt,onAttributesAdded:Ft,closestDataStack:B,skipDuringClone:I,onlyDuringClone:Bn,addRootSelector:ar,addInitSelector:sr,setErrorHandler:dn,interceptClone:Ae,addScopeToNode:ue,deferMutations:on,mapAttributes:nt,evaluateLater:y,interceptInit:kn,initInterceptors:et,injectMagics:se,setEvaluator:hn,setRawEvaluator:_n,mergeProxies:z,extractProp:ti,findClosest:H,onElRemoved:Je,closestRoot:we,destroyTree:Z,interceptor:zt,transition:He,setStyles:Ee,mutateDom:g,directive:m,entangle:br,throttle:vr,debounce:mr,evaluate:L,evaluateRaw:vn,initTree:k,nextTick:at,prefixed:X,prefix:yn,plugin:ri,magic:C,store:ni,start:Cn,clone:Kn,cloneNode:zn,bound:ei,$data:Bt,watch:Pt,walk:K,data:si,bind:oi},Q=ci;function ui(e,t){const r=Object.create(null),n=e.split(",");for(let i=0;i<n.length;i++)r[n[i]]=!0;return i=>!!r[i]}var fi=Object.freeze({}),di=Object.prototype.hasOwnProperty,Se=(e,t)=>di.call(e,t),N=Array.isArray,ae=e=>Ar(e)==="[object Map]",pi=e=>typeof e=="string",ct=e=>typeof e=="symbol",Oe=e=>e!==null&&typeof e=="object",hi=Object.prototype.toString,Ar=e=>hi.call(e),Sr=e=>Ar(e).slice(8,-1),ut=e=>pi(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_i=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},gi=_i(e=>e.charAt(0).toUpperCase()+e.slice(1)),Or=(e,t)=>e!==t&&(e===e||t===t),Ve=new WeakMap,ne=[],M,D=Symbol("iterate"),We=Symbol("Map key iterate");function xi(e){return e&&e._isEffect===!0}function mi(e,t=fi){xi(e)&&(e=e.raw);const r=yi(e,t);return t.lazy||r(),r}function vi(e){e.active&&(Cr(e),e.options.onStop&&e.options.onStop(),e.active=!1)}var bi=0;function yi(e,t){const r=function(){if(!r.active)return e();if(!ne.includes(r)){Cr(r);try{return Ei(),ne.push(r),M=r,e()}finally{ne.pop(),Mr(),M=ne[ne.length-1]}}};return r.id=bi++,r.allowRecurse=!!t.allowRecurse,r._isEffect=!0,r.active=!0,r.raw=e,r.deps=[],r.options=t,r}function Cr(e){const{deps:t}=e;if(t.length){for(let r=0;r<t.length;r++)t[r].delete(e);t.length=0}}var J=!0,ft=[];function wi(){ft.push(J),J=!1}function Ei(){ft.push(J),J=!0}function Mr(){const e=ft.pop();J=e===void 0?!0:e}function O(e,t,r){if(!J||M===void 0)return;let n=Ve.get(e);n||Ve.set(e,n=new Map);let i=n.get(r);i||n.set(r,i=new Set),i.has(M)||(i.add(M),M.deps.push(i),M.options.onTrack&&M.options.onTrack({effect:M,target:e,type:t,key:r}))}function P(e,t,r,n,i,o){const a=Ve.get(e);if(!a)return;const s=new Set,l=u=>{u&&u.forEach(d=>{(d!==M||d.allowRecurse)&&s.add(d)})};if(t==="clear")a.forEach(l);else if(r==="length"&&N(e))a.forEach((u,d)=>{(d==="length"||d>=n)&&l(u)});else switch(r!==void 0&&l(a.get(r)),t){case"add":N(e)?ut(r)&&l(a.get("length")):(l(a.get(D)),ae(e)&&l(a.get(We)));break;case"delete":N(e)||(l(a.get(D)),ae(e)&&l(a.get(We)));break;case"set":ae(e)&&l(a.get(D));break}const c=u=>{u.options.onTrigger&&u.options.onTrigger({effect:u,target:e,key:r,type:t,newValue:n,oldValue:i,oldTarget:o}),u.options.scheduler?u.options.scheduler(u):u()};s.forEach(c)}var Ai=ui("__proto__,__v_isRef,__isVue"),kr=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(ct)),Si=Tr(),Oi=Tr(!0),wt=Ci();function Ci(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...r){const n=_(this);for(let o=0,a=this.length;o<a;o++)O(n,"get",o+"");const i=n[t](...r);return i===-1||i===!1?n[t](...r.map(_)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...r){wi();const n=_(this)[t].apply(this,r);return Mr(),n}}),e}function Tr(e=!1,t=!1){return function(n,i,o){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_raw"&&o===(e?t?zi:Rr:t?Bi:Ir).get(n))return n;const a=N(n);if(!e&&a&&Se(wt,i))return Reflect.get(wt,i,o);const s=Reflect.get(n,i,o);return(ct(i)?kr.has(i):Ai(i))||(e||O(n,"get",i),t)?s:Ue(s)?!a||!ut(i)?s.value:s:Oe(s)?e?$r(s):_t(s):s}}var Mi=ki();function ki(e=!1){return function(r,n,i,o){let a=r[n];if(!e&&(i=_(i),a=_(a),!N(r)&&Ue(a)&&!Ue(i)))return a.value=i,!0;const s=N(r)&&ut(n)?Number(n)<r.length:Se(r,n),l=Reflect.set(r,n,i,o);return r===_(o)&&(s?Or(i,a)&&P(r,"set",n,i,a):P(r,"add",n,i)),l}}function Ti(e,t){const r=Se(e,t),n=e[t],i=Reflect.deleteProperty(e,t);return i&&r&&P(e,"delete",t,void 0,n),i}function ji(e,t){const r=Reflect.has(e,t);return(!ct(t)||!kr.has(t))&&O(e,"has",t),r}function Pi(e){return O(e,"iterate",N(e)?"length":D),Reflect.ownKeys(e)}var Ii={get:Si,set:Mi,deleteProperty:Ti,has:ji,ownKeys:Pi},Ri={get:Oi,set(e,t){return console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},dt=e=>Oe(e)?_t(e):e,pt=e=>Oe(e)?$r(e):e,ht=e=>e,Ce=e=>Reflect.getPrototypeOf(e);function de(e,t,r=!1,n=!1){e=e.__v_raw;const i=_(e),o=_(t);t!==o&&!r&&O(i,"get",t),!r&&O(i,"get",o);const{has:a}=Ce(i),s=n?ht:r?pt:dt;if(a.call(i,t))return s(e.get(t));if(a.call(i,o))return s(e.get(o));e!==i&&e.get(t)}function pe(e,t=!1){const r=this.__v_raw,n=_(r),i=_(e);return e!==i&&!t&&O(n,"has",e),!t&&O(n,"has",i),e===i?r.has(e):r.has(e)||r.has(i)}function he(e,t=!1){return e=e.__v_raw,!t&&O(_(e),"iterate",D),Reflect.get(e,"size",e)}function Et(e){e=_(e);const t=_(this);return Ce(t).has.call(t,e)||(t.add(e),P(t,"add",e,e)),this}function At(e,t){t=_(t);const r=_(this),{has:n,get:i}=Ce(r);let o=n.call(r,e);o?Pr(r,n,e):(e=_(e),o=n.call(r,e));const a=i.call(r,e);return r.set(e,t),o?Or(t,a)&&P(r,"set",e,t,a):P(r,"add",e,t),this}function St(e){const t=_(this),{has:r,get:n}=Ce(t);let i=r.call(t,e);i?Pr(t,r,e):(e=_(e),i=r.call(t,e));const o=n?n.call(t,e):void 0,a=t.delete(e);return i&&P(t,"delete",e,void 0,o),a}function Ot(){const e=_(this),t=e.size!==0,r=ae(e)?new Map(e):new Set(e),n=e.clear();return t&&P(e,"clear",void 0,void 0,r),n}function _e(e,t){return function(n,i){const o=this,a=o.__v_raw,s=_(a),l=t?ht:e?pt:dt;return!e&&O(s,"iterate",D),a.forEach((c,u)=>n.call(i,l(c),l(u),o))}}function ge(e,t,r){return function(...n){const i=this.__v_raw,o=_(i),a=ae(o),s=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,c=i[e](...n),u=r?ht:t?pt:dt;return!t&&O(o,"iterate",l?We:D),{next(){const{value:d,done:b}=c.next();return b?{value:d,done:b}:{value:s?[u(d[0]),u(d[1])]:u(d),done:b}},[Symbol.iterator](){return this}}}}function T(e){return function(...t){{const r=t[0]?`on key "${t[0]}" `:"";console.warn(`${gi(e)} operation ${r}failed: target is readonly.`,_(this))}return e==="delete"?!1:this}}function $i(){const e={get(o){return de(this,o)},get size(){return he(this)},has:pe,add:Et,set:At,delete:St,clear:Ot,forEach:_e(!1,!1)},t={get(o){return de(this,o,!1,!0)},get size(){return he(this)},has:pe,add:Et,set:At,delete:St,clear:Ot,forEach:_e(!1,!0)},r={get(o){return de(this,o,!0)},get size(){return he(this,!0)},has(o){return pe.call(this,o,!0)},add:T("add"),set:T("set"),delete:T("delete"),clear:T("clear"),forEach:_e(!0,!1)},n={get(o){return de(this,o,!0,!0)},get size(){return he(this,!0)},has(o){return pe.call(this,o,!0)},add:T("add"),set:T("set"),delete:T("delete"),clear:T("clear"),forEach:_e(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=ge(o,!1,!1),r[o]=ge(o,!0,!1),t[o]=ge(o,!1,!0),n[o]=ge(o,!0,!0)}),[e,r,t,n]}var[Fi,Li]=$i();function jr(e,t){const r=e?Li:Fi;return(n,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?n:Reflect.get(Se(r,i)&&i in n?r:n,i,o)}var Ni={get:jr(!1)},Di={get:jr(!0)};function Pr(e,t,r){const n=_(r);if(n!==r&&t.call(e,n)){const i=Sr(e);console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var Ir=new WeakMap,Bi=new WeakMap,Rr=new WeakMap,zi=new WeakMap;function Ki(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hi(e){return e.__v_skip||!Object.isExtensible(e)?0:Ki(Sr(e))}function _t(e){return e&&e.__v_isReadonly?e:Fr(e,!1,Ii,Ni,Ir)}function $r(e){return Fr(e,!0,Ri,Di,Rr)}function Fr(e,t,r,n,i){if(!Oe(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=i.get(e);if(o)return o;const a=Hi(e);if(a===0)return e;const s=new Proxy(e,a===2?n:r);return i.set(e,s),s}function _(e){return e&&_(e.__v_raw)||e}function Ue(e){return!!(e&&e.__v_isRef===!0)}C("nextTick",()=>at);C("dispatch",e=>oe.bind(oe,e));C("watch",(e,{evaluateLater:t,cleanup:r})=>(n,i)=>{let o=t(n),s=Pt(()=>{let l;return o(c=>l=c),l},i);r(s)});C("store",ii);C("data",e=>Bt(e));C("root",e=>we(e));C("refs",e=>(e._x_refs_proxy||(e._x_refs_proxy=z(qi(e))),e._x_refs_proxy));function qi(e){let t=[];return H(e,r=>{r._x_refs&&t.push(r._x_refs)}),t}var je={};function Lr(e){return je[e]||(je[e]=0),++je[e]}function Vi(e,t){return H(e,r=>{if(r._x_ids&&r._x_ids[t])return!0})}function Wi(e,t){e._x_ids||(e._x_ids={}),e._x_ids[t]||(e._x_ids[t]=Lr(t))}C("id",(e,{cleanup:t})=>(r,n=null)=>{let i=`${r}${n?`-${n}`:""}`;return Ui(e,i,t,()=>{let o=Vi(e,r),a=o?o._x_ids[r]:Lr(r);return n?`${r}-${a}-${n}`:`${r}-${a}`})});Ae((e,t)=>{e._x_id&&(t._x_id=e._x_id)});function Ui(e,t,r,n){if(e._x_id||(e._x_id={}),e._x_id[t])return e._x_id[t];let i=n();return e._x_id[t]=i,r(()=>{delete e._x_id[t]}),i}C("el",e=>e);Nr("Focus","focus","focus");Nr("Persist","persist","persist");function Nr(e,t,r){C(t,n=>A(`You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`,n))}m("modelable",(e,{expression:t},{effect:r,evaluateLater:n,cleanup:i})=>{let o=n(t),a=()=>{let u;return o(d=>u=d),u},s=n(`${t} = __placeholder`),l=u=>s(()=>{},{scope:{__placeholder:u}}),c=a();l(c),queueMicrotask(()=>{if(!e._x_model)return;e._x_removeModelListeners.default();let u=e._x_model.get,d=e._x_model.set,b=br({get(){return u()},set(w){d(w)}},{get(){return a()},set(w){l(w)}});i(b)})});m("teleport",(e,{modifiers:t,expression:r},{cleanup:n})=>{e.tagName.toLowerCase()!=="template"&&A("x-teleport can only be used on a <template> tag",e);let i=Ct(r),o=e.content.cloneNode(!0).firstElementChild;e._x_teleport=o,o._x_teleportBack=e,e.setAttribute("data-teleport-template",!0),o.setAttribute("data-teleport-target",!0),e._x_forwardEvents&&e._x_forwardEvents.forEach(s=>{o.addEventListener(s,l=>{l.stopPropagation(),e.dispatchEvent(new l.constructor(l.type,l))})}),ue(o,{},e);let a=(s,l,c)=>{c.includes("prepend")?l.parentNode.insertBefore(s,l):c.includes("append")?l.parentNode.insertBefore(s,l.nextSibling):l.appendChild(s)};g(()=>{a(o,i,t),I(()=>{k(o)})()}),e._x_teleportPutBack=()=>{let s=Ct(r);g(()=>{a(e._x_teleport,s,t)})},n(()=>g(()=>{o.remove(),Z(o)}))});var Ji=document.createElement("div");function Ct(e){let t=I(()=>document.querySelector(e),()=>Ji)();return t||A(`Cannot find x-teleport element for selector: "${e}"`),t}var Dr=()=>{};Dr.inline=(e,{modifiers:t},{cleanup:r})=>{t.includes("self")?e._x_ignoreSelf=!0:e._x_ignore=!0,r(()=>{t.includes("self")?delete e._x_ignoreSelf:delete e._x_ignore})};m("ignore",Dr);m("effect",I((e,{expression:t},{effect:r})=>{r(y(e,t))}));function W(e,t,r,n){let i=e,o=l=>n(l),a={},s=(l,c)=>u=>c(l,u);if(r.includes("dot")&&(t=Gi(t)),r.includes("camel")&&(t=Yi(t)),r.includes("passive")&&(a.passive=!0),r.includes("capture")&&(a.capture=!0),r.includes("window")&&(i=window),r.includes("document")&&(i=document),r.includes("debounce")){let l=r[r.indexOf("debounce")+1]||"invalid-wait",c=ye(l.split("ms")[0])?Number(l.split("ms")[0]):250;o=mr(o,c)}if(r.includes("throttle")){let l=r[r.indexOf("throttle")+1]||"invalid-wait",c=ye(l.split("ms")[0])?Number(l.split("ms")[0]):250;o=vr(o,c)}return r.includes("prevent")&&(o=s(o,(l,c)=>{c.preventDefault(),l(c)})),r.includes("stop")&&(o=s(o,(l,c)=>{c.stopPropagation(),l(c)})),r.includes("once")&&(o=s(o,(l,c)=>{l(c),i.removeEventListener(t,o,a)})),(r.includes("away")||r.includes("outside"))&&(i=document,o=s(o,(l,c)=>{e.contains(c.target)||c.target.isConnected!==!1&&(e.offsetWidth<1&&e.offsetHeight<1||e._x_isShown!==!1&&l(c))})),r.includes("self")&&(o=s(o,(l,c)=>{c.target===e&&l(c)})),(Zi(t)||Br(t))&&(o=s(o,(l,c)=>{Qi(c,r)||l(c)})),i.addEventListener(t,o,a),()=>{i.removeEventListener(t,o,a)}}function Gi(e){return e.replace(/-/g,".")}function Yi(e){return e.toLowerCase().replace(/-(\w)/g,(t,r)=>r.toUpperCase())}function ye(e){return!Array.isArray(e)&&!isNaN(e)}function Xi(e){return[" ","_"].includes(e)?e:e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function Zi(e){return["keydown","keyup"].includes(e)}function Br(e){return["contextmenu","click","mouse"].some(t=>e.includes(t))}function Qi(e,t){let r=t.filter(o=>!["window","document","prevent","stop","once","capture","self","away","outside","passive","preserve-scroll","blur","change","lazy"].includes(o));if(r.includes("debounce")){let o=r.indexOf("debounce");r.splice(o,ye((r[o+1]||"invalid-wait").split("ms")[0])?2:1)}if(r.includes("throttle")){let o=r.indexOf("throttle");r.splice(o,ye((r[o+1]||"invalid-wait").split("ms")[0])?2:1)}if(r.length===0||r.length===1&&Mt(e.key).includes(r[0]))return!1;const i=["ctrl","shift","alt","meta","cmd","super"].filter(o=>r.includes(o));return r=r.filter(o=>!i.includes(o)),!(i.length>0&&i.filter(a=>((a==="cmd"||a==="super")&&(a="meta"),e[`${a}Key`])).length===i.length&&(Br(e.type)||Mt(e.key).includes(r[0])))}function Mt(e){if(!e)return[];e=Xi(e);let t={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return t[e]=e,Object.keys(t).map(r=>{if(t[r]===e)return r}).filter(r=>r)}m("model",(e,{modifiers:t,expression:r},{effect:n,cleanup:i})=>{let o=e;t.includes("parent")&&(o=e.parentNode);let a=y(o,r),s;typeof r=="string"?s=y(o,`${r} = __placeholder`):typeof r=="function"&&typeof r()=="string"?s=y(o,`${r()} = __placeholder`):s=()=>{};let l=()=>{let h;return a(f=>h=f),kt(h)?h.get():h},c=h=>{let f;a(p=>f=p),kt(f)?f.set(h):s(()=>{},{scope:{__placeholder:h}})};typeof r=="string"&&e.type==="radio"&&g(()=>{e.hasAttribute("name")||e.setAttribute("name",r)});let u=t.includes("change")||t.includes("lazy"),d=t.includes("blur"),b=t.includes("enter"),w=u||d||b,S;if(j)S=()=>{};else if(w){let h=[],f=p=>c(xe(e,t,p,l()));u&&h.push(W(e,"change",t,f)),d&&h.push(W(e,"blur",t,f)),b&&h.push(W(e,"keydown",t,p=>{p.key==="Enter"&&f(p)})),S=()=>h.forEach(p=>p())}else{let h=e.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(e.type)?"change":"input";S=W(e,h,t,f=>{c(xe(e,t,f,l()))})}if(t.includes("fill")&&([void 0,null,""].includes(l())||lt(e)&&Array.isArray(l())||e.tagName.toLowerCase()==="select"&&e.multiple)&&c(xe(e,t,{target:e},l())),e._x_removeModelListeners||(e._x_removeModelListeners={}),e._x_removeModelListeners.default=S,i(()=>e._x_removeModelListeners.default()),e.form){let h=W(e.form,"reset",[],f=>{at(()=>e._x_model&&e._x_model.set(xe(e,t,{target:e},l())))});i(()=>h())}e._x_model={get(){return l()},set(h){c(h)}},e._x_forceModelUpdate=h=>{h===void 0&&typeof r=="string"&&r.match(/\./)&&(h=""),window.fromModel=!0,g(()=>pr(e,"value",h)),delete window.fromModel},n(()=>{let h=l();t.includes("unintrusive")&&document.activeElement.isSameNode(e)||e._x_forceModelUpdate(h)})});function xe(e,t,r,n){return g(()=>{if(r instanceof CustomEvent&&r.detail!==void 0)return r.detail!==null&&r.detail!==void 0?r.detail:r.target.value;if(lt(e))if(Array.isArray(n)){let i=null;return t.includes("number")?i=Pe(r.target.value):t.includes("boolean")?i=me(r.target.value):i=r.target.value,r.target.checked?n.includes(i)?n:n.concat([i]):n.filter(o=>!eo(o,i))}else return r.target.checked;else{if(e.tagName.toLowerCase()==="select"&&e.multiple)return t.includes("number")?Array.from(r.target.selectedOptions).map(i=>{let o=i.value||i.text;return Pe(o)}):t.includes("boolean")?Array.from(r.target.selectedOptions).map(i=>{let o=i.value||i.text;return me(o)}):Array.from(r.target.selectedOptions).map(i=>i.value||i.text);{let i;return xr(e)?r.target.checked?i=r.target.value:i=n:i=r.target.value,t.includes("number")?Pe(i):t.includes("boolean")?me(i):t.includes("trim")?i.trim():i}}})}function Pe(e){let t=e?parseFloat(e):null;return to(t)?t:e}function eo(e,t){return e==t}function to(e){return!Array.isArray(e)&&!isNaN(e)}function kt(e){return e!==null&&typeof e=="object"&&typeof e.get=="function"&&typeof e.set=="function"}m("cloak",e=>queueMicrotask(()=>g(()=>e.removeAttribute(X("cloak")))));sr(()=>`[${X("init")}]`);m("init",I((e,{expression:t},{evaluate:r})=>typeof t=="string"?!!t.trim()&&r(t,{},!1):r(t,{},!1)));m("text",(e,{expression:t},{effect:r,evaluateLater:n})=>{let i=n(t);r(()=>{i(o=>{g(()=>{e.textContent=o})})})});m("html",(e,{expression:t},{effect:r,evaluateLater:n})=>{let i=n(t);r(()=>{i(o=>{g(()=>{e.innerHTML=o,e._x_ignoreSelf=!0,k(e),delete e._x_ignoreSelf})})})});nt(Xt(":",Zt(X("bind:"))));var zr=(e,{value:t,modifiers:r,expression:n,original:i},{effect:o,cleanup:a})=>{if(!t){let l={};ai(l),y(e,n)(u=>{wr(e,u,i)},{scope:l});return}if(t==="key")return ro(e,n);if(e._x_inlineBindings&&e._x_inlineBindings[t]&&e._x_inlineBindings[t].extract)return;let s=y(e,n);o(()=>s(l=>{l===void 0&&typeof n=="string"&&n.match(/\./)&&(l=""),g(()=>pr(e,t,l,r))})),a(()=>{e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedStyles&&e._x_undoAddedStyles()})};zr.inline=(e,{value:t,modifiers:r,expression:n})=>{t&&(e._x_inlineBindings||(e._x_inlineBindings={}),e._x_inlineBindings[t]={expression:n,extract:!1})};m("bind",zr);function ro(e,t){e._x_keyExpression=t}ar(()=>`[${X("data")}]`);m("data",(e,{expression:t},{cleanup:r})=>{if(no(e))return;t=t===""?"{}":t;let n={};se(n,e);let i={};li(i,n);let o=L(e,t,{scope:i});(o===void 0||o===!0)&&(o={}),se(o,e);let a=G(o);et(a);let s=ue(e,a);a.init&&L(e,a.init),r(()=>{a.destroy&&L(e,a.destroy),s()})});Ae((e,t)=>{e._x_dataStack&&(t._x_dataStack=e._x_dataStack,t.setAttribute("data-has-alpine-state",!0))});function no(e){return j?qe?!0:e.hasAttribute("data-has-alpine-state"):!1}m("show",(e,{modifiers:t,expression:r},{effect:n})=>{let i=y(e,r);e._x_doHide||(e._x_doHide=()=>{g(()=>{e.style.setProperty("display","none",t.includes("important")?"important":void 0)})}),e._x_doShow||(e._x_doShow=()=>{g(()=>{e.style.length===1&&e.style.display==="none"?e.removeAttribute("style"):e.style.removeProperty("display")})});let o=()=>{e._x_doHide(),e._x_isShown=!1},a=()=>{e._x_doShow(),e._x_isShown=!0},s=()=>setTimeout(a),l=Ke(d=>d?a():o(),d=>{typeof e._x_toggleAndCascadeWithTransitions=="function"?e._x_toggleAndCascadeWithTransitions(e,d,a,o):d?s():o()}),c,u=!0;n(()=>i(d=>{!u&&d===c||(t.includes("immediate")&&(d?s():o()),l(d),c=d,u=!1)}))});m("for",(e,{expression:t},{effect:r,cleanup:n})=>{let i=oo(t),o=y(e,i.items),a=y(e,e._x_keyExpression||"index");e._x_prevKeys=[],e._x_lookup={},r(()=>io(e,i,o,a)),n(()=>{Object.values(e._x_lookup).forEach(s=>g(()=>{Z(s),s.remove()})),delete e._x_prevKeys,delete e._x_lookup})});function io(e,t,r,n){let i=a=>typeof a=="object"&&!Array.isArray(a),o=e;r(a=>{ao(a)&&a>=0&&(a=Array.from(Array(a).keys(),f=>f+1)),a===void 0&&(a=[]);let s=e._x_lookup,l=e._x_prevKeys,c=[],u=[];if(i(a))a=Object.entries(a).map(([f,p])=>{let x=Tt(t,p,f,a);n(v=>{u.includes(v)&&A("Duplicate key on x-for",e),u.push(v)},{scope:{index:f,...x}}),c.push(x)});else for(let f=0;f<a.length;f++){let p=Tt(t,a[f],f,a);n(x=>{u.includes(x)&&A("Duplicate key on x-for",e),u.push(x)},{scope:{index:f,...p}}),c.push(p)}let d=[],b=[],w=[],S=[];for(let f=0;f<l.length;f++){let p=l[f];u.indexOf(p)===-1&&w.push(p)}l=l.filter(f=>!w.includes(f));let h="template";for(let f=0;f<u.length;f++){let p=u[f],x=l.indexOf(p);if(x===-1)l.splice(f,0,p),d.push([h,f]);else if(x!==f){let v=l.splice(f,1)[0],E=l.splice(x-1,1)[0];l.splice(f,0,E),l.splice(x,0,v),b.push([v,E])}else S.push(p);h=p}for(let f=0;f<w.length;f++){let p=w[f];p in s&&(g(()=>{Z(s[p]),s[p].remove()}),delete s[p])}for(let f=0;f<b.length;f++){let[p,x]=b[f],v=s[p],E=s[x],V=document.createElement("div");g(()=>{E||A('x-for ":key" is undefined or invalid',o,x,s),E.after(V),v.after(E),E._x_currentIfEl&&E.after(E._x_currentIfEl),V.before(v),v._x_currentIfEl&&v.after(v._x_currentIfEl),V.remove()}),E._x_refreshXForScope(c[u.indexOf(x)])}for(let f=0;f<d.length;f++){let[p,x]=d[f],v=p==="template"?o:s[p];v._x_currentIfEl&&(v=v._x_currentIfEl);let E=c[x],V=u[x],ee=document.importNode(o.content,!0).firstElementChild,gt=G(E);ue(ee,gt,o),ee._x_refreshXForScope=qr=>{Object.entries(qr).forEach(([Vr,Wr])=>{gt[Vr]=Wr})},g(()=>{v.after(ee),I(()=>k(ee))()}),typeof V=="object"&&A("x-for key cannot be an object, it must be a string or an integer",o),s[V]=ee}for(let f=0;f<S.length;f++)s[S[f]]._x_refreshXForScope(c[u.indexOf(S[f])]);o._x_prevKeys=u})}function oo(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,r=/^\s*\(|\)\s*$/g,n=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,i=e.match(n);if(!i)return;let o={};o.items=i[2].trim();let a=i[1].replace(r,"").trim(),s=a.match(t);return s?(o.item=a.replace(t,"").trim(),o.index=s[1].trim(),s[2]&&(o.collection=s[2].trim())):o.item=a,o}function Tt(e,t,r,n){let i={};return/^\[.*\]$/.test(e.item)&&Array.isArray(t)?e.item.replace("[","").replace("]","").split(",").map(a=>a.trim()).forEach((a,s)=>{i[a]=t[s]}):/^\{.*\}$/.test(e.item)&&!Array.isArray(t)&&typeof t=="object"?e.item.replace("{","").replace("}","").split(",").map(a=>a.trim()).forEach(a=>{i[a]=t[a]}):i[e.item]=t,e.index&&(i[e.index]=r),e.collection&&(i[e.collection]=n),i}function ao(e){return!Array.isArray(e)&&!isNaN(e)}function Kr(){}Kr.inline=(e,{expression:t},{cleanup:r})=>{let n=we(e);n._x_refs||(n._x_refs={}),n._x_refs[t]=e,r(()=>delete n._x_refs[t])};m("ref",Kr);m("if",(e,{expression:t},{effect:r,cleanup:n})=>{e.tagName.toLowerCase()!=="template"&&A("x-if can only be used on a <template> tag",e);let i=y(e,t),o=()=>{if(e._x_currentIfEl)return e._x_currentIfEl;let s=e.content.cloneNode(!0).firstElementChild;return ue(s,{},e),g(()=>{e.after(s),I(()=>k(s))()}),e._x_currentIfEl=s,e._x_undoIf=()=>{g(()=>{Z(s),s.remove()}),delete e._x_currentIfEl},s},a=()=>{e._x_undoIf&&(e._x_undoIf(),delete e._x_undoIf)};r(()=>i(s=>{s?o():a()})),n(()=>e._x_undoIf&&e._x_undoIf())});m("id",(e,{expression:t},{evaluate:r})=>{r(t).forEach(i=>Wi(e,i))});Ae((e,t)=>{e._x_ids&&(t._x_ids=e._x_ids)});nt(Xt("@",Zt(X("on:"))));m("on",I((e,{value:t,modifiers:r,expression:n},{cleanup:i})=>{let o=n?y(e,n):()=>{};e.tagName.toLowerCase()==="template"&&(e._x_forwardEvents||(e._x_forwardEvents=[]),e._x_forwardEvents.includes(t)||e._x_forwardEvents.push(t));let a=W(e,t,r,s=>{o(()=>{},{scope:{$event:s},params:[s]})});i(()=>a())}));Me("Collapse","collapse","collapse");Me("Intersect","intersect","intersect");Me("Focus","trap","focus");Me("Mask","mask","mask");function Me(e,t,r){m(t,n=>A(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`,n))}Q.setEvaluator(Ut);Q.setRawEvaluator(bn);Q.setReactivityEngine({reactive:_t,effect:mi,release:vi,raw:_});var so=Q,Hr=so;const lo=`<nav\r
  class="bg-[#D32F2F] text-white py-3 border-b-4 border-white relative z-30 shadow-md"\r
>\r
  <div class="container mx-auto px-4 flex justify-between items-center">\r
    <div class="flex items-center gap-3">\r
      <img\r
        src="/logo.png"\r
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
    <div>\r
      <a\r
        href="#footer-mount"\r
        class="bg-white text-[#D32F2F] font-bold uppercase tracking-wide text-xs md:text-base px-4 md:px-6 py-2 rounded-full shadow-sm hover:bg-black hover:text-white transition duration-300 border-2 border-transparent hover:border-white"\r
      >\r
        Contáctanos\r
      </a>\r
    </div>\r
  </div>\r
</nav>\r
`,co=()=>lo,uo=`<header\r
  class="relative w-full bg-gray-900 overflow-hidden h-[300px] md:h-[500px] lg:h-[600px]"\r
>\r
  <div class="relative w-full h-full">\r
    <img\r
      src="/banner2.png"\r
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
        src="/logo-perutruck.png"\r
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
`,fo=()=>uo,po=`<section\r
  class="bg-gray-100 py-16 relative z-10"\r
  x-data="categoriesComponent()"\r
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
            <div class="h-40 w-full flex items-center justify-center mb-4">\r
              <img\r
                :src="cat.img"\r
                :alt="cat.title"\r
                class="h-full w-auto max-w-full object-contain filter drop-shadow-lg transition-transform duration-500 group-hover:scale-110"\r
              />\r
            </div>\r
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
          <img\r
            :src="selectedCat.img"\r
            :alt="selectedCat.title"\r
            class="w-full h-auto max-h-48 md:max-h-64 object-contain drop-shadow-xl relative z-10"\r
          />\r
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
`,ho=[{title:"ARRANCADOR DE MOTOR",subtitle:"Potencia de ignición",img:"/arrancador.png",cta:"Más información",description:"Dispositivo electromecánico de alto rendimiento diseñado para convertir la energía eléctrica en fuerza mecánica de rotación. Esencial para iniciar el ciclo de combustión en motores diésel de carga pesada, garantizando un arranque fiable incluso en condiciones climáticas extremas."},{title:"ALTERNADOR DE MOTOR",subtitle:"Energía constante",img:"/alternador.png",cta:"Más información",description:"Generador de corriente trifásica con rectificación incorporada. Transforma la energía mecánica del motor en eléctrica para recargar la batería y alimentar los sistemas electrónicos del camión durante la marcha. Fabricado para soportar altas demandas de amperaje."},{title:"PLATO DE EMBRAGUE",subtitle:"Transmisión precisa",img:"/plato.png",cta:"Más información",description:"Componente de presión crítica que actúa como interfase entre el motor y la caja de cambios. Su diafragma de acero tratado térmicamente asegura una presión uniforme sobre el disco, permitiendo cambios de marcha suaves y evitando el patinamiento bajo carga."},{title:"DISCO DE EMBRAGUE",subtitle:"Fricción duradera",img:"/disco.png",cta:"Más información",description:"Elemento de fricción compuesto por materiales cerámicos o de fibra reforzada. Diseñado para absorber las vibraciones torsionales del motor y transmitir el torque a la transmisión con máxima eficiencia y resistencia al desgaste por temperatura."}],_o=()=>({modalOpen:!1,selectedCat:{},categories:ho,openModal(e){this.selectedCat=e,this.modalOpen=!0,document.body.style.overflow="hidden"},closeModal(){this.modalOpen=!1,document.body.style.overflow=""}});window.categoriesComponent=_o;const go=()=>po,xo=`<footer\r
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
`,mo=()=>xo,vo=`<div class="fixed bottom-8 right-8 z-50">\r
  <a\r
    href="#"\r
    target="_blank"\r
    class="bg-[#25D366] p-4 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:scale-110 hover:shadow-[0_6px_16px_rgba(0,0,0,0.4)] transition duration-300 flex items-center justify-center animate-bounce-slow"\r
  >\r
    <svg\r
      class="w-10 h-10 text-white"\r
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
`,bo=()=>vo,fe=(e,t)=>{const r=document.getElementById(e);r&&(r.innerHTML=t)};fe("navbar-mount",co());fe("hero-mount",fo());fe("categories-mount",go());fe("footer-mount",mo());fe("floating-btn-mount",bo());window.Alpine=Hr;Hr.start();
