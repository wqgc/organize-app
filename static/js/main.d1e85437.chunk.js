(this["webpackJsonporganize-app"]=this["webpackJsonporganize-app"]||[]).push([[0],{12:function(e,t,n){e.exports={container:"ManageContexts_container__36BTI","container-dark":"ManageContexts_container-dark__2jt78",row:"ManageContexts_row__3hYo4","row-dark":"ManageContexts_row-dark__eVAwz","context-name":"ManageContexts_context-name__2mKG-","new-context":"ManageContexts_new-context__jNq-h","button-group":"ManageContexts_button-group__10KFd","edit-mode":"ManageContexts_edit-mode__3oSIL","edit-mode-dark":"ManageContexts_edit-mode-dark__3Ko5r"}},16:function(e,t,n){e.exports={container:"EditingBar_container__2WDq6","container-small":"EditingBar_container-small__I73QS","container-dark":"EditingBar_container-dark__1EUBi","inner-container":"EditingBar_inner-container__17poU","icon-item":"EditingBar_icon-item__3hJvz"}},18:function(e,t,n){e.exports={container:"Menu_container__Rs1kq","container-dark":"Menu_container-dark__3nNee",inner:"Menu_inner__1lODf","slide-out":"Menu_slide-out__33zV3","current-context-icon":"Menu_current-context-icon__en9ZG","menu-link":"Menu_menu-link__1WQ1O","menu-link-dark":"Menu_menu-link-dark__2xvrZ","behind-menu":"Menu_behind-menu__3ge-f"}},19:function(e,t,n){e.exports={container:"TopBar_container__3dLid","bg-light":"TopBar_bg-light__3HtMS","bg-dark":"TopBar_bg-dark__3p8ff",link:"TopBar_link__2IXKY",bars:"TopBar_bars__23ALz",title:"TopBar_title__1B4TG","title-dark":"TopBar_title-dark__3Nhts"}},4:function(e,t,n){e.exports={separator:"MainContent_separator__3Q-Ye",container:"MainContent_container__A0LE2","container-dark":"MainContent_container-dark__WLH2v","icon-group":"MainContent_icon-group__1lFnY","icon-item":"MainContent_icon-item__3-_vM","icon-chevron":"MainContent_icon-chevron__34RxQ","edit-mode":"MainContent_edit-mode__3asVT","edit-mode-dark":"MainContent_edit-mode-dark__iCQ1_","importexport-container":"MainContent_importexport-container__3yKzK","bg-light":"MainContent_bg-light__1TN-T","bg-dark":"MainContent_bg-dark__3Nnfk"}},48:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(23),i=n.n(a),r=n(7),s=(n(48),n(22)),l=n(11),u=n(42),d=function(e){return{type:"UPDATE_MODE",data:e}},b={showEditIcons:!0,currentContext:"0",currentTheme:0},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_MODE":return t.data;default:return e}},m=n(5),O=n(13),h=function(e){return{type:"SET_CONTEXTS",data:e}},f=function(e){return{type:"UPDATE_CONTEXT",data:e}},x=[{id:"0",name:"Default Context",blockCount:1,subBlockCount:1}],k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONTEXTS":return t.data;case"ADD_CONTEXT":return[].concat(Object(O.a)(e),[t.data]);case"UPDATE_CONTEXT":return e.map((function(e){return e.id===t.data.id?Object(m.a)(Object(m.a)({},e),{},{name:t.data.name}):e}));case"DELETE_CONTEXT":return e.filter((function(e){return e.id!==t.data.id}));default:return e}},p=function(e){return{type:"SET_BLOCKS",data:e}},g=function(e){return{type:"ADD_BLOCK",data:e}},C=function(e){return{type:"UPDATE_BLOCK",data:e}},v=function(e){return{type:"DELETE_BLOCK",data:e}},_=[{id:"0",name:"Example Section",context:"0",subBlockCount:1}],E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BLOCKS":return t.data;case"ADD_BLOCK":return[].concat(Object(O.a)(e),[t.data]);case"UPDATE_BLOCK":return e.map((function(e){return e.id===t.data.id?Object(m.a)(Object(m.a)({},e),{},{name:t.data.name}):e}));case"DELETE_BLOCK":return e.filter((function(e){return e.id!==t.data.id}));default:return e}},w=function(e){return{type:"SET_SUBBLOCKS",data:e}},N=function(e){return{type:"ADD_SUBBLOCK",data:e}},S=function(e){return{type:"UPDATE_SUBBLOCK",data:e}},y=function(e){return{type:"DELETE_SUBBLOCK",data:e}},T=[{id:"0",name:"Example Item",block:"0",contents:"Here, you can write notes for an item.\n            \n[You can also add links that open to a new page](https://example.com) \n            \nClick on an item title to strike it out, and click the edit or plus buttons to modify or add new content respectively.",isStriked:!1}],B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SUBBLOCKS":return t.data;case"ADD_SUBBLOCK":return[].concat(Object(O.a)(e),[t.data]);case"UPDATE_SUBBLOCK":return e.map((function(e){return e.id===t.data.id?Object(m.a)(Object(m.a)({},e),{},{name:t.data.name,contents:t.data.contents,isStriked:t.data.isStriked}):e}));case"DELETE_SUBBLOCK":return e.filter((function(e){return e.id!==t.data.id}));default:return e}},I=Object(s.combineReducers)({mode:j,contexts:k,blocks:E,subBlocks:B}),D=Object(s.createStore)(I,Object(u.composeWithDevTools)()),M=Object(l.b)(),L=D,z=n(19),A=n.n(z),U=n(2),F=n(3),P={blue:{100:"#57869F",200:"#79bee4",300:"#5d8bb6"},gray:{100:"#A9B1BF"}},K=n(18),W=n.n(K),X=n(9),J=n(20),H="/organize-app",R=n(0),G=function(e){var t=e.showMenu,n=e.setShowMenu,o=e.isDropdown,a=e.usingDropdown,i=Object(c.useState)(null),s=Object(r.a)(i,2),u=s[0],b=s[1],j=M((function(e){return e})),O=j.contexts,h=j.mode,f=Object(c.useRef)(null),x=Object(l.c)(),k=Object(X.f)();if(Object(c.useEffect)((function(){o&&n&&n(!1)}),[k,n,o]),Object(c.useEffect)((function(){var e=function(e){null!==f.current&&!f.current.contains(e.target)&&n&&n(!1)};return t&&o&&document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}),[t,n,o]),o&&!a||a&&!t)return null;var p=function(){x(d(Object(m.a)(Object(m.a)({},h),{},{currentTheme:Number(!h.currentTheme)})))},g=function(){x(d(Object(m.a)(Object(m.a)({},h),{},{showEditIcons:!h.showEditIcons})))},C=function(e){h.currentContext!==e.target.id&&x(d(Object(m.a)(Object(m.a)({},h),{},{currentContext:e.target.id})))},v=1===h.currentTheme,_=v?W.a["container-dark"]:W.a.container,E=v?P.blue[200]:P.blue[100],w=[{name:"Manage Contexts",path:"".concat(H,"/managecontexts")},{name:"Import / Export Data",path:"".concat(H,"/importexport")},{name:"About",path:"".concat(H,"/about")}],N=Object(R.jsx)(U.a,{icon:F.b,color:E}),S=Object(R.jsx)("span",{className:W.a["current-context-icon"],children:Object(R.jsx)(U.a,{icon:F.g,color:E,size:"xs"})});return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("div",{id:W.a["behind-menu"]}),Object(R.jsx)("div",{id:W.a.container,className:"".concat(W.a["slide-out"]," ").concat(_),ref:f,onBlur:function(){o&&n&&b(setTimeout((function(){n(!1)})))},onFocus:function(){null!==u&&o&&clearTimeout(u)},children:Object(R.jsx)("nav",{id:W.a.inner,children:Object(R.jsxs)("ul",{children:[Object(R.jsx)("li",{children:v?Object(R.jsxs)("button",{name:"light mode",title:"Light mode",onClick:p,children:[Object(R.jsx)(U.a,{icon:F.l,color:E})," ","Light Mode"]}):Object(R.jsxs)("button",{name:"dark mode",title:"Dark mode",onClick:p,children:[Object(R.jsx)(U.a,{icon:F.i,color:E})," ","Dark Mode"]})}),Object(R.jsx)("li",{children:h.showEditIcons?Object(R.jsxs)("button",{name:"hide edit icons",title:"Hide edit icons",onClick:g,children:[Object(R.jsx)(U.a,{icon:F.d,color:E})," ","Show Edit Icons"]}):Object(R.jsxs)("button",{name:"show edit icons",title:"Show edit icons",onClick:g,children:[Object(R.jsx)(U.a,{icon:F.k,color:E})," ","Show Edit Icons"]})}),Object(R.jsx)("hr",{className:v?"hr-dark":""}),O.map((function(e,t){return Object(R.jsxs)("li",{children:[e.id===h.currentContext?S:N," ",Object(R.jsx)("span",{className:h.currentContext===e.id&&k.pathname==="".concat(H,"/")?"underline":"",children:Object(R.jsx)(J.b,{id:e.id||void 0,onClick:C,className:"".concat(W.a["menu-link"]," ").concat(v&&W.a["menu-link-dark"]),to:"".concat(H,"/"),children:e.name})})]},t)})),Object(R.jsx)("hr",{className:v?"hr-dark":""}),w.map((function(e,t){return Object(R.jsxs)("li",{children:[N," ",Object(R.jsx)("span",{className:k.pathname===e.path?"underline":"",children:Object(R.jsx)(J.b,{className:"".concat(W.a["menu-link"]," ").concat(v&&W.a["menu-link-dark"]),to:e.path,children:e.name})})]},t)}))]})})})]})},Y=function(e){var t=e.usingDropdown,n=Object(c.useState)(!1),o=Object(r.a)(n,2),a=o[0],i=o[1],s=1===M((function(e){return e.mode})).currentTheme;return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)("header",{id:A.a.container,className:"".concat(s?A.a["bg-dark"]:A.a["bg-light"]),children:[Object(R.jsx)("h1",{id:A.a.title,children:Object(R.jsx)(J.b,{className:s?A.a["title-dark"]:A.a.title,to:"".concat(H,"/"),children:"Organize"})}),Object(R.jsx)("div",{id:A.a.bars,children:Object(R.jsx)("button",{name:"menu",title:"Menu",onClick:function(){i((function(e){return!e}))},children:Object(R.jsx)(U.a,{icon:F.a,color:s?P.blue[200]:P.blue[100]})})})]}),Object(R.jsx)("div",{id:A.a.test,children:Object(R.jsx)(G,{showMenu:a,setShowMenu:i,isDropdown:!0,usingDropdown:t})})]})},Q=n(4),q=n.n(Q),V=n(30),Z=n(16),$=n.n(Z),ee=n(29),te=n.n(ee),ne=function(e){var t=e.type,n=e.modalIsOpen,c=e.setModalIsOpen,o=e.handleDelete,a=e.name,i=1===M((function(e){return e.mode})).currentTheme,r="",s="";switch(t){case"CONTEXT":r="Delete ".concat(a,"?"),s="ALL sections and items within ".concat(a," will be deleted.");break;case"SUBBLOCK":r="Delete this item?",s="If it's the only item left in a section, the section will be deleted."}return Object(R.jsxs)(te.a,{isOpen:n,className:"modal ".concat(i&&"modal-dark"),overlayClassName:i?"modal-overlay-dark":"",ariaHideApp:!1,children:[Object(R.jsxs)("div",{children:[Object(R.jsx)("div",{className:"bolder ".concat(i&&"bolder-dark"),style:{paddingBottom:10},children:r}),s]}),Object(R.jsxs)("div",{className:"modal-buttons",children:[Object(R.jsx)("button",{name:"confirm delete",title:"Confirm delete",className:"choice-button button-delete bolder ".concat(i&&"button-delete-dark bolder-dark"),onClick:o,children:"Delete"}),Object(R.jsx)("button",{name:"cancel",title:"Cancel",className:"choice-button button-neutral bolder ".concat(i&&"button-neutral-dark bolder-dark"),onClick:function(){return c(!1)},children:"Cancel"})]})]})},ce=function(e){var t=e.isEditing,n=e.setIsEditing,o=e.handleEdit,a=e.handleSubmit,i=e.handleAddSubBlock,s=e.handleDeleteSubBlock,l=e.isLast,u=Object(c.useState)(!1),d=Object(r.a)(u,2),b=d[0],j=d[1],m=M((function(e){return e})),O=m.mode,h=m.contexts.find((function(e){return e.id===O.currentContext})),f=1===O.currentTheme,x=f?P.blue[200]:P.blue[100];return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(ne,{type:"SUBBLOCK",modalIsOpen:b,setModalIsOpen:j,handleDelete:s}),O.showEditIcons?Object(R.jsx)("div",{id:$.a.container,className:f?$.a["container-dark"]:$.a.container,children:t?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)("button",{name:"save changes",title:"Save changes",id:$.a["inner-container"],onClick:a,children:[Object(R.jsx)(U.a,{className:$.a["icon-item"],icon:F.c,color:x,size:"lg"}),Object(R.jsx)("span",{children:"Save Changes"})]}),Object(R.jsx)("button",{name:"cancel",title:"Cancel",onClick:function(){return n(!1)},children:Object(R.jsx)(U.a,{className:$.a["icon-item"],icon:F.m,color:x,size:"lg"})})]}):Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("button",{name:"edit item",title:"Edit item",onClick:o,children:Object(R.jsx)(U.a,{className:$.a["icon-item"],icon:F.h,color:x,size:"lg"})}),l&&Object(R.jsx)("button",{name:"new item",title:"New item",onClick:i,children:Object(R.jsx)(U.a,{className:$.a["icon-item"],icon:F.j,color:x,size:"lg"})}),h&&(h.blockCount>1||h.subBlockCount>1)&&Object(R.jsx)("button",{name:"delete item",title:"Delete item",onClick:function(){return j(!0)},children:Object(R.jsx)(U.a,{className:$.a["icon-item"],icon:F.n,color:x,size:"lg"})})]})}):Object(R.jsx)("div",{id:$.a["container-small"],className:f?$.a["container-dark"]:$.a.container})]})},oe=n(68),ae=function(e,t,n,c){var o=Object(O.a)(e),a=Object(O.a)(t),i=Object(m.a)(Object(m.a)({},e[n]),{},{newPlaceId:null}),r=null;switch(c){case"UP":r=Object(m.a)(Object(m.a)({},o[n-1]),{},{newPlaceId:o[n].id}),i.newPlaceId=o[n-1].id;break;case"DOWN":r=Object(m.a)(Object(m.a)({},o[n+1]),{},{newPlaceId:o[n].id}),i.newPlaceId=o[n+1].id}return a.map((function(e){return e.id===i.newPlaceId?(delete i.newPlaceId,i):e.id===r.newPlaceId?(delete r.newPlaceId,r):e}))},ie=function(e,t){var n=e.mode,c=e.contexts,o=e.blocks,a=e.subBlocks;if(!(n&&c&&o&&a))throw new Error("Unable to save, data is missing");var i=n.showEditIcons,r=n.currentContext,s=n.currentTheme,l={showEditIcons:i,currentContext:r||"0",currentTheme:Number(s)||0},u=Object(O.a)(c),b=Object(O.a)(o),j=Object(O.a)(a);if(t){var m={},f={};u.forEach((function(e){var t=e.id,n=e.name,c=null;if(t&&"string"===typeof t||(c="ID"),n&&"string"===typeof n||(c="name"),null!==c)throw new Error("A context's ".concat(c," is missing or in the wrong format"));m[e.id]={blockCount:0,subBlockCount:0}})),b.forEach((function(e){var t,n=e.id,c=e.name,o=e.context,a=null;if(n&&"string"===typeof n||(a="ID"),c&&"string"===typeof c||(a="name"),o&&"string"===typeof o||(a="context"),null!==a)throw new Error("A block's ".concat(a," is missing or in the wrong format"));if(null===(t=m[e.context])||void 0===t?void 0:t.hasOwnProperty("blockCount")){var i=m[e.context].blockCount;m[e.context].blockCount=i+1}f[e.id]={context:e.context,subBlockCount:0}})),j.forEach((function(e){var t,n,c=e.id,o=e.name,a=e.block,i=e.contents,r=e.isStriked,s=null;if(c&&"string"===typeof c||(s="ID"),o&&"string"===typeof o||(s="name"),a&&"string"===typeof a||(s="block"),null!==s)throw new Error("A subblock's ".concat(s," is missing or in the wrong format"));if(i&&"string"===typeof i||(e.contents=""),r&&"boolean"===typeof r||(e.isStriked=!1),null===(t=f[e.block])||void 0===t?void 0:t.hasOwnProperty("subBlockCount")){var l=f[e.block].subBlockCount;f[e.block].subBlockCount=l+1}if(null===(n=f[e.block])||void 0===n?void 0:n.context){var u=f[e.block].context,d=m[u].subBlockCount;m[u].subBlockCount=d+1}})),u.forEach((function(e){if(e.id){if(0===m[e.id].blockCount||0===m[e.id].subBlockCount)throw new Error("Contexts must have at least one block and one subblock");e.blockCount=m[e.id].blockCount,e.subBlockCount=m[e.id].subBlockCount}})),b.forEach((function(e){e.id&&(e.subBlockCount=f[e.id].subBlockCount)}))}L.dispatch(d(l)),L.dispatch(h(u)),L.dispatch(p(b)),L.dispatch(w(j))},re=function(e){var t=e.subBlock,n=e.isLast,o=Object(c.useState)(!1),a=Object(r.a)(o,2),i=a[0],s=a[1],u=Object(c.useState)(""),d=Object(r.a)(u,2),b=d[0],j=d[1],O=Object(c.useState)(t.contents),h=Object(r.a)(O,2),x=h[0],k=h[1],p=Object(c.useState)(t.contents),g=Object(r.a)(p,2),_=g[0],E=g[1],T=Object(c.useRef)(null),B=M((function(e){return e})),I=B.contexts,D=B.blocks,L=B.subBlocks,z=B.mode,A=L.filter((function(e){return e.block===t.block})),K=A.findIndex((function(e){return e.id===t.id})),W=Object(l.c)(),X=1===z.currentTheme,J=X?P.blue[300]:P.gray[100];Object(c.useLayoutEffect)((function(){null!==T.current&&i&&T.current.focus()}),[i]);var H=Object(c.useCallback)((function(e){for(var t=/^\[([\w\s\d\W]+)\]\((https?:\/\/[\w\d./?=#]+)\)$/,n=e.split(/[\s]+/),c=[],o=[],a=!1,i=0;i<n.length;i++)n[i].startsWith("[")&&n[i].endsWith(")")?c.push(n[i]):n[i].startsWith("[")?(a=!0,o.push(n[i])):n[i].endsWith(")")?(a=!1,o.push(n[i]),c.push(o.join(" ")),o=[]):a?o.push(n[i]):c.push(n[i]);var r=[];c.forEach((function(e){if(t.test(e)){for(var n=e.split(""),c=[],o=[],a=!0,i=1;i<n.length-1;i++)"]"!==n[i]?a?c.push(n[i]):o.push(n[i]):(a=!1,i++);r.push([e,"<a href='".concat(o.join(""),"' target='_blank' ").concat(X&&'class="a-dark"'," rel='noreferrer noopener'>").concat(c.join(""),"</a>")])}})),r.forEach((function(t){e=e.replace(t[0],t[1])})),E(e)}),[X]);Object(c.useLayoutEffect)((function(){H(t.contents)}),[t.contents,z,H]);var G=function(e){var t=ae(A,L,K,e);W(w(t))};return Object(R.jsxs)("section",{children:[i?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("h2",{className:"fullwidth",children:Object(R.jsx)("input",{className:"".concat(q.a["edit-mode"]," ").concat(X&&q.a["edit-mode-dark"]," h2-input ").concat(X?"input-dark":""),name:"item name",title:"Item name",ref:T,value:b,onChange:function(e){var t=e.target;return j(t.value)},placeholder:"Subtitle"})}),Object(R.jsx)(V.a,{className:"".concat(q.a["edit-mode"]," ").concat(X?"input-dark ".concat(q.a["edit-mode-dark"]):""),name:"notes",title:"Notes",value:x,onChange:function(e){var t=e.target;return k(t.value)},placeholder:"Notes"}),Object(R.jsxs)("p",{className:"info ".concat(X&&"info-dark"),children:["Links can be added by using ",Object(R.jsx)("code",{children:"[title](https://example.com)"})]})]}):Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("h2",{children:Object(R.jsx)("button",{onClick:function(){W(S(Object(m.a)(Object(m.a)({},t),{},{isStriked:!t.isStriked})))},className:"strikable ".concat(t.isStriked&&"striked"),name:t.isStriked?"striked item":"unstriked item",title:"Toggle striked",children:t.name})}),z.showEditIcons&&Object(R.jsx)("span",{className:q.a["icon-group"],children:(K>0||K<A.length-1)&&Object(R.jsxs)(R.Fragment,{children:[K>0?Object(R.jsx)("button",{name:"move item up",title:"Item up",className:"".concat(q.a["icon-item"]," ").concat(q.a["icon-chevron"]),onClick:function(){return G("UP")},children:Object(R.jsx)(U.a,{icon:F.f,color:J,size:"lg"})}):Object(R.jsx)("button",{name:"move item up",className:"".concat(q.a["icon-item"]," ").concat(q.a["icon-chevron"]," disabled"),disabled:!0,children:Object(R.jsx)(U.a,{icon:F.f,color:J,size:"lg"})}),K<A.length-1?Object(R.jsx)("button",{name:"move item down",title:"Item down",className:"".concat(q.a["icon-item"]," ").concat(q.a["icon-chevron"]),onClick:function(){return G("DOWN")},children:Object(R.jsx)(U.a,{icon:F.e,color:J,size:"lg"})}):Object(R.jsx)("button",{name:"move item down",className:"".concat(q.a["icon-item"]," ").concat(q.a["icon-chevron"]," disabled"),disabled:!0,children:Object(R.jsx)(U.a,{icon:F.e,color:J,size:"lg"})})]})}),x&&Object(R.jsx)("p",{dangerouslySetInnerHTML:{__html:_}})]}),Object(R.jsx)(ce,{isEditing:i,setIsEditing:s,handleEdit:function(){s(!0),j(t.name),k(t.contents)},handleSubmit:function(){s(!1),W(S(Object(m.a)(Object(m.a)({},t),{},{name:b,contents:x}))),H(x)},handleAddSubBlock:function(){var e=D.find((function(e){return e.id===t.block})),n=I.find((function(t){return t.id===(null===e||void 0===e?void 0:e.context)}));e&&n&&(n.subBlockCount++,e.subBlockCount++,W(f(n)),W(C(e)),W(N({id:Object(oe.a)(),name:"New Item",block:t.block,contents:"",isStriked:!1})))},handleDeleteSubBlock:function(){var e=D.find((function(e){return e.id===t.block})),n=I.find((function(t){return t.id===(null===e||void 0===e?void 0:e.context)}));e&&n&&(e.subBlockCount--,W(y({id:t.id})),0===e.subBlockCount?(n.blockCount--,W(v({id:e.id}))):W(C(e)),n.subBlockCount--,W(f(n)))},isLast:n})]})},se=function(e){var t=e.block,n=e.isLast,o=Object(c.useState)(!1),a=Object(r.a)(o,2),i=a[0],s=a[1],u=Object(c.useState)(""),d=Object(r.a)(u,2),b=d[0],j=d[1],O=Object(c.useRef)(null),h=M((function(e){return e})),x=h.blocks,k=h.subBlocks,v=h.contexts,_=h.mode,E=x.filter((function(e){return e.context===_.currentContext})),w=E.findIndex((function(e){return e.id===t.id})),S=Object(l.c)();Object(c.useLayoutEffect)((function(){null!==O.current&&i&&O.current.focus()}),[i]);var y=function(e){var t=ae(E,x,w,e);S(p(t))},T=1===_.currentTheme,B=T?P.blue[300]:P.gray[100];return Object(R.jsxs)("section",{children:[i?Object(R.jsx)("h1",{className:"fullwidth",children:Object(R.jsx)("input",{className:"".concat(q.a["edit-mode"]," ").concat(T&&q.a["edit-mode-dark"]," h1-input ").concat(T?"input-dark":""),name:"section name",title:"Section name",ref:O,value:b,onChange:function(e){var t=e.target;return j(t.value)},placeholder:"Title"})}):Object(R.jsx)("h1",{children:t.name}),_.showEditIcons&&Object(R.jsx)("span",{className:q.a["icon-group"],children:i?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("button",{name:"save changes",title:"Save changes",className:q.a["icon-item"],onClick:function(){s(!1),S(C(Object(m.a)(Object(m.a)({},t),{},{name:b})))},children:Object(R.jsx)(U.a,{icon:F.c,color:B,size:"lg"})}),Object(R.jsx)("button",{name:"cancel",title:"Cancel",className:q.a["icon-item"],onClick:function(){return s(!1)},children:Object(R.jsx)(U.a,{icon:F.m,color:B,size:"lg"})})]}):Object(R.jsxs)(R.Fragment,{children:[(w>0||w<E.length-1)&&Object(R.jsxs)(R.Fragment,{children:[w>0?Object(R.jsx)("button",{name:"move section up",title:"Section up",className:"".concat(q.a["icon-item"]," ").concat(q.a["icon-chevron"]),onClick:function(){return y("UP")},children:Object(R.jsx)(U.a,{icon:F.f,color:B,size:"lg"})}):Object(R.jsx)("button",{name:"move section up",className:"".concat(q.a["icon-item"]," ").concat(q.a["icon-chevron"]," disabled"),disabled:!0,children:Object(R.jsx)(U.a,{icon:F.f,color:B,size:"lg"})}),w<E.length-1?Object(R.jsx)("button",{name:"move section down",title:"Section down",className:"".concat(q.a["icon-item"]," ").concat(q.a["icon-chevron"]),onClick:function(){return y("DOWN")},children:Object(R.jsx)(U.a,{icon:F.e,color:B,size:"lg"})}):Object(R.jsx)("button",{name:"move section down",className:"".concat(q.a["icon-item"]," ").concat(q.a["icon-chevron"]," disabled"),disabled:!0,children:Object(R.jsx)(U.a,{icon:F.e,color:B,size:"lg"})})]}),Object(R.jsx)("button",{name:"edit section name",title:"Edit section name",className:q.a["icon-item"],onClick:function(){s(!0),j(t.name)},children:Object(R.jsx)(U.a,{icon:F.h,color:B,size:"lg"})}),n&&Object(R.jsx)("button",{name:"new section",title:"New section",className:q.a["icon-item"],onClick:function(){var e=Object(oe.a)(),n=v.find((function(e){return e.id===t.context}));n&&(n.blockCount++,n.subBlockCount++,S(f(n)),S(g({id:e,name:"New Section",context:t.context,subBlockCount:1})),S(N({id:Object(oe.a)(),name:"New Item",block:e,contents:"",isStriked:!1})))},children:Object(R.jsx)(U.a,{icon:F.j,color:B,size:"lg"})})]})}),k.filter((function(e){return e.block===t.id})).map((function(e,n){return Object(R.jsx)(re,{subBlock:e,isLast:n===t.subBlockCount-1},e.id)}))]})},le=function(){var e=M((function(e){return e})),t=e.mode,n=e.blocks,o=e.contexts.find((function(e){return e.id===t.currentContext}));return Object(c.useEffect)((function(){document.title=o?"Organize - ".concat(o.name):"Organize"}),[o]),Object(R.jsx)(R.Fragment,{children:n.filter((function(e){return e.context===t.currentContext})).map((function(e,t){return Object(R.jsx)(se,{block:e,isLast:void 0===o||t===o.blockCount-1},e.id)}))})},ue=function(){var e=1===M((function(e){return e.mode})).currentTheme;return Object(c.useEffect)((function(){document.title="Organize - About Page"}),[]),Object(R.jsxs)("section",{children:[Object(R.jsx)("h1",{children:"About"}),Object(R.jsxs)("p",{children:["This web application can be used to organize just about anything. ",Object(R.jsx)("br",{}),"You can keep notes, to-do items, goals, grocery lists, links, and any other musings you might have."]}),Object(R.jsx)("p",{children:"You can also create contexts (separate pages which are listed in the menu for easy access). Within those, you can create new sections and add items containing further writing and/or links. What you do with this space is up to you. Enjoy!"}),Object(R.jsxs)("p",{children:["Find the app on "," ",Object(R.jsx)("a",{href:"https://github.com/wqgc/organize-app",target:"_blank",rel:"noreferrer noopener",className:e?"a-dark":"",children:"GitHub."})]})]})},de=n(12),be=n.n(de),je=function(e){var t=e.type,n=e.modalIsOpen,c=e.setModalIsOpen,o=1===M((function(e){return e.mode})).currentTheme,a="";switch(t){case"MIN_CONTEXT_NAME_LENGTH":a="Context names must contain at least 1 character.";break;case"MAX_CONTEXT_NAME_LENGTH":a="Context names must be no longer than 28 characters."}return Object(R.jsxs)(te.a,{isOpen:n,className:"modal ".concat(o&&"modal-dark"," modal-smaller"),overlayClassName:o?"modal-overlay-dark":"",ariaHideApp:!1,children:[Object(R.jsx)("div",{children:a}),Object(R.jsx)("div",{className:"modal-buttons modal-buttons-center",children:Object(R.jsx)("button",{name:"ok",title:"Ok",className:"choice-button button-neutral bolder ".concat(o&&"button-neutral-dark bolder-dark"),onClick:function(){return c(!1)},children:"Okay"})})]})},me=function(e){var t=e.context,n=e.index,o=e.darkMode,a=e.iconThemeColor,i=e.handleOpenDeletionModal,s=Object(c.useState)(!1),u=Object(r.a)(s,2),d=u[0],b=u[1],j=Object(c.useState)(""),x=Object(r.a)(j,2),k=x[0],p=x[1],g=Object(c.useState)(""),C=Object(r.a)(g,2),v=C[0],_=C[1],E=Object(c.useState)(!1),w=Object(r.a)(E,2),N=w[0],S=w[1],y=Object(c.useRef)(null),T=M((function(e){return e.contexts})),B=Object(l.c)();Object(c.useLayoutEffect)((function(){null!==y.current&&d&&y.current.focus()}),[d]);var I=function(e){var t=function(e,t,n){var c=Object(O.a)(e);switch(n){case"UP":var o=[c[t],c[t-1]];c[t-1]=o[0],c[t]=o[1];break;case"DOWN":var a=[c[t],c[t+1]];c[t+1]=a[0],c[t]=a[1]}return c}(T,n,e);B(h(t))};return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(je,{type:k,modalIsOpen:N,setModalIsOpen:S}),Object(R.jsxs)("div",{className:"".concat(be.a.row," ").concat(o&&be.a["row-dark"]),children:[d?Object(R.jsx)("input",{className:"".concat(be.a["edit-mode"]," ").concat(o&&be.a["edit-mode-dark"]," ").concat(o?"input-dark":""),name:"context name",title:"Context Name",ref:y,value:v,onChange:function(e){var t=e.target;return _(t.value)},placeholder:"Context Name",maxLength:28}):Object(R.jsx)("span",{className:be.a["context-name"],children:t.name}),Object(R.jsx)("span",{className:be.a["button-group"],children:d?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("button",{name:"save changes",title:"Save changes",className:be.a["icon-item"],onClick:function(){var e="";v.length<1?e="MIN_CONTEXT_NAME_LENGTH":v.length>28&&(e="MAX_CONTEXT_NAME_LENGTH"),e?(p(e),S(!0)):(b(!1),B(f(Object(m.a)(Object(m.a)({},t),{},{name:v}))))},children:Object(R.jsx)(U.a,{icon:F.c,color:a,size:"lg"})}),Object(R.jsx)("button",{name:"cancel",title:"Cancel",className:be.a["icon-item"],onClick:function(){return b(!1)},children:Object(R.jsx)(U.a,{icon:F.m,color:a,size:"lg"})})]}):Object(R.jsxs)(R.Fragment,{children:[(n>0||n<T.length-1)&&Object(R.jsxs)(R.Fragment,{children:[n>0?Object(R.jsx)("button",{name:"move context up",title:"Context up",onClick:function(){return I("UP")},children:Object(R.jsx)(U.a,{icon:F.f,color:a,size:"lg"})}):Object(R.jsx)("button",{name:"move context up",className:"disabled",disabled:!0,children:Object(R.jsx)(U.a,{icon:F.f,color:a,size:"lg"})}),n<T.length-1?Object(R.jsx)("button",{name:"move context down",title:"Context down",onClick:function(){return I("DOWN")},children:Object(R.jsx)(U.a,{icon:F.e,color:a,size:"lg"})}):Object(R.jsx)("button",{name:"move context down",className:"disabled",disabled:!0,children:Object(R.jsx)(U.a,{icon:F.e,color:a,size:"lg"})})]}),Object(R.jsx)("button",{name:"edit context item",title:"Edit context item",onClick:function(){b(!0),_(t.name)},children:Object(R.jsx)(U.a,{icon:F.h,color:a,size:"lg"})}),T.length>1&&Object(R.jsx)("button",{name:"delete context item",title:"Delete context item",onClick:function(){return i(t)},children:Object(R.jsx)(U.a,{icon:F.n,color:a,size:"lg"})})]})})]})]})},Oe=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(null),i=Object(r.a)(a,2),s=i[0],u=i[1],b=Object(l.c)(),j=M((function(e){return e})),O=j.mode,h=j.contexts,f=j.blocks,x=j.subBlocks;Object(c.useEffect)((function(){document.title="Organize - Manage Contexts"}),[]);var k=function(e){u(e),o(!0)},p=1===O.currentTheme,C=p?P.blue[200]:P.blue[100];return Object(R.jsxs)("section",{children:[s&&Object(R.jsx)(ne,{type:"CONTEXT",modalIsOpen:n,setModalIsOpen:o,handleDelete:function(){return function(e){if(e){if(f.forEach((function(t){t.context===e&&(x.forEach((function(e){e.block===t.id&&b(y({id:e.id}))})),b(v({id:t.id})))})),O.currentContext===e){var t=h.find((function(t){return t.id!==e}));t&&b(d(Object(m.a)(Object(m.a)({},O),{},{currentContext:t.id})))}b({type:"DELETE_CONTEXT",data:{id:e}})}o(!1)}(s.id)},name:s.name}),Object(R.jsx)("h1",{children:"Manage Contexts"}),Object(R.jsx)("div",{id:be.a.container,className:p?be.a["container-dark"]:be.a.container,children:h.map((function(e,t){return Object(R.jsx)(me,{context:e,index:t,darkMode:p,iconThemeColor:C,handleOpenDeletionModal:k},t)}))}),Object(R.jsxs)("button",{onClick:function(){var e=Object(oe.a)(),t=Object(oe.a)();b({type:"ADD_CONTEXT",data:{id:e,name:"New Context",blockCount:1,subBlockCount:1}}),b(g({id:t,name:"New Section",context:e,subBlockCount:1})),b(N({id:Object(oe.a)(),name:"New Item",block:t,contents:"",isStriked:!1}))},className:be.a["new-context"],children:[Object(R.jsx)(U.a,{icon:F.j,color:C})," "," New Context"]})]})},he=n(43),fe=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(!0),i=Object(r.a)(a,2),s=i[0],l=i[1],u=Object(c.useState)(""),d=Object(r.a)(u,2),b=d[0],j=d[1],m=Object(c.useState)(""),O=Object(r.a)(m,2),h=O[0],f=O[1],x=M((function(e){return e})),k=Object(c.useRef)(null),p=1===x.mode.currentTheme,g=document.getElementById("fileInput");Object(c.useEffect)((function(){document.title="Organize - Import / Export Data"}),[]),Object(c.useEffect)((function(){n!==JSON.stringify(x,null,4)?(l(!1),null!==k.current&&(k.current.disabled=!1)):(l(!0),null!==k.current&&(k.current.disabled=!0))}),[n,x]),Object(c.useLayoutEffect)((function(){o(JSON.stringify(x,null,4))}),[x,o]);var C=Object(c.useCallback)((function(){var e=new FileReader;e.readAsText(g.files[0]),e.onload=function(){"string"===typeof e.result&&o(e.result)}}),[g]);Object(c.useEffect)((function(){if(null!==g)return g.addEventListener("change",C),function(){return g.removeEventListener("change",C)}}),[g,C]);return Object(R.jsxs)("section",{children:[Object(R.jsx)("h1",{children:"Import / Export Data"}),b&&Object(R.jsx)("p",{className:"message error-message ".concat(p&&"error-message-dark"),children:b})||h&&Object(R.jsx)("p",{className:"message update-message ".concat(p&&"update-message-dark"),children:h}),Object(R.jsx)(V.a,{className:"".concat(q.a["edit-mode"]," ").concat(p?"input-dark ".concat(q.a["edit-mode-dark"]):""),name:"data",title:"Data",value:n,onChange:function(e){o(e.target.value),g&&(g.value=""),f("")},placeholder:"Data"}),Object(R.jsxs)("div",{id:q.a["importexport-container"],className:p?q.a["bg-dark"]:q.a["bg-light"],children:[Object(R.jsx)("button",{name:"import",title:"Import",className:"choice-button button-neutral bolder ".concat(p&&"button-neutral-dark bolder-dark"),onClick:function(){g&&g.click()},children:"Import"}),Object(R.jsx)("button",{name:"export",title:"Export",className:"choice-button button-neutral bolder ".concat(p&&"button-neutral-dark bolder-dark"),onClick:function(){var e=new Date,t=e.getDate(),c=e.getMonth()+1,o=e.getFullYear(),a="".concat(c,"-").concat(t,"-").concat(o),i=new Blob([n],{type:"text/plain;charset=utf-8"});Object(he.saveAs)(i,"organize_data_".concat(a,".json"))},children:"Export"}),Object(R.jsx)("button",{name:"save changes",title:"Save Changes",className:"choice-button button-neutral bolder ".concat(p&&"button-neutral-dark bolder-dark"," ").concat(s&&"disabled"),ref:k,onClick:function(){try{ie(JSON.parse(n),!0)}catch(t){var e="Error: ";return t instanceof SyntaxError?e+="The data you're trying to save isn't formatted correctly.":e+="".concat(t.message,"."),void j(e+" If you aren't sure how to fix this, refresh the page to discard changes.")}j(""),f("Changes successfully saved!")},children:"Save Changes"})]}),Object(R.jsx)("input",{id:"fileInput",type:"file",name:"import",accept:".json",style:{display:"none"},"aria-hidden":"true"})]})},xe=function(){var e=1===M((function(e){return e})).mode.currentTheme;return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("div",{className:"".concat(q.a.separator," ").concat(e&&q.a["bg-dark"])})," ",Object(R.jsx)("br",{}),Object(R.jsx)("main",{id:q.a.container,className:e?"container-dark":"",children:Object(R.jsxs)(X.c,{children:[Object(R.jsx)(X.a,{exact:!0,path:"".concat(H,"/"),children:Object(R.jsx)(le,{})}),Object(R.jsx)(X.a,{path:"".concat(H,"/about"),children:Object(R.jsx)(ue,{})}),Object(R.jsx)(X.a,{path:"".concat(H,"/importexport"),children:Object(R.jsx)(fe,{})}),Object(R.jsx)(X.a,{path:"".concat(H,"/managecontexts"),children:Object(R.jsx)(Oe,{})})]})})]})},ke=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(window.innerWidth),i=Object(r.a)(a,2),s=i[0],l=i[1],u=M((function(e){return e})),d=u.mode,b=u.contexts,j=u.blocks,m=u.subBlocks;Object(c.useLayoutEffect)((function(){switch(d.currentTheme){case 1:document.body.style.color="white",document.body.style.backgroundColor="#2d3341";break;default:document.body.style.color="#0E0E2C",document.body.style.backgroundColor="white"}}),[d]),Object(c.useEffect)((function(){var e=window.localStorage.getItem("mode"),t=window.localStorage.getItem("contexts"),n=window.localStorage.getItem("blocks"),c=window.localStorage.getItem("subBlocks");if(e&&t&&n&&c){var o={mode:JSON.parse(e),contexts:JSON.parse(t),blocks:JSON.parse(n),subBlocks:JSON.parse(c)};try{ie(o,!1)}catch(a){console.log(a.message)}}}),[]),Object(c.useEffect)((function(){window.localStorage.setItem("mode",JSON.stringify(d))}),[d]),Object(c.useEffect)((function(){window.localStorage.setItem("contexts",JSON.stringify(b))}),[b]),Object(c.useEffect)((function(){window.localStorage.setItem("blocks",JSON.stringify(j))}),[j]),Object(c.useEffect)((function(){window.localStorage.setItem("subBlocks",JSON.stringify(m))}),[m]);var O=Object(c.useCallback)((function(){l(window.innerWidth)}),[]);return Object(c.useLayoutEffect)((function(){o(!(s>=900))}),[s]),Object(c.useEffect)((function(){return window.addEventListener("resize",O),function(){return window.removeEventListener("resize",O)}}),[O]),Object(R.jsx)(J.a,{children:Object(R.jsxs)("div",{children:[Object(R.jsx)(Y,{usingDropdown:n}),Object(R.jsx)("div",{className:"nav-curv ".concat(1===d.currentTheme&&"nav-curv-dark")}),Object(R.jsxs)("div",{id:n?"":"no-dropdown_container",children:[Object(R.jsx)(G,{isDropdown:!1,usingDropdown:n}),Object(R.jsx)(xe,{})]})]})})};i.a.render(Object(R.jsx)(o.a.StrictMode,{children:Object(R.jsx)(l.a,{store:L,children:Object(R.jsx)(ke,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.d1e85437.chunk.js.map