"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[32],{68470:function(t,n,e){var r=e(1413),a=e(84236).Z.div((function(t){var n=t.justifyContent,e=t.alignItems,a=t.flexDirection,o=t.gap,i=t.padding,s=t.margin,c={display:"flex",justifyContent:n,alignItems:e,gap:"number"===typeof o?"".concat(o,"px"):o};return a&&(c.flexDirection=a),i&&(c.padding=i),s&&(c.margin=s),(0,r.Z)({},c)}));n.Z=a},66032:function(t,n,e){e.r(n),e.d(n,{AppLayout:function(){return vn},default:function(){return gn}});var r,a,o,i,s=e(30168),c=e(72791),l=e(60364),u=e(57689),d=e(1413),h=e(25671),p=e(6443),m=e(13889),f=e(11087),v=e(43110),g=e(83388),b=e(33168),x=e(80184),Z=function(t){var n=t.id,e=t.fallback,r=(0,(0,b.$)().t)(n,e);return(0,x.jsx)(x.Fragment,{children:r})},y=e(15671),T=e(43144),E=e(60136),k=e(29388),H=function(t){(0,E.Z)(e,t);var n=(0,k.Z)(e);function e(){return(0,y.Z)(this,e),n.apply(this,arguments)}return(0,T.Z)(e,[{key:"render",value:function(){var t=this.props,n=t.type,e=t.className;return(0,x.jsx)(x.Fragment,{children:c.createElement(n,{className:e})})}}]),e}(c.Component),N=H,C=e(48134),I=e(86533),j=e(72643),_=e(29529),w=e(64239),A=e(77226),O=e(57230),R=e(18301),S=e(99214),D=e(92414),G=e(7123),L=e(13876),B=e(59305),P=[{key:"dashboards",path:"".concat(B.sH,"/dashboards"),title:"sidenav.dashboard",icon:C.Z,breadcrumb:!1,isGroupTitle:!0,submenu:[{key:"dashboards-default",path:"".concat(B.sH,"/dashboards/default"),title:"sidenav.dashboard.default",icon:C.Z,breadcrumb:!1,submenu:[]},{key:"dashboards-catalog",path:"".concat(B.sH,"/dashboards/catalog"),title:"sidenav.dashboard.catalog",icon:I.Z,breadcrumb:!1,submenu:[{key:"dashboards-catalog-goods",path:"".concat(B.sH,"/dashboards/catalog/goods"),title:"sidenav.dashboard.catalog.goods",icon:!1,breadcrumb:!1,submenu:[]},{key:"dashboards-catalog-categories",path:"".concat(B.sH,"/dashboards/catalog/categories"),title:"sidenav.dashboard.catalog.categories",icon:!1,breadcrumb:!1,submenu:[]},{key:"dashboards-catalog-collections",path:"".concat(B.sH,"/dashboards/catalog/collections"),title:"sidenav.dashboard.catalog.collections",icon:!1,breadcrumb:!1,submenu:[]},{key:"dashboards-catalog-combo",path:"".concat(B.sH,"/dashboards/catalog/combo"),title:"sidenav.dashboard.catalog.combo",icon:!1,breadcrumb:!1,submenu:[]}]},{key:"dashboards-orders",path:"".concat(B.sH,"/dashboards/orders"),title:"sidenav.dashboard.orders",icon:j.Z,breadcrumb:!1,submenu:[]},{key:"dashboards-clients",path:"".concat(B.sH,"/dashboards/clients"),title:"sidenav.dashboard.clients",icon:_.Z,breadcrumb:!1,submenu:[{key:"dashboards-clients-list",path:"".concat(B.sH,"/dashboards/clients/list"),title:"sidenav.dashboard.clients.list",icon:!1,breadcrumb:!1,submenu:[]},{key:"dashboards-clients-group",path:"".concat(B.sH,"/dashboards/clients/group"),title:"sidenav.dashboard.clients.group",icon:!1,breadcrumb:!1,submenu:[]}]},{key:"dashboards-banners",path:"".concat(B.sH,"/dashboards/banners"),title:"sidenav.dashboard.banners",icon:w.Z,breadcrumb:!1,submenu:[]},{key:"dashboards-promocodes",path:"".concat(B.sH,"/dashboards/promocodes"),title:"sidenav.dashboard.promocodes",icon:A.Z,breadcrumb:!1,submenu:[]},{key:"dashboards-offlinePoints",path:"".concat(B.sH,"/dashboards/offline-points"),title:"sidenav.dashboard.offlinePoints",icon:O.Z,breadcrumb:!1,submenu:[{key:"dashboards-offlinePoints-addresses",path:"".concat(B.sH,"/dashboards/offline-points/addresses"),title:"sidenav.dashboard.offlinePoints.addresses",icon:!1,breadcrumb:!1,submenu:[]},{key:"dashboards-offlinePoints-geofences",path:"".concat(B.sH,"/dashboards/offline-points/geofences"),title:"sidenav.dashboard.offlinePoints.geofences",icon:!1,breadcrumb:!1,submenu:[]}]},{key:"dashboards-employees",path:"".concat(B.sH,"/dashboards/employees"),title:"sidenav.dashboard.employees",icon:R.Z,breadcrumb:!1,submenu:[]},{key:"dashboards-distribution",path:"".concat(B.sH,"/dashboards/distribution"),title:"sidenav.dashboard.distribution",icon:S.Z,breadcrumb:!1,submenu:[]}]}],U=[{key:"system",path:"".concat(B.sH,"/system"),title:"sidenav.system",icon:C.Z,breadcrumb:!1,isGroupTitle:!0,submenu:[{key:"system-settings",path:"".concat(B.sH,"/system/settings"),title:"sidenav.system.settings",icon:D.Z,breadcrumb:!1,submenu:[]},{key:"system-mobileApp",path:"".concat(B.sH,"/system/mobile-app"),title:"sidenav.system.mobileApp",icon:G.Z,breadcrumb:!1,submenu:[]},{key:"system-logs",path:"".concat(B.sH,"/system/logs"),title:"sidenav.system.logs",icon:L.Z,breadcrumb:!1,submenu:[]}]}],F=[].concat(P,U),X=function(){function t(){(0,y.Z)(this,t)}return(0,T.Z)(t,null,[{key:"getNameInitial",value:function(t){var n=t.match(/\b\w/g)||[];return((n.shift()||"")+(n.pop()||"")).toUpperCase()}},{key:"getRouteInfo",value:function(t,n){if(t.path===n)return t;var e;for(var r in t)if(t.hasOwnProperty(r)&&"object"===typeof t[r]&&(e=this.getRouteInfo(t[r],n)))return e;return e}},{key:"getColorContrast",value:function(t){if(!t)return"dark";var n=parseInt(a(t).substring(0,2),16),e=function(t){return parseInt(a(t).substring(2,4),16)}(t),r=function(t){return parseInt(a(t).substring(4,6),16)}(t);function a(t){return"#"===t.charAt(0)?t.substring(1,7):t}return(299*n+587*e+114*r)/1e3>130?"dark":"light"}},{key:"shadeColor",value:function(t,n){var e=parseInt(t.substring(1,3),16),r=parseInt(t.substring(3,5),16),a=parseInt(t.substring(5,7),16);e=parseInt(e*(100+n)/100),r=(r=parseInt(r*(100+n)/100))<255?r:255,a=(a=parseInt(a*(100+n)/100))<255?a:255;var o=1===(e=e<255?e:255).toString(16).length?"0".concat(e.toString(16)):e.toString(16),i=1===r.toString(16).length?"0".concat(r.toString(16)):r.toString(16),s=1===a.toString(16).length?"0".concat(a.toString(16)):a.toString(16);return"#".concat(o).concat(i).concat(s)}},{key:"rgbaToHex",value:function(t){var n=function(t){return t.replace(/^\s+|\s+$/gm,"")},e=t.substring(t.indexOf("(")).split(","),r=parseInt(n(e[0].substring(1)),10),a=parseInt(n(e[1]),10),o=parseInt(n(e[2]),10),i=parseFloat(n(e[3].substring(0,e[3].length-1))).toFixed(2),s=[r.toString(16),a.toString(16),o.toString(16),Math.round(255*i).toString(16).substring(0,2)];return s.forEach((function(t,n){1===t.length&&(s[n]="0"+t)})),"#".concat(s.join(""))}},{key:"getSignNum",value:function(t,n,e){return t>0?n:t<0?e:null}},{key:"antdTableSorter",value:function(t,n,e){return"number"===typeof t[e]&&"number"===typeof n[e]?t[e]-n[e]:"string"===typeof t[e]&&"string"===typeof n[e]?(t=t[e].toLowerCase())>(n=n[e].toLowerCase())?-1:n>t?1:0:void 0}},{key:"filterArray",value:function(t,n,e){var r=t;return t&&(r=t.filter((function(t){return t[n]===e}))),r}},{key:"deleteArrayRow",value:function(t,n,e){var r=t;return t&&(r=t.filter((function(t){return t[n]!==e}))),r}},{key:"wildCardSearch",value:function(t,n){return t=t.filter((function(t){return function(t){for(var e in t)if(null!=t[e]&&-1!==t[e].toString().toUpperCase().indexOf(n.toString().toUpperCase()))return!0}(t)}))}},{key:"getBreakPoint",value:function(t){var n=[];for(var e in t){if(t.hasOwnProperty(e))t[e]&&n.push(e)}return n}}]),t}(),M=X,V=e(22868),W=v.ZP.useBreakpoint,Y=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n?(0,x.jsx)(Z,{id:t}):t.toString()},z=function(t){var n=[],e="";if(t)for(var r=t.split("-"),a=0;a<r.length;a++){var o=r[a];e=0===a?o:"".concat(e,"-").concat(o),n.push(e)}return n},K=function(t){var n=t.title,e=t.icon,r=t.path,a=(0,l.I0)(),o=!M.getBreakPoint(W()).includes("lg");return(0,x.jsxs)(x.Fragment,{children:[e&&(0,x.jsx)(N,{type:e}),(0,x.jsx)("span",{children:Y(n)}),r&&(0,x.jsx)(f.rU,{onClick:function(){o&&a((0,V.Ri)(!1))},to:r})]})},$=function t(n){return n.map((function(n){return(0,d.Z)((0,d.Z)({key:n.key,label:(0,x.jsx)(K,(0,d.Z)({title:n.title},n.isGroupTitle?{}:{path:n.path,icon:n.icon}))},n.isGroupTitle?{type:"group"}:{}),n.submenu.length>0?{children:t(n.submenu)}:{})}))},q=function t(n){return n.map((function(n){return(0,d.Z)({key:n.key,label:(0,x.jsx)(K,(0,d.Z)({title:n.title,icon:n.icon},n.isGroupTitle?{}:{path:n.path}))},n.submenu.length>0?{children:t(n.submenu)}:{})}))},J=function(t){var n=t.routeInfo,e=t.hideGroupTitle,r=(0,l.v9)((function(t){return t.theme.sideNavTheme})),a=(0,c.useMemo)((function(){return $(F)}),[]);return(0,x.jsx)(g.Z,{mode:"inline",theme:r===p.Vs?"light":"dark",style:{height:"100%",borderInlineEnd:0},defaultSelectedKeys:[null===n||void 0===n?void 0:n.key],defaultOpenKeys:z(null===n||void 0===n?void 0:n.key),className:e?"hide-group-title":"",items:a})},Q=function(){var t=(0,l.v9)((function(t){return t.theme.topNavColor})),n=(0,c.useMemo)((function(){return q(F)}),[]);return(0,x.jsx)(g.Z,{mode:"horizontal",style:{backgroundColor:t},items:n})},tt=function(t){return t.type===p.aJ?(0,x.jsx)(J,(0,d.Z)({},t)):(0,x.jsx)(Q,(0,d.Z)({},t))},nt=e(52554),et=e(64923),rt=h.Z.Sider,at=(0,l.$j)((function(t){var n=t.theme;return{navCollapsed:n.navCollapsed,sideNavTheme:n.sideNavTheme,currentTheme:n.currentTheme}}))((function(t){var n=t.navCollapsed,e=t.sideNavTheme,a=t.routeInfo,o=t.hideGroupTitle,i=t.currentTheme,c={sideNavTheme:e,routeInfo:a,hideGroupTitle:o};return(0,et.tZ)(rt,{css:(0,nt.iv)(r||(r=(0,s.Z)(["\n        height: calc(100vh - ","px); \n        position: fixed !important;\n        top: ","px;\n        box-shadow: 0 1px 4px -1px rgba(0,0,0,.15);\n        z-index: 999;\n        direction: ltr;\n        ","\n        ","\n        ","\n      "])),p.hv.HEADER_HEIGHT,p.hv.HEADER_HEIGHT,"light"===i&&e!==p.LN?"background-color: ".concat(p.wx.WHITE," !important;"):"background-color: ".concat(p.hv.SIDE_NAV_DARK_BG_COLOR," !important;"),"dark"===i&&e!==p.LN?"background-color: ".concat(p.VH.BG_COLOR," !important"):"","dark"===i&&e===p.LN?"background-color: ".concat(p.hv.SIDE_NAV_DARK_BG_COLOR," !important"):""),className:"side-nav ".concat(e===p.LN?"side-nav-dark":""),width:p.Ng,collapsed:n,children:(0,et.tZ)(m.$B,{autoHide:!0,children:(0,et.tZ)(tt,(0,d.Z)({type:p.aJ},c))})})})),ot=(0,l.$j)((function(t){return{topNavColor:t.theme.topNavColor}}))((function(t){var n=t.topNavColor,e={topNavColor:n};return(0,x.jsx)("div",{className:"top-nav ".concat(M.getColorContrast(n)),style:{backgroundColor:n},children:(0,x.jsx)("div",{className:"top-nav-wrapper",children:(0,x.jsx)(tt,(0,d.Z)({type:p.XA},e))})})})),it=e(38937),st=e(17828),ct=e(84236),lt=ct.Z.div((function(){return{height:p.hv.HEADER_HEIGHT,display:"flex",alignItems:"center",padding:"0 1rem",backgroundColor:"transparent",transition:"all .2s ease"}})),ut=v.ZP.useBreakpoint,dt=function(t){var n=t.mobileLogo,e=t.logoType,r=!M.getBreakPoint(ut()).includes("lg"),a=(0,l.v9)((function(t){return t.theme.navCollapsed})),o=(0,l.v9)((function(t){return t.theme.navType}));return(0,x.jsx)(lt,{className:r&&!n?"d-none":"logo",style:{width:"".concat(function(){var t=o===p.XA;return r&&!n?0:t?"auto":"".concat(a?p.OK:p.Ng,"px")}())},children:(0,x.jsx)("img",{src:"light"===e?a?"/img/logo-sm-white.png":"/img/logo-white.png":a?"/img/logo-sm.png":"/img/logo.png",alt:"".concat(B.iC," logo")})})},ht=e(68470),pt=e(99372),mt=function(t){var n=t.routeInfo,e=t.hideGroupTitle,r=(0,l.I0)(),a=(0,l.v9)((function(t){return t.theme.sideNavTheme})),o=(0,l.v9)((function(t){return t.theme.mobileNav})),i={sideNavTheme:a,routeInfo:n,hideGroupTitle:e},s=function(){r((0,V.Ri)(!1))};return(0,x.jsx)(st.Z,{placement:"left",closable:!1,onClose:s,open:o,bodyStyle:{padding:5},width:300,children:(0,x.jsxs)(ht.Z,{flexDirection:"column",className:"h-100",children:[(0,x.jsxs)(ht.Z,{justifyContent:"space-between",alignItems:"center",children:[(0,x.jsx)(dt,{mobileLogo:!0}),(0,x.jsx)("div",{className:"px-3",onClick:function(){return s()},children:(0,x.jsx)(pt.Z,{})})]}),(0,x.jsx)("div",{className:"h-100",children:(0,x.jsx)(m.$B,{autoHide:!0,children:(0,x.jsx)(tt,(0,d.Z)({type:p.aJ},i))})})]})})},ft=e(29439),vt=e(53621),gt=e(75797),bt=e(2858),xt=function(t){return"dark"===t},Zt=(0,ct.Z)("div")(a||(a=(0,s.Z)(["\n    display: flex;\n    align-items: center;\n    line-height: 1.5;\n    cursor: pointer;\n    padding: 0 1rem;\n    color: ",";\n\n    @media "," {\n\t\tpadding: 0 0.75rem;\n\t}\n\n    .ant-badge {\n        color: ",";\n    }\n\n    .nav-icon {\n        font-size: 1.25rem;\n    }\n\n    &:hover,\n    &.ant-dropdown-open,\n    &.ant-popover-open {\n        > * {\n            color: ",";\n        }\n\n        .profile-text {\n            color: ",";\n        }\n    }\n"])),(function(t){return xt(t.mode)?p.wx.GRAY:(0,bt.m4)(p.wx.WHITE,.85)}),p.qk.MOBILE,(function(t){return xt(t.mode)?p.wx.GRAY:(0,bt.m4)(p.wx.WHITE,.85)}),(function(t){return xt(t.mode)?bt.wE.colorPrimary:p.wx.WHITE}),(function(t){return xt(t.mode)?p.wx.GRAY:p.wx.WHITE})),yt=e(32385),Tt=e(2962),Et=e(87962),kt=e(17587),Ht=ct.Z.div((function(){return{fontSize:p.um.LG}})),Nt=ct.Z.div((function(){return{display:"flex",alignItems:"center"}})),Ct=(0,ct.Z)("div")(o||(o=(0,s.Z)(["\n\tpadding-left: ",";\n\n\t@media "," {\n\t\tdisplay: none\n\t}\n"])),p.x1[2],p.qk.MOBILE),It=ct.Z.div((function(){return{fontWeight:p.m5.SEMIBOLD}})),jt=ct.Z.span((function(){return{opacity:.8}})),_t=function(t){var n=(0,l.I0)();return(0,x.jsx)("div",{onClick:function(){n((0,kt.w7)())},children:(0,x.jsxs)(ht.Z,{alignItems:"center",gap:p.x1[2],children:[(0,x.jsx)(Ht,{children:(0,x.jsx)(Et.Z,{})}),(0,x.jsx)("span",{children:t.label})]})})},wt=[{key:"Sign Out",label:(0,x.jsx)(_t,{label:"Sign Out"})}],At=function(t){var n=t.mode;return(0,x.jsx)(yt.Z,{placement:"bottomRight",menu:{items:wt},trigger:["click"],children:(0,x.jsx)(Zt,{mode:n,children:(0,x.jsxs)(Nt,{children:[(0,x.jsx)(Tt.C,{src:"/img/avatars/thumb-1.jpg"}),(0,x.jsxs)(Ct,{className:"profile-text",children:[(0,x.jsx)(It,{children:"Charlie Howard"}),(0,x.jsx)(jt,{children:"Frontend Developer"})]})]})})})},Ot=e(67575),Rt=e(68825);var St,Dt=function(t){var n=(0,l.v9)((function(t){return t.theme.locale})),e=(0,l.I0)();return(0,et.tZ)("span",{children:(0,et.BX)(ht.Z,{alignItems:"center",justifyContent:"space-between",gap:p.x1[4],onClick:function(){return n=t.langId,e((0,V.qe)(n)),void Rt.ZP.changeLanguage(n);var n},children:[(0,et.BX)(ht.Z,{alignItems:"center",gap:p.x1[2],children:[(0,et.tZ)("img",{style:{maxWidth:"20px"},src:"/img/flags/".concat(t.icon,".png"),alt:t.langName}),(0,et.tZ)("span",{className:"font-weight-normal ml-2",children:t.langName})]}),n===t.langId?(0,et.tZ)(Ot.Z,{css:(0,nt.iv)(i||(i=(0,s.Z)(["color: ",""])),bt.wE.colorSuccess)}):null]})})},Gt=((0,et.tZ)(Dt,{icon:"us",langName:"English",langId:"en"}),(0,et.tZ)(Dt,{icon:"cn",langName:"Chinese",langId:"zh"}),(0,et.tZ)(Dt,{icon:"fr",langName:"French",langId:"fr"}),(0,et.tZ)(Dt,{icon:"jp",langName:"Janpanese",langId:"ja"}),e(34257),e(78029),e(45108),e(60732)),Lt=e(37762),Bt=e(68961),Pt=e(11142),Ut=e(11730),Ft=e(20005),Xt=e(376),Mt=ct.Z.div((function(){return{fontSize:"1.5rem",marginRight:"1rem"}})),Vt=ct.Z.div((function(t){return{color:"light"===t.mode?p.VH.HEADING_COLOR:p.wx.GRAY_DARK,fontWeight:"500"}}));var Wt,Yt=function t(n,e){e=e||[];var r,a=(0,Lt.Z)(n);try{for(a.s();!(r=a.n()).done;){var o=r.value;0===o.submenu.length&&e.push(o),o.submenu.length>0&&t(o.submenu,e)}}catch(i){a.e(i)}finally{a.f()}return e}(F),zt=function(t){switch(t){case"dashboards":return(0,et.tZ)(C.Z,{className:"text-success"});case"apps":return(0,et.tZ)(Bt.Z,{className:"text-danger"});case"components":return(0,et.tZ)(Pt.Z,{className:"text-primary"});case"extra":return(0,et.tZ)(L.Z,{className:"text-warning"});default:return null}},Kt=function(t){var n=t.active,e=t.close,r=t.isMobile,a=t.mode,o=(0,c.useState)(""),i=(0,ft.Z)(o,2),l=i[0],u=i[1],d=(0,c.useState)([]),h=(0,ft.Z)(d,2),m=h[0],v=h[1],g=(0,c.useRef)(null);return n&&g.current.focus(),(0,et.tZ)(Ft.Z,{ref:g,css:(0,nt.iv)(St||(St=(0,s.Z)(["\n\t\t\t\t","\n\t\t\t"])),r?"":"\n\t\t\t\t\tmin-width: 300px;\n\t\t\t\t\twidth: 100%;\n\t\t\t\n\t\t\t\t\t.ant-input-affix-wrapper {\n\t\t\t\t\t\tbackground-color: ".concat("light"===a?"#1b2531":p._k,";\n\t\t\t\n\t\t\t\t\t\t.ant-input {\n\t\t\t\t\t\t\tbackground-color: transparent;\n\t\t\t\t\t\t}\n\t\t\t\n\t\t\t\t\t\t.ant-input-prefix {\n\t\t\t\t\t\t\tcolor: ").concat(p.wx.GRAY_LIGHT,";\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t")),popupClassName:"nav-search-dropdown",options:m,onSelect:function(){u(""),v([]),e&&e()},onSearch:function(t){u(t),v(t?function(t){return Yt.map((function(n){var e=n.key.split("-")[0];return{value:n.path,label:(0,et.tZ)(f.rU,{to:n.path,children:(0,et.BX)(ht.Z,{alignItems:"center",padding:"7px 12px",children:[(0,et.tZ)(Mt,{children:zt(e)}),(0,et.BX)("div",{children:[(0,et.tZ)(Vt,{mode:t,children:(0,et.tZ)(Z,{id:n.title})}),(0,et.BX)("div",{className:"font-size-sm text-muted",children:[e," "]})]})]})})}}))}(a):[])},value:l,filterOption:function(t,n){return-1!==n.value.toUpperCase().indexOf(t.toUpperCase())},children:(0,et.tZ)(Xt.Z,{placeholder:"Search...",prefix:(0,et.tZ)(Ut.Z,{className:"mr-0"})})})},$t=ct.Z.div((function(t){var n=t.active,e=(t.mode,t.headerBg);return{height:p.hv.HEADER_HEIGHT,padding:"0 1.5rem",position:"absolute",width:"100%",backgroundColor:e,display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:p.um.LG,top:n?0:-p.hv.HEADER_HEIGHT,transition:"all 0.3s ease"}})),qt=((0,ct.Z)("div")(Wt||(Wt=(0,s.Z)(["\n\theight: ","px;\n\tpadding: 0 1.5rem;\n\tposition: absolute;\n\twidth: 100%;\n\tbackground-color: ",";\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tfont-size: ",";\n\ttop: ",";\n\ttransition: all 0.3s ease;\n\n\t","\n"])),p.hv.HEADER_HEIGHT,(function(t){return t.headerBg}),p.um.LG,(function(t){return t.active?0:-p.hv.HEADER_HEIGHT}),(function(t){return"light"===t.mode?"\n\t\t.ant-select-selection-search-input {\n\t\t\tcolor: @white;\n\t\t}\n\n\t\t.ant-select-selection-placeholder {\n\t\t\tcolor: rgba(@white, 0.85);\n\t\t}\n\t":""})),(0,l.$j)((function(t){return{headerNavColor:t.theme.headerNavColor}}),{})((function(t){var n=t.active,e=t.close,r=t.headerNavColor,a=t.currentTheme,o=t.mode,i="dark"===a?p.hv.HEADER_BG_DEFAULT_COLOR_DARK:p.hv.HEADER_BG_DEFAULT_COLOR_LIGHT;return(0,x.jsxs)($t,{active:n,mode:o,headerBg:r||i,children:[(0,x.jsx)(Kt,{close:e,active:n,mode:o}),(0,x.jsx)("div",{className:"nav-close",onClick:e,children:(0,x.jsx)(Gt.Z,{})})]})})),ct.Z.div((function(t){var n=t.headerNavColor,e=t.isDarkTheme;return{position:"fixed",width:"100%",left:0,zIndex:1e3,display:"flex",flex:"0 0 auto",height:p.hv.HEADER_HEIGHT,lineHeight:"".concat(p.hv.HEADER_HEIGHT,"px"),backgroundColor:n,boxShadow:e?"0 1px 8px -1px rgb(0 0 0 / 75%)":"0 1px 4px -1px rgb(0 0 0 / 15%)"}}))),Jt=ct.Z.div((function(t){var n=t.isNavTop;return(0,d.Z)({width:"100%",display:"flex"},n?{maxWidth:n,margin:"auto"}:{})})),Qt=ct.Z.div((function(t){var n=t.navWidth;return{display:"flex",justifyContent:"space-between",position:"relative",transition:"all .2s ease",width:"calc(100% - ".concat(n,")")}})),tn=ct.Z.div((function(t){var n=t.left,e=t.right;return n?{display:"flex"}:e?{marginLeft:"auto",padding:"0 1rem",display:"flex"}:{}})),nn=function(t){var n=t.isMobile,e=(0,c.useState)(!1),r=(0,ft.Z)(e,2),a=(r[0],r[1]),o=(0,l.I0)(),i=(0,l.v9)((function(t){return t.theme.navCollapsed})),s=(0,l.v9)((function(t){return t.theme.mobileNav})),u=(0,l.v9)((function(t){return t.theme.navType})),d=(0,l.v9)((function(t){return t.theme.headerNavColor})),h=(0,l.v9)((function(t){return t.theme.currentTheme})),m=((0,l.v9)((function(t){return t.theme.direction})),u===p.XA),f="dark"===h,v=(0,c.useMemo)((function(){return d?M.getColorContrast(d):M.getColorContrast(f?"#000000":"#ffffff")}),[f,d]),g=f?p.hv.HEADER_BG_DEFAULT_COLOR_DARK:p.hv.HEADER_BG_DEFAULT_COLOR_LIGHT;return(0,c.useEffect)((function(){n||a(!1)})),(0,et.tZ)(qt,{isDarkTheme:f,headerNavColor:d||g,children:(0,et.BX)(Jt,{isNavTop:m,children:[(0,et.tZ)(dt,{logoType:v}),(0,et.BX)(Qt,{navWidth:m||n?"0px":"".concat(i?p.OK:p.Ng,"px"),children:[(0,et.tZ)(tn,{left:!0,children:(0,et.tZ)(Zt,{onClick:function(){o(n?(0,V.Ri)(!s):(0,V.EV)(!i))},mode:v,children:(0,et.tZ)("div",{className:"d-flex align-items-center",children:i||n?(0,et.tZ)(vt.Z,{className:"nav-icon"}):(0,et.tZ)(gt.Z,{className:"nav-icon"})})})}),(0,et.tZ)(tn,{right:!0,children:(0,et.tZ)(At,{mode:v})})]})]})})},en=e(32323),rn={"/app":(0,x.jsx)(Z,{id:"home"})};F.forEach((function(t,n){var e=function(t){return rn[t.path]=(0,x.jsx)(Z,{id:t.title})};e(t),t.submenu&&t.submenu.forEach((function(t){e(t),t.submenu&&t.submenu.forEach((function(t){e(t)}))}))}));var an,on,sn,cn=function(t){var n=(0,u.TH)().pathname.split("/").filter((function(t){return t})),e=n.map((function(t,e){var r="/".concat(n.slice(0,e+1).join("/"));return{title:(0,x.jsx)(f.rU,{to:r,children:rn[r]})}}));return(0,x.jsx)(en.Z,{items:e})},ln=function(t){(0,E.Z)(e,t);var n=(0,k.Z)(e);function e(){return(0,y.Z)(this,e),n.apply(this,arguments)}return(0,T.Z)(e,[{key:"render",value:function(){return(0,x.jsx)(cn,{})}}]),e}(c.Component),un=ln,dn=function(t){var n=t.title;return t.display?(0,et.BX)("div",{css:(0,nt.iv)(an||(an=(0,s.Z)(["\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tmargin-bottom: 1rem;\n\n\t\t\t\t\t@media "," {\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t}\n\t\t\t\t"])),p.qk.LAPTOP_ABOVE),children:[(0,et.tZ)("h3",{className:"mb-0 mr-3 font-weight-semibold",children:(0,et.tZ)(Z,{id:n||"home"})}),(0,et.tZ)(un,{})]}):null};function hn(){var t=(0,l.v9)((function(t){return t.theme.currentTheme}));return(0,et.BX)("footer",{css:(0,nt.iv)(on||(on=(0,s.Z)(["\n\t\t\theight: ","px;\n\t\t\tdisplay: flex;\n\t\t\tmargin: 0 ","px;\n\t\t\talign-items: center;\n\t\t\tborder-top: 1px solid ",";\n\t\t\tjustify-content: space-between;\n\t\t\n\t\t\t@media "," {\n\t\t\t\tjustify-content: center;\n       \t\t\tflex-direction: column;\n\t\t\t}\n\t\t"])),p.hv.FOOTER_HEIGHT,p.hv.LAYOUT_CONTENT_GUTTER,"dark"===t?p.VH.BORDER_BASE_COLOR:p.T5.BASE_COLOR,p.qk.MOBILE),children:[(0,et.BX)("span",{children:["Copyright  \xa9  ","".concat((new Date).getFullYear())," ",(0,et.tZ)("span",{className:"font-weight-semibold",children:"".concat(B.iC)})," All rights reserved."]}),(0,et.BX)("div",{children:[(0,et.tZ)("a",{className:"text-gray",href:"/#",onClick:function(t){return t.preventDefault()},children:"Term & Conditions"}),(0,et.tZ)("span",{className:"mx-2 text-muted",children:" | "}),(0,et.tZ)("a",{className:"text-gray",href:"/#",onClick:function(t){return t.preventDefault()},children:"Privacy & Policy"})]})]})}var pn=h.Z.Content,mn=v.ZP.useBreakpoint,fn=(0,ct.Z)("div")(sn||(sn=(0,s.Z)(["\n    padding: ","px;\n    margin-top: ","px;\n    min-height: calc(100vh - ","px);\n    position: relative;\n\n    ","\n\n    @media "," { \n        padding: ","px;\n    }\n"])),p.hv.LAYOUT_CONTENT_GUTTER,p.hv.HEADER_HEIGHT,p.hv.CONTENT_HEIGHT_OFFSET,(function(t){return t.isNavTop?"\n        max-width: ".concat(p.hv.CONTENT_MAX_WIDTH,"px;\n        margin-left: auto;\n        margin-right: auto;\n        width: 100%;\n\n        @media ").concat(p.qk.DESKTOP," { \n            margin-top: ").concat(p.hv.HEADER_HEIGHT+p.hv.TOP_NAV_HEIGHT,"px;\n            min-height: calc(100vh - ").concat(p.hv.CONTENT_HEIGHT_OFFSET,"px - ").concat(p.hv.TOP_NAV_HEIGHT,"px);\n        }\n    "):""}),p.qk.MOBILE,p.hv.LAYOUT_CONTENT_GUTTER_SM),vn=function(t){var n=t.navCollapsed,e=t.navType,r=t.direction,a=t.children,o=(0,u.TH)(),i=M.getRouteInfo(F,o.pathname),s=M.getBreakPoint(mn()),l=0!==s.length&&!s.includes("lg"),d=e===p.hv.NAV_TYPE_SIDE,m=e===p.hv.NAV_TYPE_TOP,f=function(){return m||l?0:n?p.hv.SIDE_NAV_COLLAPSED_WIDTH:p.hv.SIDE_NAV_WIDTH};return(0,x.jsxs)(h.Z,{children:[(0,x.jsx)(nn,{isMobile:l}),m&&!l?(0,x.jsx)(ot,{routeInfo:i}):null,(0,x.jsxs)(h.Z,{children:[d&&!l?(0,x.jsx)(at,{routeInfo:i}):null,(0,x.jsxs)(h.Z,{style:r===p.hv.DIR_LTR?{paddingLeft:f()}:r===p.hv.DIR_RTL?{paddingRight:f()}:{paddingLeft:f()},children:[(0,x.jsxs)(fn,{children:[(0,x.jsx)(dn,{display:null===i||void 0===i?void 0:i.breadcrumb,title:null===i||void 0===i?void 0:i.title}),(0,x.jsx)(pn,{className:"h-100",children:(0,x.jsx)(c.Suspense,{fallback:(0,x.jsx)(it.Z,{cover:"content"}),children:a})})]}),(0,x.jsx)(hn,{})]})]}),l&&(0,x.jsx)(mt,{})]})},gn=(0,l.$j)((function(t){var n=t.theme;return{navCollapsed:n.navCollapsed,navType:n.navType,locale:n.locale}}))(c.memo(vn))}}]);
//# sourceMappingURL=32.129505fe.chunk.js.map