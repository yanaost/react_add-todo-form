(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),c=a(2),s=a(7),o=(a(13),a(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=a(0),u=function(e){var t=e.user,a=t.email,n=t.name;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},m=function(e){var t=e.todo,a=t.user,n=t.title,i=t.completed;return Object(d.jsxs)("article",{"data-id":t.id,className:"TodoInfo".concat(i?" TodoInfo--completed":""),children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:n}),a?Object(d.jsx)(u,{user:a}):"waiting for user info"]})},j=function(e){var t=e.todos;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(m,{todo:e},e.id)}))})},b=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"delectus aut autem",completed:!0,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:l.find((function(t){return t.id===e.userId}))})})),h=function(){var e=Object(o.useState)(b),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),s=Object(c.a)(i,2),u=s[0],m=s[1],h=Object(o.useState)(0),f=Object(c.a)(h,2),O=f[0],p=f[1],x=Object(o.useState)(!1),v=Object(c.a)(x,2),y=v[0],S=v[1],g=Object(o.useState)(!1),N=Object(c.a)(g,2),I=N[0],C=N[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),S(!u.length),C(!O),u.length&&O){var t={userId:O,id:Math.max.apply(Math,Object(r.a)(a.map((function(e){return e.id}))))+1,title:u,completed:!1,user:l.find((function(e){return e.id===O}))};n([].concat(Object(r.a)(a),[t])),m(""),p(0)}},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("input",{type:"text",placeholder:"Enter todo title","data-cy":"titleInput",value:u,onChange:function(e){S(!1),m(e.target.value)}}),y&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsxs)("select",{"data-cy":"userSelect",value:O,onChange:function(e){C(!1),p(+e.target.value)},children:[Object(d.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name})}))]}),I&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(d.jsx)(j,{todos:a})]})};i.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3e47e084.chunk.js.map