(this.webpackJsonpfront_fitbook=this.webpackJsonpfront_fitbook||[]).push([[0],{40:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c.n(r),n=c(33),s=c.n(n),l=(c(40),c(6)),o=c.n(l),i=c(15),u=c(3),b=c(4),d=c(34),m=(c(42),d.a.initializeApp({apiKey:"AIzaSyDta6F0uiW3MqOA1d7M_YBJacGy8ktOfD0",authDomain:"auth-arsw.firebaseapp.com",projectId:"auth-arsw",storageBucket:"auth-arsw.appspot.com",messagingSenderId:"526873676386",appId:"1:526873676386:web:8cbc33c678ba3319931f3b"})),j=m.auth(),p=c(0),x=a.a.createContext(),h=function(){return Object(r.useContext)(x)},f=function(e){var t=e.children,c=Object(r.useState)(),a=Object(u.a)(c,2),n=a[0],s=a[1],l=Object(r.useState)(!1),o=Object(u.a)(l,2),i=o[0],b=o[1];Object(r.useEffect)((function(){return j.onAuthStateChanged((function(e){s(e),b(!1)}))}),[]);var d={currentUser:n,register:function(e,t){return j.createUserWithEmailAndPassword(e,t)},login:function(e,t){return j.signInWithEmailAndPassword(e,t)},logout:function(){return j.signOut()}};return Object(p.jsx)(x.Provider,{value:d,children:!i&&t})},g=c.p+"static/media/login.4dafeccb.jpg",O="data:image/png;base64,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",S=c(7),k=c.n(S),y=function(e){var t=Object(r.useRef)(),c=Object(r.useRef)(),a=h().login,n=Object(r.useState)(""),s=Object(u.a)(n,2),l=s[0],d=s[1],m=Object(r.useState)(!1),j=Object(u.a)(m,2),x=(j[0],j[1]),f=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(""),x(!0),e.next=5,a(t.current.value,c.current.value);case 5:k.a.get("https://secure-lake-15708.herokuapp.com/users/email/".concat(t.current.value)).then((function(e){localStorage.setItem("email",e.data.email),localStorage.setItem("role",e.data.role),localStorage.setItem("cedula",e.data.cedula),localStorage.setItem("box",e.data.boxId),localStorage.setItem("fullName",e.data.fullName),localStorage.setItem("url",e.data.url),console.log(localStorage.getItem("url"))})).catch((function(e){return console.log("Error: ".concat(e))})),S.push("/dashboard"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),d(e.t0+"Error al autenticar");case 12:x(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),S=Object(b.g)();return Object(p.jsxs)("div",{className:"w-full h-screen flex",children:[Object(p.jsx)("img",{src:g,alt:"background",className:"object-cover object-center h-screen w-7/12"}),Object(p.jsxs)("div",{className:"bg-gray-700 flex flex-col justify-center items-center w-5/12 shadow-lg",children:[""!==l?Object(p.jsxs)("div",{role:"alert",children:[Object(p.jsx)("div",{className:"bg-red-500 text-white font-bold rounded-t px-4 py-2",children:"Error"}),Object(p.jsx)("div",{className:"border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700 mb-3",children:Object(p.jsx)("p",{children:l})})]}):null,Object(p.jsx)("img",{className:"object-scale-down w-22 h-22",src:O}),Object(p.jsx)("h1",{className:"text-3xl font-bold text-red-500 mb-2",children:"LOGIN"}),Object(p.jsxs)("div",{className:"w-1/2 text-center",children:[Object(p.jsx)("input",{type:"text",ref:t,name:"username",placeholder:"username",autoComplete:"off",className:"shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"}),Object(p.jsx)("input",{type:"password",ref:c,name:"password",placeholder:"password",autoComplete:"off",className:"shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"}),Object(p.jsxs)("div",{className:"inline-flex",children:[Object(p.jsx)("button",{className:"bg-red-500 hover:bg-red-600 text-gray-800 font-bold py-2 px-4 rounded-l",onClick:f,children:"Sign In"}),Object(p.jsx)("button",{className:"bg-red-500 hover:bg-red-600 text-gray-800 font-bold py-2 px-4 rounded-r",onClick:function(){S.push("/register")},children:"Sign Up"})]})]})]})]})},N=c.p+"static/media/register.ff21d7a0.jpg",w=function(e){var t=Object(r.useRef)(),c=Object(r.useRef)(),a=Object(r.useRef)(),n=Object(r.useRef)(),s=Object(r.useRef)(),l=h().register,d=Object(r.useState)(""),m=Object(u.a)(d,2),j=m[0],x=m[1],f=Object(r.useState)(!1),g=Object(u.a)(f,2),O=g[0],S=g[1],y=Object(r.useState)(""),w=Object(u.a)(y,2),v=w[0],J=w[1],Z=function(e){console.log(e),J(e)},W=Object(b.g)(),T=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.current.value===n.current.value){e.next=2;break}return e.abrupt("return",x("Las contrase\xf1as no son iguales"));case 2:return e.prev=2,x(""),S(!0),e.next=7,l(c.current.value,a.current.value);case 7:""!=v?(k.a.post("https://secure-lake-15708.herokuapp.com/users/newUser",{cedula:s.current.value,fullName:t.current.value,email:c.current.value,role:v}).then((function(e){console.log(e)})).catch((function(e){console.log("Error: ".concat(e))})),"box"==v&&k.a.post("https://secure-lake-15708.herokuapp.com/box/add",{name:t.current.value}).then((function(e){console.log("Se registro un box")})).catch((function(e){console.log("Error: ".concat(e))})),W.push("/")):alert("Escoge tu tipo de usuarios PLS!!"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),x(e.t0.toString());case 13:S(!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"w-full h-screen flex",children:[Object(p.jsx)("img",{src:N,alt:"background",className:"object-cover object-center h-screen w-10/12"}),Object(p.jsx)("div",{className:"bg-gray-700 flex flex-col justify-center items-center w-5/12 shadow-lg",children:Object(p.jsxs)("div",{className:"container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2",children:[Object(p.jsx)("h1",{className:"mb-8 text-3xl text-center text-red-600",children:"Sign Up"}),""!==j?Object(p.jsxs)("div",{role:"alert",children:[Object(p.jsx)("div",{className:"bg-red-500 text-white font-bold rounded-t px-4 py-2",children:"Error"}),Object(p.jsx)("div",{className:"border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700 mb-3",children:Object(p.jsx)("p",{children:j})})]}):null,Object(p.jsx)("input",{type:"text",className:"block border border-grey-light w-full p-3 rounded mb-4",name:"fullname",placeholder:"Full Name",ref:t}),Object(p.jsx)("input",{type:"text",className:"block border border-grey-light w-full p-3 rounded mb-4",name:"numberCCUser",placeholder:"C.C",ref:s}),Object(p.jsx)("input",{type:"text",className:"block border border-grey-light w-full p-3 rounded mb-4",name:"email",placeholder:"Email",ref:c}),Object(p.jsx)("input",{type:"password",className:"block border border-grey-light w-full p-3 rounded mb-4",name:"password",placeholder:"Password",ref:a}),Object(p.jsx)("input",{type:"password",className:"block border border-grey-light w-full p-3 rounded mb-4",name:"confirm_password",placeholder:"Confirm Password",ref:n}),Object(p.jsxs)("div",{className:"mt-4 text-center",children:[Object(p.jsx)("span",{className:"text-red-600",children:"Account Type"}),Object(p.jsxs)("div",{className:"flex justify-center mt-2",children:[Object(p.jsxs)("label",{className:"inline-flex items-center",children:[Object(p.jsx)("input",{type:"radio",className:"form-radio",name:"accountType",value:"athlete",onClick:function(){return Z("athlete")}}),Object(p.jsx)("span",{className:"ml-2",children:"Athlete"})]}),Object(p.jsxs)("label",{className:"inline-flex items-center ml-6",children:[Object(p.jsx)("input",{type:"radio",className:"form-radio",name:"accountType",value:"box",onClick:function(){return Z("box")}}),Object(p.jsx)("span",{className:"ml-2",children:"Box"})]})]})]}),Object(p.jsx)("button",{type:"submit",className:"w-full text-center py-3 rounded bg-red-600 text-white hover:bg-red-700 focus:outline-none my-1",disabled:O,onClick:T,children:"Create Account"}),Object(p.jsx)("div",{className:"text-center text-sm text-grey-dark mt-4",children:"Vive la experiencia de compartir tu pasi\xf3n por el Crossfit con personas que te entender\xe1n"}),Object(p.jsxs)("div",{className:"text-grey-dark mt-6",children:["\xbfYa tienes cuenta?",Object(p.jsx)("button",{className:"no-underline border-b border-blue-500 text-blue-500",onClick:function(){W.push("/")},children:"Login"})]})]})})]})},v=function(e){var t=Object(r.useState)(),c=Object(u.a)(t,2),a=(c[0],c[1]),n=h().logout,s=Object(b.g)(),l=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(""),e.prev=1,e.next=4,n();case 4:localStorage.clear(),s.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a("Error al realizar el logout");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"shadow-md w-full bg-red-500 p-5 text-white",children:Object(p.jsxs)("nav",{className:"flex justify-between",children:[Object(p.jsx)("div",{children:Object(p.jsx)("img",{className:"object-scale-down w-12 h-12",src:O})}),Object(p.jsxs)("ul",{className:"flex flex-row",children:[Object(p.jsx)("li",{className:"pr-5",children:"Reservar"}),Object(p.jsx)("li",{className:"pr-5",children:Object(p.jsx)("button",{variant:"link",onClick:function(){s.push("/dashboard")},children:"Publication"})}),Object(p.jsx)("li",{className:"pr-5",children:Object(p.jsx)("button",{variant:"link",onClick:function(){s.push("/procfile")},children:"Perfil"})}),Object(p.jsx)("li",{className:"pr-5",children:Object(p.jsx)("button",{variant:"link",onClick:l,children:"Log out"})})]})]})})},J=function(e){return Object(p.jsx)("div",{className:"min-h-screen min-w-screen bg-white flex items-center justify-center",children:Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"flex flex-col max-w-md bg-gray-500 px-8 py-6 rounded-xl space-y-5 items-center text-white",children:[Object(p.jsx)("h3",{className:"font-serif font-bold text-xl",children:e.user}),""==e.imgUrl||null==e.imgUrl?Object(p.jsx)("img",{className:"w-full rounded-md",src:"https://coffeeordie.com/wp-content/uploads/2019/03/FraserCOVER2.jpg",alt:"motivation"}):Object(p.jsx)("img",{className:"w-full rounded-md",src:e.imgUrl,alt:"motivation"}),Object(p.jsx)("p",{className:"text-center leading-relaxed",children:e.content}),Object(p.jsxs)("p",{className:"text-center leading-relaxed",children:["Likes: ",e.likes]}),Object(p.jsx)("p",{className:"text-center leading-relaxed",children:e.uploaDate})]})})})},Z=function(e){var t=Object(r.useState)(""),c=Object(u.a)(t,2),a=c[0],n=c[1],s=Object(r.useState)(!1),l=Object(u.a)(s,2),o=(l[0],l[1]),i=Object(b.g)();Object(r.useEffect)((function(){k.a.get("https://secure-lake-15708.herokuapp.com/publications").then((function(e){o(!1),console.log(e.data),n(e.data)})).catch((function(e){console.log("Error: ".concat(e))}))}),[]);var d=Object(p.jsx)("p",{children:"Loading..."});return a.length>0&&(d=a.map((function(e,t){return Object(p.jsx)(J,{user:e.mail,likes:e.likes,content:e.content,uploaDate:e.uploaDate,imgUrl:e.imgUrl},t)}))),Object(p.jsxs)("div",{className:"text-center",children:[Object(p.jsx)(v,{}),Object(p.jsx)("button",{className:"inline-block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 float-right rounded-md m-3",onClick:function(){i.push("/addPublication")},children:"A\xf1adir Publicaci\xf3n"}),Object(p.jsx)("div",{className:"overflow-auto h-auto",children:d})]})},W=function(e){var t=Object(r.useState)(!1),c=Object(u.a)(t,2),a=c[0],n=c[1],s=Object(r.useState)(""),l=Object(u.a)(s,2),d=l[0],m=l[1],j=Object(r.useState)(""),x=Object(u.a)(j,2),f=x[0],g=x[1],O=(h().currentUser,Object(b.g)(),function(){var e=Object(i.a)(o.a.mark((function e(t){var c,r,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.files,(r=new FormData).append("file",c[0]),r.append("upload_preset","fitbookimg"),e.next=6,fetch("https://api.cloudinary.com/v1_1/fitbook-arsw/image/upload",{method:"POST",body:r});case 6:return a=e.sent,e.next=9,a.json();case 9:n=e.sent,g(n.secure_url),console.log(n.secure_url);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),S=Object(p.jsx)("p",{children:"Loading..."});return d.length>0&&(S=d.map((function(e,t){return Object(p.jsxs)("tr",{className:"bg-gray-700 border-b border-gray-600",children:[Object(p.jsx)("th",{className:"px-4 py-3",children:e.id}),Object(p.jsx)("th",{className:"px-4 py-3",children:e.name}),Object(p.jsx)("th",{className:"px-4 py-3",children:Object(p.jsx)("button",{onClick:function(){return t=localStorage.getItem("email"),c=e.id,k.a.post("https://secure-lake-15708.herokuapp.com/users/".concat(t,"/").concat(c)).then((function(e){console.log(e),alert("\xa1Te inscribiste correctamente!")})).catch((function(e){console.log("Error: ".concat(e))})),localStorage.setItem("box",c),void n(!1);var t,c},className:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full",children:"Select"})})]},t)}))),Object(p.jsxs)("div",{className:"text-center",children:[Object(p.jsx)(v,{}),Object(p.jsxs)("div",{className:"flex flex-col",children:[Object(p.jsxs)("div",{className:"flex-initial",children:["athlete"==localStorage.getItem("role")&&"null"==localStorage.getItem("box")?Object(p.jsx)("button",{onClick:function(){a?n(!1):(k.a.get("https://secure-lake-15708.herokuapp.com/box").then((function(e){console.log(e.data),m(e.data)})).catch((function(e){alert("".concat(e))})),n(!0))},className:"bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 min-w-auto rounded-md m-3",children:"Elegir Box"}):null,"athlete"==localStorage.getItem("role")&&"null"!=localStorage.getItem("box")?Object(p.jsx)("button",{onClick:function(){k.a.post("https://secure-lake-15708.herokuapp.com/users/box/".concat(localStorage.getItem("email"))).then((function(e){localStorage.setItem("box","null"),alert("\xa1Te saliste del BOX!")})).catch((function(e){alert("Error al salir del box")}))},className:"bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 min-w-auto rounded-md m-3",children:"Salirme del Box"}):null]}),"athlete"==localStorage.getItem("role")?Object(p.jsx)("div",{className:"flex justify-center",children:Object(p.jsxs)("div",{className:"rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3",children:[Object(p.jsx)("img",{src:"https://stewartmktg.files.wordpress.com/2020/06/cxuwkesucaarakm.jpg?w=1024",class:"w-full"}),Object(p.jsx)("div",{className:"flex justify-center -mt-8",children:"null"!=localStorage.getItem("url")?Object(p.jsx)("img",{src:localStorage.getItem("url"),class:"rounded-full border-solid border-white border-2 -mt-3"}):Object(p.jsx)("img",{src:"https://i.imgur.com/8Km9tLL.jpg",class:"rounded-full border-solid border-white border-2 -mt-3"})}),Object(p.jsxs)("div",{className:"text-center px-3 pb-6 pt-2",children:[Object(p.jsx)("h3",{className:"text-black text-sm bold font-sans",children:localStorage.getItem("fullName")}),"null"!=localStorage.getItem("box")?Object(p.jsxs)("p",{className:"text-sm",children:["Box: ",localStorage.getItem("box")]}):null,Object(p.jsx)("p",{className:"text-sm",children:localStorage.getItem("role")}),Object(p.jsx)("p",{className:"text-sm",children:localStorage.getItem("email")})]}),Object(p.jsx)("div",{className:"flex items-center justify-center bg-white",children:Object(p.jsxs)("label",{className:"w-64 flex flex-col items-center px-4 py-6 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white",children:[Object(p.jsx)("svg",{className:"w-8 h-8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(p.jsx)("path",{d:"M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"})}),Object(p.jsx)("span",{className:"mt-2 text-base leading-normal",children:"Select a Photo"}),Object(p.jsx)("input",{className:"hidden",type:"file",name:"file",onChange:function(e){O(e),k.a.post("https://secure-lake-15708.herokuapp.com/users/".concat(localStorage.getItem("email")),{url:f}).then((function(e){alert("Se Actualiz\xf3 la foto")})).catch((function(e){console.log(e),alert(e)})),console.log(f),localStorage.setItem("url",f)}})]})})]})}):null,a?Object(p.jsxs)("table",{className:"rounded-t-lg m-5 w-5/6 mx-auto bg-gray-800 text-gray-200",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{className:"text-center border-b border-gray-300",children:[Object(p.jsx)("th",{className:"px-4 py-3",children:"Id"}),Object(p.jsx)("th",{className:"px-4 py-3",children:"Nombre"}),Object(p.jsx)("th",{className:"px-4 py-3",children:"Seleccionar"})]})}),Object(p.jsx)("tbody",{children:S})]}):null]})]})},T=c(16),A=c(19);function E(e){var t=e.component,c=Object(A.a)(e,["component"]),r=h().currentUser;return Object(p.jsx)(b.b,Object(T.a)(Object(T.a)({},c),{},{render:function(e){return r?Object(p.jsx)(t,Object(T.a)({},e)):Object(p.jsx)(b.a,{to:"/"})}}))}function B(e){var t=e.component,c=Object(A.a)(e,["component"]),r=h().currentUser;return Object(p.jsx)(b.b,Object(T.a)(Object(T.a)({},c),{},{render:function(e){return"box"==localStorage.getItem("role")?Object(p.jsx)(t,Object(T.a)({},e)):r?Object(p.jsx)(b.a,{to:"/dashboard"}):Object(p.jsx)(b.a,{to:"/"})}}))}var L=function(e){return Object(p.jsx)("p",{children:"Manege User"})},Y=function(e){var t=Object(r.useState)(""),c=Object(u.a)(t,2),a=c[0],n=c[1],s=Object(r.useRef)(),l=Object(r.useState)(""),d=Object(u.a)(l,2),m=d[0],j=d[1],x=Object(r.useState)(!1),h=Object(u.a)(x,2),f=h[0],g=h[1],O=Object(r.useState)(""),S=Object(u.a)(O,2),y=S[0],N=S[1],w=Object(r.useState)(),J=Object(u.a)(w,2),Z=(J[0],J[1],Object(b.g)()),W=function(){Z.push("/dashboard")},T=function(){var e=Object(i.a)(o.a.mark((function e(t){var c,r,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.files,(r=new FormData).append("file",c[0]),r.append("upload_preset","fitbookimg"),g(!0),e.next=7,fetch("https://api.cloudinary.com/v1_1/fitbook-arsw/image/upload",{method:"POST",body:r});case 7:return a=e.sent,e.next=10,a.json();case 10:n=e.sent,N(n.secure_url),g(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[Object(p.jsx)(v,{}),Object(p.jsx)("button",{className:"bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 float-right rounded-md m-3",onClick:W,children:"Back"}),Object(p.jsxs)("div",{className:"min-w-md min-h-screen flex justify-center items-center",children:[m,Object(p.jsxs)("div",{className:"bg-gray-700 rounded-md p-7",children:[Object(p.jsxs)("label",{className:"block",children:[Object(p.jsx)("span",{className:"text-white",children:"Post Content: "}),Object(p.jsx)("textarea",{onChange:function(e){return n(e.target.value)},className:"resize border rounded-md mt-1 block w-full h-20 rounded-md"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:function(){k.a.post("https://secure-lake-15708.herokuapp.com/publications/add",{content:a,imgUrl:y,mail:localStorage.getItem("email")}).then((function(e){j(""),console.log(e,localStorage.getItem("email"))})).catch((function(e){j("Error to post!!!! :c"),console.log("Error: ".concat(e))})),W()},ref:s,className:"block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 float-right rounded-md m-3",children:"Add"}),Object(p.jsx)("input",{className:"block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 float-right rounded-md m-3",type:"file",name:"file",placeholder:"Upload an Image",onChange:T})]})]}),f?Object(p.jsx)("p",{children:"Loading..."}):Object(p.jsx)("img",{src:y,style:{width:"300px"}})]})]})]})};var C=function(){return Object(p.jsx)(f,{children:Object(p.jsxs)(b.d,{children:[Object(p.jsx)(b.b,{path:"/",component:y,exact:!0}),Object(p.jsx)(b.b,{path:"/register",component:w}),Object(p.jsx)(E,{path:"/dashboard",component:Z}),Object(p.jsx)(E,{path:"/procfile",component:W}),Object(p.jsx)(B,{path:"/manage",component:L}),Object(p.jsx)(E,{path:"/addPublication",component:Y})]})})},I=c(14),F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(t){var c=t.getCLS,r=t.getFID,a=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),r(e),a(e),n(e),s(e)}))};s.a.render(Object(p.jsx)(I.a,{children:Object(p.jsx)(C,{})}),document.getElementById("root")),F()}},[[70,1,2]]]);
//# sourceMappingURL=main.e486fa20.chunk.js.map