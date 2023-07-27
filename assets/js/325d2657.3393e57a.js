"use strict";(self.webpackChunkzero_to_flakes=self.webpackChunkzero_to_flakes||[]).push([[24],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={slug:"/gotchas"},o="Gotchas",l={unversionedId:"gotchas",id:"gotchas",title:"Gotchas",description:"Nix can behave unexpectedly in certain cases.",source:"@site/docs/gotchas.mdx",sourceDirName:".",slug:"/gotchas",permalink:"/gotchas",draft:!1,editUrl:"https://github.com/juspay/zero-to-flakes/tree/main/docs/gotchas.mdx",tags:[],version:"current",frontMatter:{slug:"/gotchas"},sidebar:"tutorialSidebar",previous:{title:"Building a docker image",permalink:"/docker"},next:{title:"Tips",permalink:"/tips"}},s={},c=[{value:"Nix does not recognize a new file I added",id:"git-untracked",level:2},{value:"Nix is broken after macOS upgrade",id:"macos-upgrade",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gotchas"},"Gotchas"),(0,a.kt)("p",null,"Nix can behave unexpectedly in certain cases."),(0,a.kt)("h2",{id:"git-untracked"},"Nix does not recognize a new file I added"),(0,a.kt)("p",null,"Often you'll see an error like this,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"error: getting status of '/nix/store/vlks3d7fr5ywc923pvqacx2bkzm1782j-source/foo': No such file or directory\n")),(0,a.kt)("p",null,"This usually means you have not staged this new file/ directory to the Git\nindex. When using flakes, Nix will not see untracked files/ directories by default. To resolve this, just ",(0,a.kt)("inlineCode",{parentName:"p"},"git add -N")," the untracked file/ directory."),(0,a.kt)("admonition",{title:"For further information",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/NixOS/nix/issues/8389"},"https://github.com/NixOS/nix/issues/8389"),". ")),(0,a.kt)("h2",{id:"macos-upgrade"},"Nix is broken after macOS upgrade"),(0,a.kt)("p",null,"Upgrading macOS is known to break Nix. When this happens, just uninstall Nix and then ",(0,a.kt)("a",{parentName:"p",href:"/install"},"install")," it again."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Uninstall Nix",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"/nix/nix-installer uninstall")),(0,a.kt)("li",{parentName:"ul"},"If that path above does not exist, ",(0,a.kt)("a",{parentName:"li",href:"https://iohk.zendesk.com/hc/en-us/articles/4415830650265-Uninstall-nix-on-MacOS"},"follow these instructions")," to manually unintall Nix."))),(0,a.kt)("li",{parentName:"ol"},"Reboot your Mac"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/install"},"Install Nix"))))}d.isMDXComponent=!0}}]);