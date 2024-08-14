import{k as B,r as F,aa as A,ah as E,at as L,o as $,h as I,l as k,g as z,ai as R,z as q,A as N,aQ as U,_ as j,d as D,C as O,G,H as l,f as r,aX as H,I as J,J as g,N as K}from"./index.7c7b8282.js";import{Q as v}from"./QCardSection.7cfc943c.js";import{Q as w}from"./QInput.321b8eed.js";import{c as M}from"./use-id.52264d24.js";import{Q as T}from"./QCard.fd6c76dc.js";import{Q as X}from"./QPage.9773e727.js";import{Q as W,a as Y}from"./QLayout.7edaafae.js";import{u as Z}from"./index.aa89ca5c.js";import"./use-key-composition.a804c2f6.js";import"./use-dark.f1ed3aaa.js";import"./use-form.8f60a875.js";import"./uid.42677368.js";import"./QScrollObserver.d2bf11e0.js";import"./QResizeObserver.af66a7aa.js";import"./axios.56601fbe.js";var ee=B({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(o,{slots:i,emit:c}){const y=z(),d=F(null);let f=0;const a=[];function b(e){const u=typeof e=="boolean"?e:o.noErrorFocus!==!0,p=++f,C=(t,n)=>{c("validation"+(t===!0?"Success":"Error"),n)},S=t=>{const n=t.validate();return typeof n.then=="function"?n.then(s=>({valid:s,comp:t}),s=>({valid:!1,comp:t,err:s})):Promise.resolve({valid:n,comp:t})};return(o.greedy===!0?Promise.all(a.map(S)).then(t=>t.filter(n=>n.valid!==!0)):a.reduce((t,n)=>t.then(()=>S(n).then(s=>{if(s.valid===!1)return Promise.reject(s)})),Promise.resolve()).catch(t=>[t])).then(t=>{if(t===void 0||t.length===0)return p===f&&C(!0),!0;if(p===f){const{comp:n,err:s}=t[0];if(s!==void 0&&console.error(s),C(!1,n),u===!0){const V=t.find(({comp:P})=>typeof P.focus=="function"&&R(P.$)===!1);V!==void 0&&V.comp.focus()}}return!1})}function h(){f++,a.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function x(e){e!==void 0&&q(e);const u=f+1;b().then(p=>{u===f&&p===!0&&(o.onSubmit!==void 0?c("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function Q(e){e!==void 0&&q(e),c("reset"),N(()=>{h(),o.autofocus===!0&&o.noResetFocus!==!0&&m()})}function m(){M(()=>{if(d.value===null)return;const e=d.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||d.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||d.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(d.value.querySelectorAll("[tabindex]"),u=>u.tabIndex>-1);e!=null&&e.focus({preventScroll:!0})})}A(U,{bindComponent(e){a.push(e)},unbindComponent(e){const u=a.indexOf(e);u>-1&&a.splice(u,1)}});let _=!1;return E(()=>{_=!0}),L(()=>{_===!0&&o.autofocus===!0&&m()}),$(()=>{o.autofocus===!0&&m()}),Object.assign(y.proxy,{validate:b,resetValidation:h,submit:x,reset:Q,focus:m,getValidationComponents:()=>a}),()=>I("form",{class:"q-form",ref:d,onSubmit:x,onReset:Q},k(i.default))}});const te=D({name:"login",setup(){return{loginstore:Z()}}}),oe=g("img",{src:"profile.svg"},null,-1),ae=g("div",{class:"text-center q-pt-lg"},[g("div",{class:"col text-h6 ellipsis"},"Log in")],-1);function ne(o,i,c,y,d,f){return O(),G(W,null,{default:l(()=>[r(Y,null,{default:l(()=>[r(X,{class:"flex bg-image flex-center"},{default:l(()=>[r(T,{style:H(o.$q.screen.lt.sm?{width:"80%"}:{width:"30%"})},{default:l(()=>[r(v,null,{default:l(()=>[r(J,{size:"103px",class:"absolute-center shadow-10"},{default:l(()=>[oe]),_:1})]),_:1}),r(v,null,{default:l(()=>[ae]),_:1}),r(v,null,{default:l(()=>[r(ee,{class:"q-gutter-md"},{default:l(()=>[r(w,{filled:"",modelValue:o.loginstore.credentials.username,"onUpdate:modelValue":i[0]||(i[0]=a=>o.loginstore.credentials.username=a),label:"Username","lazy-rules":""},null,8,["modelValue"]),r(w,{type:"password",filled:"",modelValue:o.loginstore.credentials.password,"onUpdate:modelValue":i[1]||(i[1]=a=>o.loginstore.credentials.password=a),label:"Password","lazy-rules":""},null,8,["modelValue"]),g("div",null,[r(K,{label:"Login",loading:o.loginstore.loginloadingpage,type:"button",color:"primary",onClick:i[2]||(i[2]=a=>o.loginstore.userLogin())},null,8,["loading"])])]),_:1})]),_:1})]),_:1},8,["style"])]),_:1})]),_:1})]),_:1})}var Qe=j(te,[["render",ne]]);export{Qe as default};
