"use strict";(self.webpackChunkflakular=self.webpackChunkflakular||[]).push([[6106],{4998:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=s(5893),t=s(1151);const i={slug:"/haskell-flake/size"},l="Optimize package size",r={id:"modules/haskell-flake/guide/size",title:"Optimize package size",description:"Haskell package derivations created by haskell-flake are shipped with symlinks to other store paths, like $out/lib, $out/nix-support and $out/share/doc. In addition, enabling profiling or haddock can increase the size of these packages. If your Haskell application is end-user software, you will want to strip all but the executables. This can be achieved using justStaticExecutables:",source:"@site/docs/modules/haskell-flake/guide/size.md",sourceDirName:"modules/haskell-flake/guide",slug:"/haskell-flake/size",permalink:"/haskell-flake/size",draft:!1,unlisted:!1,editUrl:"https://github.com/srid/haskell-flake/blob/master/doc/guide/size.md",tags:[],version:"current",frontMatter:{slug:"/haskell-flake/size"},sidebar:"tutorialSidebar",previous:{title:"Creating package sets",permalink:"/haskell-flake/package-set"},next:{title:"Examples",permalink:"/haskell-flake/examples"}},o={},c=[{value:"Removing unnecessary Nix dependencies",id:"removing-unnecessary-nix-dependencies",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"optimize-package-size",children:"Optimize package size"}),"\n",(0,a.jsxs)(n.p,{children:["Haskell package derivations created by ",(0,a.jsx)(n.code,{children:"haskell-flake"})," are shipped with symlinks to other store paths, like ",(0,a.jsx)(n.code,{children:"$out/lib"}),", ",(0,a.jsx)(n.code,{children:"$out/nix-support"})," and ",(0,a.jsx)(n.code,{children:"$out/share/doc"}),". In addition, enabling profiling or haddock can increase the size of these packages. If your Haskell application is end-user software, you will want to strip all but the executables. This can be achieved using ",(0,a.jsx)(n.code,{children:"justStaticExecutables"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-nix",metastring:'title="flake.nix"',children:"  # Inside perSystem\n  packages.default = pkgs.haskell.lib.justStaticExecutables self'.packages.foo;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"removing-unnecessary-nix-dependencies",children:"Removing unnecessary Nix dependencies"}),"\n",(0,a.jsxs)(n.p,{children:["There can be cases where ",(0,a.jsx)(n.code,{children:"justStaticExecutables"})," doesn't work. In such cases, you can manually remove references to the store paths that you don't want to ship. Let's say you have a haskell project ",(0,a.jsx)(n.code,{children:"foo"})," that is dependendent on ",(0,a.jsx)(n.code,{children:"bar"})," and ",(0,a.jsx)(n.code,{children:"bar"}),"\nrelies on ",(0,a.jsx)(n.code,{children:"data-files"})," in its cabal (which data-files can be, for instance, ",(0,a.jsx)(n.code,{children:"js"})," or ",(0,a.jsx)(n.code,{children:"html"})," files). Considering you are using ",(0,a.jsx)(n.code,{children:"cabal-install < 3.10.1.0"})," the final executable of ",(0,a.jsx)(n.code,{children:"foo"})," will have a reference to ",(0,a.jsx)(n.code,{children:"bar"})," and ",(0,a.jsx)(n.code,{children:"bar"})," will depend on ",(0,a.jsx)(n.code,{children:"ghc"}),", thus increasing the overal size of the docker image."]}),"\n",(0,a.jsx)(n.p,{children:"But how do you arrive at this point in the first place? i.e how do you pin point the exact store paths that are causing the increase in size? These are the rough steps that you can follow, if you are packaging it as part of a docker image:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Build and scan ",(0,a.jsx)(n.a,{href:"/docker",children:"the docker image"})," for store paths that are taking up the most space:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"nix build .#dockerImage\ndocker load -i < result\ndocker run --rm -it <name:tag> sh -c 'du -sh /nix/store/*' | sort -h | tail\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["After the scan you will notice that ",(0,a.jsx)(n.code,{children:"bar"})," will be present and its quite obvious it shouldn't be present because all of that will be packaged in the executable of ",(0,a.jsx)(n.code,{children:"foo"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["It might not be obvious to you that ",(0,a.jsx)(n.code,{children:"bar"})," is causing the increase in size. In such cases you can use ",(0,a.jsx)(n.code,{children:"nix why-depends"})," to find out why ",(0,a.jsx)(n.code,{children:"ghc"})," is present in the docker image:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"nix why-depends /nix/store/...-foo /nix/store/...-ghc-x.x.x\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Now that you know that ",(0,a.jsx)(n.code,{children:"bar"})," is causing the increase in size, let's wrap the executable of ",(0,a.jsx)(n.code,{children:"foo"})," ",(0,a.jsx)(n.a,{href:"https://srid.ca/remove-references-to",children:"removing references to"})," ",(0,a.jsx)(n.code,{children:"bar"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-nix",metastring:'title="flake.nix"',children:'{\n  # Inside `haskellProjects`\n  haskellProjects.default = \n    let\n      # Forked from: https://github.com/srid/emanote/blob/24c7e5e29a91ec201a48fad1ac028a123b82a402/flake.nix#L52-L62\n      # We shouldn\'t need this after https://github.com/haskell/cabal/pull/8534\n      removeReferencesTo = disallowedReferences: drv:\n        drv.overrideAttrs (old: rec {\n          inherit disallowedReferences;\n          # Ditch data dependencies that are not needed at runtime.\n          # cf. https://github.com/NixOS/nixpkgs/pull/204675\n          # cf. https://srid.ca/remove-references-to\n          postInstall = (old.postInstall or "") + \'\'\n            ${lib.concatStrings (map (e: "echo Removing reference to: ${e}\\n") disallowedReferences)}\n            ${lib.concatStrings (map (e: "remove-references-to -t ${e} $out/bin/*\\n") disallowedReferences)}\n          \'\';\n        });\n    in\n    {\n      # ...\n      settings = {\n        foo = {self, super, ... }: {\n          justStaticExecutables = true;\n          removeReferencesTo = [\n            self.bar\n          ];\n        };\n      };\n      # ...\n    };\n}\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Voila! Now you have a docker image that is much smaller than before."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>l});var a=s(7294);const t={},i=a.createContext(t);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);