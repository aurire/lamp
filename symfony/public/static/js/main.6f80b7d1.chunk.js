(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{69:function(e,t,a){e.exports=a(97)},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),i=a.n(o),l=a(38),s=a(63),c=a(16),u=a(1),p={loading:!1,loaded:!1,dataFetchFinished:!1,userFetchFinished:!1,mainActionFinished:!1,error:null,userData:null,user:null,alert:null,alertShown:!0,notes:{},note:{},shared:{},deleted:{},search:{}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;return"INITIATE_LOGIN_STARTED"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!0,loaded:!1}):"INITIATE_LOGIN_SUCCESS"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!0,userFetchFinished:!1,error:null,user:t.payload.payload.headers.location}):"INITIATE_LOGIN_FAILURE"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,userFetchFinished:!1,loaded:!1,error:t.payload.error}):"GET_USER_DATA_SUCCESS"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!0,userFetchFinished:!0,userData:t.payload.payload.data,user:t.payload.payload.data["@id"]}):"INITIATE_LOGOUT_STARTED"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!0,loaded:!1}):"INITIATE_LOGOUT_SUCCESS"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!0,error:null,userData:null,user:null}):"INITIATE_LOGOUT_FAILURE"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!1,error:t.payload.error}):"INITIATE_REGISTER_STARTED"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!0,loaded:!1}):"INITIATE_REGISTER_SUCCESS"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!0,error:null}):"INITIATE_REGISTER_FAILURE"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!1,error:t.payload.error}):"LOCATION_CHANGED"===t.type?e.alertShown?Object(u.a)(Object(u.a)({},e),{},{alert:null,loaded:!1,deleted:{},search:{},dataFetchFinished:!1,mainActionFinished:!1,error:""}):Object(u.a)(Object(u.a)({},e),{},{alertShown:!0,loaded:!1,deleted:{},search:{},dataFetchFinished:!1,mainActionFinished:!1,error:""}):"SET_ALERT"===t.type?Object(u.a)(Object(u.a)({},e),{},{alert:t.payload.msg,alertShown:!1}):"INITIATE_NOTE_CREATE_STARTED"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!0,loaded:!1}):"INITIATE_NOTE_CREATE_SUCCESS"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!0,mainActionFinished:!0,error:null,notes:{}}):"INITIATE_NOTE_CREATE_FAILURE"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!1,error:t.payload.error}):"FETCH_NOTE_LIST_STARTED"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!0,loaded:!1}):"FETCH_NOTE_LIST_SUCCESS"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!0,error:null,deleted:{},notes:Object(u.a)(Object(u.a)({},e.notes),{},Object(c.a)({},t.payload.page,t.payload.items.data))}):"FETCH_NOTE_LIST_FAILURE"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!1,error:t.payload.error}):"FETCH_NOTE_STARTED"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!0,loaded:!1}):"FETCH_NOTE_SUCCESS"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!0,dataFetchFinished:!0,error:null,note:Object(u.a)(Object(u.a)({},e.note),{},Object(c.a)({},t.payload.id,t.payload.item.data))}):"FETCH_NOTE_FAILURE"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!1,dataFetchFinished:!0,error:t.payload.error}):"INITIATE_NOTE_EDIT_STARTED"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!0,loaded:!1}):"INITIATE_NOTE_EDIT_SUCCESS"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!0,mainActionFinished:!0,notes:{},error:null}):"INITIATE_NOTE_EDIT_FAILURE"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!1,error:t.payload.error}):"INITIATE_NOTE_SHARE_STARTED"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!0,loaded:!1}):"INITIATE_NOTE_SHARE_SUCCESS"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!0,mainActionFinished:!0,error:null,notes:{}}):"INITIATE_NOTE_SHARE_FAILURE"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!1,error:t.payload.error}):"FETCH_SHARED_FOR_USER_STARTED"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!0,loaded:!1}):"FETCH_SHARED_FOR_USER_SUCCESS"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!0,dataFetchFinished:!0,error:null,shared:Object(u.a)(Object(u.a)({},e.shared),{},Object(c.a)({},t.payload.page,t.payload.item.data))}):"FETCH_SHARED_FOR_USER_FAILURE"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!1,dataFetchFinished:!0,error:t.payload.error}):"DELETE_SHARE_STARTED"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!0,loaded:!1}):"DELETE_SHARE_SUCCESS"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!0,error:null,notes:{},deleted:Object(u.a)(Object(u.a)({},e.deleted),{},Object(c.a)({},t.payload.id,!0))}):"DELETE_SHARE_FAILURE"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!1,error:t.payload.error}):"DELETE_NOTE_STARTED"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!0,loaded:!1}):"DELETE_NOTE_SUCCESS"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!0,error:null,deleted:Object(u.a)(Object(u.a)({},e.deleted),{},Object(c.a)({},t.payload.id,!0))}):"DELETE_NOTE_FAILURE"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!1,error:t.payload.error}):"INITIATE_USER_UPDATE_STARTED"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!0,loaded:!1}):"INITIATE_USER_UPDATE_SUCCESS"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!0,mainActionFinished:!0,userFetchFinished:!0,userData:t.payload.payload.data,user:t.payload.payload.data["@id"],notes:{},error:null}):"INITIATE_USER_UPDATE_FAILURE"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!1,error:t.payload.error}):"FETCH_BY_EMAIL_STARTED"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!0,loaded:!1}):"FETCH_BY_EMAIL_SUCCESS"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!0,dataFetchFinished:!0,error:null,search:Object(u.a)(Object(u.a)({},e.search),{},Object(c.a)({},t.payload.email,Object(u.a)(Object(u.a)({},e.search[[t.payload.email]]),{},Object(c.a)({},t.payload.page,t.payload.item.data))))}):"FETCH_BY_EMAIL_FAILURE"===t.type?Object(u.a)(Object(u.a)({},e),{},{loading:!1,loaded:!1,dataFetchFinished:!0,error:t.payload.error}):e},h=a(11),E=a(12),m=a(15),b=a(14),y=a(9),f=a(7),g=a(8),O=a(13),T=a(18),S=a.n(T),_="http://localhost/",j=function(e){return function(t){if(null!==e){var a=e.split("/");S.a.get(_+"api/users/"+a.pop(),{withCredentials:!0}).then((function(e){t(I(e))})).catch((function(e){}))}}},I=function(e){return{type:"GET_USER_DATA_SUCCESS",payload:{payload:e}}},C=function(){return{type:"INITIATE_LOGIN_STARTED",payload:{isLoading:!0}}},v=function(e){return{type:"INITIATE_LOGIN_SUCCESS",payload:{payload:e}}},A=function(e){return{type:"INITIATE_LOGIN_FAILURE",payload:{error:e}}},N=function(){return{type:"INITIATE_LOGOUT_STARTED",payload:{isLoading:!0}}},R=function(e){return{type:"INITIATE_LOGOUT_SUCCESS",payload:{payload:e}}},L=function(e){return{type:"INITIATE_LOGOUT_FAILURE",payload:{error:e}}},F=function(){return{type:"INITIATE_REGISTER_STARTED",payload:{isLoading:!0}}},D=function(e){return{type:"INITIATE_REGISTER_SUCCESS",payload:{payload:e}}},U=function(e){return{type:"INITIATE_REGISTER_FAILURE",payload:{error:e}}},k=function(e){return{type:"SET_ALERT",payload:{msg:e}}},w=function(){return{type:"INITIATE_NOTE_CREATE_STARTED",payload:{isLoading:!0}}},H=function(e){return{type:"INITIATE_NOTE_CREATE_SUCCESS",payload:{payload:e}}},G=function(e){return{type:"INITIATE_NOTE_CREATE_FAILURE",payload:{error:e}}},x=function(){return{type:"FETCH_NOTE_LIST_STARTED",payload:{isLoading:!0}}},M=function(e,t){return{type:"FETCH_NOTE_LIST_SUCCESS",payload:{items:e,page:t}}},P=function(e){return{type:"FETCH_NOTE_LIST_FAILURE",payload:{error:e}}},B=function(){return{type:"FETCH_NOTE_STARTED",payload:{isLoading:!0}}},Y=function(e,t){return{type:"FETCH_NOTE_SUCCESS",payload:{item:e,id:t}}},W=function(e){return{type:"FETCH_NOTE_FAILURE",payload:{error:e}}},z=function(){return{type:"INITIATE_NOTE_EDIT_STARTED",payload:{isLoading:!0}}},J=function(e){return{type:"INITIATE_NOTE_EDIT_SUCCESS",payload:{payload:e}}},q=function(e){return{type:"INITIATE_NOTE_EDIT_FAILURE",payload:{error:e}}},K=function(){return{type:"INITIATE_NOTE_SHARE_STARTED",payload:{isLoading:!0}}},Q=function(e){return{type:"INITIATE_NOTE_SHARE_SUCCESS",payload:{payload:e}}},V=function(e){return{type:"INITIATE_NOTE_SHARE_FAILURE",payload:{error:e}}},X=function(){return{type:"FETCH_SHARED_FOR_USER_STARTED",payload:{isLoading:!0}}},Z=function(e,t){return{type:"FETCH_SHARED_FOR_USER_SUCCESS",payload:{item:e,page:t}}},$=function(e){return{type:"FETCH_SHARED_FOR_USER_FAILURE",payload:{error:e}}},ee=function(){return{type:"DELETE_SHARE_STARTED",payload:{isLoading:!0}}},te=function(e){return{type:"DELETE_SHARE_SUCCESS",payload:{id:e}}},ae=function(e){return{type:"DELETE_SHARE_FAILURE",payload:{error:e}}},ne=function(){return{type:"DELETE_NOTE_STARTED",payload:{isLoading:!0}}},re=function(e){return{type:"DELETE_NOTE_SUCCESS",payload:{id:e}}},oe=function(e){return{type:"DELETE_NOTE_FAILURE",payload:{error:e}}},ie=function(){return{type:"INITIATE_USER_UPDATE_STARTED",payload:{isLoading:!0}}},le=function(e){return{type:"INITIATE_USER_UPDATE_SUCCESS",payload:{payload:e}}},se=function(e){return{type:"INITIATE_USER_UPDATE_FAILURE",payload:{error:e}}},ce=function(){return{type:"FETCH_BY_EMAIL_STARTED",payload:{isLoading:!0}}},ue=function(e,t,a){return{type:"FETCH_BY_EMAIL_SUCCESS",payload:{item:e,email:t,page:a}}},pe=function(e){return{type:"FETCH_BY_EMAIL_FAILURE",payload:{error:e}}},de=a(27),he=a(28),Ee=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={msg:""},n.onDeleteClick=n.onDeleteClick.bind(Object(g.a)(n)),n}return Object(E.a)(a,[{key:"onDeleteClick",value:function(e){e.preventDefault(),this.props.deleteNote(e.target.dataset.id.split("/").pop())}},{key:"getNotes",value:function(){var e=this;if(this.props.notes[this.props.match.params.id]){var t=this.props.notes[this.props.match.params.id]["hydra:member"].map((function(t){return r.a.createElement(de.a.Item,{key:t["@id"]},r.a.createElement("h5",null,t.title," ",r.a.createElement("span",{style:{fontWeight:"normal",fontSize:"small"}},new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"long",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date(t.createdAt)))),r.a.createElement("p",null,t.shortMessage),r.a.createElement(y.b,{to:"/user/notes/edit/"+t["@id"].split("/").pop()},"Edit Note"),r.a.createElement("span",null," | "),r.a.createElement(y.b,{to:"/user/notes/share/"+t["@id"].split("/").pop()},"Share Note"),r.a.createElement("span",null," | "),r.a.createElement("a",{href:"#","data-id":t["@id"].split("/").pop(),onClick:e.onDeleteClick},"Delete Note"))}));return r.a.createElement(de.a,null,t)}return""}},{key:"getPager",value:function(){if(this.props.notes[this.props.match.params.id]){var e=this.props.notes[this.props.match.params.id]["hydra:view"];if(!1===e["@id"].includes("page="))return"";var t=e["hydra:first"]?r.a.createElement(he.a.First,null,r.a.createElement(y.b,{to:"/user/notes/list/"+e["hydra:first"].split("page=").pop()},"First")):"",a=e["hydra:next"]?r.a.createElement(r.a.Fragment,null,r.a.createElement(he.a.Next,null,r.a.createElement(y.b,{to:"/user/notes/list/"+e["hydra:next"].split("page=").pop()},"Next")),r.a.createElement(he.a.Ellipsis,null)):"",n=e["hydra:previous"]?r.a.createElement(r.a.Fragment,null,r.a.createElement(he.a.Ellipsis,null),r.a.createElement(he.a.Prev,null,r.a.createElement(y.b,{to:"/user/notes/list/"+e["hydra:previous"].split("page=").pop()},"Previous"))):"",o=e["hydra:last"]?r.a.createElement(he.a.Last,null,r.a.createElement(y.b,{to:"/user/notes/list/"+e["hydra:last"].split("page=").pop()},"Last")):"",i=e["@id"].split("page=").pop(),l=e["@id"]?r.a.createElement(he.a.Item,{active:!0},r.a.createElement("span",null," ",i," ")):"";return r.a.createElement("div",null,r.a.createElement(he.a,null,t,n,l,a,o))}}},{key:"componentDidMount",value:function(){var e=this;if(this.props.history.listen((function(t){var a=t.pathname.split("/"),n=a.pop(),r=a.pop();if("notes"===a.pop()&&"list"===r&&!1===e.props.dataFetchFinished&&!1===e.props.loading){var o=null===e.props.user?localStorage.getItem("user"):e.props.user;e.props.fetchNotesList(o,n)}})),!1===this.props.dataFetchFinished&&!1===this.props.loading){var t=null===this.props.user?localStorage.getItem("user"):this.props.user;this.props.fetchNotesList(t,this.props.match.params.id)}}},{key:"componentDidUpdate",value:function(e,t,a){if(Object.keys(this.props.deleted).length>0){var n=null===this.props.user?localStorage.getItem("user"):this.props.user;this.props.fetchNotesList(n,this.props.match.params.id),"Note deleted succesfuly"!==this.state.msg&&this.setState({msg:"Note deleted succesfuly"})}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Your notes"),r.a.createElement("p",null,this.state.msg),this.getNotes(),this.getPager())}}]),a}(r.a.Component),me=Object(O.b)((function(e){return Object(u.a)({},e)}),(function(e){return{fetchNotesList:function(t,a){return e(function(e,t){return function(a){a(x()),S.a.get(_+"api/notes?owner="+e+"&page="+t,{withCredentials:!0}).then((function(e){a(M(e,t))})).catch((function(e){a(P(e))}))}}(t,a))},deleteNote:function(t){return e(function(e){return function(t){t(ne()),S.a.delete(_+"api/notes/"+e,{withCredentials:!0}).then((function(a){t(re(e))})).catch((function(e){t(oe(e))}))}}(t))},setAlert:function(t){return e(k(t))}}}))(Ee),be=Object(f.f)(me),ye=a(6),fe=a(19),ge=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e))._isMounted=!1,n.state={title:"",message:"",noteShares:null,error:null,refreshing:!1},n.handleChange=n.handleChange.bind(Object(g.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n.handleDelete=n.handleDelete.bind(Object(g.a)(n)),n}return Object(E.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(u.a)(Object(u.a)({},this.state),{},Object(c.a)({},e.target.id,e.target.value)))}},{key:"handleSubmit",value:function(e){e.preventDefault(),"Create"===this.getCreateOrEdit()?this.props.initiateNoteCreate(this.props.user.split("/").pop(),this.state.title,this.state.message):this.props.initiateNoteEdit(this.props.user.split("/").pop(),this.getNoteId(),this.state.title,this.state.message)}},{key:"handleDelete",value:function(e){this.props.deleteShare(e.target.dataset.id.split("/").pop())}},{key:"getCreateOrEdit",value:function(){return this.props.match.params.id?"Edit":"Create"}},{key:"getNoteId",value:function(){return this.props.match.params.id?this.props.match.params.id:null}},{key:"componentDidUpdate",value:function(e,t,a){if(!0===this.props.loaded)if(!0===this.props.mainActionFinished){var n="Create"===this.getCreateOrEdit()?"Succesfuly created Note":"Succesfuly updated Note";this.props.setAlert(n),this.props.history.push("/user/")}else if(!0===this.props.dataFetchFinished){var r=this.props.note[this.getNoteId()];r&&this.state.refreshing&&this.setState(Object(u.a)(Object(u.a)({},this.state),{},{refreshing:!1,title:r.title,message:r.message,noteShares:r.noteShares}))}}},{key:"componentDidMount",value:function(){var e=this;if(this._isMounted=!0,"Edit"===this.getCreateOrEdit()){var t=this.getNoteId();"create"!==t&&(this.setState(Object(u.a)(Object(u.a)({},this.setState),{},{refreshing:!0})),this.props.fetchNote(t))}this.props.history.listen((function(t){"create"===t.pathname.split("/").pop()&&e._isMounted&&e.setState({title:"",message:"",error:null,refreshing:!1})}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"getForm",value:function(){return this.state.refreshing?r.a.createElement("div",null,"Refreshing Note data for editing"):r.a.createElement(ye.a,null,r.a.createElement(ye.a.Group,null,r.a.createElement(ye.a.Label,null,"Title"),r.a.createElement(ye.a.Control,{onChange:this.handleChange,value:this.state.title,type:"text",placeholder:"Enter title",name:"title",id:"title"}),r.a.createElement(ye.a.Text,{className:"text-muted"},"The title for your note")),r.a.createElement(ye.a.Group,null,r.a.createElement(ye.a.Label,null,"Message"),r.a.createElement(ye.a.Control,{onChange:this.handleChange,value:this.state.message,type:"text",placeholder:"Note contents",name:"message",id:"message"}),r.a.createElement(ye.a.Text,{className:"text-muted"},"Enter your note contents")),r.a.createElement(fe.a,{variant:"primary",onClick:this.handleSubmit,type:"submit"},this.getCreateOrEdit()+" Note"),"")}},{key:"getNoteShares",value:function(){var e=this;if(null===this.state.noteShares)return"";var t=this.state.noteShares.map((function(t){return r.a.createElement(de.a.Item,{key:t["@id"]},t.user.email,r.a.createElement("span",null," "),e.props.deleted.hasOwnProperty(t["@id"].split("/").pop())?" - Sharing removed ":r.a.createElement(fe.a,{variant:"outline-danger",onClick:e.handleDelete,className:"share-delete","data-id":t["@id"]},"Remove sharing"))}));return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h2",null,"Shared with:"),r.a.createElement(de.a,null,t),r.a.createElement("hr",null))}},{key:"render",value:function(){var e="Edit"===this.getCreateOrEdit()?r.a.createElement(y.b,{to:"/user/notes/share/"+this.props.match.params.id},"Share this note"):"";return r.a.createElement("div",null,r.a.createElement("h1",null,this.getCreateOrEdit()," Note"),this.getForm(),this.getNoteShares(),e)}}]),a}(r.a.Component),Oe=Object(O.b)((function(e){return Object(u.a)({},e)}),(function(e){return{initiateNoteCreate:function(t,a,n){return e(function(e,t,a){return function(n){n(w()),S.a.post(_+"api/notes",{title:t,message:a,isPublic:!0,owner:"/api/users/"+e},{withCredentials:!0}).then((function(e){n(H(e))})).catch((function(e){n(G(e))}))}}(t,a,n))},initiateNoteEdit:function(t,a,n,r){return e(function(e,t,a,n){return function(r){r(z()),S.a.put(_+"api/notes/"+t,{title:a,message:n,isPublic:!0,owner:"/api/users/"+e},{withCredentials:!0}).then((function(e){r(J(e))})).catch((function(e){r(q(e))}))}}(t,a,n,r))},deleteShare:function(t){return e(function(e){return function(t){t(ee()),S.a.delete(_+"api/share_note_to_users/"+e,{withCredentials:!0}).then((function(a){t(te(e))})).catch((function(e){t(ae(e))}))}}(t))},fetchNote:function(t){return e(function(e){return function(t){t(B()),S.a.get(_+"api/notes/"+e,{withCredentials:!0}).then((function(a){t(Y(a,e))})).catch((function(e){t(W(e))}))}}(t))},setAlert:function(t){return e(k(t))}}}))(ge),Te=Object(f.f)(Oe),Se=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={user:"",userid:null},n.handleChange=n.handleChange.bind(Object(g.a)(n)),n.handleSearchSubmit=n.handleSearchSubmit.bind(Object(g.a)(n)),n.handleShareSubmit=n.handleShareSubmit.bind(Object(g.a)(n)),n.getResults=n.getResults.bind(Object(g.a)(n)),n}return Object(E.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(u.a)(Object(u.a)({},this.state),{},Object(c.a)({},e.target.id,e.target.value)))}},{key:"handleSearchSubmit",value:function(e){return e.preventDefault(),this.props.fetchByEmail(this.state.user,1),!1}},{key:"handleShareSubmit",value:function(e){return e.preventDefault(),this.props.initiateNoteShare("/api/notes/"+this.props.match.params.id,this.state.userid),!1}},{key:"componentDidUpdate",value:function(e,t,a){!0===this.props.loaded&&!0===this.props.mainActionFinished&&(this.props.setAlert("Note shared succesfuly"),this.props.history.push("/user/"))}},{key:"getForm",value:function(){var e="";return null!==this.props.error&&(e=this.props.error.response&&this.props.error.response.data&&this.props.error.response.data.error?r.a.createElement("p",null,this.props.error.response.data.error):this.props.error.response&&this.props.error.response.data?r.a.createElement("p",null,this.props.error.response.data["hydra:description"].replace(/^note\:\s/,"")):r.a.createElement("p",null,this.props.error.message)),r.a.createElement("div",null,r.a.createElement(ye.a,{onSubmit:this.handleSearchSubmit},r.a.createElement(ye.a.Group,null,r.a.createElement(ye.a.Label,null,"Search by user email"),r.a.createElement(ye.a.Control,{onChange:this.handleChange,value:this.state.title,type:"text",placeholder:"Enter user email",name:"user",id:"user"}),r.a.createElement(ye.a.Text,{className:"text-muted"},"Enter at least the portion of email you want to share a note with")),r.a.createElement(fe.a,{variant:"primary",type:"submit"},"Search")),r.a.createElement("p",null,e))}},{key:"getResults",value:function(){if(this.props.search[this.state.user]){var e=this.props.search[this.state.user][1]["hydra:member"].filter((function(e){return!e.isMe}));return e=e.map((function(e){return r.a.createElement("option",{value:e["@id"],key:e["@id"]},e.email)})),r.a.createElement(ye.a,{onSubmit:this.handleShareSubmit},r.a.createElement(ye.a.Group,null,r.a.createElement(ye.a.Label,null,"Select a user"),r.a.createElement(ye.a.Control,{as:"select",custom:!0,id:"userid",name:"userid",onChange:this.handleChange},e),r.a.createElement(ye.a.Text,{className:"text-muted"},"Select specific user by email you want to share a note with")),r.a.createElement(fe.a,{variant:"primary",type:"submit"},"Share"))}return""}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Share a note"),this.getForm(),this.getResults())}}]),a}(r.a.Component),_e=Object(O.b)((function(e){return Object(u.a)({},e)}),(function(e){return{initiateNoteShare:function(t,a){return e(function(e,t){return function(a){a(K()),S.a.post(_+"api/share_note_to_users",{note:e,user:t},{withCredentials:!0}).then((function(e){a(Q(e))})).catch((function(e){a(V(e))}))}}(t,a))},setAlert:function(t){return e(k(t))},fetchByEmail:function(t,a){return e(function(e,t){return function(a){a(ce()),S.a.get(_+"api/users?properties%5B%5D=email&properties%5B%5D=id&email="+encodeURIComponent(e)+"&page="+t,{withCredentials:!0}).then((function(n){a(ue(n,e,t))})).catch((function(e){a(pe(e))}))}}(t,a))}}}))(Se),je=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.user;null===e&&(e=localStorage.getItem("user")),this.props.fetchSharedForUser(e,1)}},{key:"getNotes",value:function(){if(this.props.shared[this.props.match.params.id]){var e=this.props.shared[this.props.match.params.id]["hydra:member"].map((function(e){return r.a.createElement(de.a.Item,{key:e.note["@id"]},r.a.createElement("h5",null,e.noteOwner,r.a.createElement("span",null," "),r.a.createElement("span",{style:{fontWeight:"normal",fontSize:"small"}},new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"long",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date(e.note.createdAt)))),r.a.createElement("p",null,r.a.createElement("b",null,e.note.title)),r.a.createElement("p",null,e.note.message))}));return r.a.createElement(de.a,null,e)}return""}},{key:"getPager",value:function(){return""}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes shared with me"),this.getNotes(),this.getPager())}}]),a}(r.a.Component),Ie=Object(O.b)((function(e){return Object(u.a)({},e)}),(function(e){return{fetchSharedForUser:function(t,a){return e(function(e,t){return function(a){a(X()),S.a.get(_+"api/share_note_to_users?user="+e+"&page="+t,{withCredentials:!0}).then((function(e){a(Z(e,t))})).catch((function(e){a($(e))}))}}(t,a))},setAlert:function(t){return e(k(t))}}}))(je),Ce=Object(f.f)(Ie),ve=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).dataLoaded=!1,n.state={phone:"",msg:""},n.handleChange=n.handleChange.bind(Object(g.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(E.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(u.a)(Object(u.a)({},this.state),{},Object(c.a)({},e.target.id,e.target.value)))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=null===this.props.user?localStorage.getItem("user"):this.props.user;this.props.initiateUserUpdate(t.split("/").pop(),this.state.phone)}},{key:"componentDidMount",value:function(){this.props.userFetchFinished&&!this.dataLoaded&&(this.setState({phone:this.props.userData.phoneNumber}),this.dataLoaded=!0)}},{key:"componentDidUpdate",value:function(e,t,a){this.props.userFetchFinished&&!this.dataLoaded&&(this.setState({phone:this.props.userData.phoneNumber}),this.dataLoaded=!0),this.props.mainActionFinished&&"User profile updated succesfuly"!==this.state.msg&&this.setState({msg:"User profile updated succesfuly"})}},{key:"render",value:function(){var e="";this.props.error&&(e=this.props.error.response&&this.props.error.response.data&&this.props.error.response.data.error?r.a.createElement("p",null,this.props.error.response.data.error):r.a.createElement("p",null,this.props.error.message));var t=this.state.phone?this.state.phone:"";return r.a.createElement("div",null,r.a.createElement("h1",null,"Profile"),r.a.createElement("p",null,this.state.msg),r.a.createElement(ye.a,null,r.a.createElement(ye.a.Group,null,r.a.createElement(ye.a.Label,null,"Phone"),r.a.createElement(ye.a.Control,{onChange:this.handleChange,value:t,type:"text",placeholder:"Enter your phone",name:"phone",id:"phone"}),r.a.createElement(ye.a.Text,{className:"text-muted"},"This one is only for admin contact and is only visible to owner(you) and admin")),r.a.createElement(fe.a,{variant:"primary",onClick:this.handleSubmit,type:"submit"},"Update"),e))}}]),a}(r.a.Component),Ae=Object(O.b)((function(e){return Object(u.a)({},e)}),(function(e){return{initiateUserUpdate:function(t,a){return e(function(e,t){return function(a){a(ie()),S.a.put(_+"api/users/"+e,{phoneNumber:t},{withCredentials:!0}).then((function(e){a(le(e))})).catch((function(e){a(se(e))}))}}(t,a))}}}))(ve),Ne=a(17),Re=a(20),Le=a(34),Fe=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;Object(h.a)(this,a),(n=t.call(this,e)).handleLogoutClick=n.handleLogoutClick.bind(Object(g.a)(n));var r=localStorage.getItem("user");return n.state={user:r},n}return Object(E.a)(a,[{key:"handleLogoutClick",value:function(e){this.props.initiateLogout()}},{key:"componentDidMount",value:function(){null!==this.state.user&&null===this.props.user&&this.props.getUserData(this.state.user)}},{key:"componentDidUpdate",value:function(e,t,a){null===this.props.user&&!0===this.props.loaded&&this.props.history.push("/")}},{key:"render",value:function(){null===this.props.userData&&this.props.getUserData(this.props.user);var e=this.props.userData?this.props.userData.email:"",t=this.props.alert?r.a.createElement(Le.a,{variant:"info"},this.props.alert):"";return r.a.createElement("div",null,t,r.a.createElement(Ne.a,{bg:"dark",variant:"dark",expand:"lg",sticky:"top"},r.a.createElement(Ne.a.Brand,null,"Notes sharing"),r.a.createElement(Ne.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(Ne.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(Re.a,{className:"mr-auto"},r.a.createElement(Re.a.Link,{as:y.b,to:"/user/settings"},"Settings"),r.a.createElement(Re.a.Link,{as:y.b,to:"/user/notes/list/1"},"Notes"),r.a.createElement(Re.a.Link,{as:y.b,to:"/user/notes/create"},"Create Note"),r.a.createElement(Re.a.Link,{as:y.b,to:"/user/notes/list/shared-with-me/1"},"Notes shared with me"))),r.a.createElement(Ne.a.Brand,{className:"navbar-right"},r.a.createElement("span",{style:{color:"grey"}},"User email:")," ",e),r.a.createElement(fe.a,{onClick:this.handleLogoutClick,variant:"dark"},"Log out")),r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/user/notes/list/:id(\\d+)",component:be}),r.a.createElement(f.a,{path:"/user/notes/create",component:Te}),r.a.createElement(f.a,{path:"/user/notes/edit/:id(\\d+)",component:Te}),r.a.createElement(f.a,{path:"/user/notes/share/:id(\\d+)",component:_e}),r.a.createElement(f.a,{path:"/user/notes/list/shared-with-me/:id(\\d+)",component:Ce}),r.a.createElement(f.a,{path:"/user/settings",component:Ae})))}}]),a}(r.a.Component),De=Object(O.b)((function(e){return Object(u.a)({},e)}),(function(e){return{initiateLogout:function(){return e((function(e){e(N()),S.a.post(_+"logout").then((function(t){localStorage.removeItem("user"),e(R(t))})).catch((function(t){e(L(t.message))}))}))},getUserData:function(t){return e(j(t))}}}))(Fe),Ue=Object(f.f)(De),ke=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;Object(h.a)(this,a),n=t.call(this,e);var r=localStorage.getItem("user");return n.state={email:"",password:"",user:r,error:null},n.handleChange=n.handleChange.bind(Object(g.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(E.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(u.a)(Object(u.a)({},this.state),{},Object(c.a)({},e.target.id,e.target.value)))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.initiateLogin(this.state.email,this.state.password)}},{key:"componentDidMount",value:function(){null!==this.state.user&&this.props.getUserData(this.state.user)}},{key:"componentDidUpdate",value:function(e,t,a){null!==this.props.userData&&this.props.history.push("/user/notes/list/1")}},{key:"render",value:function(){var e="";null!==this.props.error&&(e=this.props.error.response&&this.props.error.response.data&&this.props.error.response.data.error?r.a.createElement("div",{className:"alert alert-danger alert-dismissible fade show",role:"alert"},r.a.createElement("strong",null,"You got an error!"),r.a.createElement("p",null,this.props.error.response.data.error),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))):r.a.createElement("p",null,this.props.error.message));var t=this.props.alert?r.a.createElement(Le.a,{variant:"info"},this.props.alert):"";return r.a.createElement("div",null,t,e,r.a.createElement(Ne.a,{bg:"dark",variant:"dark",expand:"lg",sticky:"top"},r.a.createElement(Ne.a.Brand,null,"Notes sharing"),r.a.createElement(Ne.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(Ne.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(Re.a,{className:"mr-auto"},r.a.createElement(Re.a.Link,{as:y.b,disabled:!0,to:"/"},"Login"),r.a.createElement(Re.a.Link,{as:y.b,to:"/register"},"Register")))),r.a.createElement("h1",null,"Login"),r.a.createElement(ye.a,null,r.a.createElement(ye.a.Group,null,r.a.createElement(ye.a.Label,null,"Email"),r.a.createElement(ye.a.Control,{onChange:this.handleChange,value:this.state.email,type:"email",placeholder:"Enter your email",name:"email",id:"email"}),r.a.createElement(ye.a.Text,{className:"text-muted"},"Your registered email address")),r.a.createElement(ye.a.Group,null,r.a.createElement(ye.a.Label,null,"Password"),r.a.createElement(ye.a.Control,{onChange:this.handleChange,value:this.state.password,type:"password",placeholder:"Enter your password",name:"password",id:"password"}),r.a.createElement(ye.a.Text,{className:"text-muted"},"Your registration password")),r.a.createElement(fe.a,{variant:"primary",onClick:this.handleSubmit,type:"submit"},"Login")))}}]),a}(r.a.Component),we=Object(O.b)((function(e){return Object(u.a)({},e)}),(function(e){return{initiateLogin:function(t,a){return e(function(e,t){return function(a){a(C()),S.a.post(_+"login",{email:e,password:t}).then((function(e){e.headers.location&&localStorage.setItem("user",e.headers.location),a(j(e.headers.location)),a(v(e))})).catch((function(e){a(A(e))}))}}(t,a))},getUserData:function(t){return e(j(t))}}}))(ke),He=Object(f.f)(we),Ge=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",error:null},n.handleChange=n.handleChange.bind(Object(g.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(E.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(u.a)(Object(u.a)({},this.state),{},Object(c.a)({},e.target.id,e.target.value)))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.initiateRegister(this.state.email,this.state.password)}},{key:"componentDidUpdate",value:function(e,t,a){null!==this.props.userData&&this.props.history.push("/user/notes/list/1"),!0===this.props.loaded&&(this.props.setAlert("Succesfuly registered"),this.props.history.push("/"))}},{key:"render",value:function(){var e="";return this.props.error&&(e=this.props.error.response&&this.props.error.response.data&&this.props.error.response.data["hydra:description"]?r.a.createElement(Le.a,{variant:"danger"},this.props.error.response.data["hydra:description"]):r.a.createElement(Le.a,{variant:"danger"},this.props.error.message)),r.a.createElement("div",null,r.a.createElement(Ne.a,{bg:"dark",variant:"dark",expand:"lg",sticky:"top"},r.a.createElement(Ne.a.Brand,null,"Notes sharing"),r.a.createElement(Ne.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(Ne.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(Re.a,{className:"mr-auto"},r.a.createElement(Re.a.Link,{as:y.b,to:"/"},"Login"),r.a.createElement(Re.a.Link,{as:y.b,disabled:!0,to:"/register"},"Register")))),r.a.createElement("h1",null,"Register"),r.a.createElement(ye.a,null,e,r.a.createElement(ye.a.Group,null,r.a.createElement(ye.a.Label,null,"Email"),r.a.createElement(ye.a.Control,{onChange:this.handleChange,value:this.state.email,type:"email",placeholder:"Enter your email",name:"email",id:"email"}),r.a.createElement(ye.a.Text,{className:"text-muted"},"Please enter a valid email address")),r.a.createElement(ye.a.Group,null,r.a.createElement(ye.a.Label,null,"Password"),r.a.createElement(ye.a.Control,{onChange:this.handleChange,value:this.state.password,type:"password",placeholder:"Enter your password",name:"password",id:"password"}),r.a.createElement(ye.a.Text,{className:"text-muted"},"Any non empty password will be ok")),r.a.createElement(fe.a,{variant:"primary",onClick:this.handleSubmit,type:"submit"},"Register")))}}]),a}(r.a.Component),xe=Object(O.b)((function(e){return Object(u.a)({},e)}),(function(e){return{initiateRegister:function(t,a){return e(function(e,t){return function(a){a(F()),S.a.post(_+"api/users",{email:e,password:t},{withCredentials:!0}).then((function(e){a(D(e))})).catch((function(e){a(U(e))}))}}(t,a))},setAlert:function(t){return e(k(t))}}}))(Ge),Me=Object(f.f)(xe),Pe=a(66),Be=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.history.listen((function(t){e.props.locationChanged()}))}},{key:"render",value:function(){var e=this.props.loading?r.a.createElement(Pe.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):"";return r.a.createElement("div",null,e,r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/"},r.a.createElement(He,null)),r.a.createElement(f.a,{exact:!0,path:"/register"},r.a.createElement(Me,null)),r.a.createElement(f.a,{path:"/user/"},r.a.createElement(Ue,null))))}}]),a}(r.a.Component),Ye=Object(O.b)((function(e){return Object(u.a)({},e)}),(function(e){return{locationChanged:function(){return e({type:"LOCATION_CHANGED",payload:{}})}}}))(Be),We=Object(f.f)(Ye),ze=a(67),Je=a(68),qe=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement(ze.a,{className:"p-3"},r.a.createElement(Je.a,null,r.a.createElement(y.a,null,r.a.createElement(We,null))))}}]),a}(r.a.Component),Ke=Object(l.c)(d,Object(l.a)(s.a));i.a.render(r.a.createElement(O.a,{store:Ke},r.a.createElement(qe,null)),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.6f80b7d1.chunk.js.map