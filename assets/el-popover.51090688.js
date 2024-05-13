import{_ as I,q as g,r as w,ab as O,a1 as L,Z as M,k as l,ai as R,b as y,bg as N,bh as a,d as c,a as j,bi as U,e as V,f as v,u as D,h as K,o as $,l as H,m as T,j as q,W as _,s as z,ac as k,V as F,bj as J,K as W,bk as Y,t as G}from"./index.0348bb74.js";const Z={inheritAttrs:!1};function Q(t,n,r,o,u,b){return g(t.$slots,"default")}var X=I(Z,[["render",Q],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const x={name:"ElCollectionItem",inheritAttrs:!1};function ee(t,n,r,o,u,b){return g(t.$slots,"default")}var te=I(x,[["render",ee],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const oe="data-el-collection-item",ne=t=>{const n=`El${t}Collection`,r=`${n}Item`,o=Symbol(n),u=Symbol(r),b={...X,name:n,setup(){const p=w(null),f=new Map;O(o,{itemMap:f,getItems:()=>{const i=l(p);if(!i)return[];const s=Array.from(i.querySelectorAll(`[${oe}]`));return[...f.values()].sort((h,C)=>s.indexOf(h.ref)-s.indexOf(C.ref))},collectionRef:p})}},d={...te,name:r,setup(p,{attrs:f}){const m=w(null),i=L(o,void 0);O(u,{collectionItemRef:m}),M(()=>{const s=l(m);s&&i.itemMap.set(s,{ref:s,...f})}),R(()=>{const s=l(m);i.itemMap.delete(s)})}};return{COLLECTION_INJECTION_KEY:o,COLLECTION_ITEM_INJECTION_KEY:u,ElCollection:b,ElCollectionItem:d}},E=y({trigger:N.trigger,effect:{...a.effect,default:"light"},type:{type:c(String)},placement:{type:c(String),default:"bottom"},popperOptions:{type:c(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:c([Number,String]),default:0},maxHeight:{type:c([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:c(Object)}});y({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:j}});y({onKeydown:{type:c(Function)}});ne("Dropdown");const re=y({trigger:N.trigger,placement:E.placement,disabled:N.disabled,visible:a.visible,transition:a.transition,popperOptions:E.popperOptions,tabindex:E.tabindex,content:a.content,popperStyle:a.popperStyle,popperClass:a.popperClass,enterable:{...a.enterable,default:!0},effect:{...a.effect,default:"light"},teleported:a.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),se={"update:visible":t=>U(t),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},le={name:"ElPopover"},ae=V({...le,props:re,emits:se,setup(t,{expose:n,emit:r}){const o=t,u="onUpdate:visible",b=v(()=>o[u]),d=D("popover"),p=w(),f=v(()=>{var e;return(e=l(p))==null?void 0:e.popperRef}),m=v(()=>[{width:K(o.width)},o.popperStyle]),i=v(()=>[d.b(),o.popperClass,{[d.m("plain")]:!!o.content}]),s=v(()=>o.transition===`${d.namespace.value}-fade-in-linear`),S=()=>{var e;(e=p.value)==null||e.hide()},h=()=>{r("before-enter")},C=()=>{r("before-leave")},P=()=>{r("after-enter")},A=()=>{r("update:visible",!1),r("after-leave")};return n({popperRef:f,hide:S}),(e,de)=>($(),H(l(W),J({ref_key:"tooltipRef",ref:p},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":l(i),"popper-style":l(m),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":l(s),"onUpdate:visible":l(b),onBeforeShow:h,onBeforeHide:C,onShow:P,onHide:A}),{content:T(()=>[e.title?($(),q("div",{key:0,class:z(l(d).e("title")),role:"title"},_(e.title),3)):k("v-if",!0),g(e.$slots,"default",{},()=>[F(_(e.content),1)])]),default:T(()=>[e.$slots.reference?g(e.$slots,"reference",{key:0}):k("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var pe=I(ae,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);const B=(t,n)=>{const r=n.arg||n.value,o=r==null?void 0:r.popperRef;o&&(o.triggerRef=t)};var ie={mounted(t,n){B(t,n)},updated(t,n){B(t,n)}};const ce="popover",ue=Y(ie,ce),me=G(pe,{directive:ue});export{me as E};
