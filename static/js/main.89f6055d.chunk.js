(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={message:"Message_message__1X3ex",message__logo:"Message_message__logo__s7tbH",message__content:"Message_message__content__1Jpat",content__text:"Message_content__text__2jNsh",content__nickname:"Message_content__nickname__13TVl",content__time:"Message_content__time__3n42K"}},function(e,t,a){e.exports={link:"Header_link__13fhO"}},function(e,t,a){e.exports={someClass:"Greeting_someClass__3HjcP",error:"Greeting_error__BsIBb",inputError:"Greeting_inputError__2DQoJ",input:"Greeting_input__1tSck",btn:"Greeting_btn__22NB4",content:"Greeting_content__1FM-e",textError:"Greeting_textError__2DuTx"}},,,function(e,t,a){e.exports={Wrap:"Affairs_Wrap__2TcPP",Name:"Affairs_Name__Itk1Z",Priority:"Affairs_Priority__3VG-H",btn:"Affairs_btn__2RzUl"}},function(e,t,a){e.exports={input:"SuperInputText_input__2KESq",superInput:"SuperInputText_superInput__2Wtlk",errorInput:"SuperInputText_errorInput__30toy",error:"SuperInputText_error___aOL1"}},,,function(e,t,a){e.exports={default:"SuperButton_default__8HOuY",red:"SuperButton_red__1Iq-V",button:"SuperButton_button__Vf9r3"}},,function(e,t,a){e.exports={blue:"HW4_blue__14QsY",column:"HW4_column__1qxSN",testSpanError:"HW4_testSpanError__3LFcv"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__2ns2q",spanClassName:"SuperCheckbox_spanClassName__3jx6d"}},function(e,t,a){e.exports={select:"SuperSelect_select__1JhOh",option:"SuperSelect_option__2cqJ6"}},function(e,t,a){e.exports={label:"SuperRadio_label__3cqc3",radio:"SuperRadio_radio__1gk8z"}},,,,,,function(e,t,a){e.exports={App:"App_App__3mgd1"}},function(e,t,a){e.exports={span:"SuperEditableSpan_span__2y1WF"}},function(e,t,a){e.exports={item:"HW8_item__1RuIj"}},,,function(e,t,a){e.exports=a(44)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),c=a.n(l),o=(a(37),a(27)),u=a.n(o),i=a(6),s=a(1),m=a(7),p=a.n(m);var _=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:p.a.message},r.a.createElement("img",{className:p.a.message__logo,src:e.avatar,alt:""}),r.a.createElement("div",{className:p.a.message__content},r.a.createElement("h2",{className:p.a.content__nickname},e.name),r.a.createElement("p",{className:p.a.content__text},e.message),r.a.createElement("span",{className:p.a.content__time},e.time))))},E="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",d="Some Name",f="some text",h="22:00";var v=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",r.a.createElement(_,{avatar:E,name:d,message:f,time:h}),r.a.createElement("hr",null),"\u0434\u043b\u044f \u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u0442\u0432\u0430, \u043c\u043e\u0433\u0443 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c",r.a.createElement("hr",null))},g=a(2),b=a(12),k=a.n(b);var C=function(e){return r.a.createElement("div",{className:k.a.Wrap},r.a.createElement("span",{className:k.a.Name},e.affair.name),r.a.createElement("span",{className:k.a.Priority},e.affair.priority),r.a.createElement("button",{className:k.a.btn,onClick:function(){return e.deleteAffairCallback(e.affair._id)}},"X"))};a(38);var N=function(e){var t=e.data.map((function(t){return r.a.createElement(C,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){return e.setFilter("all")},className:"all"===e.filter?"active":""},"All"),r.a.createElement("button",{onClick:function(){return e.setFilter("high")},className:"high"===e.filter?"active":""},"High"),r.a.createElement("button",{onClick:function(){return e.setFilter("middle")},className:"middle"===e.filter?"active":""},"Middle"),r.a.createElement("button",{onClick:function(){return e.setFilter("low")},className:"low"===e.filter?"active":""},"Low"))},O=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var j=function(){var e=Object(n.useState)(O),t=Object(g.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(g.a)(c,2),u=o[0],i=o[1],s=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):[]}(a,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(N,{data:s,setFilter:i,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))},filter:u}),r.a.createElement("hr",null),r.a.createElement("hr",null))},x=a(15),y=a(9),S=a.n(y),w=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?S.a.inputError:S.a.input;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:S.a.content},r.a.createElement("div",null,r.a.createElement("input",{value:t,onChange:a,className:o,placeholder:"Enter your name"}),r.a.createElement("div",{className:S.a.textError},l)),r.a.createElement("div",null,r.a.createElement("button",{onClick:n,className:S.a.btn,disabled:!t},"add"),r.a.createElement("span",null,c))))},T=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(g.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),s=Object(g.a)(i,2),m=s[0],p=s[1],_=t.length;return r.a.createElement(w,{name:o,setNameCallback:function(e){var t=e.currentTarget.value.trim();""!==t?u(t):(u(""),p("Title is required"))},addUser:function(){a(o),alert("Hello ".concat(o," !"))},error:m,totalUsers:_})},I=a(46);var A=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(T,{users:a,addUserCallback:function(e){var t={_id:Object(I.a)(),name:e};l([].concat(Object(x.a)(a),[t]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},F=a(4),P=a(13),H=a.n(P),W=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(F.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(H.a.error," ").concat(u||""),m="".concat(H.a.input," ").concat(c?H.a.errorInput:H.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},B=a(18),J=a.n(B),G=a(16),M=a.n(G),q=function(e){var t=e.red,a=e.className,n=Object(F.a)(e,["red","className"]),l="".concat(M.a.button," ").concat(t?M.a.red:M.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))},U=a(19),D=a.n(U),K=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(F.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(D.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:D.a.spanClassName},l))};var R=function(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},u=Object(n.useState)(!1),i=Object(g.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:J.a.column},r.a.createElement(W,{value:a,onChangeText:l,onEnter:o,error:c}),r.a.createElement(W,{className:J.a.blue}),r.a.createElement(q,null,"default"),r.a.createElement(q,{red:!0,onClick:o},"delete "),r.a.createElement(q,{disabled:!0},"disabled"),r.a.createElement(K,{checked:s,onChangeChecked:m},"some text "),r.a.createElement(K,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null))},V=a(28),z=a.n(V),L=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,l=e.spanProps,c=Object(F.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(g.a)(o,2),i=u[0],s=u[1],m=l||{},p=m.children,_=m.onDoubleClick,E=m.className,d=Object(F.a)(m,["children","onDoubleClick","className"]),f="".concat(z.a.span," ").concat(E||"");return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(W,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),t&&t(e)},onEnter:function(){s(!1),a&&a()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),_&&_(e)},className:f},d),"\u270e ",p||c.value))};function X(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function Y(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}X("test",{x:"A",y:1});Y("test",{x:"",y:0});var Q=function(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(L,{value:a,onChangeText:l,spanProps:{children:a?void 0:"enter text..."}})),r.a.createElement(q,{onClick:function(){X("editable-span-value",a)}},"save"),r.a.createElement(q,{onClick:function(){l(Y("Editable-Span-Value",""))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Z=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(j,null),r.a.createElement(A,null),r.a.createElement(R,null),r.a.createElement(Q,null))},$=a(20),ee=a.n($),te=function(e){var t=e.options,a=e.onChange,n=e.onChangeOption,l=Object(F.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return r.a.createElement("option",{className:ee.a.options,key:t,value:e},e)})):[];return r.a.createElement("select",Object.assign({className:ee.a.select,onChange:function(e){a&&a(e),n&&n(e.currentTarget.value)}},l),c)},ae=(a(21),function(e){e.type,e.name;var t=e.options,a=(e.value,e.onChange,e.onChangeOption,Object(F.a)(e,["type","name","options","value","onChange","onChangeOption"]),t?t.map((function(e,t){})):[]);return r.a.createElement(r.a.Fragment,null,a)}),ne=["x","y","z"];var re=function(){var e=Object(n.useState)(ne[1]),t=Object(g.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(te,{options:ne,value:a,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ae,{name:"radio",options:ne,value:a,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},le=function(e,t){switch(t.type){case"sort":var a=Object(x.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?a:a.reverse();case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},ce=a(29),oe=a.n(ce),ue=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ie=function(){var e=Object(n.useState)(ue),t=Object(g.a)(e,2),a=t[0],l=t[1],c=a.map((function(e){return r.a.createElement("div",{key:e._id,className:oe.a.item},r.a.createElement("span",null,"p.name"),e.age)}));return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h4",null,"homeworks 8"),c,r.a.createElement("div",null,r.a.createElement(q,{onClick:function(){return l(le(ue,{type:"sort",payload:"up"}))}},"sort up"),r.a.createElement(q,{onClick:function(){return l(le(ue,{type:"sort",payload:"down"}))}},"sort down"),r.a.createElement(q,{onClick:function(){return l(le(ue,{type:"check",payload:18}))}},"check 18")))},se=function(){return r.a.createElement("div",null,r.a.createElement(re,null),r.a.createElement(ie,null))},me=function(){return r.a.createElement("div",null,"JuniorPlus")};var pe=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},_e="/pre-junior",Ee="/junior",de="/junior-plus";var fe=function(){return r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0,render:function(){return r.a.createElement(s.a,{to:_e})}}),r.a.createElement(s.b,{path:_e,render:function(){return r.a.createElement(Z,null)}}),r.a.createElement(s.b,{path:Ee,render:function(){return r.a.createElement(se,null)}}),r.a.createElement(s.b,{path:de,render:function(){return r.a.createElement(me,null)}}),"// add routes",r.a.createElement(s.b,{render:function(){return r.a.createElement(pe,null)}})))},he=a(8),ve=a.n(he);var ge=function(){return r.a.createElement("div",null,r.a.createElement(i.b,{to:_e,className:ve.a.link,activeClassName:ve.a.active},"pre-junior"),r.a.createElement(i.b,{to:Ee,className:ve.a.link,activeClassName:ve.a.active},"junior"),r.a.createElement(i.b,{to:de,className:ve.a.link,activeClassName:ve.a.active},"junior-plus"))};var be=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(ge,null),r.a.createElement(fe,null)))};var ke=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("h1",null,"Hello"),r.a.createElement("div",null,"react homeworks:"),r.a.createElement(be,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[32,1,2]]]);
//# sourceMappingURL=main.89f6055d.chunk.js.map