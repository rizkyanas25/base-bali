(this["webpackJsonpbase-bali"]=this["webpackJsonpbase-bali"]||[]).push([[0],{24:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),c=n(14),a=n.n(c),o=(n(24),n(51)),i=n(6),l=n(4),d=n(15),b=n.n(d),u=n(8),j=n(16),h=n(17),O=n(2);var p=function(e){var t=Object(r.useState)([]),n=Object(l.a)(t,2),s=n[0],c=n[1],a=Object(r.useState)([]),o=Object(l.a)(a,2),i=o[0],d=o[1],p=Object(r.useState)([]),x=Object(l.a)(p,2),f=x[0],m=x[1],g=Object(r.useState)("Indonesia"),v=Object(l.a)(g,2),w=v[0],y=v[1],N=Object(r.useState)(s),S=Object(l.a)(N,2),C=S[0],k=S[1],B=Object(r.useState)(i),I=Object(l.a)(B,2),T=I[0],E=I[1],F=Object(r.useState)(""),L=Object(l.a)(F,2),P=L[0],z=L[1],M=Object(r.useState)(""),R=Object(l.a)(M,2),q=R[0],A=R[1],J=Object(r.useState)(!1),V=Object(l.a)(J,2),W=V[0],D=V[1],K=Object(r.useState)(!0),Q=Object(l.a)(K,2),U=(Q[0],Q[1]),Z=Object(r.useState)(!1),G=Object(l.a)(Z,2),H=G[0],X=G[1];Object(r.useEffect)((function(){Y()}),[]),Object(r.useEffect)((function(){if(P){var e=$(P);A(e),D(!1)}else""===P&&(A(""),D(!1))}),[P]),Object(r.useEffect)((function(){H&&(gsap.to("#copied",{width:110,duration:.25}),setTimeout((function(){X(!1),gsap.to("#copied",{width:0,duration:.4})}),1250))}),[H]);var Y=function(){fetch("https://opensheet.vercel.app/1UzyabhmIZ9atEB-WC4W0MTpPkRswFw8PBsBm3Q2T5KA/Sheet1").then((function(e){return e.json()})).then((function(e){var t=[],n=[];e.forEach((function(e){e.bali&&e.indonesia&&(n.push(e.bali),t.push(e.indonesia))})),d(n),E(n),c(t),k(t),U(!1)}))},$=function(e){var t=C.indexOf(e.trim().toLowerCase());return-1!==t?T[t]:"Tidak ditemukan translasi"},_={value:P,onChange:function(e,t){var n=t.newValue;-1===n.indexOf(" ")&&(z(n),D(!0))},id:"searchInput",pattern:"[^s]+"};return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"title w-screen py-4 px-6 text-2xl border-b-2 border-gray-200 border-solid",children:"Melajah Base Bali"}),Object(O.jsx)("div",{className:"w-screen bg-gray-50 h-32 border-b-2 border-gray-200 border-solid"}),Object(O.jsx)("div",{className:"container mx-auto px-10 -mt-24",children:Object(O.jsxs)("div",{className:"shadow-sm mx-auto flex justify-center ",children:[Object(O.jsxs)("div",{className:"w-2/4 border-2 border-gray-200 border-solid border-r-0 rounded-md rounded-tr-none rounded-br-none bg-white",children:[Object(O.jsx)("div",{className:"p-4 w-full font-semibold",children:w}),Object(O.jsxs)("div",{className:"relative w-full h-32 border-t-2 border-r-2 border-gray-200 border-solid cursor-text",onClick:function(){document.getElementById("searchInput").focus()},children:[Object(O.jsx)(b.a,{suggestions:f,onSuggestionsFetchRequested:function(e){var t=e.value;m(function(e){if(e){var t=e.trim().toLowerCase(),n=t.length;return 0===n?[]:C.filter((function(e){return e.toLowerCase().slice(0,n)===t}))}}(t))},onSuggestionsClearRequested:function(){m([])},getSuggestionValue:function(e){return e},renderSuggestion:function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{className:"text",children:e}),Object(O.jsx)("p",{className:"translate",children:$(e)})]})},inputProps:_}),P.length>0&&Object(O.jsx)("div",{className:"absolute right-4 top-4 mt-1 cursor-pointer",children:Object(O.jsx)(u.b,{onClick:function(){return z("")},size:"1.5em",style:{color:"grey"}})})]})]}),Object(O.jsxs)("div",{className:"relative w-2/4 border-2 border-gray-200 border-solid border-l-0 rounded-md rounded-tl-none rounded-bl-none bg-white",children:[Object(O.jsx)("div",{className:"absolute -left-2 top-4 -ml-1 cursor-pointer",children:Object(O.jsx)(u.c,{onClick:function(){switch(z(""),A(""),m([]),w){case"Indonesia":y("Bali"),k(i),E(s);break;case"Bali":y("Indonesia"),k(s),E(i)}},size:"1.5em",style:{color:"grey"}})}),Object(O.jsx)("div",{className:"p-4 pl-10 w-full font-semibold",children:"Indonesia"===w?"Bali":"Indonesia"}),Object(O.jsx)("div",{className:"w-full h-32 border-t-2 border-gray-200 border-solid",children:W?Object(O.jsx)("p",{className:"p-4 w-full text-xl text-gray-400",children:"..."}):q?Object(O.jsx)("p",{className:"p-4 w-full text-xl text-black",children:q}):Object(O.jsx)("p",{className:"p-4 w-full text-xl text-gray-400",children:"Translasi"})}),q.length>0&&"Tidak ditemukan translasi"!==q&&Object(O.jsxs)("div",{className:"absolute right-4 bottom-4 w-6 h-6 overflow-visible cursor-pointer",children:[Object(O.jsx)("div",{className:"copyIcon","data-tip":"Salin translasi",children:Object(O.jsx)(j.CopyToClipboard,{text:q,onCopy:function(){return X(!0)},children:Object(O.jsx)(u.a,{size:"1.5em",style:{color:"grey"}})})}),Object(O.jsx)(h.a,{place:"bottom",type:"dark",backgroundColor:"grey",arrowColor:"grey",delayShow:250,className:"tooltip"}),Object(O.jsx)("span",{id:"copied",children:"Berhasil menyalin"})]})]})]})})]})},x=Object(i.a)({}),f=[{path:"/",component:p}],m=function(e){return Object(O.jsx)(o.b,{history:x,children:Object(O.jsx)(o.c,{children:f.map((function(e){return Object(O.jsx)(o.a,{exact:!0,path:e.path,component:e.component},e.path)}))})})};n(46);var g=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(m,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};a.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root")),v()}},[[47,1,2]]]);
//# sourceMappingURL=main.7896040d.chunk.js.map