"use strict";(self.webpackChunkdml_documentation=self.webpackChunkdml_documentation||[]).push([[123],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),g=a,m=u["".concat(s,".").concat(g)]||u[g]||p[g]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3},o="Creating a Project",l={unversionedId:"getting-started/scaffolding",id:"getting-started/scaffolding",title:"Creating a Project",description:"Using the OpenMud command line and the Visual Studio Code IDE, creating a new OpenMud project is easy. This page steps you through creating your first project with OpenMud.",source:"@site/docs/getting-started/scaffolding.md",sourceDirName:"getting-started",slug:"/getting-started/scaffolding",permalink:"/docs/getting-started/scaffolding",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Command Line Basics",permalink:"/docs/getting-started/omd-commandline"},next:{title:"Running a Game Server",permalink:"/docs/getting-started/running-server"}},s={},d=[{value:"Creating the Project",id:"creating-the-project",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-a-project"},"Creating a Project"),(0,a.kt)("p",null,"Using the OpenMud command line and the Visual Studio Code IDE, creating a new OpenMud project is easy. This page steps you through creating your first project with OpenMud."),(0,a.kt)("h2",{id:"creating-the-project"},"Creating the Project"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open Visual Studio Code, and navigate to an empty folder where you would like to save your project. (File -> Open Folder) You should end up in an empty directory with Visual Studio Code, as seen below:")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt",src:n(9273).Z,width:"955",height:"670"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the Command Terminal in Visual Studio Code by using the menu item ",(0,a.kt)("inlineCode",{parentName:"p"},"View -> Terminal")," and execute the command "),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"omd create --project my-first-project --template quick-start")),(0,a.kt)("p",{parentName:"li"},"You should see 3 directories created:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"game (This is where all of your game code & assets will be saved)"),(0,a.kt)("li",{parentName:"ul"},"client (The client project. You can leave this alone to use the default client code)"),(0,a.kt)("li",{parentName:"ul"},".vscode (Contains some default Visual Studio Code tasks for building and debugging)")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt",src:n(7361).Z,width:"1173",height:"606"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Expanding the game folder, you can see the source files and assets for your game. For the typical use of OpenMud, all your code will go here and you will not need to concern yourself with any code outside of this folder.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt",src:n(4874).Z,width:"1077",height:"511"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"The OpenMud template also includes all of the default build, run and debug configurations with VS Code. You can compile and run your game by just using the  ",(0,a.kt)("inlineCode",{parentName:"li"},"Run -> Start Debugging")," menu option in Visual Studio Code.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt",src:n(6036).Z,width:"792",height:"245"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},'After selecting "Start Debugging", omd will build and start hosting your game server. When it is ready, it will be available on https://localhost:7087 ; The "Debug Console" will print out the address the game is being hosted when the server is ready.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt",src:n(7756).Z,width:"1766",height:"644"})))}p.isMDXComponent=!0},9273:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tut0.1-219c63d17526cc813b52739c54aad499.png"},7361:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tut0.2-9fc6297dcbfd3d452e8e770f13c84668.png"},4874:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tut0.3-eecd3cfa6f6d20cae16f10d6aa1ed39d.png"},6036:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tut0.4-85894ece7bbd7746b43018a958540644.png"},7756:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tut0.5-d610e62e22d822827d1fcf70df552692.png"}}]);