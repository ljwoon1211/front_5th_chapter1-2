var q=Object.defineProperty;var G=(e,t,n)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var S=(e,t,n)=>G(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();const H=()=>{const e=new Set;return{subscribe:r=>e.add(r),notify:()=>e.forEach(r=>r())}},V=(e,t)=>{const{subscribe:n,notify:r}=H();let a={...e};const l=c=>{a={...a,...c},r()},o=()=>({...a}),u=Object.fromEntries(Object.entries(t).map(([c,x])=>[c,(...w)=>l(x(o(),...w))]));return{getState:o,setState:l,subscribe:n,actions:u}},_=(e,t=window.localStorage)=>({get:()=>JSON.parse(t.getItem(e)),set:l=>t.setItem(e,JSON.stringify(l)),reset:()=>t.removeItem(e)});function s(e,t,...n){const r=n.flat(1/0).filter(a=>a!=null&&a!==!1);return{type:e,props:t,children:r}}const P=new Set,f=new Map;function B(e){e._events||(e._events=new Set),P.forEach(t=>{e._events.has(t)||(e.addEventListener(t,T),e._events.add(t))})}function j(e,t,n){if(!e||!t||!n)return;P.add(t),f.has(e)||f.set(e,{});const r=f.get(e);r[t]=n}function T(e){let t=e.target;for(;t;){if(f.has(t)){const r=f.get(t)[e.type];r&&r.call(t,e)}t=t.parentNode}}function I(e,t,n){if(!f.has(e))return;const r=f.get(e);r[t]===n&&delete r[t],Object.keys(r).length===0&&f.delete(e)}function d(e){if(e==null||typeof e=="boolean")return document.createTextNode("");if(typeof e=="string"||typeof e=="number")return document.createTextNode(String(e));if(Array.isArray(e)){const n=document.createDocumentFragment();return e.forEach(r=>{const a=d(r);n.appendChild(a)}),n}const t=document.createElement(e.type);return W(t,e.props),e.children.map(d).forEach(n=>t.appendChild(n)),t}function W(e,t){t&&Object.entries(t).filter(([n])=>n!=null&&n!==!1).forEach(([n,r])=>{if(n.startsWith("on")){const a=n.slice(2).toLowerCase();j(e,a,r);return}else n==="className"?e.setAttribute("class",r):e.setAttribute(n,r)})}function C(e){if(e==null||typeof e=="boolean")return"";if(typeof e=="number")return String(e);if(typeof e=="string")return e;if(typeof e.type=="function"){const n=e.type,r={...e.props||{}};r.children||(r.children=e.children);const a=n(r);return C(a)}let t=[];if(e.children){t=Array.isArray(e.children)?e.children:[e.children];const n=t.map(r=>C(r)).filter(r=>r!==""&&r!==null&&r!==void 0&&r!==!1);return{...e,children:n}}return e}function z(e,t,n){for(const[r,a]of Object.entries(t)){if(r.startsWith("on")){const o=r.slice(2).toLowerCase();n[r]&&I(e,o,n[r]),j(e,o,a);continue}const l=r==="className"?"class":r;n[r]!==t[r]&&e.setAttribute(l,a)}for(const r of Object.keys(n)){if(r.startsWith("on")){const a=r.slice(2).toLowerCase();t[r]===void 0&&I(e,a,n[r])}t[r]===void 0&&e.removeAttribute(r)}}function U(e,t,n,r=0){if(!t&&n){r<e.childNodes.length&&e.removeChild(e.childNodes[r]);return}if(t&&!n){e.appendChild(d(t));return}if(typeof t!=typeof n||typeof t=="string"&&t!==n||t&&n&&t.type!==n.type){r<e.childNodes.length?e.replaceChild(d(t),e.childNodes[r]):e.appendChild(d(t));return}if(t&&n&&typeof t!="string"){if(r>=e.childNodes.length){e.appendChild(d(t));return}const a=e.childNodes[r];z(a,t.props||{},n.props||{});const l=t.children||[],o=n.children||[],u=Math.max(l.length,o.length);for(let c=0;c<u;c++)U(a,l[c],o[c],c)}}let v=null;function J(e,t){const n=C(e);if(v)U(t,n,v);else{const r=d(n);t.appendChild(r)}v=n,B(t)}const p=_("user"),K=1e3,h=K*60,Y=h*60,i=V({currentUser:p.get(),loggedIn:!!p.get(),posts:[{id:1,author:"홍길동",time:Date.now()-5*h,content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",likeUsers:[]},{id:2,author:"김철수",time:Date.now()-15*h,content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",likeUsers:[]},{id:3,author:"이영희",time:Date.now()-30*h,content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",likeUsers:[]},{id:4,author:"박민수",time:Date.now()-30*h,content:"주말에 등산 가실 분 계신가요? 함께 가요!",likeUsers:[]},{id:5,author:"정수연",time:Date.now()-2*Y,content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",likeUsers:[]}],error:null},{logout(e){return p.reset(),{...e,currentUser:null,loggedIn:!1}}}),Q=1e3,L=Q*60,A=L*60,R=A*24,X=e=>{const t=Date.now()-e;return t<L?"방금 전":t<A?`${Math.floor(t/L)}분 전`:t<R?`${Math.floor(t/A)}시간 전`:new Date(e).toLocaleString()},Z=({id:e,author:t,time:n,content:r,likeUsers:a})=>{const{loggedIn:l,posts:o,currentUser:u}=i.getState(),c=u?a.includes(u.username):!1,x=()=>{l||alert("로그인 후 이용해주세요");const w=c?a.filter(m=>m!==u.username):[...a,u.username],F=o.map(m=>m.id===e?{...m,likeUsers:w}:m);i.setState({posts:F})};return s("div",{className:"bg-white rounded-lg shadow p-4 mb-4"},s("div",{className:"flex items-center mb-2"},s("div",null,s("div",{className:"font-bold"},t),s("div",{className:"text-gray-500 text-sm"},X(n)))),s("p",null,r),s("div",{className:"mt-2 flex justify-between text-gray-500"},s("span",{className:`like-button cursor-pointer${c?" text-blue-500":""}`,onClick:x},"좋아요 ",a.length),s("span",null,"댓글"),s("span",null,"공유")))},ee=()=>{const{posts:e}=i.getState(),{currentUser:t}=i.getState();return s("div",{className:"mb-4 bg-white rounded-lg shadow p-4"},s("textarea",{id:"post-content",placeholder:"무슨 생각을 하고 계신가요?",className:"w-full p-2 border rounded"}),s("button",{id:"post-submit",className:"mt-2 bg-blue-600 text-white px-4 py-2 rounded",onClick:()=>{const r=document.getElementById("post-content").value,l=[{id:e.length+1,author:t.username,time:Date.now(),content:r,likeUsers:[]},...e];i.setState({posts:l})}},"게시"))},$=()=>s("header",{className:"bg-blue-600 text-white p-4 sticky top-0"},s("h1",{className:"text-2xl font-bold"},"항해플러스")),O=()=>s("footer",{className:"bg-gray-200 p-4 text-center"},s("p",null,"© $",new Date().getFullYear()," 항해플러스. All rights reserved.")),b={value:null,get(){return this.value},set(e){this.value=e}},N=e=>"/front_5th_chapter1-2"+window.location.pathname===e?"text-blue-600 font-bold":"text-gray-600";function E({onClick:e,children:t,...n}){return s("a",{onClick:a=>{a.preventDefault(),e==null||e(),b.get().push(a.target.href.replace(window.location.origin,""))},...n},t)}const M=()=>{const{loggedIn:e}=i.getState(),{logout:t}=i.actions,n="/front_5th_chapter1-2";return s("nav",{className:"bg-white shadow-md p-2 sticky top-14"},s("ul",{className:"flex justify-around"},s("li",null,s(E,{href:`${n}/`,className:N("/")},"홈")),!e&&s("li",null,s(E,{href:`${n}/login`,className:N("/login")},"로그인")),e&&s("li",null,s(E,{href:`${n}/profile`,className:N("/profile")},"프로필")),e&&s("li",null,s("a",{href:"#",id:"logout",className:"text-gray-600",onClick:r=>{r.preventDefault(),t()}},"로그아웃"))))},ae=()=>{const{posts:e}=i.getState(),{loggedIn:t}=i.getState();return s("div",{className:"bg-gray-100 min-h-screen flex justify-center"},s("div",{className:"max-w-md w-full"},s($,null),s(M,null),s("main",{className:"p-4"},t?s(ee,null):null,s("div",{id:"posts-container",className:"space-y-4"},[...e].sort((n,r)=>r.time-n.time).map(n=>s(Z,{...n,activationLike:!1})))),s(O,null)))};function te(e){const t={username:e,email:"",bio:""};i.setState({currentUser:t,loggedIn:!0}),p.set(t)}const le=()=>s("div",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},s("div",{className:"bg-white p-8 rounded-lg shadow-md w-full max-w-md"},s("h1",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"항해플러스"),s("form",{id:"login-form",onSubmit:t=>{t.preventDefault();const n=document.getElementById("username").value;te(n)}},s("input",{type:"text",id:"username",placeholder:"사용자 이름",className:"w-full p-2 mb-4 border rounded",required:!0}),s("input",{type:"password",placeholder:"비밀번호",className:"w-full p-2 mb-6 border rounded",required:!0}),s("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded"},"로그인")),s("div",{className:"mt-4 text-center"},s("a",{href:"#",className:"text-blue-600 text-sm"},"비밀번호를 잊으셨나요?")),s("hr",{className:"my-6"}),s("div",{className:"text-center"},s("button",{className:"bg-green-500 text-white px-4 py-2 rounded"},"새 계정 만들기")))),ne=()=>s("main",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},s("div",{className:"bg-white p-8 rounded-lg shadow-md w-full text-center",style:"max-width: 480px"},s("h1",{className:"text-2xl font-bold text-blue-600 mb-4"},"항해플러스"),s("p",{className:"text-4xl font-bold text-gray-800 mb-4"},"404"),s("p",{className:"text-xl text-gray-600 mb-8"},"페이지를 찾을 수 없습니다"),s("p",{className:"text-gray-600 mb-8"},"요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다."),s("a",{href:"/","data-link":"",className:"bg-blue-600 text-white px-4 py-2 rounded font-bold"},"홈으로 돌아가기")));function se(e){const t={...i.getState().currentUser,...e};i.setState({currentUser:t}),p.set(t),alert("프로필이 업데이트되었습니다.")}const oe=()=>{const{loggedIn:e,currentUser:t}=i.getState(),{username:n="",email:r="",bio:a=""}=t??{};return s("div",{className:"bg-gray-100 min-h-screen flex justify-center"},s("div",{className:"max-w-md w-full"},s($,null),s(M,{loggedIn:e}),s("main",{className:"p-4"},s("div",{className:"bg-white p-8 rounded-lg shadow-md"},s("h2",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"내 프로필"),s("form",{id:"profile-form",onSubmit:o=>{o.preventDefault();const u=new FormData(o.target),c=Object.fromEntries(u);se(c)}},s("div",{className:"mb-4"},s("label",{for:"username",className:"block text-gray-700 text-sm font-bold mb-2"},"사용자 이름"),s("input",{type:"text",id:"username",name:"username",className:"w-full p-2 border rounded",value:n,required:!0})),s("div",{className:"mb-4"},s("label",{for:"email",className:"block text-gray-700 text-sm font-bold mb-2"},"이메일"),s("input",{type:"email",id:"email",name:"email",className:"w-full p-2 border rounded",value:r,required:!0})),s("div",{className:"mb-6"},s("label",{for:"bio",className:"block text-gray-700 text-sm font-bold mb-2"},"자기소개"),s("textarea",{id:"bio",name:"bio",rows:"4",className:"w-full p-2 border rounded"},a," ",a)),s("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded font-bold"},"프로필 업데이트")))),s(O,null)))},g=class g extends Error{constructor(){super(g.MESSAGE)}};S(g,"MESSAGE","ForbiddenError");let k=g;const y=class y extends Error{constructor(){super(y.MESSAGE)}};S(y,"MESSAGE","UnauthorizedError");let D=y;function ce(){const e=b.get().getTarget()??ne,t=document.querySelector("#root");try{J(s(e,null),t)}catch(n){if(n instanceof k){b.get().push("/");return}if(n instanceof D){b.get().push("/login");return}console.error(n)}}export{k as F,ae as H,le as L,oe as P,D as U,ce as a,s as b,H as c,i as g,b as r};
