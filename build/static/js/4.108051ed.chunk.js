(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{107:function(e,t,a){e.exports={text:"ContactList_text__Jjeq1",text_d:"ContactList_text_d__1_0Uu",item:"ContactList_item__1wvTB",button:"ContactList_button__XFDLi"}},133:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return A}));var n=a(12),c=a(128),r=a(105),s=a(57),o=a(25),i=a(1),j=a(16),u=a(55),b=a(106),l=a(36),m=function(e){return e.contacts.loading},d=function(e){return e.contacts.items},O=function(e){return e.contacts.filter},f=Object(l.a)([d,O],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),x=a(2);function h(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(i.useState)(""),s=Object(o.a)(r,2),l=s[0],m=s[1],O=Object(n.b)(),f=Object(n.c)(d),h=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"name":c(n);break;case"number":m(n);break;default:return}},p=function(){c(""),m("")};return Object(x.jsxs)(b.a,{onSubmit:function(e){if(e.preventDefault(),f.find((function(e){return e.name.toLowerCase()===a.toLowerCase()})))return alert("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ".concat(a," \u0443\u0436\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d"));O(Object(j.a)({name:a,number:l})),p()},children:[Object(x.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(x.jsx)(b.a.Label,{children:"Name"}),Object(x.jsx)(b.a.Control,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:a,onChange:h,autoComplete:"off"})]}),Object(x.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(x.jsx)(b.a.Label,{children:"Number"}),Object(x.jsx)(b.a.Control,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:h,autoComplete:"off"})]}),Object(x.jsx)(u.a,{type:"submit",variant:"outline-secondary",className:"mx-6",children:"Add contact"})]})}var p=function(e){var t=e.split("");return t[0]=t[0].toUpperCase(),t.join("")},v=a(129),C=a(108),N=a(107),_=a.n(N);function w(){var e=Object(n.c)(f),t=Object(n.b)();return Object(i.useEffect)((function(){t(Object(j.c)())}),[t]),Object(x.jsx)(v.a,{as:"ul",variant:"flush",children:e.map((function(e){var a=e.id,n=e.name,c=e.number;return Object(x.jsxs)(v.a.Item,{as:"li",className:_.a.item,children:[Object(x.jsxs)("div",{children:[Object(x.jsxs)("p",{className:_.a.text,children:["Name:"," ",Object(x.jsx)("span",{className:_.a.text_d,children:p(n)})]}),Object(x.jsxs)("p",{className:_.a.text,children:["Number: ",Object(x.jsx)("span",{className:_.a.text_d,children:c})]})]}),Object(x.jsx)("button",{type:"button",id:a,className:_.a.button,onClick:function(){return t(Object(j.b)(a))},children:Object(x.jsx)(C.a,{})})]},a)}))})}var L=a(46);function g(){var e=Object(n.c)(O),t=Object(n.b)();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(b.a.Label,{children:"Find contacts by name"}),Object(x.jsx)(b.a.Control,{className:"form-control-my",type:"text",name:"filter",value:e,onChange:function(e){return t(Object(L.a)(e.currentTarget.value))},autoComplete:"off"})]})}var y=a(109),k=a.n(y);function A(){var e=Object(n.c)(m);return Object(x.jsx)(s.a,{className:"p-3",children:Object(x.jsxs)(c.a,{children:[Object(x.jsxs)(r.a,{sm:4,children:[Object(x.jsx)(h,{}),Object(x.jsx)(s.a,{className:"p-5",children:e&&Object(x.jsx)(k.a,{className:"loader",type:"Oval",color:"#5C636A",height:60,width:60})})]}),Object(x.jsxs)(r.a,{sm:8,children:[Object(x.jsx)(g,{}),Object(x.jsx)(w,{})]})]})})}}}]);
//# sourceMappingURL=4.108051ed.chunk.js.map