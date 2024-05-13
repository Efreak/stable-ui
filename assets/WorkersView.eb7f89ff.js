import{aQ as w,o as s,j as n,R as o,e as x,f as E,l as a,m as l,k as e,E as k,S as d,ac as y,W as h,q as M,V as f,aN as O,aO as C,T as p,U as g,bl as B,aP as P,aH as I,ak as W,be as q,bf as H,r as T,b1 as U,X as z,bm as S,bn as j,bo as L,b2 as R,aI as V,aM as K,aK as A,aJ as J,K as Q,p as X,an as N,bp as G,al as D,n as Y,bq as Z,ar as ee,b9 as te,s as se,ax as oe,ay as le}from"./index.0348bb74.js";import{E as ae,a as b}from"./el-tab-pane.80b37c61.js";import{W as ne}from"./WorkerBox.29ef8bea.js";import{E as re}from"./el-popover.51090688.js";const ie={},de={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},ce=o("path",{d:"M12 6l4 6l5-4l-2 10H5L3 8l5 4z",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),ue=[ce];function me(t,c){return s(),n("svg",de,ue)}const _e=w(ie,[["render",me]]),he=t=>(q("data-v-beed1c7f"),t=t(),H(),t),fe={style:{display:"flex","justify-content":"space-between"}},ve={class:"card-header"},ye={class:"small-font"},ke={key:0},pe={key:1},ge={class:"remove-list-styling"},we={style:{"margin-left":"5px"}},xe={key:0},be={key:1},$e=he(()=>o("div",null,"They are hosting the models:",-1)),Ve={class:"remove-list-styling"},Te={class:"small-font"},Ce=x({__name:"TeamBox",props:{team:null,top:{type:Boolean}},setup(t){const c=t,_=E(()=>[...c.team.models].sort((u,m)=>m.count-u.count));return(u,m)=>(s(),a(e(W),{class:"team-box"},{header:l(()=>[o("div",fe,[o("div",ve,[t.top?(s(),a(e(k),{key:0,size:20,color:"var(--el-color-warning)",style:{"margin-right":"0.5rem"}},{default:l(()=>[d(_e)]),_:1})):y("",!0),o("span",null,h(t.team.name),1)]),M(u.$slots,"header",{},void 0,!0)])]),default:l(()=>[o("div",ye,"ID: "+h(t.team.id),1),o("div",null,[f("This team has been online for "),o("strong",null,h(e(O)(t.team.uptime,!0,{days:!0,hours:!0,minutes:!0})),1)]),o("div",null,[f("They've fulfilled "),o("strong",null,h(t.team.requests_fulfilled),1),f(" requests")]),d(e(P),{style:{"margin-top":"0.5rem","--el-collapse-header-height":"2.5rem"}},{default:l(()=>{var i;return[d(e(C),{title:`${t.team.worker_count} worker(s)`,name:"1"},{default:l(()=>[t.team.worker_count===0?(s(),n("div",ke,"They have no workers.")):(s(),n("div",pe,[o("div",null,"They have "+h(t.team.worker_count)+" worker(s):",1),o("ul",ge,[(s(!0),n(p,null,g(t.team.workers,r=>(s(),n("li",{key:r.id},[o("strong",null,[r.online?(s(),a(e(k),{key:0,size:10,color:"var(--el-color-success)"},{default:l(()=>[d(B)]),_:1})):(s(),a(e(k),{key:1,size:10,color:"var(--el-color-danger)"},{default:l(()=>[d(B)]),_:1})),o("span",we,h(r.name),1)])]))),128))])]))]),_:1},8,["title"]),d(e(C),{title:`${(i=t.team.models)==null?void 0:i.length} model(s)`,name:"2"},{default:l(()=>{var r;return[((r=t.team.models)==null?void 0:r.length)===0?(s(),n("div",xe,"They are hosting no models.")):(s(),n("div",be,[$e,o("ul",Ve,[(s(!0),n(p,null,g(e(_),v=>(s(),n("li",{key:v},[o("strong",null,h(v.name)+" ("+h(v.count)+")",1)]))),128))])]))]}),_:1},8,["title"])]}),_:1}),t.team.info?(s(),a(e(I),{key:0,style:{margin:"10px 0"}})):y("",!0),o("div",Te,h(t.team.info),1)]),_:3}))}});const Be=w(Ce,[["__scopeId","data-v-beed1c7f"]]),ze=t=>(q("data-v-afafc78c"),t=t(),H(),t),Se={key:0},Ee={"element-loading-text":"Loading...",style:{height:"300px"}},Me={key:1,style:{height:"300px"}},Ie={style:{padding:"20px"}},We={style:{display:"flex","justify-content":"space-between","font-size":"16px"}},qe={class:"card-header"},He={style:{"margin-left":"0.5rem"}},Ne=ze(()=>o("div",null,null,-1)),De={key:0},Fe={class:"small-font"},Oe=x({__name:"ModelBox",props:{model:null},setup(t){const c=t,_=E(()=>c.model.count===0?"Offline":c.model.queued===0?"Standby":"Online"),u=T(null),m=T(!1);return U(u,([{isIntersecting:i}])=>{m.value=i},{rootMargin:"500px"}),(i,r)=>(s(),a(e(W),{class:"model-box","body-style":{padding:"0px"},ref_key:"imageRef",ref:u},{default:l(()=>[m.value?(s(),n("div",Se,[t.model.showcases?z((s(),a(e(j),{key:0,style:{width:"100%",margin:"0"},autoplay:!1,"indicator-position":"none",arrow:t.model.showcases.length===1?"never":"always"},{default:l(()=>[(s(!0),n(p,null,g(t.model.showcases,v=>(s(),a(e(L),{key:v},{default:l(()=>[d(e(R),{src:v},{placeholder:l(()=>[z(o("div",Ee,null,512),[[e(S),!0]])]),_:2},1032,["src"])]),_:2},1024))),128))]),_:1},8,["arrow"])),[[e(S)]]):(s(),a(e(V),{key:1,description:"No showcase found!"}))])):(s(),n("div",Me)),o("div",Ie,[o("div",We,[o("div",qe,[d(e(Q),{content:e(_),placement:"top"},{default:l(()=>[t.model.count===0?(s(),a(e(k),{key:0,size:20,color:"red"},{default:l(()=>[d(e(K))]),_:1})):t.model.queued===0?(s(),a(e(k),{key:1,size:20,color:"orange"},{default:l(()=>[d(e(A))]),_:1})):(s(),a(e(k),{key:2,size:20,color:"green"},{default:l(()=>[d(e(J))]),_:1}))]),_:1},8,["content"]),o("span",He,h(t.model.name),1)]),M(i.$slots,"header",{},void 0,!0)]),o("div",null,[f("There are "),o("strong",null,h(t.model.count),1),f(" workers running this model")]),o("div",null,[f("There are "),o("strong",null,h(Math.floor((t.model.queued||0)/1e4)/100),1),f(" MPS queued")]),o("div",null,[f("The average model speed is "),o("strong",null,h(Math.floor((t.model.performance||0)/1e4)/100),1),f(" MPS/s")]),o("div",null,[f("It is expected to take "),o("strong",null,h(t.model.eta)+"s",1),f(" to clear this queue")]),Ne,o("div",null,[f("The style of this model is "),o("strong",null,h(t.model.style),1)]),t.model.nsfw?(s(),n("div",De,"This model may produce NSFW images.")):y("",!0),t.model.description?(s(),a(e(I),{key:1,style:{margin:"10px 0"}})):y("",!0),o("div",Fe,h(t.model.description),1)])]),_:3},512))}});const Pe=w(Oe,[["__scopeId","data-v-afafc78c"]]),Ue=x({__name:"ButtonCycle",props:{options:null,modelValue:null,dimensions:null},emits:["update:modelValue"],setup(t,{emit:c}){const _=t;G(m=>({"4bc4817a":t.dimensions}));function u(){const m=_.options.map(r=>r.value).indexOf(_.modelValue);if(m===-1)return;const i=_.options.length-1;return m<i?c("update:modelValue",_.options[m+1].value):c("update:modelValue",_.options[0].value)}return(m,i)=>(s(),a(e(N),{class:"cycle-button",onClick:u},{default:l(()=>[d(e(k),{size:t.dimensions*.5},{default:l(()=>[(s(),a(X((t.options.find(r=>r.value===t.modelValue)||t.options[0]).icon)))]),_:1},8,["size"])]),_:1}))}});const je={},Le={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Re=o("path",{d:"M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z",fill:"currentColor"},null,-1),Ke=[Re];function Ae(t,c){return s(),n("svg",Le,Ke)}const Je=w(je,[["render",Ae]]),Qe={},Xe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ge=o("path",{d:"M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.77 160 16 160zm416 0H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z",fill:"currentColor"},null,-1),Ye=[Ge];function Ze(t,c){return s(),n("svg",Xe,Ye)}const et=w(Qe,[["render",Ze]]),tt={class:"sort-workers"},st=["onClick"],ot=x({__name:"SortWorkers",props:{mobile:{type:Boolean}},setup(t){const c=D(),_=T(!1);return(u,m)=>(s(),n("div",tt,[d(e(ee),{prop:"search",modelValue:e(c).searchFilter,"onUpdate:modelValue":m[0]||(m[0]=i=>e(c).searchFilter=i),placeholder:"Search by name",clearable:"",style:Y(`max-width: 300px; ${t.mobile&&"margin-bottom: 0;"}`),"suffix-icon":e(Z)},null,8,["modelValue","style","suffix-icon"]),d(e(re),{visible:_.value,placement:"bottom",title:"Sort By",width:200},{reference:l(()=>[d(e(N),{onClick:m[1]||(m[1]=i=>_.value=!_.value),class:"square-btn"},{default:l(()=>[d(e(k),{size:16,color:"white"},{default:l(()=>[d(e(te))]),_:1})]),_:1})]),default:l(()=>[(s(!0),n(p,null,g(e(c).sortOptions,i=>(s(),n("div",{key:i,onClick:()=>e(c).sortBy=i,class:se(`el-select-dropdown__item ${e(c).sortBy===i?"selected":""}`)},h(i),11,st))),128))]),_:1},8,["visible"]),d(Ue,{modelValue:e(c).sortDirection,"onUpdate:modelValue":m[2]||(m[2]=i=>e(c).sortDirection=i),options:[{value:"Descending",icon:Je},{value:"Ascending",icon:et}],dimensions:32,style:{"margin-left":"0"}},null,8,["modelValue","options"])]))}});const $=w(ot,[["__scopeId","data-v-3417edb5"]]),lt={class:"workers"},at={key:0,class:"workers"},nt={key:1,class:"teams"},rt={key:1,class:"models"},it=x({__name:"WorkersView",setup(t){const _=oe(le).smallerOrEqual("lg"),u=D();return(m,i)=>(s(),a(e(ae),{modelValue:e(u).activeTab,"onUpdate:modelValue":i[0]||(i[0]=r=>e(u).activeTab=r)},{default:l(()=>[d(e(b),{label:"Workers",name:"workers"},{default:l(()=>[e(_)?(s(),a($,{key:0,mobile:""})):y("",!0),o("div",lt,[e(u).sortedWorkers.length!=0?(s(),n("div",at,[(s(!0),n(p,null,g(e(u).sortedWorkers,r=>(s(),a(ne,{key:r.id,worker:r},null,8,["worker"]))),128))])):(s(),a(e(V),{key:1,description:"No Workers Found"}))])]),_:1}),d(e(b),{label:"Teams",name:"teams"},{default:l(()=>[e(_)?(s(),a($,{key:0,mobile:""})):y("",!0),e(u).sortedTeams.length!=0?(s(),n("div",nt,[(s(!0),n(p,null,g(e(u).sortedTeams,r=>(s(),a(Be,{key:r.id,top:e(u).teams.sort((v,F)=>F.requests_fulfilled-v.requests_fulfilled)[0]===r,team:r},null,8,["top","team"]))),128))])):(s(),a(e(V),{key:2,description:"No Teams Found"}))]),_:1}),d(e(b),{label:"Models",name:"models"},{default:l(()=>[e(_)?(s(),a($,{key:0,mobile:""})):y("",!0),e(u).sortedModels.length!=0?(s(),n("div",rt,[(s(!0),n(p,null,g(e(u).sortedModels,r=>(s(),a(Pe,{key:r.name,model:r},null,8,["model"]))),128))])):(s(),a(e(V),{key:2,description:"No Models Found"}))]),_:1}),e(_)?y("",!0):(s(),a(e(b),{key:0,disabled:""},{label:l(()=>[d($)]),_:1}))]),_:1},8,["modelValue"]))}});const _t=w(it,[["__scopeId","data-v-25df1fc4"]]);export{_t as default};
