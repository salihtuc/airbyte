"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[7585],{15854:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(83117),o=(r(67294),r(3905));const a={},i="Rocket.chat API",s={unversionedId:"integrations/sources/rocket-chat",id:"integrations/sources/rocket-chat",title:"Rocket.chat API",description:"Sync overview",source:"@site/../docs/integrations/sources/rocket-chat.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/rocket-chat",permalink:"/integrations/sources/rocket-chat",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/rocket-chat.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Robert Koch-Institut Covid",permalink:"/integrations/sources/rki-covid"},next:{title:"RSS",permalink:"/integrations/sources/rss"}},c={},l=[{value:"Sync overview",id:"sync-overview",level:2},{value:"This Source Supports the Following Streams",id:"this-source-supports-the-following-streams",level:2},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Changelog",id:"changelog",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rocketchat-api"},"Rocket.chat API"),(0,o.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,o.kt)("p",null,"This source can sync data from the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.rocket.chat/reference/api"},"Rocket.chat API"),". At present this connector only supports full refresh syncs meaning that each time you use the connector it will sync all available records from scratch. Please use cautiously if you expect your API to have a lot of records."),(0,o.kt)("h2",{id:"this-source-supports-the-following-streams"},"This Source Supports the Following Streams"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"teams"),(0,o.kt)("li",{parentName:"ul"},"rooms"),(0,o.kt)("li",{parentName:"ul"},"channels"),(0,o.kt)("li",{parentName:"ul"},"roles"),(0,o.kt)("li",{parentName:"ul"},"subscriptions"),(0,o.kt)("li",{parentName:"ul"},"users")),(0,o.kt)("h3",{id:"features"},"Features"),(0,o.kt)("p",null,"| Feature | Supported?","(","Yes/No",")"," | Notes |\n| :--",(0,o.kt)("em",{parentName:"p"}," | :--")," | :--* |\n| Full Refresh Sync | Yes |  |\n| Incremental Sync | No |  |"),(0,o.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,o.kt)("p",null,"Rocket.chat APIs are under rate limits for the number of API calls allowed per API keys per second. If you reach a rate limit, API will return a 429 HTTP error code. See ",(0,o.kt)("a",{parentName:"p",href:"https://developer.rocket.chat/reference/api/rest-api/endpoints/other-important-endpoints/rate-limiter-endpoints"},"here")),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"You need to setup a personal access token within the Rocket.chat workspace, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rocket.chat/guides/user-guides/user-panel/managing-your-account/personal-access-token"},"here")," for step-by-step."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"token"),(0,o.kt)("li",{parentName:"ul"},"user_id"),(0,o.kt)("li",{parentName:"ul"},"endpoint")),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("p",null,"| Version | Date       | Pull Request                                              | Subject                                       |\n| :-----",(0,o.kt)("em",{parentName:"p"}," | :--------")," | :-------------------------------------------------------",(0,o.kt)("em",{parentName:"p"}," | :----------------------------------------"),"    |\n| 0.1.0   | 2022-10-29 | ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/18635"},"#18635")," | \ud83c\udf89 New Source: Rocket.chat API ","[low-code CDK]"," |"))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),h=o,d=m["".concat(c,".").concat(h)]||m[h]||p[h]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);