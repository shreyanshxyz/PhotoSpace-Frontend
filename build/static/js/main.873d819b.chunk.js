(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{111:function(e,t,a){e.exports=a(147)},146:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),c=a(18),i=a(34),s=a(83),u=a(99),p=a(15),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify(Object(p.a)({},null===t||void 0===t?void 0:t.data))),Object(p.a)(Object(p.a)({},e),{},{authData:t.data,loading:!1,errors:null});case"LOGOUT":return localStorage.clear(),Object(p.a)(Object(p.a)({},e),{},{authData:null,loading:!1,errors:null});default:return e}},m=Object(i.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;case"LIKE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"CREATE":return[].concat(Object(u.a)(e),[t.payload]);case"UPDATE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));default:return e}},auth:d}),f=a(46),g=a(13),b=a(24),h=a(189),v=a(190),E=a(188),x=a(199),y=a(191),j=a(185),O=a(192),w=a(92),C=a.n(w),k=a(93),S=a.n(k),I=a(12),N=a.n(I),T=a(20),L=a(84),D=a.n(L).a.create({baseURL:"https://photospace-authfull.herokuapp.com"});D.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var A=function(e){return D.patch("/posts/".concat(e,"/likePost"))},B=function(e,t){return D.patch("/posts/".concat(e),t)},F=function(e){return D.delete("/posts/".concat(e))},_=function(e){return D.post("/user/signin",e)},P=function(e){return D.post("/user/signup",e)},W=function(e){return function(){var t=Object(T.a)(N.a.mark((function t(a){var n,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l=e,D.post("/posts",l);case 3:n=t.sent,r=n.data,a({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var l}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},U=function(e,t){return function(){var a=Object(T.a)(N.a.mark((function a(n){var r,l;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,B(e,t);case 3:r=a.sent,l=r.data,n({type:"UPDATE",payload:l}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},z=a(187),H=a(181),J=a(182),R=a(102),G=a(183),M=a(184),q=a(89),V=a.n(q),K=a(90),Z=a.n(K),Q=a(65),X=a.n(Q),Y=a(85),$=a.n(Y),ee=a(177),te=Object(ee.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%",width:"700px",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),ae=function(e){var t,a,n=e.post,l=(e.setCurrentId,Object(c.b)()),o=te(),i=JSON.parse(localStorage.getItem("profile")),s=function(){return n.likes.length>0?n.likes.find((function(e){var t,a;return e===((null===i||void 0===i||null===(t=i.result)||void 0===t?void 0:t.googleId)||(null===i||void 0===i||null===(a=i.result)||void 0===a?void 0:a._id))}))?r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{fontSize:"small"}),"\xa0",n.likes.length):r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{fontSize:"small"}),"\xa0",n.likes.length," ",1===n.likes.length?"Like":"Likes"):r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{fontSize:"small"}),"\xa0Like")};return r.a.createElement(H.a,{className:o.card},r.a.createElement(J.a,{className:o.media,image:n.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:n.title}),r.a.createElement("div",{className:o.overlay},r.a.createElement(R.a,{variant:"h6"},n.name),r.a.createElement(R.a,{variant:"body2"},$()(n.createdAt).fromNow())),r.a.createElement(R.a,{className:o.title,gutterBottom:!0,variant:"h5",component:"h2",style:{paddingTop:"10px"}},n.title),r.a.createElement(G.a,null,r.a.createElement(R.a,{variant:"body2",color:"textSecondary",component:"p"},n.message)),r.a.createElement(M.a,{className:o.cardActions},r.a.createElement(j.a,{size:"small",color:"primary",disabled:!(null===i||void 0===i?void 0:i.result),onClick:function(){return l((e=n._id,function(){var t=Object(T.a)(N.a.mark((function t(a){var n,r,l;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.parse(localStorage.getItem("profile")),t.prev=1,t.next=4,A(e,null===n||void 0===n||n.token);case 4:r=t.sent,l=r.data,a({type:"LIKE",payload:l}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(s,null)),((null===i||void 0===i||null===(t=i.result)||void 0===t?void 0:t.googleId)===(null===n||void 0===n?void 0:n.creator)||(null===i||void 0===i||null===(a=i.result)||void 0===a?void 0:a._id)===(null===n||void 0===n?void 0:n.creator))&&r.a.createElement(j.a,{size:"small",color:"secondary",onClick:function(){return l((e=n._id,function(){var t=Object(T.a)(N.a.mark((function t(a){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(Z.a,{fontSize:"small"}))))},ne=a(40),re=a(186),le=Object(ee.a)((function(e){var t;return t={mainContainer:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},purple:{color:e.palette.getContrastText(re.a[500]),backgroundColor:re.a[500]}},Object(ne.a)(t,e.breakpoints.down("sm"),{appBar:{padding:"10px 20px"},heading:{display:"none"},userName:{display:"none"},image:{marginLeft:"5px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"160px"}}),Object(ne.a)(t,"actionDiv",{textAlign:"center"}),t})),oe=function(e){var t=e.setCurrentId,a=Object(c.c)((function(e){return e.posts})),n=le();return a.length?r.a.createElement(E.a,{className:n.container,container:!0,direction:"column",alignItems:"stretch",spacing:3},a.map((function(e){return r.a.createElement(E.a,{key:e._id,item:!0,xs:12},r.a.createElement(ae,{post:e,setCurrentId:t}))}))):r.a.createElement(z.a,{style:{color:"black"}})},ce=a(101),ie=a(197),se=a(91),ue=a.n(se),pe=Object(ee.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),de=function(e){var t,a=e.currentId,l=e.setCurrentId,o=Object(n.useState)({title:"",message:"",tags:"",selectedFile:""}),i=Object(b.a)(o,2),s=i[0],u=i[1],d=Object(c.c)((function(e){return a?e.posts.find((function(e){return e._id===a})):null})),m=Object(c.b)(),f=pe(),g=JSON.parse(localStorage.getItem("profile"));Object(n.useEffect)((function(){d&&u(d)}),[d]);var h=function(){l(0),u({title:"",message:"",tags:"",selectedFile:""})},v=function(){var e=Object(T.a)(N.a.mark((function e(t){var n,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0===a?(m(W(Object(p.a)(Object(p.a)({},s),{},{name:null===g||void 0===g||null===(n=g.result)||void 0===n?void 0:n.name}))),h()):(m(U(a,Object(p.a)(Object(p.a)({},s),{},{name:null===g||void 0===g||null===(r=g.result)||void 0===r?void 0:r.name}))),h());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(null===g||void 0===g||null===(t=g.result)||void 0===t?void 0:t.name)?r.a.createElement(ce.a,{className:f.paper},r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(f.root," ").concat(f.form),onSubmit:v},r.a.createElement(ie.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return u(Object(p.a)(Object(p.a)({},s),{},{title:e.target.value}))}}),r.a.createElement(ie.a,{name:"message",variant:"outlined",label:"What's the news for today..?",fullWidth:!0,multiline:!0,rows:4,value:s.message,onChange:function(e){return u(Object(p.a)(Object(p.a)({},s),{},{message:e.target.value}))}}),r.a.createElement("div",{className:f.fileInput},r.a.createElement(ue.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return u(Object(p.a)(Object(p.a)({},s),{},{selectedFile:t}))}})),r.a.createElement(j.a,{className:f.buttonSubmit,variant:"contained",style:{backgroundColor:"#20639B",color:"white"},size:"large",type:"submit",fullWidth:!0},"Submit"),r.a.createElement(j.a,{variant:"contained",style:{backgroundColor:"red",color:"white"},size:"small",onClick:h,fullWidth:!0},"Clear"))):r.a.createElement(ce.a,{className:f.paper},r.a.createElement(R.a,{variant:"h6",align:"center"},"Please Sign In to create your own posts and like other's posts."))},me=function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),i=Object(b.a)(o,2),s=i[0],u=i[1],p=Object(c.b)();Object(n.useEffect)((function(){p(function(){var e=Object(T.a)(N.a.mark((function e(t){var a,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.get("/posts");case 3:a=e.sent,n=a.data,t({type:"FETCH_ALL",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,p]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{in:!0},r.a.createElement(v.a,{maxwidth:"xl"},r.a.createElement(E.a,{style:{display:"flex",flexDirection:"column",alignItems:"center"},container:!0,justify:"space-between",alignItems:"stretch",spacing:3},r.a.createElement(E.a,{item:!0,xs:12,sm:7},r.a.createElement(oe,{setCurrentId:l}))),r.a.createElement(x.a,{open:s},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",padding:"10px 10px 0 10px"}},r.a.createElement(y.a,null,r.a.createElement("p",{style:{fontWeight:"bold",margin:"0"}}," New Post ")),r.a.createElement(j.a,{onClick:function(){u(!1)}},r.a.createElement(C.a,{style:{color:"red"}}))),r.a.createElement(O.a,null,r.a.createElement(de,{currentId:a,setCurrentId:l}))))),r.a.createElement(j.a,{onClick:function(){u(!0)},style:{position:"fixed",marginBottom:"30px",marginLeft:"30px",bottom:"0"}},r.a.createElement(S.a,{style:{color:"#20639B",transform:"scale(1.8)"},fontSize:"large"})))},fe=a(193),ge=a(194),be=a(94),he=Object(ee.a)((function(e){return{appBar:{height:"70px",marginBottom:"30px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{fontWeight:"bold",color:"black",textDecoration:"none"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"flex-end"},userName:{display:"flex",alignItems:"center",paddingRight:"30px"},brandContainer:{display:"flex",alignItems:"center"},logout:{borderRadius:"0",color:"white",backgroundColor:"red"}}})),ve=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),t=Object(b.a)(e,2),a=t[0],l=t[1],o=Object(c.b)(),i=Object(g.g)(),s=Object(g.f)(),u=he(),p=function(){o({type:"LOGOUT"}),s.push("/auth"),l(null)};return Object(n.useEffect)((function(){var e=null===a||void 0===a?void 0:a.token;e&&(1e3*Object(be.a)(e).exp<(new Date).getTime()&&p());l(JSON.parse(localStorage.getItem("profile")))}),[i]),r.a.createElement(fe.a,{className:u.appBar,position:"static",color:"inherit"},r.a.createElement("div",{className:u.brandContainer},r.a.createElement(R.a,{component:f.b,to:"/",className:u.heading,variant:"h5",align:"center"},"PhotoSpace")),r.a.createElement(ge.a,{className:u.toolbar},(null===a||void 0===a?void 0:a.result)?r.a.createElement("div",{className:u.profile},r.a.createElement(R.a,{className:u.userName,variant:"h6"},null===a||void 0===a?void 0:a.result.name),r.a.createElement(j.a,{variant:"contained",className:u.logout,onClick:p},"Logout")):r.a.createElement(j.a,{component:f.b,to:"/auth",variant:"contained",style:{borderRadius:"0",color:"white",backgroundColor:"#20639B"}},"Sign In")))},Ee=a(200),xe=a(95),ye=a(98),je=a.n(ye),Oe=function(){return r.a.createElement("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"}))},we=Object(ee.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:"black"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),Ce=a(195),ke=a(196),Se=a(96),Ie=a.n(Se),Ne=a(97),Te=a.n(Ne),Le=function(e){var t=e.name,a=e.handleChange,n=e.label,l=e.half,o=e.autoFocus,c=e.type,i=e.handleShowPassword;return r.a.createElement(E.a,{item:!0,xs:12,sm:l?6:12},r.a.createElement(ie.a,{name:t,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:o,type:c,InputProps:"password"===t?{endAdornment:r.a.createElement(Ce.a,{position:"end"},r.a.createElement(ke.a,{onClick:i},"password"===c?r.a.createElement(Ie.a,null):r.a.createElement(Te.a,null)))}:null}))},De={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},Ae=function(){var e=Object(n.useState)(De),t=Object(b.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),i=Object(b.a)(o,2),s=i[0],u=i[1],d=Object(c.b)(),m=Object(g.f)(),f=we(),h=Object(n.useState)(!1),x=Object(b.a)(h,2),y=x[0],O=x[1],w=function(){var e=Object(T.a)(N.a.mark((function e(t){var a,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=null===t||void 0===t?void 0:t.profileObj,n=null===t||void 0===t?void 0:t.tokenId;try{d({type:"AUTH",data:{result:a,token:n}}),m.push("/")}catch(r){console.log(r)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(e){return l(Object(p.a)(Object(p.a)({},a),{},Object(ne.a)({},e.target.name,e.target.value)))};return r.a.createElement(v.a,{component:"main",maxWidth:"xs"},r.a.createElement(ce.a,{className:f.paper,elevation:3},r.a.createElement(Ee.a,{className:f.avatar},r.a.createElement(je.a,{style:{backgroundColor:"black"}})),r.a.createElement(R.a,{component:"h1",variant:"h5"},s?"Sign up":"Sign in"),r.a.createElement("form",{className:f.form,onSubmit:function(e){var t,n;e.preventDefault(),d(s?(t=a,n=m,function(){var e=Object(T.a)(N.a.mark((function e(a){var r,l;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P(t);case 3:r=e.sent,l=r.data,a({type:"AUTH",data:l}),n.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()):function(e,t){return function(){var a=Object(T.a)(N.a.mark((function a(n){var r,l;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,_(e);case 3:r=a.sent,l=r.data,n({type:"AUTH",data:l}),t.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(a,m))}},r.a.createElement(E.a,{container:!0,spacing:2},s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Le,{name:"firstName",label:"First Name",handleChange:C,autoFocus:!0,half:!0}),r.a.createElement(Le,{name:"lastName",label:"Last Name",handleChange:C,half:!0})),r.a.createElement(Le,{name:"email",label:"Email Address",handleChange:C,type:"email"}),r.a.createElement(Le,{name:"password",label:"Password",handleChange:C,type:y?"text":"password",handleShowPassword:function(){return O(!y)}}),s&&r.a.createElement(Le,{name:"confirmPassword",label:"Repeat Password",handleChange:C,type:"password"})),r.a.createElement(j.a,{type:"submit",fullWidth:!0,variant:"contained",style:{color:"white",backgroundColor:"#20639B"},className:f.submit},s?"Sign Up":"Sign In"),r.a.createElement(xe.GoogleLogin,{clientId:"760400524662-5enubk2sbv732c0s1csjlme95q719hk3.apps.googleusercontent.com",render:function(e){return r.a.createElement(j.a,{className:f.googleButton,style:{backgroundColor:"white",color:"#EA4335"},fullWidth:!0,onClick:e.onClick,disabled:e.disabled,startIcon:r.a.createElement(Oe,null),variant:"contained"},"Google Sign In")},onSuccess:w,onFailure:function(){return alert("Google Sign In was unsuccessful. Try again later")},cookiePolicy:"single_host_origin"}),r.a.createElement(E.a,{container:!0,justify:"flex-end"},r.a.createElement(E.a,{item:!0},r.a.createElement(j.a,{onClick:function(){l(De),u((function(e){return!e})),O(!1)}},s?"Already have an account? Sign in":"Don't have an account? Sign Up"))))))},Be=function(){return r.a.createElement(f.a,null,r.a.createElement(ve,null),r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/",exact:!0,component:me}),r.a.createElement(g.a,{path:"/auth",exact:!0,component:Ae})))},Fe=(a(146),Object(i.e)(m,Object(i.d)(Object(i.a)(s.a))));o.a.render(r.a.createElement(c.a,{store:Fe},r.a.createElement(Be,null)),document.getElementById("root"))}},[[111,1,2]]]);
//# sourceMappingURL=main.873d819b.chunk.js.map