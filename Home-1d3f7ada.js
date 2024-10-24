import{r as f,j as u,g as Wt,S as Kt}from"./index-d87980c1.js";function Yt(e){const r=f.useRef(null),t=f.useRef(""),n=f.useRef(!1),i=f.useRef(0),[o,s]=f.useState("");return f.useEffect(()=>{const p=()=>{const b=i.current%e.typewriterContent.length,v=e.typewriterContent[b];n.current?t.current=v.substring(0,t.current.length-1):t.current=v.substring(0,t.current.length+1),s(t.current);let F=n.current?75:150;!n.current&&t.current===v?(F=500,n.current=!0):n.current&&t.current===""&&(n.current=!1,i.current++,F=200),setTimeout(p,F)};p()},[e.typewriterContent,r]),u.jsxs("p",{ref:r,className:"typewriter",children:[e.children," ",o]})}function qt(){const[e,r]=f.useState(!1);return f.useEffect(()=>(window.addEventListener("scroll",()=>{r(!0)}),()=>window.removeEventListener("scroll",()=>r(!1))),[]),u.jsxs("div",{className:`${e?"scroll fade-out":"scroll"}`,children:[u.jsx("div",{className:"scroll-outline",children:u.jsx("div",{className:"scroll-dot"})}),u.jsx("p",{className:"scroll-text",children:"Scroll down, learn more"})]})}function Zt(){return u.jsxs("div",{className:"box",children:[u.jsx("div",{className:"wave -one"}),u.jsx("div",{className:"wave -two"}),u.jsx("div",{className:"wave -three"})]})}function Ze({children:e,className:r="",bottom:t=400}){const n=f.useRef(null);return f.useEffect(()=>{const i=()=>{n.current&&n.current.querySelectorAll("*").forEach(s=>{const p=s.getBoundingClientRect();p.top>=-800&&p.bottom<=(window.innerHeight||document.documentElement.clientHeight)+t?s.classList.add("fade-up-active"):(s.classList.add("fade-up"),s.classList.remove("fade-up-active"))})};return window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}},[t]),u.jsx("div",{className:"fader "+r,ref:n,children:e})}function Jt(){return u.jsx("div",{className:"about-me",children:u.jsx("div",{className:"stats",children:u.jsxs(Ze,{children:[u.jsx("h1",{className:"stats-header",children:"About"}),u.jsxs("h2",{className:"stats-title",children:["Shanti Stein-Gagnon | She/Her | Lv.",new Date().getFullYear()-2003]}),u.jsx("div",{children:u.jsxs("p",{className:"stats-text",children:["Hiya! I'm shanti. I'm a software engineer currently based out of vancouver.",u.jsx("br",{}),"I like music, art, and am a general computer enthusiast."]})}),u.jsxs("div",{className:"stats-info",children:[u.jsxs("ul",{children:[u.jsxs("li",{children:["Email: ",u.jsx("span",{children:u.jsx("a",{href:"mailto:Fishfinna12@gmail.com",children:"Fishfinna12@gmail.com"})})]}),u.jsxs("li",{children:["GitHub: ",u.jsx("span",{children:u.jsx("a",{href:"https://github.com/Fishfinna",children:"Fishfinna"})})]}),u.jsxs("li",{children:["LinkedIn: ",u.jsx("span",{children:u.jsx("a",{href:"https://www.linkedin.com/in/shanti-sg/",children:"shanti-sg"})})]})]}),u.jsx("div",{className:"my-image",children:u.jsx("img",{src:"/images/pixel-me.png"})})]})]})})})}var Xt=function(r){return Qt(r)&&!en(r)};function Qt(e){return!!e&&typeof e=="object"}function en(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||nn(e)}var rn=typeof Symbol=="function"&&Symbol.for,tn=rn?Symbol.for("react.element"):60103;function nn(e){return e.$$typeof===tn}function an(e){return Array.isArray(e)?[]:{}}function ve(e,r){return r.clone!==!1&&r.isMergeableObject(e)?se(an(e),e,r):e}function on(e,r,t){return e.concat(r).map(function(n){return ve(n,t)})}function sn(e,r,t){var n={};return t.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=ve(e[i],t)}),Object.keys(r).forEach(function(i){!t.isMergeableObject(r[i])||!e[i]?n[i]=ve(r[i],t):n[i]=se(e[i],r[i],t)}),n}function se(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||on,t.isMergeableObject=t.isMergeableObject||Xt;var n=Array.isArray(r),i=Array.isArray(e),o=n===i;return o?n?t.arrayMerge(e,r,t):sn(e,r,t):ve(r,t)}se.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(n,i){return se(n,i,t)},{})};var Ge=se,un=typeof global=="object"&&global&&global.Object===Object&&global;const Xr=un;var cn=typeof self=="object"&&self&&self.Object===Object&&self,ln=Xr||cn||Function("return this")();const D=ln;var fn=D.Symbol;const G=fn;var Qr=Object.prototype,dn=Qr.hasOwnProperty,pn=Qr.toString,ie=G?G.toStringTag:void 0;function hn(e){var r=dn.call(e,ie),t=e[ie];try{e[ie]=void 0;var n=!0}catch{}var i=pn.call(e);return n&&(r?e[ie]=t:delete e[ie]),i}var yn=Object.prototype,vn=yn.toString;function gn(e){return vn.call(e)}var mn="[object Null]",bn="[object Undefined]",_r=G?G.toStringTag:void 0;function Z(e){return e==null?e===void 0?bn:mn:_r&&_r in Object(e)?hn(e):gn(e)}function et(e,r){return function(t){return e(r(t))}}var Tn=et(Object.getPrototypeOf,Object);const Je=Tn;function J(e){return e!=null&&typeof e=="object"}var Sn="[object Object]",jn=Function.prototype,En=Object.prototype,rt=jn.toString,_n=En.hasOwnProperty,$n=rt.call(Object);function $r(e){if(!J(e)||Z(e)!=Sn)return!1;var r=Je(e);if(r===null)return!0;var t=_n.call(r,"constructor")&&r.constructor;return typeof t=="function"&&t instanceof t&&rt.call(t)==$n}var Ar=Array.isArray,wr=Object.keys,An=Object.prototype.hasOwnProperty,wn=typeof Element<"u";function ze(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){var t=Ar(e),n=Ar(r),i,o,s;if(t&&n){if(o=e.length,o!=r.length)return!1;for(i=o;i--!==0;)if(!ze(e[i],r[i]))return!1;return!0}if(t!=n)return!1;var p=e instanceof Date,b=r instanceof Date;if(p!=b)return!1;if(p&&b)return e.getTime()==r.getTime();var v=e instanceof RegExp,F=r instanceof RegExp;if(v!=F)return!1;if(v&&F)return e.toString()==r.toString();var M=wr(e);if(o=M.length,o!==wr(r).length)return!1;for(i=o;i--!==0;)if(!An.call(r,M[i]))return!1;if(wn&&e instanceof Element&&r instanceof Element)return e===r;for(i=o;i--!==0;)if(s=M[i],!(s==="_owner"&&e.$$typeof)&&!ze(e[s],r[s]))return!1;return!0}return e!==e&&r!==r}var xn=function(r,t){try{return ze(r,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const W=Wt(xn);var On=!0;function Cn(e,r){if(!On){if(e)return;var t="Warning: "+r;typeof console<"u"&&console.warn(t);try{throw Error(t)}catch{}}}function In(){this.__data__=[],this.size=0}function tt(e,r){return e===r||e!==e&&r!==r}function ge(e,r){for(var t=e.length;t--;)if(tt(e[t][0],r))return t;return-1}var Fn=Array.prototype,Mn=Fn.splice;function Rn(e){var r=this.__data__,t=ge(r,e);if(t<0)return!1;var n=r.length-1;return t==n?r.pop():Mn.call(r,t,1),--this.size,!0}function Pn(e){var r=this.__data__,t=ge(r,e);return t<0?void 0:r[t][1]}function Nn(e){return ge(this.__data__,e)>-1}function Ln(e,r){var t=this.__data__,n=ge(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this}function B(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}B.prototype.clear=In;B.prototype.delete=Rn;B.prototype.get=Pn;B.prototype.has=Nn;B.prototype.set=Ln;function Dn(){this.__data__=new B,this.size=0}function Vn(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function Un(e){return this.__data__.get(e)}function Bn(e){return this.__data__.has(e)}function le(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var Hn="[object AsyncFunction]",Gn="[object Function]",zn="[object GeneratorFunction]",kn="[object Proxy]";function nt(e){if(!le(e))return!1;var r=Z(e);return r==Gn||r==zn||r==Hn||r==kn}var Wn=D["__core-js_shared__"];const Ve=Wn;var xr=function(){var e=/[^.]+$/.exec(Ve&&Ve.keys&&Ve.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Kn(e){return!!xr&&xr in e}var Yn=Function.prototype,qn=Yn.toString;function X(e){if(e!=null){try{return qn.call(e)}catch{}try{return e+""}catch{}}return""}var Zn=/[\\^$.*+?()[\]{}|]/g,Jn=/^\[object .+?Constructor\]$/,Xn=Function.prototype,Qn=Object.prototype,ea=Xn.toString,ra=Qn.hasOwnProperty,ta=RegExp("^"+ea.call(ra).replace(Zn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function na(e){if(!le(e)||Kn(e))return!1;var r=nt(e)?ta:Jn;return r.test(X(e))}function aa(e,r){return e==null?void 0:e[r]}function Q(e,r){var t=aa(e,r);return na(t)?t:void 0}var ia=Q(D,"Map");const ue=ia;var oa=Q(Object,"create");const ce=oa;function sa(){this.__data__=ce?ce(null):{},this.size=0}function ua(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var ca="__lodash_hash_undefined__",la=Object.prototype,fa=la.hasOwnProperty;function da(e){var r=this.__data__;if(ce){var t=r[e];return t===ca?void 0:t}return fa.call(r,e)?r[e]:void 0}var pa=Object.prototype,ha=pa.hasOwnProperty;function ya(e){var r=this.__data__;return ce?r[e]!==void 0:ha.call(r,e)}var va="__lodash_hash_undefined__";function ga(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=ce&&r===void 0?va:r,this}function q(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}q.prototype.clear=sa;q.prototype.delete=ua;q.prototype.get=da;q.prototype.has=ya;q.prototype.set=ga;function ma(){this.size=0,this.__data__={hash:new q,map:new(ue||B),string:new q}}function ba(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function me(e,r){var t=e.__data__;return ba(r)?t[typeof r=="string"?"string":"hash"]:t.map}function Ta(e){var r=me(this,e).delete(e);return this.size-=r?1:0,r}function Sa(e){return me(this,e).get(e)}function ja(e){return me(this,e).has(e)}function Ea(e,r){var t=me(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this}function z(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}z.prototype.clear=ma;z.prototype.delete=Ta;z.prototype.get=Sa;z.prototype.has=ja;z.prototype.set=Ea;var _a=200;function $a(e,r){var t=this.__data__;if(t instanceof B){var n=t.__data__;if(!ue||n.length<_a-1)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new z(n)}return t.set(e,r),this.size=t.size,this}function ne(e){var r=this.__data__=new B(e);this.size=r.size}ne.prototype.clear=Dn;ne.prototype.delete=Vn;ne.prototype.get=Un;ne.prototype.has=Bn;ne.prototype.set=$a;function Aa(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}var wa=function(){try{var e=Q(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Or=wa;function at(e,r,t){r=="__proto__"&&Or?Or(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var xa=Object.prototype,Oa=xa.hasOwnProperty;function it(e,r,t){var n=e[r];(!(Oa.call(e,r)&&tt(n,t))||t===void 0&&!(r in e))&&at(e,r,t)}function be(e,r,t,n){var i=!t;t||(t={});for(var o=-1,s=r.length;++o<s;){var p=r[o],b=n?n(t[p],e[p],p,t,e):void 0;b===void 0&&(b=e[p]),i?at(t,p,b):it(t,p,b)}return t}function Ca(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}var Ia="[object Arguments]";function Cr(e){return J(e)&&Z(e)==Ia}var ot=Object.prototype,Fa=ot.hasOwnProperty,Ma=ot.propertyIsEnumerable,Ra=Cr(function(){return arguments}())?Cr:function(e){return J(e)&&Fa.call(e,"callee")&&!Ma.call(e,"callee")};const Pa=Ra;var Na=Array.isArray;const fe=Na;function La(){return!1}var st=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ir=st&&typeof module=="object"&&module&&!module.nodeType&&module,Da=Ir&&Ir.exports===st,Fr=Da?D.Buffer:void 0,Va=Fr?Fr.isBuffer:void 0,Ua=Va||La;const ut=Ua;var Ba=9007199254740991,Ha=/^(?:0|[1-9]\d*)$/;function Ga(e,r){var t=typeof e;return r=r??Ba,!!r&&(t=="number"||t!="symbol"&&Ha.test(e))&&e>-1&&e%1==0&&e<r}var za=9007199254740991;function ct(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=za}var ka="[object Arguments]",Wa="[object Array]",Ka="[object Boolean]",Ya="[object Date]",qa="[object Error]",Za="[object Function]",Ja="[object Map]",Xa="[object Number]",Qa="[object Object]",ei="[object RegExp]",ri="[object Set]",ti="[object String]",ni="[object WeakMap]",ai="[object ArrayBuffer]",ii="[object DataView]",oi="[object Float32Array]",si="[object Float64Array]",ui="[object Int8Array]",ci="[object Int16Array]",li="[object Int32Array]",fi="[object Uint8Array]",di="[object Uint8ClampedArray]",pi="[object Uint16Array]",hi="[object Uint32Array]",E={};E[oi]=E[si]=E[ui]=E[ci]=E[li]=E[fi]=E[di]=E[pi]=E[hi]=!0;E[ka]=E[Wa]=E[ai]=E[Ka]=E[ii]=E[Ya]=E[qa]=E[Za]=E[Ja]=E[Xa]=E[Qa]=E[ei]=E[ri]=E[ti]=E[ni]=!1;function yi(e){return J(e)&&ct(e.length)&&!!E[Z(e)]}function Xe(e){return function(r){return e(r)}}var lt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,oe=lt&&typeof module=="object"&&module&&!module.nodeType&&module,vi=oe&&oe.exports===lt,Ue=vi&&Xr.process,gi=function(){try{var e=oe&&oe.require&&oe.require("util").types;return e||Ue&&Ue.binding&&Ue.binding("util")}catch{}}();const te=gi;var Mr=te&&te.isTypedArray,mi=Mr?Xe(Mr):yi;const bi=mi;var Ti=Object.prototype,Si=Ti.hasOwnProperty;function ft(e,r){var t=fe(e),n=!t&&Pa(e),i=!t&&!n&&ut(e),o=!t&&!n&&!i&&bi(e),s=t||n||i||o,p=s?Ca(e.length,String):[],b=p.length;for(var v in e)(r||Si.call(e,v))&&!(s&&(v=="length"||i&&(v=="offset"||v=="parent")||o&&(v=="buffer"||v=="byteLength"||v=="byteOffset")||Ga(v,b)))&&p.push(v);return p}var ji=Object.prototype;function Qe(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||ji;return e===t}var Ei=et(Object.keys,Object);const _i=Ei;var $i=Object.prototype,Ai=$i.hasOwnProperty;function wi(e){if(!Qe(e))return _i(e);var r=[];for(var t in Object(e))Ai.call(e,t)&&t!="constructor"&&r.push(t);return r}function dt(e){return e!=null&&ct(e.length)&&!nt(e)}function er(e){return dt(e)?ft(e):wi(e)}function xi(e,r){return e&&be(r,er(r),e)}function Oi(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var Ci=Object.prototype,Ii=Ci.hasOwnProperty;function Fi(e){if(!le(e))return Oi(e);var r=Qe(e),t=[];for(var n in e)n=="constructor"&&(r||!Ii.call(e,n))||t.push(n);return t}function rr(e){return dt(e)?ft(e,!0):Fi(e)}function Mi(e,r){return e&&be(r,rr(r),e)}var pt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Rr=pt&&typeof module=="object"&&module&&!module.nodeType&&module,Ri=Rr&&Rr.exports===pt,Pr=Ri?D.Buffer:void 0,Nr=Pr?Pr.allocUnsafe:void 0;function Pi(e,r){if(r)return e.slice();var t=e.length,n=Nr?Nr(t):new e.constructor(t);return e.copy(n),n}function ht(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}function Ni(e,r){for(var t=-1,n=e==null?0:e.length,i=0,o=[];++t<n;){var s=e[t];r(s,t,e)&&(o[i++]=s)}return o}function yt(){return[]}var Li=Object.prototype,Di=Li.propertyIsEnumerable,Lr=Object.getOwnPropertySymbols,Vi=Lr?function(e){return e==null?[]:(e=Object(e),Ni(Lr(e),function(r){return Di.call(e,r)}))}:yt;const tr=Vi;function Ui(e,r){return be(e,tr(e),r)}function vt(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e}var Bi=Object.getOwnPropertySymbols,Hi=Bi?function(e){for(var r=[];e;)vt(r,tr(e)),e=Je(e);return r}:yt;const gt=Hi;function Gi(e,r){return be(e,gt(e),r)}function mt(e,r,t){var n=r(e);return fe(e)?n:vt(n,t(e))}function zi(e){return mt(e,er,tr)}function ki(e){return mt(e,rr,gt)}var Wi=Q(D,"DataView");const ke=Wi;var Ki=Q(D,"Promise");const We=Ki;var Yi=Q(D,"Set");const Ke=Yi;var qi=Q(D,"WeakMap");const Ye=qi;var Dr="[object Map]",Zi="[object Object]",Vr="[object Promise]",Ur="[object Set]",Br="[object WeakMap]",Hr="[object DataView]",Ji=X(ke),Xi=X(ue),Qi=X(We),eo=X(Ke),ro=X(Ye),K=Z;(ke&&K(new ke(new ArrayBuffer(1)))!=Hr||ue&&K(new ue)!=Dr||We&&K(We.resolve())!=Vr||Ke&&K(new Ke)!=Ur||Ye&&K(new Ye)!=Br)&&(K=function(e){var r=Z(e),t=r==Zi?e.constructor:void 0,n=t?X(t):"";if(n)switch(n){case Ji:return Hr;case Xi:return Dr;case Qi:return Vr;case eo:return Ur;case ro:return Br}return r});const nr=K;var to=Object.prototype,no=to.hasOwnProperty;function ao(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&no.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var io=D.Uint8Array;const Gr=io;function ar(e){var r=new e.constructor(e.byteLength);return new Gr(r).set(new Gr(e)),r}function oo(e,r){var t=r?ar(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var so=/\w*$/;function uo(e){var r=new e.constructor(e.source,so.exec(e));return r.lastIndex=e.lastIndex,r}var zr=G?G.prototype:void 0,kr=zr?zr.valueOf:void 0;function co(e){return kr?Object(kr.call(e)):{}}function lo(e,r){var t=r?ar(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var fo="[object Boolean]",po="[object Date]",ho="[object Map]",yo="[object Number]",vo="[object RegExp]",go="[object Set]",mo="[object String]",bo="[object Symbol]",To="[object ArrayBuffer]",So="[object DataView]",jo="[object Float32Array]",Eo="[object Float64Array]",_o="[object Int8Array]",$o="[object Int16Array]",Ao="[object Int32Array]",wo="[object Uint8Array]",xo="[object Uint8ClampedArray]",Oo="[object Uint16Array]",Co="[object Uint32Array]";function Io(e,r,t){var n=e.constructor;switch(r){case To:return ar(e);case fo:case po:return new n(+e);case So:return oo(e,t);case jo:case Eo:case _o:case $o:case Ao:case wo:case xo:case Oo:case Co:return lo(e,t);case ho:return new n;case yo:case mo:return new n(e);case vo:return uo(e);case go:return new n;case bo:return co(e)}}var Wr=Object.create,Fo=function(){function e(){}return function(r){if(!le(r))return{};if(Wr)return Wr(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();const Mo=Fo;function Ro(e){return typeof e.constructor=="function"&&!Qe(e)?Mo(Je(e)):{}}var Po="[object Map]";function No(e){return J(e)&&nr(e)==Po}var Kr=te&&te.isMap,Lo=Kr?Xe(Kr):No;const Do=Lo;var Vo="[object Set]";function Uo(e){return J(e)&&nr(e)==Vo}var Yr=te&&te.isSet,Bo=Yr?Xe(Yr):Uo;const Ho=Bo;var Go=1,zo=2,ko=4,bt="[object Arguments]",Wo="[object Array]",Ko="[object Boolean]",Yo="[object Date]",qo="[object Error]",Tt="[object Function]",Zo="[object GeneratorFunction]",Jo="[object Map]",Xo="[object Number]",St="[object Object]",Qo="[object RegExp]",es="[object Set]",rs="[object String]",ts="[object Symbol]",ns="[object WeakMap]",as="[object ArrayBuffer]",is="[object DataView]",os="[object Float32Array]",ss="[object Float64Array]",us="[object Int8Array]",cs="[object Int16Array]",ls="[object Int32Array]",fs="[object Uint8Array]",ds="[object Uint8ClampedArray]",ps="[object Uint16Array]",hs="[object Uint32Array]",j={};j[bt]=j[Wo]=j[as]=j[is]=j[Ko]=j[Yo]=j[os]=j[ss]=j[us]=j[cs]=j[ls]=j[Jo]=j[Xo]=j[St]=j[Qo]=j[es]=j[rs]=j[ts]=j[fs]=j[ds]=j[ps]=j[hs]=!0;j[qo]=j[Tt]=j[ns]=!1;function ye(e,r,t,n,i,o){var s,p=r&Go,b=r&zo,v=r&ko;if(t&&(s=i?t(e,n,i,o):t(e)),s!==void 0)return s;if(!le(e))return e;var F=fe(e);if(F){if(s=ao(e),!p)return ht(e,s)}else{var M=nr(e),h=M==Tt||M==Zo;if(ut(e))return Pi(e,p);if(M==St||M==bt||h&&!i){if(s=b||h?{}:Ro(e),!p)return b?Gi(e,Mi(s,e)):Ui(e,xi(s,e))}else{if(!j[M])return i?e:{};s=Io(e,M,p)}}o||(o=new ne);var O=o.get(e);if(O)return O;o.set(e,s),Ho(e)?e.forEach(function(x){s.add(ye(x,r,t,x,e,o))}):Do(e)&&e.forEach(function(x,_){s.set(_,ye(x,r,t,_,e,o))});var V=v?b?ki:zi:b?rr:er,L=F?void 0:V(e);return Aa(L||e,function(x,_){L&&(_=x,x=e[_]),it(s,_,ye(x,r,t,_,e,o))}),s}var ys=4;function qr(e){return ye(e,ys)}function jt(e,r){for(var t=-1,n=e==null?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i}var vs="[object Symbol]";function ir(e){return typeof e=="symbol"||J(e)&&Z(e)==vs}var gs="Expected a function";function or(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(gs);var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return t.cache=o.set(i,s)||o,s};return t.cache=new(or.Cache||z),t}or.Cache=z;var ms=500;function bs(e){var r=or(e,function(n){return t.size===ms&&t.clear(),n}),t=r.cache;return r}var Ts=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ss=/\\(\\)?/g,js=bs(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(Ts,function(t,n,i,o){r.push(i?o.replace(Ss,"$1"):n||t)}),r});const Es=js;var _s=1/0;function $s(e){if(typeof e=="string"||ir(e))return e;var r=e+"";return r=="0"&&1/e==-_s?"-0":r}var As=1/0,Zr=G?G.prototype:void 0,Jr=Zr?Zr.toString:void 0;function Et(e){if(typeof e=="string")return e;if(fe(e))return jt(e,Et)+"";if(ir(e))return Jr?Jr.call(e):"";var r=e+"";return r=="0"&&1/e==-As?"-0":r}function ws(e){return e==null?"":Et(e)}function _t(e){return fe(e)?jt(e,$s):ir(e)?[e]:ht(Es(ws(e)))}var $t={exports:{}},m={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=typeof Symbol=="function"&&Symbol.for,sr=w?Symbol.for("react.element"):60103,ur=w?Symbol.for("react.portal"):60106,Te=w?Symbol.for("react.fragment"):60107,Se=w?Symbol.for("react.strict_mode"):60108,je=w?Symbol.for("react.profiler"):60114,Ee=w?Symbol.for("react.provider"):60109,_e=w?Symbol.for("react.context"):60110,cr=w?Symbol.for("react.async_mode"):60111,$e=w?Symbol.for("react.concurrent_mode"):60111,Ae=w?Symbol.for("react.forward_ref"):60112,we=w?Symbol.for("react.suspense"):60113,xs=w?Symbol.for("react.suspense_list"):60120,xe=w?Symbol.for("react.memo"):60115,Oe=w?Symbol.for("react.lazy"):60116,Os=w?Symbol.for("react.block"):60121,Cs=w?Symbol.for("react.fundamental"):60117,Is=w?Symbol.for("react.responder"):60118,Fs=w?Symbol.for("react.scope"):60119;function I(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case sr:switch(e=e.type,e){case cr:case $e:case Te:case je:case Se:case we:return e;default:switch(e=e&&e.$$typeof,e){case _e:case Ae:case Oe:case xe:case Ee:return e;default:return r}}case ur:return r}}}function At(e){return I(e)===$e}m.AsyncMode=cr;m.ConcurrentMode=$e;m.ContextConsumer=_e;m.ContextProvider=Ee;m.Element=sr;m.ForwardRef=Ae;m.Fragment=Te;m.Lazy=Oe;m.Memo=xe;m.Portal=ur;m.Profiler=je;m.StrictMode=Se;m.Suspense=we;m.isAsyncMode=function(e){return At(e)||I(e)===cr};m.isConcurrentMode=At;m.isContextConsumer=function(e){return I(e)===_e};m.isContextProvider=function(e){return I(e)===Ee};m.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr};m.isForwardRef=function(e){return I(e)===Ae};m.isFragment=function(e){return I(e)===Te};m.isLazy=function(e){return I(e)===Oe};m.isMemo=function(e){return I(e)===xe};m.isPortal=function(e){return I(e)===ur};m.isProfiler=function(e){return I(e)===je};m.isStrictMode=function(e){return I(e)===Se};m.isSuspense=function(e){return I(e)===we};m.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Te||e===$e||e===je||e===Se||e===we||e===xs||typeof e=="object"&&e!==null&&(e.$$typeof===Oe||e.$$typeof===xe||e.$$typeof===Ee||e.$$typeof===_e||e.$$typeof===Ae||e.$$typeof===Cs||e.$$typeof===Is||e.$$typeof===Fs||e.$$typeof===Os)};m.typeOf=I;$t.exports=m;var Ms=$t.exports,wt=Ms,Rs={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ps={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xt={};xt[wt.ForwardRef]=Rs;xt[wt.Memo]=Ps;function A(){return A=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},A.apply(this,arguments)}function Ot(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var Ce=f.createContext(void 0);Ce.displayName="FormikContext";Ce.Provider;Ce.Consumer;function Ns(){var e=f.useContext(Ce);return e||Cn(!1),e}var N=function(r){return typeof r=="function"},Ie=function(r){return r!==null&&typeof r=="object"},Ls=function(r){return String(Math.floor(Number(r)))===r},Be=function(r){return Object.prototype.toString.call(r)==="[object String]"},He=function(r){return Ie(r)&&N(r.then)};function C(e,r,t,n){n===void 0&&(n=0);for(var i=_t(r);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?t:e}function Y(e,r,t){for(var n=qr(e),i=n,o=0,s=_t(r);o<s.length-1;o++){var p=s[o],b=C(e,s.slice(0,o+1));if(b&&(Ie(b)||Array.isArray(b)))i=i[p]=qr(b);else{var v=s[o+1];i=i[p]=Ls(v)&&Number(v)>=0?[]:{}}}return(o===0?e:i)[s[o]]===t?e:(t===void 0?delete i[s[o]]:i[s[o]]=t,o===0&&t===void 0&&delete n[s[o]],n)}function Ct(e,r,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(e);i<o.length;i++){var s=o[i],p=e[s];Ie(p)?t.get(p)||(t.set(p,!0),n[s]=Array.isArray(p)?[]:{},Ct(p,r,t,n[s])):n[s]=r}return n}function Ds(e,r){switch(r.type){case"SET_VALUES":return A({},e,{values:r.payload});case"SET_TOUCHED":return A({},e,{touched:r.payload});case"SET_ERRORS":return W(e.errors,r.payload)?e:A({},e,{errors:r.payload});case"SET_STATUS":return A({},e,{status:r.payload});case"SET_ISSUBMITTING":return A({},e,{isSubmitting:r.payload});case"SET_ISVALIDATING":return A({},e,{isValidating:r.payload});case"SET_FIELD_VALUE":return A({},e,{values:Y(e.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return A({},e,{touched:Y(e.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return A({},e,{errors:Y(e.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return A({},e,r.payload);case"SET_FORMIK_STATE":return r.payload(e);case"SUBMIT_ATTEMPT":return A({},e,{touched:Ct(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return A({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return A({},e,{isSubmitting:!1});default:return e}}var k={},he={};function Vs(e){var r=e.validateOnChange,t=r===void 0?!0:r,n=e.validateOnBlur,i=n===void 0?!0:n,o=e.validateOnMount,s=o===void 0?!1:o,p=e.isInitialValid,b=e.enableReinitialize,v=b===void 0?!1:b,F=e.onSubmit,M=Ot(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),h=A({validateOnChange:t,validateOnBlur:i,validateOnMount:s,onSubmit:F},M),O=f.useRef(h.initialValues),V=f.useRef(h.initialErrors||k),L=f.useRef(h.initialTouched||he),x=f.useRef(h.initialStatus),_=f.useRef(!1),H=f.useRef({});f.useEffect(function(){return _.current=!0,function(){_.current=!1}},[]);var It=f.useState(0),Ft=It[1],de=f.useRef({values:h.initialValues,errors:h.initialErrors||k,touched:h.initialTouched||he,status:h.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),S=de.current,T=f.useCallback(function(a){var c=de.current;de.current=Ds(c,a),c!==de.current&&Ft(function(l){return l+1})},[]),lr=f.useCallback(function(a,c){return new Promise(function(l,d){var y=h.validate(a,c);y==null?l(k):He(y)?y.then(function(g){l(g||k)},function(g){d(g)}):l(y)})},[h.validate]),Fe=f.useCallback(function(a,c){var l=h.validationSchema,d=N(l)?l(c):l,y=c&&d.validateAt?d.validateAt(c,a):Bs(a,d);return new Promise(function(g,$){y.then(function(){g(k)},function(U){U.name==="ValidationError"?g(Us(U)):$(U)})})},[h.validationSchema]),fr=f.useCallback(function(a,c){return new Promise(function(l){return l(H.current[a].validate(c))})},[]),dr=f.useCallback(function(a){var c=Object.keys(H.current).filter(function(d){return N(H.current[d].validate)}),l=c.length>0?c.map(function(d){return fr(d,C(a,d))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(l).then(function(d){return d.reduce(function(y,g,$){return g==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||g&&(y=Y(y,c[$],g)),y},{})})},[fr]),Mt=f.useCallback(function(a){return Promise.all([dr(a),h.validationSchema?Fe(a):{},h.validate?lr(a):{}]).then(function(c){var l=c[0],d=c[1],y=c[2],g=Ge.all([l,d,y],{arrayMerge:Hs});return g})},[h.validate,h.validationSchema,dr,lr,Fe]),P=R(function(a){return a===void 0&&(a=S.values),T({type:"SET_ISVALIDATING",payload:!0}),Mt(a).then(function(c){return _.current&&(T({type:"SET_ISVALIDATING",payload:!1}),T({type:"SET_ERRORS",payload:c})),c})});f.useEffect(function(){s&&_.current===!0&&W(O.current,h.initialValues)&&P(O.current)},[s,P]);var ae=f.useCallback(function(a){var c=a&&a.values?a.values:O.current,l=a&&a.errors?a.errors:V.current?V.current:h.initialErrors||{},d=a&&a.touched?a.touched:L.current?L.current:h.initialTouched||{},y=a&&a.status?a.status:x.current?x.current:h.initialStatus;O.current=c,V.current=l,L.current=d,x.current=y;var g=function(){T({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:l,touched:d,status:y,values:c,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(h.onReset){var $=h.onReset(S.values,jr);He($)?$.then(g):g()}else g()},[h.initialErrors,h.initialStatus,h.initialTouched,h.onReset]);f.useEffect(function(){_.current===!0&&!W(O.current,h.initialValues)&&v&&(O.current=h.initialValues,ae(),s&&P(O.current))},[v,h.initialValues,ae,s,P]),f.useEffect(function(){v&&_.current===!0&&!W(V.current,h.initialErrors)&&(V.current=h.initialErrors||k,T({type:"SET_ERRORS",payload:h.initialErrors||k}))},[v,h.initialErrors]),f.useEffect(function(){v&&_.current===!0&&!W(L.current,h.initialTouched)&&(L.current=h.initialTouched||he,T({type:"SET_TOUCHED",payload:h.initialTouched||he}))},[v,h.initialTouched]),f.useEffect(function(){v&&_.current===!0&&!W(x.current,h.initialStatus)&&(x.current=h.initialStatus,T({type:"SET_STATUS",payload:h.initialStatus}))},[v,h.initialStatus,h.initialTouched]);var pr=R(function(a){if(H.current[a]&&N(H.current[a].validate)){var c=C(S.values,a),l=H.current[a].validate(c);return He(l)?(T({type:"SET_ISVALIDATING",payload:!0}),l.then(function(d){return d}).then(function(d){T({type:"SET_FIELD_ERROR",payload:{field:a,value:d}}),T({type:"SET_ISVALIDATING",payload:!1})})):(T({type:"SET_FIELD_ERROR",payload:{field:a,value:l}}),Promise.resolve(l))}else if(h.validationSchema)return T({type:"SET_ISVALIDATING",payload:!0}),Fe(S.values,a).then(function(d){return d}).then(function(d){T({type:"SET_FIELD_ERROR",payload:{field:a,value:C(d,a)}}),T({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Rt=f.useCallback(function(a,c){var l=c.validate;H.current[a]={validate:l}},[]),Pt=f.useCallback(function(a){delete H.current[a]},[]),hr=R(function(a,c){T({type:"SET_TOUCHED",payload:a});var l=c===void 0?i:c;return l?P(S.values):Promise.resolve()}),yr=f.useCallback(function(a){T({type:"SET_ERRORS",payload:a})},[]),vr=R(function(a,c){var l=N(a)?a(S.values):a;T({type:"SET_VALUES",payload:l});var d=c===void 0?t:c;return d?P(l):Promise.resolve()}),pe=f.useCallback(function(a,c){T({type:"SET_FIELD_ERROR",payload:{field:a,value:c}})},[]),ee=R(function(a,c,l){T({type:"SET_FIELD_VALUE",payload:{field:a,value:c}});var d=l===void 0?t:l;return d?P(Y(S.values,a,c)):Promise.resolve()}),gr=f.useCallback(function(a,c){var l=c,d=a,y;if(!Be(a)){a.persist&&a.persist();var g=a.target?a.target:a.currentTarget,$=g.type,U=g.name,Le=g.id,De=g.value,zt=g.checked,qs=g.outerHTML,Er=g.options,kt=g.multiple;l=c||U||Le,d=/number|range/.test($)?(y=parseFloat(De),isNaN(y)?"":y):/checkbox/.test($)?zs(C(S.values,l),zt,De):Er&&kt?Gs(Er):De}l&&ee(l,d)},[ee,S.values]),Me=R(function(a){if(Be(a))return function(c){return gr(c,a)};gr(a)}),re=R(function(a,c,l){c===void 0&&(c=!0),T({type:"SET_FIELD_TOUCHED",payload:{field:a,value:c}});var d=l===void 0?i:l;return d?P(S.values):Promise.resolve()}),mr=f.useCallback(function(a,c){a.persist&&a.persist();var l=a.target,d=l.name,y=l.id,g=l.outerHTML,$=c||d||y;re($,!0)},[re]),Re=R(function(a){if(Be(a))return function(c){return mr(c,a)};mr(a)}),br=f.useCallback(function(a){N(a)?T({type:"SET_FORMIK_STATE",payload:a}):T({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),Tr=f.useCallback(function(a){T({type:"SET_STATUS",payload:a})},[]),Sr=f.useCallback(function(a){T({type:"SET_ISSUBMITTING",payload:a})},[]),Pe=R(function(){return T({type:"SUBMIT_ATTEMPT"}),P().then(function(a){var c=a instanceof Error,l=!c&&Object.keys(a).length===0;if(l){var d;try{if(d=Lt(),d===void 0)return}catch(y){throw y}return Promise.resolve(d).then(function(y){return _.current&&T({type:"SUBMIT_SUCCESS"}),y}).catch(function(y){if(_.current)throw T({type:"SUBMIT_FAILURE"}),y})}else if(_.current&&(T({type:"SUBMIT_FAILURE"}),c))throw a})}),Nt=R(function(a){a&&a.preventDefault&&N(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&N(a.stopPropagation)&&a.stopPropagation(),Pe().catch(function(c){console.warn("Warning: An unhandled error was caught from submitForm()",c)})}),jr={resetForm:ae,validateForm:P,validateField:pr,setErrors:yr,setFieldError:pe,setFieldTouched:re,setFieldValue:ee,setStatus:Tr,setSubmitting:Sr,setTouched:hr,setValues:vr,setFormikState:br,submitForm:Pe},Lt=R(function(){return F(S.values,jr)}),Dt=R(function(a){a&&a.preventDefault&&N(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&N(a.stopPropagation)&&a.stopPropagation(),ae()}),Vt=f.useCallback(function(a){return{value:C(S.values,a),error:C(S.errors,a),touched:!!C(S.touched,a),initialValue:C(O.current,a),initialTouched:!!C(L.current,a),initialError:C(V.current,a)}},[S.errors,S.touched,S.values]),Ut=f.useCallback(function(a){return{setValue:function(l,d){return ee(a,l,d)},setTouched:function(l,d){return re(a,l,d)},setError:function(l){return pe(a,l)}}},[ee,re,pe]),Bt=f.useCallback(function(a){var c=Ie(a),l=c?a.name:a,d=C(S.values,l),y={name:l,value:d,onChange:Me,onBlur:Re};if(c){var g=a.type,$=a.value,U=a.as,Le=a.multiple;g==="checkbox"?$===void 0?y.checked=!!d:(y.checked=!!(Array.isArray(d)&&~d.indexOf($)),y.value=$):g==="radio"?(y.checked=d===$,y.value=$):U==="select"&&Le&&(y.value=y.value||[],y.multiple=!0)}return y},[Re,Me,S.values]),Ne=f.useMemo(function(){return!W(O.current,S.values)},[O.current,S.values]),Ht=f.useMemo(function(){return typeof p<"u"?Ne?S.errors&&Object.keys(S.errors).length===0:p!==!1&&N(p)?p(h):p:S.errors&&Object.keys(S.errors).length===0},[p,Ne,S.errors,h]),Gt=A({},S,{initialValues:O.current,initialErrors:V.current,initialTouched:L.current,initialStatus:x.current,handleBlur:Re,handleChange:Me,handleReset:Dt,handleSubmit:Nt,resetForm:ae,setErrors:yr,setFormikState:br,setFieldTouched:re,setFieldValue:ee,setFieldError:pe,setStatus:Tr,setSubmitting:Sr,setTouched:hr,setValues:vr,submitForm:Pe,validateForm:P,validateField:pr,isValid:Ht,dirty:Ne,unregisterField:Pt,registerField:Rt,getFieldProps:Bt,getFieldMeta:Vt,getFieldHelpers:Ut,validateOnBlur:i,validateOnChange:t,validateOnMount:s});return Gt}function Us(e){var r={};if(e.inner){if(e.inner.length===0)return Y(r,e.path,e.message);for(var i=e.inner,t=Array.isArray(i),n=0,i=t?i:i[Symbol.iterator]();;){var o;if(t){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var s=o;C(r,s.path)||(r=Y(r,s.path,s.message))}}return r}function Bs(e,r,t,n){t===void 0&&(t=!1);var i=qe(e);return r[t?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function qe(e){var r=Array.isArray(e)?[]:{};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=String(t);Array.isArray(e[n])===!0?r[n]=e[n].map(function(i){return Array.isArray(i)===!0||$r(i)?qe(i):i!==""?i:void 0}):$r(e[n])?r[n]=qe(e[n]):r[n]=e[n]!==""?e[n]:void 0}return r}function Hs(e,r,t){var n=e.slice();return r.forEach(function(o,s){if(typeof n[s]>"u"){var p=t.clone!==!1,b=p&&t.isMergeableObject(o);n[s]=b?Ge(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?n[s]=Ge(e[s],o,t):e.indexOf(o)===-1&&n.push(o)}),n}function Gs(e){return Array.from(e).filter(function(r){return r.selected}).map(function(r){return r.value})}function zs(e,r,t){if(typeof e=="boolean")return!!r;var n=[],i=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(t),i=o>=0;else if(!t||t=="true"||t=="false")return!!r;return r&&t&&!i?n.concat(t):i?n.slice(0,o).concat(n.slice(o+1)):n}var ks=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?f.useLayoutEffect:f.useEffect;function R(e){var r=f.useRef(e);return ks(function(){r.current=e}),f.useCallback(function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r.current.apply(void 0,n)},[])}var Ws=f.forwardRef(function(e,r){var t=e.action,n=Ot(e,["action"]),i=t??"#",o=Ns(),s=o.handleReset,p=o.handleSubmit;return f.createElement("form",A({onSubmit:p,ref:r,onReset:s,action:i},n))});Ws.displayName="Form";function Ks(){const e=Vs({initialValues:{email:"",comments:"",_honey:"",_captcha:"false",_invalid:"false"},onSubmit:r=>{fetch("https://formsubmit.co/fishfinna12@gmail.com",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).catch(t=>{console.error("Error:",t)}),e.resetForm()}});return u.jsx("div",{className:"email",children:u.jsxs(Ze,{children:[u.jsx("h1",{children:"Send me an Email"}),u.jsx("p",{children:"Ask me anything or just say hi!"}),u.jsxs("form",{className:"about-email",onSubmit:e.handleSubmit,children:[u.jsx("input",{type:"text",name:"_honey",style:{display:"none"},onChange:e.handleChange,value:e.values._honey}),u.jsx("input",{type:"hidden",name:"_captcha",value:"false"}),u.jsx("input",{type:"hidden",name:"_invalid",value:"false"}),u.jsxs("div",{className:"email-content",children:[u.jsx("label",{htmlFor:"email",children:"Return Email:"}),u.jsx("input",{required:!0,type:"email",id:"return",name:"email",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.email}),u.jsx("label",{htmlFor:"comments",children:"Message:"}),u.jsx("textarea",{required:!0,name:"comments",id:"comments",rows:5,onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.comments}),u.jsx("button",{type:"submit",children:"Send It Off"})]})]})]})})}function Ys(){const r=new Date().getFullYear(),t=[],n=[{year:2021,type:"education",details:"Enrolled in the Computer Information Technology diploma at the British Columbia Institute of Technology"},{year:2022,type:"work",details:"Created and Launched my first mobile app, Heli Rigger Pro"},{year:2023,type:"work",details:"Worked as a Jr.Software Developer at RAZR Financial"},{year:2023,type:"education",details:"Graduated from BCIT with distinctions and a 94% GPA"},{year:2024,type:"work",details:"Started as a full time Software Developer at RAZR Financial"}];for(let i=2021;i<=r;i++)t.push(u.jsx("div",{children:u.jsxs(Ze,{bottom:-10,className:"center",children:[u.jsxs("div",{className:"node",children:[u.jsx("div",{className:`year-${i}`,children:u.jsx("h2",{children:i})}),["education","work"].map(o=>u.jsx("div",{className:"details "+o,children:n.map(({year:s,type:p,details:b})=>{if(i===s&&p===o)return u.jsxs("div",{className:"type",children:[u.jsx("h4",{children:p}),u.jsx("p",{children:b})]},`${p}-${s}`)})},`${o}-${i}`))]}),i!==r?u.jsx("div",{className:"gap-year"}):null]})},i));return u.jsxs("div",{className:"career-path",children:[u.jsx("h1",{children:"My Lore"}),u.jsx("div",{children:t})]})}function Js(){return u.jsxs(u.Fragment,{children:[u.jsx(Zt,{}),u.jsx(Kt,{}),u.jsx("img",{src:"/images/treeline.png",className:"treeline"}),u.jsxs("div",{className:"hero",children:[u.jsxs("div",{className:"hero-text",children:[u.jsx("h1",{children:"Shanti S."}),u.jsx(Yt,{typewriterContent:["programming.","web development.","graphic design.","fun stuff!"],children:"I do"})]}),u.jsx(qt,{})]}),u.jsx(Jt,{}),u.jsx(Ys,{}),u.jsx(Ks,{})]})}export{Js as default};