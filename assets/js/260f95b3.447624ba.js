"use strict";(self.webpackChunkzero_to_flakes=self.webpackChunkzero_to_flakes||[]).push([[537],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),k=l,c=m["".concat(i,".").concat(k)]||m[k]||d[k]||r;return a?n.createElement(c,o(o({ref:t},u),{},{components:a})):n.createElement(c,o({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:l,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6117:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={slug:"/haskell-flake/modules"},o="Project modules",s={unversionedId:"modules/haskell-flake/guide/modules",id:"modules/haskell-flake/guide/modules",title:"Project modules",description:"haskell-flake's per-project configuration can be modularized and shared among multiple repos. This is done using the flake.haskellFlakeProjectModules flake output.",source:"@site/docs/modules/haskell-flake/guide/modules.md",sourceDirName:"modules/haskell-flake/guide",slug:"/haskell-flake/modules",permalink:"/haskell-flake/modules",draft:!1,editUrl:"https://github.com/srid/haskell-flake/blob/master/doc/guide/modules.md",tags:[],version:"current",frontMatter:{slug:"/haskell-flake/modules"},sidebar:"tutorialSidebar",previous:{title:"DevShell",permalink:"/haskell-flake/devshell"},next:{title:"Creating package sets",permalink:"/haskell-flake/package-set"}},i={},p=[{value:"Module arguments",id:"module-arguments",level:2},{value:"Default modules",id:"default-modules",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"project-modules"},"Project modules"),(0,l.kt)("p",null,"haskell-flake's per-project configuration can be modularized and shared among multiple repos. This is done using the ",(0,l.kt)("inlineCode",{parentName:"p"},"flake.haskellFlakeProjectModules")," flake output. "),(0,l.kt)("p",null,"Let's say you have two repositories -- ",(0,l.kt)("inlineCode",{parentName:"p"},"common")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp"),". The ",(0,l.kt)("inlineCode",{parentName:"p"},"common")," repository may expose some shared haskell-flake settings as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nix"},"{\n  # Inside flake-parts' `mkFlake`:\n  flake.haskellFlakeProjectModules.default = { pkgs, ... }: {\n    devShell.tools = hp: {\n      inherit (hp) \n        hlint\n        cabal-fmt\n        ormolu;\n    };\n    packages = {\n      mylib.source = inputs.mylib;\n    };\n  };\n}\n")),(0,l.kt)("p",null,"This module can then be imported in multiple projects, such as the ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp")," project:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nix"},"{\n  # Inside flake-parts' `perSystem`:\n  haskellProjects.default = {\n    imports = [\n      inputs.common.haskellFlakeProjectModules.default\n    ];\n    packages = {\n      myapp.root = ./.;\n    };\n  };\n}\n")),(0,l.kt)("p",null,"This way your ",(0,l.kt)("inlineCode",{parentName:"p"},"app"),' project knows how to find "mylib" library as well as includes the default tools you want to use in the dev shell.'),(0,l.kt)("h2",{id:"module-arguments"},"Module arguments"),(0,l.kt)("p",null,"A haskell-flake project module takes the following arguments:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pkgs")),(0,l.kt)("td",{parentName:"tr",align:null},"The perSystem's ",(0,l.kt)("inlineCode",{parentName:"td"},"pkgs")," argument")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"self")),(0,l.kt)("td",{parentName:"tr",align:null},"The flake's ",(0,l.kt)("inlineCode",{parentName:"td"},"self"))))),(0,l.kt)("h2",{id:"default-modules"},"Default modules"),(0,l.kt)("p",null,'By default, haskell-flake will generate the following modules for the "default" ',(0,l.kt)("inlineCode",{parentName:"p"},"haskellProject"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Module"),(0,l.kt)("th",{parentName:"tr",align:null},"Contents"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"haskellFlakeProjectModules.output")),(0,l.kt)("td",{parentName:"tr",align:null},"Local packages & dependency overrides")))),(0,l.kt)("p",null,'The idea here being that you can "connect" two Haskell projects such that they depend on one another while reusing the overrides (',(0,l.kt)("inlineCode",{parentName:"p"},"packages")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"settings"),') from one place. For example, if you have a project "foo" that depends on "bar" and if "foo"\'s flake.nix has "bar" as its input, then in "foo"\'s ',(0,l.kt)("inlineCode",{parentName:"p"},"haskellProject.default"),' entry you can import "bar" as follows:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nix"},"# foo's flake.nix's perSystem\n{ \n  haskellProjects.default = {\n    imports = [\n      inputs.bar.haskellFlakeProjectModules.output\n    ];\n    packages = {\n      foo.root = ./.;\n    };\n  };\n}\n")),(0,l.kt)("p",null,'By importing "bar"\'s ',(0,l.kt)("inlineCode",{parentName:"p"},"output"),' project module, you automatically get the overrides from "bar" as well as the local packages. This way you don\'t have to duplicate the ',(0,l.kt)("inlineCode",{parentName:"p"},"settings")," and manually specify the ",(0,l.kt)("inlineCode",{parentName:"p"},"packages.<name>.source"),' in "foo"\'s flake.nix.'),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/nammayatri/nammayatri"},"https://github.com/nammayatri/nammayatri")," (imports ",(0,l.kt)("inlineCode",{parentName:"li"},"shared-kernel")," which in turn imports ",(0,l.kt)("inlineCode",{parentName:"li"},"euler-hs"),")")))}d.isMDXComponent=!0}}]);