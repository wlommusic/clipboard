(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{19:function(e,t,n){},32:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(3),i=n.n(c),s=n(22),a=n.n(s),o=(n(32),n(14)),r=n(27),u=(n(19),n(12)),d=n(23),l=n(16);n(37),n(38);l.a.initializeApp({apiKey:"AIzaSyAbIs0fdjOFFiJcSrnnNC7WarU3D8HlFKA",authDomain:"sampleapp-919fc.firebaseapp.com",projectId:"sampleapp-919fc",storageBucket:"sampleapp-919fc.appspot.com",messagingSenderId:"1001941216374",appId:"1:1001941216374:web:60ee90552d2b2dff018357"});var j=l.a.auth(),b=l.a.firestore(),p=l.a,m=n(24),O=n(13),f=n(4),x=function(e){var t=e.id,n=e.complete,c=e.text,i=b.collection("users/".concat(j.currentUser.uid,"/todos"));return Object(f.jsxs)("div",{className:"todo",children:[Object(f.jsx)("button",{className:"todo-item ".concat(n?"complete":""),tabIndex:"0",onClick:function(){return function(e,t){return i.doc(e).set({complete:!t},{merge:!0})}(t,n)},children:c}),Object(f.jsx)("button",{onClick:function(){return function(e){return i.doc(e).delete()}(t)},children:Object(f.jsx)(u.a,{icon:d.a,className:"icons",size:"lg"})}),Object(f.jsx)("button",{onClick:function(){return navigator.clipboard.writeText(c)},children:Object(f.jsx)(u.a,{icon:O.a,className:"icons",size:"lg"})})]},t)},h=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],i=t[1],s=b.collection("users/".concat(j.currentUser.uid,"/todos")),a=Object(m.a)(s,{idField:"id"}),d=Object(o.a)(a,1)[0];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("header",{children:Object(f.jsxs)("button",{className:"signout",onClick:function(){return j.signOut()},children:[Object(f.jsx)("span",{className:"signin2",children:"Signout"}),Object(f.jsx)(u.a,{icon:O.c,className:"icons",size:"lg"})]})}),Object(f.jsxs)("main",{children:[Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(""),s.add({text:n,complete:!1,createdAt:p.firestore.FieldValue.serverTimestamp()})},children:[Object(f.jsx)("input",{required:!0,value:n,onChange:function(e){return i(e.target.value)},placeholder:"Add Stuff to the board.."}),Object(f.jsx)("button",{type:"submit",children:"Add"})]}),d&&d.map((function(e){return Object(f.jsx)(x,Object(r.a)({},e),e.id)}))]})]})},g=n(25),v=n(26),N=function(){return j.signInWithPopup(new v.a.auth.GoogleAuthProvider)},I=function(){return Object(f.jsx)("div",{children:Object(f.jsxs)("button",{className:"signin",onClick:N,children:[Object(f.jsx)(u.a,{icon:O.b,className:"icons",size:"lg"}),Object(f.jsx)("span",{className:"signin2",children:"SignIn"})]})})},S=function(){var e=Object(g.a)(j);return Object(o.a)(e,1)[0]?Object(f.jsx)(h,{}):Object(f.jsx)(I,{})};a.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.e936d0b8.chunk.js.map