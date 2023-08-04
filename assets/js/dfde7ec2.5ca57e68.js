"use strict";(self.webpackChunkzero_to_flakes=self.webpackChunkzero_to_flakes||[]).push([[57],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>u});var t=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=p(n),m=i,u=k["".concat(s,".").concat(m)]||k[m]||d[m]||l;return n?t.createElement(u,r(r({ref:a},c),{},{components:n})):t.createElement(u,r({ref:a},c))}));function u(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[k]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8588:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=n(7462),i=(n(7294),n(3905));const l={slug:"/haskell-flake/dependency"},r="Overriding dependencies",o={unversionedId:"modules/haskell-flake/guide/dependency",id:"modules/haskell-flake/guide/dependency",title:"Overriding dependencies",description:"Haskell libraries ultimately come from Hackage, and nixpkgs] contains [most of these. Adding a library to your project usually involves modifying the .cabal file and restart the nix shell:",source:"@site/docs/modules/haskell-flake/guide/dependency.md",sourceDirName:"modules/haskell-flake/guide",slug:"/haskell-flake/dependency",permalink:"/haskell-flake/dependency",draft:!1,editUrl:"https://github.com/juspay/zero-to-flakes/tree/main/docs/modules/haskell-flake/guide/dependency.md",tags:[],version:"current",frontMatter:{slug:"/haskell-flake/dependency"},sidebar:"tutorialSidebar",previous:{title:"Guide",permalink:"/haskell-flake/guide"},next:{title:"DevShell",permalink:"/haskell-flake/devshell"}},s={},p=[{value:"Overriding a Haskell package in Nix",id:"overriding-a-haskell-package-in-nix",level:2},{value:"nixpkgs functions",id:"nixpkgs-functions",level:3},{value:"Using Hackage versions",id:"using-hackage-versions",level:2},{value:"Exporting and sharing settings",id:"exporting-and-sharing-settings",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p},k="wrapper";function d(e){let{components:a,...n}=e;return(0,i.kt)(k,(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overriding-dependencies"},"Overriding dependencies"),(0,i.kt)("p",null,"Haskell libraries ultimately come from ",(0,i.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/"},"Hackage"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://zero-to-nix.com/concepts/nixpkgs"},"nixpkgs")," contains ",(0,i.kt)("a",{parentName:"p",href:"https://nixpkgs.haskell.page/"},"most of these"),". Adding a library to your project usually involves modifying the ",(0,i.kt)("inlineCode",{parentName:"p"},".cabal")," file and restart the nix shell:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Identify the package name from Hackage. Let's say you want to use ",(0,i.kt)("a",{parentName:"li",href:"https://hackage.haskell.org/package/ema"},(0,i.kt)("inlineCode",{parentName:"a"},"ema"))),(0,i.kt)("li",{parentName:"ol"},"Add the package, ",(0,i.kt)("inlineCode",{parentName:"li"},"ema"),", to the ",(0,i.kt)("inlineCode",{parentName:"li"},".cabal")," file under ",(0,i.kt)("a",{parentName:"li",href:"https://cabal.readthedocs.io/en/3.4/cabal-package.html#pkg-field-build-depends"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"build-depends")," section"),"."),(0,i.kt)("li",{parentName:"ol"},"Exit and restart the nix shell (",(0,i.kt)("inlineCode",{parentName:"li"},"nix develop"),"). ")),(0,i.kt)("p",null,"Step (3) above will try to fetch the package from the Haskell package set in ",(0,i.kt)("a",{parentName:"p",href:"https://zero-to-nix.com/concepts/nixpkgs"},"nixpkgs")," (the one that is pinned in ",(0,i.kt)("inlineCode",{parentName:"p"},"flake.lock"),"). For various reasons, this package may be either missing or marked as broken. In such cases, you will have to override the package locally in the project (see the next section)."),(0,i.kt)("h2",{id:"overriding-a-haskell-package-in-nix"},"Overriding a Haskell package in Nix"),(0,i.kt)("p",null,"In Nix, it is possible to use an exact package built from an arbitrary source (Git repo or local directory). If you want to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," branch of the ",(0,i.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/ema"},"ema")," library, for instance, you can do it as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add a flake input pointing to the ema Git repo in ",(0,i.kt)("inlineCode",{parentName:"li"},"flake.nix"),": ",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-nix"},'{\n  inputs = {\n    ema.url = "github:srid/ema";\n    ema.flake = false;\n  };\n}\n'))),(0,i.kt)("li",{parentName:"ol"},"Build it using ",(0,i.kt)("inlineCode",{parentName:"li"},"callCabal2nix")," and assign it to the ",(0,i.kt)("inlineCode",{parentName:"li"},"ema")," name in the Haskell package set by adding it to the ",(0,i.kt)("inlineCode",{parentName:"li"},"packages")," argument of your ",(0,i.kt)("inlineCode",{parentName:"li"},"flake.nix")," that is using haskell-flake:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-nix"},"{\n  perSystem = { self', config, pkgs, ... }: {\n    haskellProjects.default = {\n      packages = {\n        ema.source = inputs.ema;\n      };\n      settings = {\n        ema = {  # This module can take `{self, super, ...}` args, optionally.\n          check = false;     # Disable running tests\n          haddock = false;   # Disable building haddock documentation\n          jailbreak = true;  # Ignore cabal constraints\n          patches = [ ./patches/ema-bug-fix.patch ];\n          cabalFlags.with-generics = true;\n        };\n      };\n    };\n  };\n}\n"))),(0,i.kt)("li",{parentName:"ol"},"Re-run the nix shell (",(0,i.kt)("inlineCode",{parentName:"li"},"nix develop"),").")),(0,i.kt)("h3",{id:"nixpkgs-functions"},(0,i.kt)("a",{parentName:"h3",href:"https://zero-to-nix.com/concepts/nixpkgs"},"nixpkgs")," functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"pkgs.haskell.lib")," module provides various utility functions that you can use to override Haskell packages. The canonical place to find documentation on these is ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/NixOS/nixpkgs/blob/master/pkgs/development/haskell-modules/lib/compose.nix"},"the source"),". haskell-flake provides a ",(0,i.kt)("inlineCode",{parentName:"li"},"settings")," submodule for convienience; for eg., the ",(0,i.kt)("inlineCode",{parentName:"li"},"dontCheck")," function translates to ",(0,i.kt)("inlineCode",{parentName:"li"},"settings.<name>.check"),".")),(0,i.kt)("h2",{id:"using-hackage-versions"},"Using Hackage versions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"packages.<name>.source")," also supports Hackage versions. So the following works to pull ",(0,i.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/ema-0.8.2.0"},"ema 0.8.2.0"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nix"},'{\n  perSystem = { self\', config, pkgs, ... }: {\n    haskellProjects.default = {\n      packages = {\n        ema.source = "0.8.2.0";\n      };\n    };\n  };\n}\n')),(0,i.kt)("h2",{id:"exporting-and-sharing-settings"},"Exporting and sharing settings"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/haskell-flake/modules"},"Project modules")," export both ",(0,i.kt)("inlineCode",{parentName:"p"},"packages")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"settings")," options for reuse in downstream Haskell projects."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/srid/emanote/commit/5b24bd04f94e03afe66ee01da723e4a05d854953"},"Emanote overrides"),": also demonstrates how to add a ",(0,i.kt)("em",{parentName:"li"},"new")," setting option (",(0,i.kt)("inlineCode",{parentName:"li"},"removeReferencesTo"),").")))}d.isMDXComponent=!0}}]);