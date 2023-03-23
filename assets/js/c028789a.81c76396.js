"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[27821],{87043:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},i="Todoist",l={unversionedId:"integrations/sources/todoist",id:"integrations/sources/todoist",title:"Todoist",description:"Overview",source:"@site/../docs/integrations/sources/todoist.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/todoist",permalink:"/integrations/sources/todoist",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/todoist.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"TMDb",permalink:"/integrations/sources/tmdb"},next:{title:"Toggl API",permalink:"/integrations/sources/toggl"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Set up the Todoist connector in Airbyte",id:"set-up-the-todoist-connector-in-airbyte",level:3},{value:"Streams",id:"streams",level:2},{value:"Changelog",id:"changelog",level:2}],u={toc:p},c="wrapper";function d(t){let{components:e,...r}=t;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"todoist"},"Todoist"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Todoist source supports only ",(0,a.kt)("inlineCode",{parentName:"p"},"Full Refresh")," syncs."),(0,a.kt)("h3",{id:"output-schema"},"Output schema"),(0,a.kt)("p",null,"Two output streams are available from this source. A list of these streams can be found below in the ",(0,a.kt)("a",{parentName:"p",href:"/integrations/sources/todoist#streams"},"Streams")," section."),(0,a.kt)("h3",{id:"features"},"Features"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Todoist API token")),(0,a.kt)("p",null,"You can find your personal token in the ",(0,a.kt)("a",{parentName:"p",href:"https://todoist.com/prefs/integrations"},"integrations settings view")," of the Todoist web app and replace the token value in the samples."),(0,a.kt)("h3",{id:"set-up-the-todoist-connector-in-airbyte"},"Set up the Todoist connector in Airbyte"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account or navigate to the Airbyte Open Source dashboard."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Sources")," and then click ",(0,a.kt)("strong",{parentName:"li"},"+ New source"),"."),(0,a.kt)("li",{parentName:"ol"},"On the Set up the source page, select ",(0,a.kt)("strong",{parentName:"li"},"Todoist")," from the Source type dropdown."),(0,a.kt)("li",{parentName:"ol"},"Enter the name for the Todoist connector."),(0,a.kt)("li",{parentName:"ol"},"For ",(0,a.kt)("strong",{parentName:"li"},"Token"),", enter the ",(0,a.kt)("a",{parentName:"li",href:"https://todoist.com/app/settings/integrations/"},"Todoist personal token"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,a.kt)("h2",{id:"streams"},"Streams"),(0,a.kt)("p",null,"List of available streams:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.todoist.com/rest/v2/#tasks"},"Tasks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.todoist.com/rest/v2/#projects"},"Projects"))),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2022-12-03"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20046"},"20046")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\ud83c\udf89 New Source: todoist")))))}d.isMDXComponent=!0},3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=p(r),m=a,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(k,i(i({ref:e},u),{},{components:r})):n.createElement(k,i({ref:e},u))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);