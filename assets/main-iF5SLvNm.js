import{c as u,r as g,a as o,g as r,H as d,U as b,b as s,P as h,F as w,L as p}from"./render-Cm96_Mk3.js";const f=e=>{const{subscribe:i,notify:n}=u(),t=()=>window.location.pathname;console.log("getPath:",t());const a=()=>e[t()];console.log("getTarget:",a());const l=c=>{window.history.pushState(null,null,c),n()};return window.addEventListener("popstate",()=>n()),{get path(){return t()},push:l,subscribe:i,getTarget:a}};g.set(f({"/":d,"/login":()=>{const{loggedIn:e}=r.getState();if(e)throw new w;return s(p,null)},"/profile":()=>{const{loggedIn:e}=r.getState();if(!e)throw new b;return s(h,null)}}));function P(){g.get().subscribe(o),r.subscribe(o),o()}P();
