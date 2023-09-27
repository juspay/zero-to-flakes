"use strict";(self.webpackChunkzero_to_flakes=self.webpackChunkzero_to_flakes||[]).push([[1057],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>u});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),k=p(t),m=l,u=k["".concat(o,".").concat(m)]||k[m]||d[m]||i;return t?n.createElement(u,r(r({ref:a},c),{},{components:t})):n.createElement(u,r({ref:a},c))}));function u(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[k]="string"==typeof e?e:l,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8588:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=t(7462),l=(t(7294),t(3905));const i={slug:"/haskell-flake/dependency"},r="Overriding dependencies",s={unversionedId:"modules/haskell-flake/guide/dependency",id:"modules/haskell-flake/guide/dependency",title:"Overriding dependencies",description:"Haskell libraries ultimately come from Hackage, and nixpkgs] contains [most of these. Adding a library to your project involves modifying the .cabal file and restarting the nix shell. The process is typically as follows:",source:"@site/docs/modules/haskell-flake/guide/dependency.md",sourceDirName:"modules/haskell-flake/guide",slug:"/haskell-flake/dependency",permalink:"/haskell-flake/dependency",draft:!1,editUrl:"https://github.com/srid/haskell-flake/blob/master/doc/guide/dependency.md",tags:[],version:"current",frontMatter:{slug:"/haskell-flake/dependency"},sidebar:"tutorialSidebar",previous:{title:"Guide",permalink:"/haskell-flake/guide"},next:{title:"DevShell",permalink:"/haskell-flake/devshell"}},o={},p=[{value:"Overriding a Haskell package source",id:"source",level:2},{value:"Using a Git repo",id:"path",level:3},{value:"Using a Hackage version",id:"hackage",level:3},{value:"Using a nixpkgs version",id:"nixpkgs",level:3},{value:"Overriding a Haskell package settings",id:"settings",level:2},{value:"Sharing settings",id:"settings-share",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p},k="wrapper";function d(e){let{components:a,...t}=e;return(0,l.kt)(k,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"overriding-dependencies"},"Overriding dependencies"),(0,l.kt)("p",null,"Haskell libraries ultimately come from ",(0,l.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/"},"Hackage"),", and ",(0,l.kt)("a",{parentName:"p",href:"https://zero-to-nix.com/concepts/nixpkgs"},"nixpkgs")," contains ",(0,l.kt)("a",{parentName:"p",href:"https://nixpkgs.haskell.page/"},"most of these"),". Adding a library to your project involves modifying the ",(0,l.kt)("inlineCode",{parentName:"p"},".cabal")," file and restarting the nix shell. The process is typically as follows:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Identify the package name from Hackage. Let's say you want to use ",(0,l.kt)("a",{parentName:"li",href:"https://hackage.haskell.org/package/ema"},(0,l.kt)("inlineCode",{parentName:"a"},"ema"))),(0,l.kt)("li",{parentName:"ol"},"Add the package, ",(0,l.kt)("inlineCode",{parentName:"li"},"ema"),", to the ",(0,l.kt)("inlineCode",{parentName:"li"},".cabal")," file under ",(0,l.kt)("a",{parentName:"li",href:"https://cabal.readthedocs.io/en/3.4/cabal-package.html#pkg-field-build-depends"},"the ",(0,l.kt)("inlineCode",{parentName:"a"},"build-depends")," section"),"."),(0,l.kt)("li",{parentName:"ol"},"Exit and restart the nix shell (",(0,l.kt)("inlineCode",{parentName:"li"},"nix develop"),"). ")),(0,l.kt)("p",null,"Step (3) above will try to fetch the package from the Haskell package set in ",(0,l.kt)("a",{parentName:"p",href:"https://zero-to-nix.com/concepts/nixpkgs"},"nixpkgs")," (",(0,l.kt)("inlineCode",{parentName:"p"},"pkgs.haskellPackages"),' by default). For various reasons, this package may be either missing or marked as "broken". In such cases, you will have to override the package locally in the project (see the next section).'),(0,l.kt)("h2",{id:"source"},"Overriding a Haskell package source"),(0,l.kt)("p",null,"In Nix, it is possible to use an exact package built from an arbitrary source - which can be a Git repo, local directory or a Hackage version. "),(0,l.kt)("h3",{id:"path"},"Using a Git repo"),(0,l.kt)("p",null,"If you want to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"master")," branch of the ",(0,l.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/ema"},"ema")," library, for instance, you can do it as follows:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Add a flake input pointing to the ema Git repo in ",(0,l.kt)("inlineCode",{parentName:"li"},"flake.nix"),": ",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-nix"},'{\n  inputs = {\n    ema.url = "github:srid/ema";\n    ema.flake = false;\n  };\n}\n'))),(0,l.kt)("li",{parentName:"ol"},"Build it using ",(0,l.kt)("inlineCode",{parentName:"li"},"callCabal2nix")," and assign it to the ",(0,l.kt)("inlineCode",{parentName:"li"},"ema")," name in the Haskell package set by adding it to the ",(0,l.kt)("inlineCode",{parentName:"li"},"packages")," argument of your ",(0,l.kt)("inlineCode",{parentName:"li"},"flake.nix")," that is using haskell-flake:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-nix"},"{\n  perSystem = { self', config, pkgs, ... }: {\n    haskellProjects.default = {\n      packages = {\n        ema.source = inputs.ema;\n      };\n    };\n  };\n}\n"))),(0,l.kt)("li",{parentName:"ol"},"Re-run the nix shell (",(0,l.kt)("inlineCode",{parentName:"li"},"nix develop"),").")),(0,l.kt)("h3",{id:"hackage"},"Using a Hackage version"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"packages.<name>.source")," also supports Hackage versions. So the following works to pull ",(0,l.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/ema-0.8.2.0"},"ema 0.8.2.0"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nix"},'{\n  perSystem = { self\', config, pkgs, ... }: {\n    haskellProjects.default = {\n      packages = {\n        ema.source = "0.8.2.0";\n      };\n    };\n  };\n}\n')),(0,l.kt)("h3",{id:"nixpkgs"},"Using a nixpkgs version"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nix"},"haskellProjects.default = {\n  settings = { super, ... }: {\n    fourmolu.custom = super.fourmolu_0_13_1_0;\n  };\n};\n")),(0,l.kt)("h2",{id:"settings"},"Overriding a Haskell package settings"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nix"},"haskellProjects.default = {\n  settings = {\n    ema = {  # This module can take `{self, super, ...}` args, optionally.\n      # Disable running tests\n      check = false;\n\n      # Disable building haddock (documentation)\n      haddock = false;\n\n      # Ignore Cabal version constraints\n      jailbreak = true;\n\n      # Extra non-Haskell dependencies\n      extraBuildDepends = [ pkgs.stork ];\n\n      # Source patches\n      patches = [ ./patches/ema-bug-fix.patch ];\n\n      # Enable/disable Cabal flags\n      cabalFlags.with-generics = true;\n    };\n  };\n};\n")),(0,l.kt)("admonition",{title:"Note",type:"info"},(0,l.kt)("h3",{parentName:"admonition",id:"nixpkgs-functions"},(0,l.kt)("a",{parentName:"h3",href:"https://zero-to-nix.com/concepts/nixpkgs"},"nixpkgs")," functions"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"pkgs.haskell.lib")," module provides various utility functions that you can use to override Haskell packages. The canonical place to find documentation on these is ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/NixOS/nixpkgs/blob/master/pkgs/development/haskell-modules/lib/compose.nix"},"the source"),". haskell-flake provides a ",(0,l.kt)("inlineCode",{parentName:"li"},"settings")," submodule for convienience. For eg., the ",(0,l.kt)("inlineCode",{parentName:"li"},"dontCheck")," function translates to ",(0,l.kt)("inlineCode",{parentName:"li"},"settings.<name>.check"),"; the full list of options can be seen ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/srid/haskell-flake/blob/master/nix/modules/project/settings/all.nix"},"here"),"."))),(0,l.kt)("h2",{id:"settings-share"},"Sharing settings"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/haskell-flake/modules"},"Project modules")," export both ",(0,l.kt)("inlineCode",{parentName:"p"},"packages")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"settings")," options for reuse in downstream Haskell projects."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/srid/emanote/commit/5b24bd04f94e03afe66ee01da723e4a05d854953"},"Emanote overrides"),": also demonstrates how to add a ",(0,l.kt)("em",{parentName:"li"},"new")," setting option (",(0,l.kt)("inlineCode",{parentName:"li"},"removeReferencesTo"),").")))}d.isMDXComponent=!0}}]);