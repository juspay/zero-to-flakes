"use strict";(self.webpackChunkflakular=self.webpackChunkflakular||[]).push([[6602],{3938:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(5893),o=r(1151);const i={slug:"/treefmt-nix",sidebar_position:10,sidebar_label:"Auto formatting"},a="Auto formatting using treefmt-nix",l={id:"modules/treefmt",title:"Auto formatting using treefmt-nix",description:"treefmt provides an interface to run multiple code formatters at once, so you don't have to run them manually for each file type.",source:"@site/docs/modules/treefmt.md",sourceDirName:"modules",slug:"/treefmt-nix",permalink:"/treefmt-nix",draft:!1,unlisted:!1,editUrl:"https://github.com/juspay/flakular.in/edit/main/docs/modules/treefmt.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{slug:"/treefmt-nix",sidebar_position:10,sidebar_label:"Auto formatting"},sidebar:"tutorialSidebar",previous:{title:"Services",permalink:"/services-flake"},next:{title:"Systems",permalink:"/nixos-flake"}},s={},d=[{value:"Writing the Nix to configure treefmt in your project",id:"writing-the-nix-to-configure-treefmt-in-your-project",level:2},{value:"Add treefmt and flake-root to your inputs",id:"add-treefmt-and-flake-root-to-your-inputs",level:3},{value:"Import <code>flakeModule</code> output of treefmt and flake-root",id:"import-flakemodule-output-of-treefmt-and-flake-root",level:3},{value:"Configure your formatter",id:"configure-your-formatter",level:3},{value:"Add treefmt to your devShell",id:"add-treefmt-to-your-devshell",level:3},{value:"Flake check",id:"flake-check",level:3},{value:"Tips",id:"tips",level:2},{value:"Exclude folders",id:"exclude-folders",level:3},{value:"Use a different package for formatter",id:"use-a-different-package-for-formatter",level:3},{value:"Pass additional parameters to your formatter",id:"pass-additional-parameters-to-your-formatter",level:3},{value:"Example",id:"example",level:2},{value:"Upcoming",id:"upcoming",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"auto-formatting-using-treefmt-nix",children:["Auto formatting using ",(0,n.jsx)(t.code,{children:"treefmt-nix"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/numtide/treefmt",children:"treefmt"})," provides an interface to run multiple ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Prettyprint",children:"code formatters"})," at once, so you don't have to run them manually for each file type."]}),"\n",(0,n.jsx)(t.h2,{id:"writing-the-nix-to-configure-treefmt-in-your-project",children:"Writing the Nix to configure treefmt in your project"}),"\n",(0,n.jsx)(t.h3,{id:"add-treefmt-and-flake-root-to-your-inputs",children:"Add treefmt and flake-root to your inputs"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/srid/flake-root",children:(0,n.jsx)(t.code,{children:"flake-root"})})," module is needed to find the root of your project based on the presence of a file, by default it is ",(0,n.jsx)(t.code,{children:"flake.nix"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-nix",children:'{\n  # Inside `inputs`\n  treefmt-nix.url = "github:numtide/treefmt-nix";\n  flake-root.url = "github:srid/flake-root";\n}\n'})}),"\n",(0,n.jsxs)(t.h3,{id:"import-flakemodule-output-of-treefmt-and-flake-root",children:["Import ",(0,n.jsx)(t.code,{children:"flakeModule"})," output of treefmt and flake-root"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-nix",children:"{\n  # Inside outputs' `flake-parts.lib.mkFlake` \n  imports = [\n    inputs.treefmt-nix.flakeModule\n    inputs.flake-root.flakeModule\n  ];\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"configure-your-formatter",children:"Configure your formatter"}),"\n",(0,n.jsxs)(t.p,{children:["To actually enable the individual formatters you want to configure treefmt. The example configuration below only consists of formatters required by a haskell project using nix. Refer to ",(0,n.jsx)(t.a,{href:"https://numtide.github.io/treefmt/formatters/",children:"treefmt-doc"})," for more formatters."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-nix",children:"{\n  # Inside mkFlake's `perSystem`\n  treefmt.config = {\n    inherit (config.flake-root) projectRootFile;\n    # This is the default, and can be overriden.\n    package = pkgs.treefmt;\n    # formats .hs files (fourmolu is also available)\n    programs.ormolu.enable = true;\n    # formats .nix files\n    programs.nixpkgs-fmt.enable = true;\n    # formats .cabal files\n    programs.cabal-fmt.enable = false;\n    # Suggests improvements for your code in .hs files\n    programs.hlint.enable = false;\n  };\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"add-treefmt-to-your-devshell",children:"Add treefmt to your devShell"}),"\n",(0,n.jsxs)(t.p,{children:["Finally, add the resulting treefmt wrapper (",(0,n.jsx)(t.code,{children:"build.wrapper"}),") to your devShell. We also add the individual formatters (",(0,n.jsx)(t.code,{children:"build.programs"}),") to the devShell, so that they can be used directly in text editors and IDEs."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-nix",children:"{\n  # Inside mkFlake's `perSystem`\n  haskellProjects.default = {\n    devShell.tools = _: {\n      treefmt = config.treefmt.build.wrapper;\n    } // config.treefmt.build.programs;\n  };\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"flake-check",children:"Flake check"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"treefmt-nix"})," flake module automatically adds a flake check that can be evaluated to make sure that the project is already autoformatted."]}),"\n",(0,n.jsx)(t.h2,{id:"tips",children:"Tips"}),"\n",(0,n.jsx)(t.h3,{id:"exclude-folders",children:"Exclude folders"}),"\n",(0,n.jsx)(t.p,{children:"If there are folders where you wouldn't want to run the formatter on, use the following:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-nix",children:'  # Inside mkFlake\'s `perSystem.treefmt.config`\n  settings.formatter.<formatter-name>.excludes = [ "./foo/*" ];\n'})}),"\n",(0,n.jsx)(t.h3,{id:"use-a-different-package-for-formatter",children:"Use a different package for formatter"}),"\n",(0,n.jsxs)(t.p,{children:["The package shipped with the current nixpkgs might not be the desired one, follow the snippet below to override the package (assuming ",(0,n.jsx)(t.code,{children:"nixpkgs-21_11"})," is present in your flake's inputs)."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-nix",children:"  # Inside mkFlake's `perSystem.treefmt.config`\n  programs.ormolu.package = nixpkgs-21_11.haskellPackages.ormolu;\n"})}),"\n",(0,n.jsx)(t.p,{children:"The same can be applied to other formatters."}),"\n",(0,n.jsx)(t.h3,{id:"pass-additional-parameters-to-your-formatter",children:"Pass additional parameters to your formatter"}),"\n",(0,n.jsxs)(t.p,{children:["You might want to change a certain behaviour of your formatter by overriding by passing the input to the executable. The following example shows how to pass ",(0,n.jsx)(t.code,{children:"ghc-opt"})," to ormolu:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-nix",children:'  # Inside mkFlake\'s `perSystem.treefmt.config`\n  settings.formatter.ormolu = {\n    options = [\n      "--ghc-opt"\n      "-XTypeApplications"\n    ];\n  };\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Ormolu requires this ",(0,n.jsx)(t.code,{children:"ghc-opt"})," because unlike a lot of language extensions which are enabled by default, there are some which aren't. These can be found using ",(0,n.jsx)(t.code,{children:"ormolu --manual-exts"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/srid/haskell-template/blob/a8b6d1f547d761ba392a31e644494d0eeee49c2a/flake.nix#L38-L55",children:"Sample treefmt config for your haskell project"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"upcoming",children:"Upcoming"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"treefmt"})," will provide a pre-commit mode to disable commit if formatting checks fail. This is tracked here: ",(0,n.jsx)(t.a,{href:"https://github.com/numtide/treefmt/issues/78",children:"https://github.com/numtide/treefmt/issues/78"})]}),"\n"]})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>a});var n=r(7294);const o={},i=n.createContext(o);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);