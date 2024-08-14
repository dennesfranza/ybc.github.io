import{k as ee,r as O,c as f,w as k,n as C,X as E,W as x,h as H,t as te,g as oe,l as ae,z as ne}from"./index.7c7b8282.js";import{l as ie,u as le,f as se,v as q,m as re,a as ue,g as ce,o as de,p as fe,b as ve,h as he,q as A,s as me,t as D,w as ge}from"./format.65a6df85.js";import{a as ye,u as Te,c as M}from"./QSeparator.7443f346.js";import{b as pe}from"./use-id.52264d24.js";var Oe=ee({name:"QTooltip",inheritAttrs:!1,props:{...ie,...le,...se,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:q},self:{type:String,default:"top middle",validator:q},offset:{type:Array,default:()=>[14,14],validator:re},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...ue],setup(e,{slots:j,emit:y,attrs:v}){let i,l;const h=oe(),{proxy:{$q:o}}=h,s=O(null),c=O(!1),L=f(()=>D(e.anchor,o.lang.rtl)),W=f(()=>D(e.self,o.lang.rtl)),Q=f(()=>e.persistent!==!0),{registerTick:N,removeTick:R}=ye(),{registerTimeout:d}=Te(),{transitionProps:_,transitionStyle:z}=ce(e),{localScrollTarget:T,changeScrollEvent:B,unconfigureScrollTarget:I}=de(e,P),{anchorEl:a,canShow:U,anchorEvents:r}=fe({showing:c,configureAnchorEl:K}),{show:V,hide:m}=ve({showing:c,canShow:U,handleShow:$,handleHide:F,hideOnRouteChange:Q,processOnMount:!0});Object.assign(r,{delayShow:G,delayHide:J});const{showPortal:p,hidePortal:b,renderPortal:X}=he(h,s,Z,"tooltip");if(o.platform.is.mobile===!0){const t={anchorEl:a,innerRef:s,onClickOutside(n){return m(n),n.target.classList.contains("q-dialog__backdrop")&&ne(n),!0}},g=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);k(g,n=>{(n===!0?ge:A)(t)}),C(()=>{A(t)})}function $(t){p(),N(()=>{l=new MutationObserver(()=>u()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),P()}),i===void 0&&(i=k(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,u)),d(()=>{p(!0),y("show",t)},e.transitionDuration)}function F(t){R(),b(),S(),d(()=>{b(!0),y("hide",t)},e.transitionDuration)}function S(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),I(),E(r,"tooltipTemp")}function u(){me({targetEl:s.value,offset:e.offset,anchorEl:a.value,anchorOrigin:L.value,selfOrigin:W.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function G(t){if(o.platform.is.mobile===!0){M(),document.body.classList.add("non-selectable");const g=a.value,n=["touchmove","touchcancel","touchend","click"].map(w=>[g,w,"delayHide","passiveCapture"]);x(r,"tooltipTemp",n)}d(()=>{V(t)},e.delay)}function J(t){o.platform.is.mobile===!0&&(E(r,"tooltipTemp"),M(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{m(t)},e.hideDelay)}function K(){if(e.noParentEvent===!0||a.value===null)return;const t=o.platform.is.mobile===!0?[[a.value,"touchstart","delayShow","passive"]]:[[a.value,"mouseenter","delayShow","passive"],[a.value,"mouseleave","delayHide","passive"]];x(r,"anchor",t)}function P(){if(a.value!==null||e.scrollTarget!==void 0){T.value=pe(a.value,e.scrollTarget);const t=e.noParentEvent===!0?u:m;B(T.value,t)}}function Y(){return c.value===!0?H("div",{...v,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",v.class],style:[v.style,z.value],role:"tooltip"},ae(j.default)):null}function Z(){return H(te,_.value,Y)}return C(S),Object.assign(h.proxy,{updatePosition:u}),X}});export{Oe as Q};
