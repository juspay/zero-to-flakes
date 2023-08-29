"use strict";(self.webpackChunkzero_to_flakes=self.webpackChunkzero_to_flakes||[]).push([[545],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>d});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=n.createContext({}),c=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(i.Provider,{value:a},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=c(t),g=l,d=k["".concat(i,".").concat(g)]||k[g]||u[g]||s;return t?n.createElement(d,r(r({ref:a},p),{},{components:t})):n.createElement(d,r({ref:a},p))}));function d(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var s=t.length,r=new Array(s);r[0]=g;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[k]="string"==typeof e?e:l,r[1]=o;for(var c=2;c<s;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5383:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=t(7462),l=(t(7294),t(3905));const s={slug:"/haskell-flake/package-set"},r="Creating package sets",o={unversionedId:"modules/haskell-flake/guide/package-set",id:"modules/haskell-flake/guide/package-set",title:"Creating package sets",description:"While haskell-flake is generally used to develop and build individual Haskell projects, you can also use it to create a custom Haskell package set that you can use in other projects. This is useful if you want to create a common package set to be shared across multiple projects.",source:"@site/docs/modules/haskell-flake/guide/package-set.md",sourceDirName:"modules/haskell-flake/guide",slug:"/haskell-flake/package-set",permalink:"/haskell-flake/package-set",draft:!1,editUrl:"https://github.com/srid/haskell-flake/blob/d3c8d8be31d3a5dcf9d49e9dacfc570b5c736658/doc/guide/package-set.md",tags:[],version:"current",frontMatter:{slug:"/haskell-flake/package-set"},sidebar:"tutorialSidebar",previous:{title:"Project modules",permalink:"/haskell-flake/modules"},next:{title:"Examples",permalink:"/haskell-flake/examples"}},i={},c=[{value:"Examples",id:"examples",level:2}],p={toc:c},k="wrapper";function u(e){let{components:a,...t}=e;return(0,l.kt)(k,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"creating-package-sets"},"Creating package sets"),(0,l.kt)("p",null,"While haskell-flake is generally used to develop and build individual Haskell projects, you can also use it to create a custom Haskell package set that you can use in other projects. This is useful if you want to create a common package set to be shared across multiple projects."),(0,l.kt)("p",null,'A "project" in haskell-flake primarily serves the purpose of developing Haskell projects. Additionally, a project also exposes the final ',(0,l.kt)("em",{parentName:"p"},"package set")," via the readonly option ",(0,l.kt)("inlineCode",{parentName:"p"},"outputs.finalPackages"),". This package set includes the base packages (",(0,l.kt)("inlineCode",{parentName:"p"},"basePackages"),"), the local packages as well as any ",(0,l.kt)("a",{parentName:"p",href:"/haskell-flake/dependency"},"dependency overrides")," you set. Since we are are only interested in creating a new package set, we can use empty local packages and disable the dev shell:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nix"},"{\n  haskellProjects.ghc810 = {\n    defaults.packages = {};  # Disable scanning for local package\n    devShell.enable = false; # Disable devShells\n    autoWire = [ ];          # Don't wire any flake outputs\n\n    # Start from nixpkgs's ghc8107 package set\n    basePackages = pkgs.haskell.packages.ghc8107;\n  };\n}\n")),(0,l.kt)("p",null,"You can access this package set as ",(0,l.kt)("inlineCode",{parentName:"p"},"config.haskellProjects.ghc810.outputs.finalPackages"),". But this is not terribly interesting, because it is the exact same as the package set ",(0,l.kt)("inlineCode",{parentName:"p"},"pkgs.haskell.packages.ghc8107")," from nixpkgs. So let's add and override some packages in this set:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nix"},'{\n  haskellProjects.ghc810 = {\n    defaults.packages = {};  # No local packages\n    devShell.enable = false;\n\n    basePackages = pkgs.haskell.packages.ghc8107;\n\n    packages = {\n      # New packages from flake inputs\n      mylib.source = inputs.mylib;\n      # Dependencies from Hackage\n      aeson.source = "1.5.6.0";\n      dhall.source = "1.35.0";\n    };\n    settings = {\n       aeson.jailbreak = true;\n    };\n  };\n}\n')),(0,l.kt)("p",null,"This will create a package set that overrides the ",(0,l.kt)("inlineCode",{parentName:"p"},"aeson")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"dhall")," packages using the specified versions from Hackage, but with the ",(0,l.kt)("inlineCode",{parentName:"p"},"aeson")," package having the ",(0,l.kt)("inlineCode",{parentName:"p"},"jailbreak")," flag set (which relaxes its Cabal constraints).  It also adds the ",(0,l.kt)("inlineCode",{parentName:"p"},"mylib")," package which exists neither in nixpkgs nor in Hackage, but comes from somewhere arbitrary and specified as flake input."),(0,l.kt)("p",null,"In your ",(0,l.kt)("em",{parentName:"p"},"actual")," haskell project, you can use this package set (",(0,l.kt)("inlineCode",{parentName:"p"},"config.haskellProjects.ghc810.outputs.finalPackages"),") as its base package set:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nix"},"{\n  haskellProjects.myproject = {\n    packages.mypackage.source = ./.;\n\n    basePackages = config.haskellProjects.ghc810.outputs.finalPackages;\n  };\n}\n")),(0,l.kt)("p",null,"Finally, you can externalize this ",(0,l.kt)("inlineCode",{parentName:"p"},"ghc810")," package set as either a flake-parts module or as a ",(0,l.kt)("a",{parentName:"p",href:"/haskell-flake/modules"},"haskell-flake module"),", and thereon import it from multiple repositories."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/nammayatri/common/pull/11/files"},"https://github.com/nammayatri/common/pull/11/files"))))}u.isMDXComponent=!0}}]);