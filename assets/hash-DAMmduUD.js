import{c as h,r as s,a as t,g as o,H as l,U as w,b as a,P as u,F as b,L as f}from"./render-Cm96_Mk3.js";const P=e=>{const{subscribe:i,notify:c}=h(),n=()=>window.location.hash?window.location.hash.slice(1):"/",g=()=>e[n()],r=d=>{window.location.hash=d};return window.addEventListener("hashchange",c),window.addEventListener("load",()=>{window.location.hash||r("/")}),{get path(){return n()},push:r,subscribe:i,getTarget:g}};s.set(P({"/":l,"/login":()=>{const{loggedIn:e}=o.getState();if(e)throw new b;return a(f,null)},"/profile":()=>{const{loggedIn:e}=o.getState();if(!e)throw new w;return a(u,null)}}));function m(){s.get().subscribe(t),o.subscribe(t),t()}m();
