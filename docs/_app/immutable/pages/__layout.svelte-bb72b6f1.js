import{F as Ae,G as Ce,S as F,i as Y,s as j,e as C,H as w,c as S,a as g,I as z,d as c,b as o,J as N,g as E,K as m,L as Q,n as I,M as G,k as H,x as O,m as R,y as P,z as W,N as ce,O as ye,P as ke,Q as we,R as ie,T as J,r as B,p as T,C as q,l as re,o as fe,q as he,U as ze,t as X,h as ee,V as Se,W as $e,X as Be,f as y,Y as ae,Z as ne,_ as ue}from"../chunks/index-58a66b3e.js";const Le=()=>{const i=Ae("__svelte__");return{page:{subscribe:i.page.subscribe},navigating:{subscribe:i.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:i.navigating.subscribe}},session:i.session,updated:i.updated}},xe={subscribe(i){return Le().page.subscribe(i)}};function Ue(i){return i<.5?4*i*i*i:.5*Math.pow(2*i-2,3)+1}function Ne(i){const e=i-1;return e*e*e+1}function se(i,{delay:e=0,duration:r=400,easing:t=Ce}={}){const l=+getComputedStyle(i).opacity;return{delay:e,duration:r,easing:t,css:s=>`opacity: ${s*l}`}}function de(i,{delay:e=0,duration:r=400,easing:t=Ne,x:l=0,y:s=0,opacity:a=0}={}){const n=getComputedStyle(i),f=+n.opacity,h=n.transform==="none"?"":n.transform,u=f*(1-a);return{delay:e,duration:r,easing:t,css:(d,b)=>`
			transform: ${h} translate(${(1-d)*l}px, ${(1-d)*s}px);
			opacity: ${f-u*b}`}}function Te(i){let e,r,t,l,s;return{c(){e=C("button"),r=w("svg"),t=w("path"),this.h()},l(a){e=S(a,"BUTTON",{class:!0});var n=g(e);r=z(n,"svg",{width:!0,height:!0,fill:!0,class:!0,viewBox:!0});var f=g(r);t=z(f,"path",{d:!0}),g(t).forEach(c),f.forEach(c),n.forEach(c),this.h()},h(){o(t,"d","M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"),o(r,"width","32"),o(r,"height","32"),o(r,"fill","currentColor"),o(r,"class","bi bi-x-lg svelte-42v7l2"),o(r,"viewBox","0 0 16 16"),o(e,"class","svelte-42v7l2"),N(e,"left",!i[0]),N(e,"right",i[0])},m(a,n){E(a,e,n),m(e,r),m(r,t),l||(s=Q(e,"click",i[1]),l=!0)},p(a,[n]){n&1&&N(e,"left",!a[0]),n&1&&N(e,"right",a[0])},i:I,o:I,d(a){a&&c(e),l=!1,s()}}}function Ie(i,e,r){let{rightAlign:t=!1}=e;function l(s){G.call(this,i,s)}return i.$$set=s=>{"rightAlign"in s&&r(0,t=s.rightAlign)},[t,l]}class Ee extends F{constructor(e){super(),Y(this,e,Ie,Te,j,{rightAlign:0})}}function ge(i){let e,r,t,l,s,a,n,f,h,u,d,b;a=new Ee({props:{rightAlign:i[1]}}),a.$on("click",i[6]);const k=i[4].default,_=ze(k,i,i[3],null);return{c(){e=C("div"),t=H(),l=C("aside"),s=C("div"),O(a.$$.fragment),n=H(),f=C("div"),_&&_.c(),this.h()},l(v){e=S(v,"DIV",{class:!0});var $=g(e);$.forEach(c),t=R(v),l=S(v,"ASIDE",{class:!0});var L=g(l);s=S(L,"DIV",{id:!0,class:!0});var K=g(s);P(a.$$.fragment,K),K.forEach(c),n=R(L),f=S(L,"DIV",{id:!0,class:!0});var V=g(f);_&&_.l(V),V.forEach(c),L.forEach(c),this.h()},h(){o(e,"class","backdrop svelte-vuohmb"),o(s,"id","btnWrapper"),o(s,"class","svelte-vuohmb"),o(f,"id","contentWrapper"),o(f,"class","svelte-vuohmb"),o(l,"class","sidebar svelte-vuohmb"),N(l,"left",!i[1]),N(l,"right",i[1])},m(v,$){E(v,e,$),E(v,t,$),E(v,l,$),m(l,s),W(a,s,null),m(l,n),m(l,f),_&&_.m(f,null),u=!0,d||(b=Q(e,"click",ce(i[5])),d=!0)},p(v,$){i=v;const L={};$&2&&(L.rightAlign=i[1]),a.$set(L),_&&_.p&&(!u||$&8)&&ye(_,k,i,i[3],u?we(k,i[3],$,null):ke(i[3]),null),$&2&&N(l,"left",!i[1]),$&2&&N(l,"right",i[1])},i(v){u||(ie(()=>{r||(r=J(e,se,{duration:300},!0)),r.run(1)}),B(a.$$.fragment,v),B(_,v),ie(()=>{h||(h=J(l,de,i[2],!0)),h.run(1)}),u=!0)},o(v){r||(r=J(e,se,{duration:300},!1)),r.run(0),T(a.$$.fragment,v),T(_,v),h||(h=J(l,de,i[2],!1)),h.run(0),u=!1},d(v){v&&c(e),v&&r&&r.end(),v&&c(t),v&&c(l),q(a),_&&_.d(v),v&&h&&h.end(),d=!1,b()}}}function Me(i){let e,r,t=i[0]&&ge(i);return{c(){t&&t.c(),e=re()},l(l){t&&t.l(l),e=re()},m(l,s){t&&t.m(l,s),E(l,e,s),r=!0},p(l,[s]){l[0]?t?(t.p(l,s),s&1&&B(t,1)):(t=ge(l),t.c(),B(t,1),t.m(e.parentNode,e)):t&&(fe(),T(t,1,1,()=>{t=null}),he())},i(l){r||(B(t),r=!0)},o(l){T(t),r=!1},d(l){t&&t.d(l),l&&c(e)}}}function De(i,e,r){let{$$slots:t={},$$scope:l}=e,{show:s=!1}=e,{rightAlign:a=!1}=e,n={duration:300,easing:Ue};a?n.x=400:n.x=-400;function f(u){G.call(this,i,u)}function h(u){G.call(this,i,u)}return i.$$set=u=>{"show"in u&&r(0,s=u.show),"rightAlign"in u&&r(1,a=u.rightAlign),"$$scope"in u&&r(3,l=u.$$scope)},[s,a,n,l,t,f,h]}class pe extends F{constructor(e){super(),Y(this,e,De,Me,j,{show:0,rightAlign:1})}}function ve(i,e,r){const t=i.slice();return t[2]=e[r],t}function me(i){let e,r=i[2].desc+"",t,l,s,a;return{c(){e=C("a"),t=X(r),this.h()},l(n){e=S(n,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var f=g(e);t=ee(f,r),f.forEach(c),this.h()},h(){o(e,"sveltekit:prefetch",""),o(e,"href",l=i[2].href),o(e,"class","svelte-4tnv57")},m(n,f){E(n,e,f),m(e,t),s||(a=Q(e,"click",ce(i[1])),s=!0)},p:I,d(n){n&&c(e),s=!1,a()}}}function Ve(i){let e,r=i[0],t=[];for(let l=0;l<r.length;l+=1)t[l]=me(ve(i,r,l));return{c(){e=C("nav");for(let l=0;l<t.length;l+=1)t[l].c()},l(l){e=S(l,"NAV",{});var s=g(e);for(let a=0;a<t.length;a+=1)t[a].l(s);s.forEach(c)},m(l,s){E(l,e,s);for(let a=0;a<t.length;a+=1)t[a].m(e,null)},p(l,[s]){if(s&1){r=l[0];let a;for(a=0;a<r.length;a+=1){const n=ve(l,r,a);t[a]?t[a].p(n,s):(t[a]=me(n),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=r.length}},i:I,o:I,d(l){l&&c(e),Se(t,l)}}}function He(i){const e=[{href:"/",desc:"Home"},{href:"/about",desc:"About"}];function r(t){G.call(this,i,t)}return[e,r]}class Oe extends F{constructor(e){super(),Y(this,e,He,Ve,j,{})}}function Re(i){let e,r;return{c(){e=C("p"),r=X("This will eventually be the editor where you can modify the dragon.")},l(t){e=S(t,"P",{});var l=g(e);r=ee(l,"This will eventually be the editor where you can modify the dragon."),l.forEach(c)},m(t,l){E(t,e,l),m(e,r)},p:I,i:I,o:I,d(t){t&&c(e)}}}class Pe extends F{constructor(e){super(),Y(this,e,null,Re,j,{})}}function _e(i){let e,r,t,l,s,a,n,f,h,u,d,b,k,_,v,$,L;n=new Ee({props:{rightAlign:!0}}),n.$on("click",i[4]);function K(U,M){return U[1]?qe:We}let V=K(i),D=V(i);return{c(){e=C("div"),r=C("div"),t=C("div"),l=C("span"),s=X("Share Your Dragon"),a=H(),O(n.$$.fragment),f=H(),h=C("div"),u=C("span"),d=X("Copy the URL to share your dragon!"),b=H(),k=C("div"),D.c(),this.h()},l(U){e=S(U,"DIV",{class:!0});var M=g(e);r=S(M,"DIV",{class:!0});var Z=g(r);t=S(Z,"DIV",{class:!0});var A=g(t);l=S(A,"SPAN",{class:!0});var p=g(l);s=ee(p,"Share Your Dragon"),p.forEach(c),a=R(A),P(n.$$.fragment,A),A.forEach(c),f=R(Z),h=S(Z,"DIV",{class:!0});var x=g(h);u=S(x,"SPAN",{class:!0});var te=g(u);d=ee(te,"Copy the URL to share your dragon!"),te.forEach(c),x.forEach(c),b=R(Z),k=S(Z,"DIV",{class:!0});var le=g(k);D.l(le),le.forEach(c),Z.forEach(c),M.forEach(c),this.h()},h(){o(l,"class","svelte-1p4zz6u"),o(t,"class","modal-header svelte-1p4zz6u"),o(u,"class","svelte-1p4zz6u"),o(h,"class","modal-body svelte-1p4zz6u"),o(k,"class","modal-footer svelte-1p4zz6u"),o(r,"class","modal svelte-1p4zz6u"),o(e,"class","backdrop svelte-1p4zz6u")},m(U,M){E(U,e,M),m(e,r),m(r,t),m(t,l),m(l,s),m(t,a),W(n,t,null),m(r,f),m(r,h),m(h,u),m(u,d),m(r,b),m(r,k),D.m(k,null),v=!0,$||(L=Q(e,"click",ce(i[3])),$=!0)},p(U,M){V===(V=K(U))&&D?D.p(U,M):(D.d(1),D=V(U),D&&(D.c(),D.m(k,null)))},i(U){v||(B(n.$$.fragment,U),ie(()=>{_||(_=J(e,se,{duration:300},!0)),_.run(1)}),v=!0)},o(U){T(n.$$.fragment,U),_||(_=J(e,se,{duration:300},!1)),_.run(0),v=!1},d(U){U&&c(e),q(n),D.d(),U&&_&&_.end(),$=!1,L()}}}function We(i){let e,r,t,l;return{c(){e=C("button"),r=X("Copy URL"),this.h()},l(s){e=S(s,"BUTTON",{class:!0});var a=g(e);r=ee(a,"Copy URL"),a.forEach(c),this.h()},h(){o(e,"class","clickable svelte-1p4zz6u")},m(s,a){E(s,e,a),m(e,r),t||(l=Q(e,"click",i[2]),t=!0)},p:I,d(s){s&&c(e),t=!1,l()}}}function qe(i){let e,r;return{c(){e=C("button"),r=X("URL Copied!"),this.h()},l(t){e=S(t,"BUTTON",{class:!0});var l=g(e);r=ee(l,"URL Copied!"),l.forEach(c),this.h()},h(){o(e,"class","success svelte-1p4zz6u")},m(t,l){E(t,e,l),m(e,r)},p:I,d(t){t&&c(e)}}}function Fe(i){let e,r,t=i[0]&&_e(i);return{c(){t&&t.c(),e=re()},l(l){t&&t.l(l),e=re()},m(l,s){t&&t.m(l,s),E(l,e,s),r=!0},p(l,[s]){l[0]?t?(t.p(l,s),s&1&&B(t,1)):(t=_e(l),t.c(),B(t,1),t.m(e.parentNode,e)):t&&(fe(),T(t,1,1,()=>{t=null}),he())},i(l){r||(B(t),r=!0)},o(l){T(t),r=!1},d(l){t&&t.d(l),l&&c(e)}}}function Ye(i,e,r){let t;$e(i,xe,u=>r(5,t=u));let{show:l=!1}=e,{urlCopied:s=!1}=e;const a=Be(),n=()=>{navigator.clipboard.writeText(`${t.url}`),a("copiedUrl",{})};function f(u){G.call(this,i,u)}function h(u){G.call(this,i,u)}return i.$$set=u=>{"show"in u&&r(0,l=u.show),"urlCopied"in u&&r(1,s=u.urlCopied)},[l,s,n,f,h]}class je extends F{constructor(e){super(),Y(this,e,Ye,Fe,j,{show:0,urlCopied:1})}}function Ke(i){let e,r,t,l,s,a,n;return{c(){e=C("button"),r=w("svg"),t=w("line"),l=w("line"),s=w("line"),this.h()},l(f){e=S(f,"BUTTON",{class:!0});var h=g(e);r=z(h,"svg",{width:!0,height:!0,class:!0});var u=g(r);t=z(u,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),g(t).forEach(c),l=z(u,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),g(l).forEach(c),s=z(u,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),g(s).forEach(c),u.forEach(c),h.forEach(c),this.h()},h(){o(t,"id","top"),o(t,"x1","0"),o(t,"y1","6"),o(t,"x2","32"),o(t,"y2","6"),o(t,"class","svelte-9tx3z6"),o(l,"id","middle"),o(l,"x1","0"),o(l,"y1","16"),o(l,"x2","32"),o(l,"y2","16"),o(l,"class","svelte-9tx3z6"),o(s,"id","bottom"),o(s,"x1","0"),o(s,"y1","26"),o(s,"x2","32"),o(s,"y2","26"),o(s,"class","svelte-9tx3z6"),o(r,"width","32"),o(r,"height","32"),o(r,"class","svelte-9tx3z6"),o(e,"class","svelte-9tx3z6"),N(e,"left",!i[0]),N(e,"right",i[0])},m(f,h){E(f,e,h),m(e,r),m(r,t),m(r,l),m(r,s),a||(n=Q(e,"click",i[1]),a=!0)},p(f,[h]){h&1&&N(e,"left",!f[0]),h&1&&N(e,"right",f[0])},i:I,o:I,d(f){f&&c(e),a=!1,n()}}}function Ze(i,e,r){let{rightAlign:t=!1}=e;function l(s){G.call(this,i,s)}return i.$$set=s=>{"rightAlign"in s&&r(0,t=s.rightAlign)},[t,l]}class Ge extends F{constructor(e){super(),Y(this,e,Ze,Ke,j,{rightAlign:0})}}function Je(i){let e,r,t;return{c(){e=w("svg"),r=w("path"),t=w("path"),this.h()},l(l){e=z(l,"svg",{width:!0,height:!0,fill:!0,class:!0,viewBox:!0});var s=g(e);r=z(s,"path",{d:!0}),g(r).forEach(c),t=z(s,"path",{"fill-rule":!0,d:!0}),g(t).forEach(c),s.forEach(c),this.h()},h(){o(r,"d","M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"),o(t,"fill-rule","evenodd"),o(t,"d","M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"),o(e,"width","32"),o(e,"height","32"),o(e,"fill","currentColor"),o(e,"class","bi bi-pencil-square svelte-17858yr"),o(e,"viewBox","0 0 16 16")},m(l,s){E(l,e,s),m(e,r),m(e,t)},d(l){l&&c(e)}}}function Qe(i){let e,r;return{c(){e=w("svg"),r=w("path"),this.h()},l(t){e=z(t,"svg",{style:!0,width:!0,height:!0,fill:!0,class:!0,viewBox:!0});var l=g(e);r=z(l,"path",{d:!0}),g(r).forEach(c),l.forEach(c),this.h()},h(){o(r,"d","M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"),y(e,"padding","2px"),o(e,"width","28"),o(e,"height","28"),o(e,"fill","currentColor"),o(e,"class","bi bi-exclamation-square-fill svelte-17858yr"),o(e,"viewBox","0 0 16 16")},m(t,l){E(t,e,l),m(e,r)},d(t){t&&c(e)}}}function Xe(i){let e,r,t;function l(n,f){return n[1]?Qe:Je}let s=l(i),a=s(i);return{c(){e=C("button"),a.c(),this.h()},l(n){e=S(n,"BUTTON",{class:!0});var f=g(e);a.l(f),f.forEach(c),this.h()},h(){o(e,"class","svelte-17858yr"),N(e,"left",!i[0]),N(e,"right",i[0]),N(e,"alert",i[1])},m(n,f){E(n,e,f),a.m(e,null),r||(t=Q(e,"click",i[2]),r=!0)},p(n,[f]){s!==(s=l(n))&&(a.d(1),a=s(n),a&&(a.c(),a.m(e,null))),f&1&&N(e,"left",!n[0]),f&1&&N(e,"right",n[0]),f&2&&N(e,"alert",n[1])},i:I,o:I,d(n){n&&c(e),a.d(),r=!1,t()}}}function et(i,e,r){let{rightAlign:t=!1}=e,{alert:l=!1}=e;function s(a){G.call(this,i,a)}return i.$$set=a=>{"rightAlign"in a&&r(0,t=a.rightAlign),"alert"in a&&r(1,l=a.alert)},[t,l,s]}class tt extends F{constructor(e){super(),Y(this,e,et,Xe,j,{rightAlign:0,alert:1})}}function lt(i){let e,r,t,l,s,a,n,f;return{c(){e=C("button"),r=w("svg"),t=w("path"),l=w("path"),this.h()},l(h){e=S(h,"BUTTON",{class:!0});var u=g(e);r=z(u,"svg",{width:!0,height:!0,fill:!0,class:!0,viewBox:!0});var d=g(r);t=z(d,"path",{"fill-rule":!0,d:!0}),g(t).forEach(c),l=z(d,"path",{"fill-rule":!0,d:!0}),g(l).forEach(c),d.forEach(c),u.forEach(c),this.h()},h(){o(t,"fill-rule","evenodd"),o(t,"d","M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"),o(l,"fill-rule","evenodd"),o(l,"d","M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"),o(r,"width","28"),o(r,"height","28"),o(r,"fill","currentColor"),o(r,"class","bi bi-box-arrow-up svelte-a4abms"),o(r,"viewBox","0 0 16 16"),o(e,"class","svelte-a4abms"),N(e,"left",!i[0]),N(e,"right",i[0])},m(h,u){E(h,e,u),m(e,r),m(r,t),m(r,l),a=!0,n||(f=Q(e,"click",i[1]),n=!0)},p(h,[u]){u&1&&N(e,"left",!h[0]),u&1&&N(e,"right",h[0])},i(h){a||(ie(()=>{s||(s=J(e,se,{},!0)),s.run(1)}),a=!0)},o(h){s||(s=J(e,se,{},!1)),s.run(0),a=!1},d(h){h&&c(e),h&&s&&s.end(),n=!1,f()}}}function rt(i,e,r){let{rightAlign:t=!1}=e;function l(s){G.call(this,i,s)}return i.$$set=s=>{"rightAlign"in s&&r(0,t=s.rightAlign)},[t,l]}class st extends F{constructor(e){super(),Y(this,e,rt,lt,j,{rightAlign:0})}}function it(i){let e,r,t,l,s,a,n,f,h,u,d,b,k,_,v;return{c(){e=w("svg"),r=w("defs"),t=w("mask"),l=w("path"),s=w("g"),a=w("circle"),n=w("g"),f=w("g"),h=w("rect"),u=w("rect"),d=w("rect"),b=w("rect"),k=w("rect"),_=w("rect"),v=w("rect"),this.h()},l($){e=z($,"svg",{width:!0,height:!0,viewBox:!0,class:!0});var L=g(e);r=z(L,"defs",{id:!0});var K=g(r);t=z(K,"mask",{maskUnits:!0,id:!0});var V=g(t);l=z(V,"path",{d:!0,style:!0,id:!0}),g(l).forEach(c),V.forEach(c),K.forEach(c),s=z(L,"g",{id:!0,transform:!0});var D=g(s);a=z(D,"circle",{style:!0,id:!0,cx:!0,cy:!0,r:!0}),g(a).forEach(c),D.forEach(c),n=z(L,"g",{id:!0,style:!0});var U=g(n);f=z(U,"g",{id:!0,transform:!0,mask:!0});var M=g(f);h=z(M,"rect",{style:!0,id:!0,width:!0,height:!0,x:!0,y:!0}),g(h).forEach(c),u=z(M,"rect",{style:!0,id:!0,width:!0,height:!0,x:!0,y:!0}),g(u).forEach(c),d=z(M,"rect",{style:!0,id:!0,width:!0,height:!0,x:!0,y:!0}),g(d).forEach(c),b=z(M,"rect",{style:!0,id:!0,width:!0,height:!0,x:!0,y:!0}),g(b).forEach(c),k=z(M,"rect",{style:!0,id:!0,width:!0,height:!0,x:!0,y:!0}),g(k).forEach(c),_=z(M,"rect",{style:!0,id:!0,width:!0,height:!0,x:!0,y:!0}),g(_).forEach(c),v=z(M,"rect",{style:!0,id:!0,width:!0,height:!0,x:!0,y:!0}),g(v).forEach(c),M.forEach(c),U.forEach(c),L.forEach(c),this.h()},h(){o(l,"d","M 14.75623,11.469719 C 14.446904,11.057 14.509433,10.494733 14.599786,10.012965 c 0.05515,-0.2942193 0.17491,-0.592045 0.412119,-0.7989323 0.683509,0.3870811 0.683038,0.00828 1.179433,-0.2683397 1.030923,0.4728106 2.570213,-0.089829 2.570213,-0.089829 -0.620319,-1.391406 3.440903,-1.3851283 5.276813,-1.333174 0.515516,-0.7622085 2.017674,-1.2307729 3.900066,-0.8847042 1.559941,0.2867867 2.540771,-0.4361994 3.523083,-1.740268 -0.280849,1.5077772 -1.407407,2.6182848 -2.273556,2.882358 -0.6231,0.189971 -1.000095,0.320276 -1.405816,0.8791418 3.381418,-0.094545 6.258009,0.1053908 8.028529,1.8890034 -1.988852,-0.5595979 -3.102517,-0.8661568 -3.922706,0.09934 3.02868,0.33787 3.855143,0.770322 6.337562,2.656927 -1.825842,-0.714802 -3.005703,-0.701848 -4.19879,-0.04614 2.107601,0.207645 4.109479,1.28755 4.969839,3.030997 -1.934127,-1.239759 -3.187385,-1.326204 -3.705457,-1.132676 2.047554,0.713177 3.451279,2.292869 3.71892,3.523044 -0.988216,-0.889575 -2.002463,-1.413517 -2.727664,-1.431524 0.788559,0.632844 1.221947,1.174994 1.652051,2.038543 0.953251,1.913908 1.362331,3.986769 0.695341,6.452119 -0.475965,1.759299 -1.484711,3.159016 -3.026233,4.199165 -1.502069,1.016901 -3.360931,1.636578 -5.576576,1.859028 -2.18469,0.230645 -4.530461,0.01476 -7.037299,-0.647618 L 19.368674,30.192672 16.359887,41.313924 20.38662,44.448091 20.182634,45.202074 5.9307995,41.436357 6.1347851,40.682374 10.557022,39.780649 14.037526,26.915807 17.35981,14.635783 c 0,0 0.232885,-0.881104 0.283679,-1.049985 2.214583,0.574285 4.333232,1.352709 5.45428,2.821721 -0.04784,0.173764 -0.201068,0.743186 -0.201068,0.743186 l -2.877853,10.638629 2.971069,0.785035 c 2.444939,0.64602 4.516742,0.587534 6.215408,-0.175459 1.707165,-0.794404 2.798731,-2.071257 3.274697,-3.83055 0.476387,-1.760849 0.111487,-3.038228 -0.186289,-3.751399 -0.488067,-1.16892 -1.271062,-2.368083 -1.91862,-3.139988 -0.616917,-0.735377 -1.750531,-1.747286 -2.671234,-2.361506 -2.394796,-1.597616 -2.9264,-1.114307 -2.965744,0.477929 -3.167719,-2.817909 -5.931117,-3.516936 -9.981905,-4.323677 z m 7.047506,-2.939151 c -0.745149,-0.026122 -2.192619,-0.073721 -1.764399,0.7768484 0.955011,0.052567 1.779314,0.00424 1.764399,-0.7768484 z"),y(l,"font-weight","600"),y(l,"font-size","48px"),y(l,"font-family","'Spectral SC'"),y(l,"-inkscape-font-specification","'Spectral SC, Semi-Bold'"),y(l,"display","inline"),y(l,"fill","#ffffff"),y(l,"stroke-width","0.26687"),o(l,"id","path1777"),o(t,"maskUnits","userSpaceOnUse"),o(t,"id","mask1775"),o(r,"id","defs2"),y(a,"fill","#1a1a1a"),y(a,"stroke-width","0.229148"),o(a,"id","path429"),o(a,"cx","32"),o(a,"cy","32"),o(a,"r","27.4512"),o(s,"id","layer3"),o(s,"transform","translate(-4.5487995,-4.5487995)"),y(h,"fill","#c21e1e"),y(h,"fill-opacity","1"),y(h,"stroke-width","0.25591"),o(h,"id","rect1437"),o(h,"width","54.80315"),o(h,"height","6.6141734"),o(h,"x","0"),o(h,"y","4.7244096"),y(u,"fill","#dd7d0e"),y(u,"fill-opacity","1"),y(u,"stroke-width","0.236927"),o(u,"id","rect1437-1"),o(u,"width","54.80315"),o(u,"height","5.6692915"),o(u,"x","0"),o(u,"y","11.338583"),y(d,"fill","#d0c201"),y(d,"fill-opacity","1"),y(d,"stroke-width","0.236927"),o(d,"id","rect1437-1-0"),o(d,"width","54.80315"),o(d,"height","5.6692915"),o(d,"x","0"),o(d,"y","17.007874"),y(b,"fill","#229e00"),y(b,"fill-opacity","1"),y(b,"stroke-width","0.236927"),o(b,"id","rect1437-1-0-0"),o(b,"width","54.80315"),o(b,"height","5.6692915"),o(b,"x","-1.3877788e-17"),o(b,"y","22.677166"),y(k,"fill","#0a99ff"),y(k,"fill-opacity","1"),y(k,"stroke-width","0.236927"),o(k,"id","rect1437-1-0-0-0"),o(k,"width","54.80315"),o(k,"height","5.6692915"),o(k,"x","0"),o(k,"y","28.346457"),y(_,"fill","#2f1fff"),y(_,"fill-opacity","1"),y(_,"stroke-width","0.236927"),o(_,"id","rect1437-1-0-0-0-2"),o(_,"width","54.80315"),o(_,"height","5.6692915"),o(_,"x","-2.7755576e-17"),o(_,"y","34.015747"),y(v,"fill","#934ace"),y(v,"fill-opacity","1"),y(v,"stroke-width","0.236927"),o(v,"id","rect1437-1-0-0-0-2-1"),o(v,"width","54.80315"),o(v,"height","5.6692915"),o(v,"x","8.8817842e-16"),o(v,"y","39.68504"),o(f,"id","g1612"),o(f,"transform","matrix(0.96499015,-0.25118267,0.26107212,0.95063413,-1.8178048,8.4536585)"),o(f,"mask","url(#mask1775)"),o(n,"id","layer6"),y(n,"display","inline"),o(e,"width","44"),o(e,"height","44"),o(e,"viewBox","0 0 54.902401 54.902401"),o(e,"class","svelte-63z0iw")},m($,L){E($,e,L),m(e,r),m(r,t),m(t,l),m(e,s),m(s,a),m(e,n),m(n,f),m(f,h),m(f,u),m(f,d),m(f,b),m(f,k),m(f,_),m(f,v)},p:I,d($){$&&c(e)}}}function ot(i){let e,r,t,l,s;return{c(){e=w("svg"),r=w("g"),t=w("circle"),l=w("g"),s=w("path"),this.h()},l(a){e=z(a,"svg",{width:!0,height:!0,viewBox:!0,class:!0});var n=g(e);r=z(n,"g",{id:!0,transform:!0});var f=g(r);t=z(f,"circle",{style:!0,id:!0,cx:!0,cy:!0,r:!0}),g(t).forEach(c),f.forEach(c),l=z(n,"g",{id:!0,style:!0,transform:!0});var h=g(l);s=z(h,"path",{d:!0,style:!0,id:!0}),g(s).forEach(c),h.forEach(c),n.forEach(c),this.h()},h(){y(t,"fill",i[1]),y(t,"stroke-width","0.229148"),o(t,"id","backgroundCircle"),o(t,"cx","32"),o(t,"cy","32"),o(t,"r","27.4512"),o(r,"id","background"),o(r,"transform","translate(-4.5487995,-4.5487995)"),o(s,"d","m 19.965036,20.199456 c -0.406246,-0.314648 -0.4927,-0.864866 -0.531324,-1.345528 -0.02359,-0.29355 0.01422,-0.606754 0.189112,-0.863012 0.760635,0.196288 0.661287,-0.163697 1.068085,-0.551345 1.118268,0.19052 2.456779,-0.730988 2.456779,-0.730988 -0.96186,-1.166904 2.958818,-2.181046 4.744017,-2.592805 0.298477,-0.85407 1.625715,-1.676819 3.532551,-1.820659 1.580202,-0.119201 2.337944,-1.052864 2.945408,-2.5392956 0.122622,1.5038886 -0.674575,2.8425476 -1.441458,3.3111456 -0.551689,0.337105 -0.881467,0.555672 -1.127079,1.188859 3.238356,-0.939231 6.066433,-1.471715 8.24062,-0.220875 -2.065318,-0.03241 -3.22003,-0.0441 -3.759441,1.079749 3.010858,-0.439561 3.921286,-0.23605 6.809337,0.93388 -1.948535,-0.220895 -3.083709,0.08778 -4.063839,1.010802 2.088027,-0.331999 4.301751,0.191757 5.587152,1.63303 -2.190078,-0.692737 -3.42203,-0.460118 -3.871437,-0.146015 2.162058,0.163659 3.929054,1.31278 4.508492,2.414999 -1.185862,-0.597437 -2.301389,-0.840754 -3.005905,-0.675713 0.926174,0.403531 1.485932,0.810059 2.126423,1.522941 1.419543,1.579987 2.355471,3.447765 2.355471,5.958948 0,1.792 -0.608,3.376 -1.824,4.752 -1.184,1.344 -2.816,2.4 -4.896,3.168 -2.048,0.768 -4.368,1.152 -6.96,1.152 h -3.744 v 11.328 l 4.704,1.968 v 0.768 H 19.272 v -0.768 l 4.032,-1.968 v -13.104 -12.508311 c 0,0 -0.0053,-0.896104 -3.78e-4,-1.069407 2.286981,-0.01033 4.534681,0.197499 6,1.312404 -7.93e-4,0.177205 -4e-6,0.757004 -4e-6,0.757004 l 3.56e-4,10.836311 h 3.072 c 2.528,0 4.512,-0.576 5.952,-1.728 1.44,-1.184 2.16,-2.672 2.16,-4.464 0,-1.793583 -0.685611,-2.916245 -1.159151,-3.519415 -0.776154,-0.988621 -1.844803,-1.931913 -2.671213,-2.503055 -0.787305,-0.544116 -2.145412,-1.221328 -3.194238,-1.573962 -2.728048,-0.917218 -3.114863,-0.324237 -2.73714,1.199279 -3.792462,-1.883138 -6.641608,-1.85354 -10.761196,-1.602966 z m 6.033442,-4.56427 c -0.725881,0.162337 -2.135101,0.480667 -1.499813,1.181685 0.9353,-0.18991 1.718129,-0.442897 1.499813,-1.181685 z"),y(s,"display","inline"),y(s,"fill",i[0]),y(s,"stroke-width","0.264583"),o(s,"id","pathForP"),o(l,"id","foreground"),y(l,"display","inline"),o(l,"transform","translate(-4.5487995,-4.5487995)"),o(e,"width","44"),o(e,"height","44"),o(e,"viewBox","0 0 54.902401 54.902401"),o(e,"class","svelte-63z0iw")},m(a,n){E(a,e,n),m(e,r),m(r,t),m(e,l),m(l,s)},p(a,n){n&2&&y(t,"fill",a[1]),n&1&&y(s,"fill",a[0])},d(a){a&&c(e)}}}function at(i){let e;function r(s,a){return s[0]!==""?ot:it}let t=r(i),l=t(i);return{c(){l.c(),e=re()},l(s){l.l(s),e=re()},m(s,a){l.m(s,a),E(s,e,a)},p(s,[a]){t===(t=r(s))&&l?l.p(s,a):(l.d(1),l=t(s),l&&(l.c(),l.m(e.parentNode,e)))},i:I,o:I,d(s){l.d(s),s&&c(e)}}}function nt(i,e,r){let t,{color:l=""}=e;const s=a=>{if(a==="")return!0;let n=a.substring(1),f=parseInt(n,16),h=f>>16&255,u=f>>8&255,d=f>>0&255;return .2126*h+.7152*u+.0722*d>40};return i.$$set=a=>{"color"in a&&r(0,l=a.color)},i.$$.update=()=>{i.$$.dirty&1&&r(1,t=s(l)?"#1a1a1a":"#ededed")},[l,t]}class ut extends F{constructor(e){super(),Y(this,e,nt,at,j,{color:0})}}function ct(i){let e,r,t;return r=new ut({props:{color:i[0]}}),{c(){e=C("a"),O(r.$$.fragment),this.h()},l(l){e=S(l,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var s=g(e);P(r.$$.fragment,s),s.forEach(c),this.h()},h(){o(e,"class","logoWrapper svelte-15xhc32"),o(e,"sveltekit:prefetch",""),o(e,"href","/")},m(l,s){E(l,e,s),W(r,e,null),t=!0},p(l,[s]){const a={};s&1&&(a.color=l[0]),r.$set(a)},i(l){t||(B(r.$$.fragment,l),t=!0)},o(l){T(r.$$.fragment,l),t=!1},d(l){l&&c(e),q(r)}}}function ft(i,e,r){let{color:t=""}=e;return i.$$set=l=>{"color"in l&&r(0,t=l.color)},[t]}class ht extends F{constructor(e){super(),Y(this,e,ft,ct,j,{color:0})}}function dt(i){let e,r;return e=new Oe({}),e.$on("click",i[5]),{c(){O(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){W(e,t,l),r=!0},p:I,i(t){r||(B(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function gt(i){let e,r;return e=new Pe({}),{c(){O(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){W(e,t,l),r=!0},i(t){r||(B(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function be(i){let e,r;return e=new st({props:{rightAlign:!0}}),e.$on("click",i[7]),{c(){O(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){W(e,t,l),r=!0},p:I,i(t){r||(B(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function pt(i){let e,r,t,l,s,a,n,f,h,u,d,b,k,_,v,$,L;function K(p){i[8](p)}let V={$$slots:{default:[dt]},$$scope:{ctx:i}};i[0]!==void 0&&(V.show=i[0]),e=new pe({props:V}),ae.push(()=>ne(e,"show",K)),e.$on("click",i[5]);function D(p){i[9](p)}let U={rightAlign:!0,$$slots:{default:[gt]},$$scope:{ctx:i}};i[1]!==void 0&&(U.show=i[1]),l=new pe({props:U}),ae.push(()=>ne(l,"show",D)),l.$on("click",i[6]);function M(p){i[10](p)}let Z={urlCopied:i[3]};i[2]!==void 0&&(Z.show=i[2]),n=new je({props:Z}),ae.push(()=>ne(n,"show",M)),n.$on("click",i[7]),n.$on("copiedUrl",i[11]),d=new Ge({}),d.$on("click",i[5]),k=new ht({props:{color:""}});let A=i[4].url.pathname==="/"&&be(i);return $=new tt({props:{rightAlign:!0}}),$.$on("click",i[6]),{c(){O(e.$$.fragment),t=H(),O(l.$$.fragment),a=H(),O(n.$$.fragment),h=H(),u=C("header"),O(d.$$.fragment),b=H(),O(k.$$.fragment),_=H(),A&&A.c(),v=H(),O($.$$.fragment),this.h()},l(p){P(e.$$.fragment,p),t=R(p),P(l.$$.fragment,p),a=R(p),P(n.$$.fragment,p),h=R(p),u=S(p,"HEADER",{class:!0});var x=g(u);P(d.$$.fragment,x),b=R(x),P(k.$$.fragment,x),_=R(x),A&&A.l(x),v=R(x),P($.$$.fragment,x),x.forEach(c),this.h()},h(){o(u,"class","svelte-rfc0sc")},m(p,x){W(e,p,x),E(p,t,x),W(l,p,x),E(p,a,x),W(n,p,x),E(p,h,x),E(p,u,x),W(d,u,null),m(u,b),W(k,u,null),m(u,_),A&&A.m(u,null),m(u,v),W($,u,null),L=!0},p(p,[x]){const te={};x&4096&&(te.$$scope={dirty:x,ctx:p}),!r&&x&1&&(r=!0,te.show=p[0],ue(()=>r=!1)),e.$set(te);const le={};x&4096&&(le.$$scope={dirty:x,ctx:p}),!s&&x&2&&(s=!0,le.show=p[1],ue(()=>s=!1)),l.$set(le);const oe={};x&8&&(oe.urlCopied=p[3]),!f&&x&4&&(f=!0,oe.show=p[2],ue(()=>f=!1)),n.$set(oe),p[4].url.pathname==="/"?A?(A.p(p,x),x&16&&B(A,1)):(A=be(p),A.c(),B(A,1),A.m(u,v)):A&&(fe(),T(A,1,1,()=>{A=null}),he())},i(p){L||(B(e.$$.fragment,p),B(l.$$.fragment,p),B(n.$$.fragment,p),B(d.$$.fragment,p),B(k.$$.fragment,p),B(A),B($.$$.fragment,p),L=!0)},o(p){T(e.$$.fragment,p),T(l.$$.fragment,p),T(n.$$.fragment,p),T(d.$$.fragment,p),T(k.$$.fragment,p),T(A),T($.$$.fragment,p),L=!1},d(p){q(e,p),p&&c(t),q(l,p),p&&c(a),q(n,p),p&&c(h),p&&c(u),q(d),q(k),A&&A.d(),q($)}}}function vt(i,e,r){let t;$e(i,xe,v=>r(4,t=v));let l=!1,s=!1,a=!1,n=!1;const f=()=>{l?r(0,l=!1):(r(1,s=!1),r(2,a=!1),r(0,l=!0))},h=()=>{s?r(1,s=!1):(r(0,l=!1),r(2,a=!1),r(1,s=!0))},u=()=>{a?(r(2,a=!1),r(3,n=!1)):(r(0,l=!1),r(1,s=!1),r(2,a=!0))};function d(v){l=v,r(0,l)}function b(v){s=v,r(1,s)}function k(v){a=v,r(2,a)}return[l,s,a,n,t,f,h,u,d,b,k,()=>{r(3,n=!0)}]}class mt extends F{constructor(e){super(),Y(this,e,vt,pt,j,{})}}function _t(i){let e,r,t,l,s,a,n,f;e=new mt({});const h=i[1].default,u=ze(h,i,i[0],null);return{c(){O(e.$$.fragment),r=H(),t=C("main"),u&&u.c(),l=H(),s=C("footer"),a=C("p"),n=X("visit kit.svelte.dev to learn SvelteKit"),this.h()},l(d){P(e.$$.fragment,d),r=R(d),t=S(d,"MAIN",{class:!0});var b=g(t);u&&u.l(b),b.forEach(c),l=R(d),s=S(d,"FOOTER",{class:!0});var k=g(s);a=S(k,"P",{});var _=g(a);n=ee(_,"visit kit.svelte.dev to learn SvelteKit"),_.forEach(c),k.forEach(c),this.h()},h(){o(t,"class","svelte-f5pegm"),o(s,"class","svelte-f5pegm")},m(d,b){W(e,d,b),E(d,r,b),E(d,t,b),u&&u.m(t,null),E(d,l,b),E(d,s,b),m(s,a),m(a,n),f=!0},p(d,[b]){u&&u.p&&(!f||b&1)&&ye(u,h,d,d[0],f?we(h,d[0],b,null):ke(d[0]),null)},i(d){f||(B(e.$$.fragment,d),B(u,d),f=!0)},o(d){T(e.$$.fragment,d),T(u,d),f=!1},d(d){q(e,d),d&&c(r),d&&c(t),u&&u.d(d),d&&c(l),d&&c(s)}}}function bt(i,e,r){let{$$slots:t={},$$scope:l}=e;return i.$$set=s=>{"$$scope"in s&&r(0,l=s.$$scope)},[l,t]}class kt extends F{constructor(e){super(),Y(this,e,bt,_t,j,{})}}export{kt as default};
