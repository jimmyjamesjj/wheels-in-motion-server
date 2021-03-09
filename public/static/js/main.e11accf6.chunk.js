(this["webpackJsonpwheels-in-motion-client"]=this["webpackJsonpwheels-in-motion-client"]||[]).push([[0],{38:function(e,t,r){},64:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),a=r(31),c=r.n(a),o=(r(37),r(38),r(14)),i=r(21),l=r(2),p=r(3),u=r(5),d=r(4),j=r(6),h=r(9),m=r.n(h),b="https://dashboard.heroku.com/apps/wheels-in-motion/deploy/heroku-git",O=r(8),x=r(0),f=function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Request to hire this sport car"}),Object(x.jsxs)("form",{onSubmit:this.props.onSubmit,children:[Object(x.jsx)("div",{children:Object(x.jsx)("input",{type:"hidden",name:"User"})}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"InputUsername",children:"date"}),Object(x.jsx)("input",{type:"text",className:"form-control",id:"InputUsername",name:"date",placeholder:"Select date"})," "]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"InputUsername",children:"Address"}),Object(x.jsx)("input",{type:"text",className:"form-control",id:"InputUsername",name:"address",placeholder:"Enter your address"})," "]}),Object(x.jsx)("button",{type:"submit",className:"button is-primary",children:"Send Request"})]})]})}}]),r}(n.Component),g=function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={sportcars:{},user:{}},e}return Object(p.a)(r,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props);var t=this.props.match.params.sportcarsId;m.a.get("".concat(b,"/api/Sportcars/").concat(t)).then((function(t){e.setState({sportcars:t.data})})).catch((function(e){console.log(e,"user not found")}))}},{key:"render",value:function(){var e=this.state.sportcars;return this.props.user?Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:" Sport car Details are"}),Object(x.jsxs)("div",{children:[" Sportcar name: ",e.carName]}),Object(x.jsxs)("div",{children:["Tansmission: ",e.Transmission]}),Object(x.jsxs)("div",{children:["Wheeldrive: ",e.wheelDrive]}),Object(x.jsxs)("div",{children:["Horsepower: ",e.Horsepower]}),Object(x.jsxs)("div",{children:["Insured: ",e.insurance]}),Object(x.jsxs)("div",{children:["Car Model: ",e.carModel]}),Object(x.jsx)(O.b,{to:"/Requestcar",children:"Request to hire this car"})]}):Object(x.jsx)(j.a,{to:"/Signin"})}}]),r}(n.Component),v=(r(63),function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)("div",{class:"navbar-end",children:Object(x.jsx)("div",{class:"navbar-item",children:Object(x.jsxs)("div",{className:"buttons",children:[Object(x.jsx)(O.b,{to:"/Signup",className:"button is-primary",children:Object(x.jsx)("strong",{children:"Sign up"})}),Object(x.jsx)(O.b,{to:"/Signin",className:"button is-primary",children:Object(x.jsx)("strong",{children:"Log in"})}),Object(x.jsx)(O.b,{to:"/Profile",className:"button is-primary",children:Object(x.jsx)("strong",{children:"my profile"})})]})})})})}}]),r}(n.Component)),N=function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){var e=this.props.sportcars,t=this.props,r=(t.user,t.loggedInUser),n={width:"550px",height:"400px",margin:"0px"};return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{children:[" ",Object(x.jsx)(v,{})]}),Object(x.jsx)("div",{children:Object(x.jsx)("ul",{className:"flex-container",children:Object(x.jsxs)("li",{className:"flex-itemr",children:["   ",e.map((function(e){return Object(x.jsxs)("div",{className:"pics",children:[" ",e.carName,e.image?Object(x.jsx)("img",{style:n,className:"image is-128x128",width:"4000px",src:e.image,alt:e.carName}):null,Object(x.jsx)(O.b,{to:"/SportcarDetails/".concat(e._id),children:Object(x.jsx)("button",{user:r,class:"button is-info",children:"view details"})})]},e._id)}))]})})})]})}}]),r}(n.Component),y=function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return Object(x.jsxs)("form",{onSubmit:this.props.onSignUp,children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"InputUsername",children:"Firtsname"}),Object(x.jsx)("input",{type:"text",className:"form-control",id:"InputUsername",name:"fname"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"InputUsername",children:"Secondname"}),Object(x.jsx)("input",{type:"text",className:"form-control",id:"InputUsername",name:"sname"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"InputEmail",children:"Email address"}),Object(x.jsx)("input",{type:"email",className:"form-control",id:"InputEmail",name:"email"}),Object(x.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:".."})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"InputPassword",children:"Password"}),Object(x.jsx)("input",{name:"password",type:"password",className:"form-control",id:"InputPassword"})]}),Object(x.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})}}]),r}(n.Component),S=function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return Object(x.jsxs)("form",{onSubmit:this.props.onSignIn,children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"InputEmail",children:"Email address"}),Object(x.jsx)("input",{type:"email",className:"form-control",id:"InputEmail",name:"email"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"InputPassword",children:"Password"}),Object(x.jsx)("input",{name:"password",type:"password",className:"form-control",id:"InputPassword"})]}),Object(x.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})}}]),r}(n.Component),w=function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{children:[" ",Object(x.jsx)("h1",{children:"Creat sport car post"})]}),Object(x.jsxs)("form",{onSubmit:this.props.onSubmit,children:[Object(x.jsx)("input",{name:"image",type:"file"}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"InputUsername",children:"Car name"}),Object(x.jsx)("input",{type:"text",className:"form-control",id:"InputUsername",name:"carName",placeholder:"Entre car name"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"InputUsername",children:"Transmisson"}),Object(x.jsx)("input",{type:"text",className:"form-control",id:"InputUsername",name:"Transmission",placeholder:"Entre transmission"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"InputUsername",children:"Wheel drive"}),Object(x.jsx)("input",{type:"text",className:"form-control",id:"InputUsername",name:"wheelDrive",placeholder:"Entre car name"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"InputUsername",children:"Horsepower"}),Object(x.jsx)("input",{type:"text",className:"form-control",id:"InputUsername",name:"Horsepower",placeholder:"Entre horsepower"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"InputUsername",children:"Car Model"}),Object(x.jsx)("input",{type:"text",className:"form-control",id:"InputUsername",name:"carModel",placeholder:"Enter year"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"InputUsername",children:"Insured "}),Object(x.jsx)("input",{type:"text",className:"form-control",id:"InputUsername",name:"insurance",placeholder:"Yes or No?"})]}),Object(x.jsx)("button",{type:"submit",className:"button is-primary",children:"Post"})]})]})}}]),r}(n.Component),I=function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){var e=this,t=this.props.sportcars,r=this.props,n=r.onDelete,s=(r.user,{width:"550px",height:"400px"}),a=t.filter((function(t){if(e.props.user&&t.User==e.props.user._id)return t}));return Object(x.jsxs)("div",{children:[this.props.user?Object(x.jsx)("button",{className:"button is-warning",onClick:this.props.onLogout,children:"Logout"}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(O.b,{style:{marginLeft:"10px"},to:"/Signin",children:"SignIn"}),Object(x.jsx)(O.b,{style:{marginLeft:"10px"},to:"/Signup",children:"SignUp"})]}),Object(x.jsx)(O.b,{to:"/NewPost",children:" create car post  "}),Object(x.jsx)("h2",{children:"my sport car posts"}),a.map((function(e){return Object(x.jsxs)("div",{className:"pics",children:[" ",e.carName,e.image?Object(x.jsx)("img",{style:s,className:"image is-128x128",width:"4000px",src:e.image,alt:e.carName}):null,Object(x.jsx)(O.b,{to:"/SportcarDetails/".concat(e._id),children:Object(x.jsx)("button",{class:"button is-info",children:"view details"})}),Object(x.jsx)(O.b,{to:"/Sportcars/".concat(e._id,"/edit"),children:Object(x.jsx)("button",{className:"button is-info",children:" Edit"})}),Object(x.jsx)("button",{className:"button is-danger",onClick:function(){n(e._id)},children:"Delete"}),Object(x.jsx)("p",{})]},e._id)}))]})}}]),r}(n.Component),U=(n.Component,function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={sportcars:{}},e.changeCarName=function(t){var r=t.target.value,n=JSON.parse(JSON.stringify(e.state.sportcars));n.carName=r,e.setState({sportcars:n})},e.changeTransmission=function(t){var r=t.target.value,n=JSON.parse(JSON.stringify(e.state.sportcars));n.Transmission=r,e.setState({sportcars:n})},e.changeWheelDrive=function(t){var r=t.target.value,n=JSON.parse(JSON.stringify(e.state.sportcars));n.wheelDrive=r,e.setState({sportcars:n})},e.changeHorsepower=function(t){var r=t.target.value,n=JSON.parse(JSON.stringify(e.state.sportcars));n.Horsepower=r,e.setState({sportcars:n})},e.changeInsurance=function(t){var r=t.target.value,n=JSON.parse(JSON.stringify(e.state.sportcars));n.insurance=r,e.setState({sportcars:n})},e.changeCarModel=function(t){var r=t.target.value,n=JSON.parse(JSON.stringify(e.state.sportcars));n.carModel=r,e.setState({sportcars:n})},e}return Object(p.a)(r,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.sportcarsId;m.a.get("".concat(b,"/api/sportcars/").concat(t)).then((function(t){e.setState({sportcars:t.data})})).catch((function(){}))}},{key:"render",value:function(){var e={width:"250px",height:"30px",backgroundColor:"#f0dde0"},t=this.state.sportcars,r=this.props.onEdit;return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{}),Object(x.jsx)("h1",{children:"edit your sport car post"}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"InputUsername",children:"Car name"}),Object(x.jsx)("input",{style:e,type:"text",onChange:this.changeCarName,value:t.carName,className:"form-control",id:"InputUsername",name:"carName",placeholder:"Entre car name"}),"  "]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"InputUsername",children:"Transmisson"}),Object(x.jsx)("input",{style:e,type:"text",onChange:this.changeTransmission,value:t.Transmission,className:"form-control",id:"InputUsername",name:"Transmission",placeholder:"Entre transmission"}),"  "]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"InputUsername",children:"Wheel drive"}),Object(x.jsx)("input",{style:e,type:"text",onChange:this.changeWheelDrive,value:t.wheelDrive,className:"form-control",id:"InputUsername",name:"wheelDrive",placeholder:"Entre car name"}),"   "]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"InputUsername",children:"Horsepower"}),Object(x.jsx)("input",{style:e,type:"text",onChange:this.changeHorsepower,value:t.Horsepower,className:"form-control",id:"InputUsername",name:"Horsepower",placeholder:"Entre horsepower"}),"  "]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"InputUsername",children:"Insured "}),Object(x.jsx)("input",{style:e,type:"text",onChange:this.changeInsurance,value:t.insurance,className:"form-control",id:"InputUsername",name:"insurance",placeholder:"Yes or No?"}),"   "]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"InputUsername",children:"Car Model"}),Object(x.jsx)("input",{style:e,type:"text",onChange:this.changeCarModel,value:t.carModel,className:"form-control",id:"InputUsername",name:"carModel",placeholder:"Enter year"}),"  "]}),Object(x.jsx)("button",{onClick:function(){r(t)},children:"Submit"})]})}}]),r}(n.Component)),C=function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={sportcars:[],loggedInUser:null,error:null,requestcar:[]},e.handleSignUp=function(t){t.preventDefault();var r={fname:t.target.fname.value,sname:t.target.sname.value,email:t.target.email.value,password:t.target.password.value};m.a.post("".concat(b,"/api/Signup"),r,{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data},(function(){e.props.history.push("/")}))})).catch((function(){}))},e.handleSubmit=function(t){t.preventDefault();var r=t.target.carName.value,n=t.target.Transmission.value,s=t.target.wheelDrive.value,a=t.target.Horsepower.value,c=t.target.carModel.value,o=t.target.insurance.value,l=e.state.loggedInUser._id,p=t.target.image.files[0],u=new FormData;u.append("imageUrl",p),m.a.post("".concat(b,"/api/upload"),u).then((function(t){m.a.post("".concat(b,"/api/sportcars/create"),{carName:r,Transmission:n,wheelDrive:s,Horsepower:a,carModel:c,insurance:o,User:l,image:t.data.image},{withCredentials:!0}).then((function(t){e.setState({sportcars:[t.data].concat(Object(i.a)(e.state.sportcars))},(function(){e.props.history.push("/")}))})).catch((function(){}))})).catch((function(){}))},e.handleRquestCarSubmit=function(t){t.preventDefault();var r=t.target.date.value,n=t.target.address.value,s=e.state.loggedInUser._id;m.a.post("".concat(b,"/api/requestcar/create"),{date:r,address:n,User:s},{withCredentials:!0}).then((function(t){e.setState({requestcar:[t.data].concat(Object(i.a)(e.state.requestcar))},(function(){e.props.history.push("/")}))})).catch((function(){}))},e.handleSignIn=function(t){t.preventDefault();var r={email:t.target.email.value,password:t.target.password.value};m.a.post("".concat(b,"/api/signin"),r,{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data},(function(){e.props.history.push("/Profile")}))})).catch((function(e){console.log("Something went wrong",e)}))},e.handleLogout=function(){m.a.post("".concat(b,"/api/logout"),{},{withCredentials:!0}).then((function(){e.setState({loggedInUser:null},(function(){e.props.history.push("/")}))}))},e.handleEditSportcar=function(t){m.a.patch("".concat(b,"/api/sportcars/").concat(t._id),{carName:t.carName,Transmission:t.Transmission,wheelDrive:t.wheelDrive,Horsepower:t.Horsepower,carModel:t.carModel,insurance:t.insurance,User:t.User},{withCredentials:!0}).then((function(){var r=e.state.sportcar.map((function(e){return t._id===e._id&&(e.carName=t.carName,e.Transmission=t.Transmission,e.wheelDrive=t.wheelDrive,e.Horsepower=t.Horsepower,e.carModel=t.carModel,e.insurance=t.insurance,e.User=t.User),e}));e.setState({sportcars:r},(function(){e.props.history.push("/")}))})).catch((function(){}))},e.handleDelete=function(t){m.a.delete("".concat(b,"/api/sportcars/").concat(t)).then((function(){var r=e.state.sportcars.filter((function(e){return e._id!==t}));e.setState({sportcars:r},(function(){e.props.history.push("/")}))})).catch((function(e){console.log("Delete failed",e)}))},e}return Object(p.a)(r,[{key:"componentDidMount",value:function(){var e=this;m.a.get("".concat(b,"/api/sportcars")).then((function(t){e.setState({sportcars:t.data})})).catch((function(){})),this.state.loggedInUser||m.a.get("".concat(b,"/api/user"),{withCredentials:!0}).then((function(t){console.log(t.data),e.setState({loggedInUser:t.data})})).catch((function(){}))}},{key:"render",value:function(){var e=this,t=this.state,r=t.sportcars,n=t.loggedInUser;t.error;return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(j.d,{children:[Object(x.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(x.jsx)(N,{sportcars:r})}}),Object(x.jsx)(j.b,{path:"/signin",render:function(t){return Object(x.jsx)(S,Object(o.a)({onSignIn:e.handleSignIn},t))}}),Object(x.jsx)(j.b,{path:"/Signup",render:function(t){return Object(x.jsx)(y,Object(o.a)({onSignUp:e.handleSignUp},t))}}),Object(x.jsx)(j.b,{path:"/SportcarDetails/:sportcarsId",render:function(e){return Object(x.jsx)(g,Object(o.a)({user:n},e))}}),Object(x.jsx)(j.b,{path:"/Profile",render:function(t){return Object(x.jsx)(I,Object(o.a)({sportcars:e.state.sportcars,onLogout:e.handleLogout,user:n,onSubmit:e.handleSubmit,onDelete:e.handleDelete},t))}}),Object(x.jsx)(j.b,{path:"/sportcars/:sportcarsId/edit",render:function(t){return Object(x.jsx)(U,Object(o.a)({onEdit:e.handleEditSportcar},t))}}),Object(x.jsx)(j.b,{path:"/NewPost",render:function(t){return Object(x.jsx)(w,Object(o.a)({onSubmit:e.handleSubmit},t))}}),Object(x.jsx)(j.b,{path:"/Requestcar",render:function(t){return Object(x.jsx)(f,Object(o.a)({onSubmit:e.handleRquestCarSubmit},t))}})]})})}}]),r}(n.Component),D=Object(j.g)(C);c.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(O.a,{children:Object(x.jsx)(D,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.e11accf6.chunk.js.map