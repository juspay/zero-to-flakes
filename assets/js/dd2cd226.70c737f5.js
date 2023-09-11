"use strict";(self.webpackChunkzero_to_flakes=self.webpackChunkzero_to_flakes||[]).push([[1959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(n),k=r,c=s["".concat(u,".").concat(k)]||s[k]||d[k]||l;return n?a.createElement(c,o(o({ref:t},m),{},{components:n})):a.createElement(c,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={slug:"/nixos-flake/module-outputs"},o="Module outputs",i={unversionedId:"modules/nixos-flake/guide/module-outputs",id:"modules/nixos-flake/guide/module-outputs",title:"Module outputs",description:"Importing the nixos-flake flake-parts module will autowire the following flake outputs in your flake:",source:"@site/docs/modules/nixos-flake/guide/module-outputs.md",sourceDirName:"modules/nixos-flake/guide",slug:"/nixos-flake/module-outputs",permalink:"/nixos-flake/module-outputs",draft:!1,editUrl:"https://github.com/srid/nixos-flake/blob/master/doc/guide/module-outputs.md",tags:[],version:"current",frontMatter:{slug:"/nixos-flake/module-outputs"},sidebar:"tutorialSidebar",previous:{title:"Guide",permalink:"/nixos-flake/guide"},next:{title:"Flake Templates",permalink:"/nixos-flake/templates"}},u={},p=[],m={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"module-outputs"},"Module outputs"),(0,r.kt)("p",null,"Importing the ",(0,r.kt)("inlineCode",{parentName:"p"},"nixos-flake")," flake-parts module will autowire the following flake outputs in your flake:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nixos-flake.lib")),(0,r.kt)("td",{parentName:"tr",align:null},"Functions ",(0,r.kt)("inlineCode",{parentName:"td"},"mkLinuxSystem"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"mkMacosSystem")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"mkHomeConfiguration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nixosModules.home-manager")),(0,r.kt)("td",{parentName:"tr",align:null},"Home-manager setup module for NixOS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"darwinModules.home-manager")),(0,r.kt)("td",{parentName:"tr",align:null},"Home-manager setup module for Darwin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"packages.update")),(0,r.kt)("td",{parentName:"tr",align:null},"Flake app to update key flake inputs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"packages.activate")),(0,r.kt)("td",{parentName:"tr",align:null},"Flake app to build & activate the system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"packages.activate-home")),(0,r.kt)("td",{parentName:"tr",align:null},"Flake app to build & activate the ",(0,r.kt)("inlineCode",{parentName:"td"},"homeConfigurations")," for current user")))),(0,r.kt)("p",null,"In addition, all of your NixOS/nix-darwin/home-manager modules implicitly receive the following ",(0,r.kt)("inlineCode",{parentName:"p"},"specialArgs"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flake@{self, inputs, config}")," (",(0,r.kt)("inlineCode",{parentName:"li"},"config")," is from flake-parts')"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rosettaPkgs")," (if on darwin)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": The module API is open to change. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/srid/nixos-flake/issues/new"},"All feedback welcome"),"."))}d.isMDXComponent=!0}}]);