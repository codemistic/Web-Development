(this["webpackJsonpgoogle-drive-clone"]=this["webpackJsonpgoogle-drive-clone"]||[]).push([[0],{60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t);var n=c(3),i=c(2),a=c.n(i),s=c(16),l=c.n(s),r=(c(60),c(17)),o=(c(61),c(62),c.p+"static/media/ok.ad8636ea.png"),j=c(40),d=c.n(j),b=c(42),u=c.n(b),O=c(43),h=c.n(O),x=c(44),m=c.n(x),f=c(45),p=c.n(f),v=function(e){e.userPhoto;return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsxs)("div",{className:"header__logo",children:[Object(n.jsx)("img",{src:o,alt:"Google Drive"}),Object(n.jsx)("span",{children:"Drive"})]}),Object(n.jsx)("div",{className:"header__searchContainer",children:Object(n.jsxs)("div",{className:"header__searchBar",children:[Object(n.jsx)(d.a,{}),Object(n.jsx)("input",{type:"text",placeholder:"Search in Drive"}),Object(n.jsx)(u.a,{})]})}),Object(n.jsxs)("div",{className:"header__icons",children:[Object(n.jsxs)("span",{children:[Object(n.jsx)(h.a,{}),Object(n.jsx)(m.a,{})]}),Object(n.jsx)(p.a,{})]})]})},g=(c(68),c(69),c(35)),N=c.n(g),_=c(22),w=_.a.initializeApp({apiKey:"AIzaSyAYCYXIbKISqkWa1UTqCK6bAU_RCtxdVzQ",authDomain:"drive-clone-455a1.firebaseapp.com",projectId:"drive-clone-455a1",storageBucket:"drive-clone-455a1.appspot.com",messagingSenderId:"810010726465",appId:"1:810010726465:web:a97d5b0d5cbc81f9b1b6c0"}),S=_.a.auth(),C=new _.a.auth.GoogleAuthProvider,F=_.a.storage(),y=w.firestore();_.a.database().ref().set({name:"drive-clone-455a1"});var D=c(100),I=c(101);function B(){return{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}var k=Object(D.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),U=function(){var e=k(),t=Object(i.useState)(B),c=Object(r.a)(t,1)[0],a=Object(i.useState)(!1),s=Object(r.a)(a,2),l=s[0],o=s[1],j=Object(i.useState)(null),d=Object(r.a)(j,2),b=d[0],u=d[1],O=Object(i.useState)(!1),h=Object(r.a)(O,2),x=h[0],m=h[1];return Object(n.jsxs)("div",{className:"newFile",children:[Object(n.jsxs)("div",{className:"newFile__container",onClick:function(){o(!0)},children:[Object(n.jsx)(N.a,{fontSize:"large"}),Object(n.jsx)("p",{children:"New"})]}),Object(n.jsx)(I.a,{open:l,onClose:function(){o(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(n.jsxs)("div",{style:c,className:e.paper,children:[Object(n.jsx)("p",{children:"Select files you want to upload!"}),x?Object(n.jsx)("p",{children:"Uploading..."}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{type:"file",onChange:function(e){e.target.files[0]&&u(e.target.files[0])}}),Object(n.jsx)("button",{onClick:function(){m(!0),alert(" Upload Image/PDF file only less than 2MB"),F.ref("files/".concat(b.name)).put(b).then((function(e){console.log(e),F.ref("files").child(b.name).getDownloadURL().then((function(t){y.collection("myFiles").add({timestamp:_.a.firestore.FieldValue.serverTimestamp(),caption:b.name,fileUrl:t,size:e._delegate.bytesTransferred}),m(!1),o(!1),u(null),alert(" Uploaded Successfully")})),F.ref("files").child(b.name).getMetadata().then((function(e){console.log(e.size)}))}))},children:"Upload"})]})]})})]})},z=(c(74),c(46)),M=c.n(z),A=function(e){var t=e.arrow,c=e.icon,i=e.label;return Object(n.jsxs)("div",{className:"sidebarItem",children:[Object(n.jsx)("div",{className:"sidebarItem__arrow",children:t&&Object(n.jsx)(M.a,{})}),Object(n.jsxs)("div",{className:"sidebarItem__main",children:[c,Object(n.jsx)("p",{children:i})]})]})},P=c(23),V=c.n(P),L=c(47),T=c.n(L),J=c(48),R=c.n(J),Y=c(49),E=c.n(Y),G=c(50),K=c.n(G),q=c(51),W=c.n(q),Q=c(52),X=c.n(Q),Z=function(){return Object(n.jsxs)("div",{className:"sidebar",children:[Object(n.jsx)(U,{}),Object(n.jsxs)("div",{className:"sidebar__itemsContainer",children:[Object(n.jsx)(A,{arrow:!0,icon:Object(n.jsx)(V.a,{}),label:"My Drive"}),Object(n.jsx)(A,{arrow:!0,icon:Object(n.jsx)(T.a,{}),label:"Computers"}),Object(n.jsx)(A,{icon:Object(n.jsx)(R.a,{}),label:"Shared with me"}),Object(n.jsx)(A,{icon:Object(n.jsx)(E.a,{}),label:"Recent"}),Object(n.jsx)(A,{icon:Object(n.jsx)(K.a,{}),label:"Starred"}),Object(n.jsx)(A,{icon:Object(n.jsx)(W.a,{}),label:"Bin"}),Object(n.jsx)("hr",{}),Object(n.jsx)(A,{icon:Object(n.jsx)(X.a,{}),label:"Storage"})]})]})},H=(c(75),c(76),c(53)),$=c.n(H),ee=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],te=function(e){e.id;var t=e.caption,c=e.timestamp,i=e.fileUrl,a=e.size,s="".concat(null===c||void 0===c?void 0:c.toDate().getDate()," ").concat(ee[(null===c||void 0===c?void 0:c.toDate().getMonth())+1]," ").concat(null===c||void 0===c?void 0:c.toDate().getFullYear());return Object(n.jsx)("div",{className:"fileItem",children:Object(n.jsxs)("a",{href:i,target:"_blank",download:!0,children:[Object(n.jsxs)("div",{className:"fileItem--left",children:[Object(n.jsx)(V.a,{}),Object(n.jsx)("p",{children:t})]}),Object(n.jsxs)("div",{className:"fileItem--right",children:[Object(n.jsx)("button",{className:"cv",onClick:function(e){$.a.saveAs(""+{url:e},"Untitled File")},children:"Download File"}),Object(n.jsx)("p",{children:s}),Object(n.jsx)("p",{children:function(e){var t=-1;do{e/=1024,t++}while(e>1024);return Math.max(e,.1).toFixed(1)+[" kB"," MB"," GB"," TB","PB","EB","ZB","YB"][t]}(a)})]})]})})},ce=(c(77),function(e){var t=e.name;return Object(n.jsxs)("div",{className:"fileCard",children:[Object(n.jsx)("div",{className:"fileCard--top",children:Object(n.jsx)(V.a,{style:{fontSize:120}})}),Object(n.jsx)("div",{className:"fileCard--bottom",children:Object(n.jsx)("p",{children:t})})]})}),ne=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(i.useEffect)((function(){y.collection("myFiles").onSnapshot((function(e){a(e.docs.map((function(e){return{id:e.id,item:e.data()}})))}))}),[]),console.log(c),Object(n.jsxs)("div",{className:"fileView",children:[Object(n.jsx)("div",{className:"fileView__row",children:c.slice(0,5).map((function(e){e.id;var t=e.item;return Object(n.jsx)(ce,{name:t.caption})}))}),Object(n.jsxs)("div",{className:"fileView__titles",children:[Object(n.jsx)("div",{className:"fileView__titles--left",children:Object(n.jsx)("p",{children:"Name"})}),Object(n.jsxs)("div",{className:"fileView__titles--right",children:[Object(n.jsx)("p",{children:"Last modified"}),Object(n.jsx)("p",{children:"File size"})]})]}),c.map((function(e){var t=e.id,c=e.item;return Object(n.jsx)(te,{id:t,caption:c.caption,timestamp:c.timestamp,fileUrl:c.fileUrl,size:c.size})}))]})};c(78);var ie=function(){var e=Object(i.useState)(),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(n.jsx)("div",{className:"app",children:c?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(v,{userPhoto:c.photoURL}),Object(n.jsxs)("div",{className:"app__main",children:[Object(n.jsx)(Z,{}),Object(n.jsx)(ne,{})]})]}):Object(n.jsxs)("div",{className:"app__login",children:[Object(n.jsx)("img",{src:o,alt:"Drive"}),Object(n.jsx)("button",{onClick:function(){c?c&&S.signOut().then((function(){a(null)})).catch((function(e){return alert(e.message)})):S.signInWithPopup(C).then((function(e){a(e.user),console.log(e.user)})).catch((function(e){alert(e.message)}))},children:"Log in to Drive"})]})})},ae=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,103)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};l.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(ie,{})}),document.getElementById("root")),ae()}},[[80,1,2]]]);
//# sourceMappingURL=main.db381de9.chunk.js.map