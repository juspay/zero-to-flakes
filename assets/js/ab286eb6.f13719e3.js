"use strict";(self.webpackChunkflakular=self.webpackChunkflakular||[]).push([[7297],{2098:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=t(5893),s=t(1151);const a={slug:"/health"},r="Nix Health",c={id:"practices/nix-health",title:"Nix Health",description:"nix-health is a program that checks the health of your Nix install. Furthermore, individual projects can configure their own health checks in their flake.nix. For example, the nammayatri project checks that the cachix cache is in use.",source:"@site/docs/practices/nix-health.md",sourceDirName:"practices",slug:"/health",permalink:"/health",draft:!1,unlisted:!1,editUrl:"https://github.com/juspay/flakular.in/edit/main/docs/practices/nix-health.md",tags:[],version:"current",frontMatter:{slug:"/health"},sidebar:"tutorialSidebar",previous:{title:"Building a docker image",permalink:"/docker"},next:{title:"Gotchas",permalink:"/gotchas"}},h={},l=[{value:"Checks performed",id:"checks-performed",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuring in <code>flake.nix</code>",id:"conf",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",sup:"sup",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"nix-health",children:"Nix Health"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/juspay/nix-browser/tree/main/crates/nix_health",children:"nix-health"}),(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," is a program that checks the health of your Nix install. Furthermore, individual projects can configure their own health checks in their ",(0,i.jsx)(n.code,{children:"flake.nix"}),". For example, the nammayatri project checks that ",(0,i.jsx)(n.a,{href:"https://github.com/nammayatri/nammayatri/blob/2201f618af69dc78070fefeb4f082420b1d226cc/flake.nix#L29-L31",children:"the cachix cache is in use"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/juspay/nix-browser/assets/3998/abbbc54b-d888-42fb-a2a8-31d9ae142d6a",alt:""})}),"\n",(0,i.jsx)(n.h2,{id:"checks-performed",children:"Checks performed"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Check"}),(0,i.jsxs)(n.th,{children:["Configurable in ",(0,i.jsx)(n.code,{children:"flake.nix"}),"?"]})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Flakes are enabled"}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Nix version is not too old"}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Nix runs natively (no rosetta)",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})]}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Builds use multiple cores (",(0,i.jsx)(n.code,{children:"max-jobs"}),")"]}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Nix Caches in use"}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["$USER is in ",(0,i.jsx)(n.code,{children:"trusted-users"})]}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Direnv: installed and activated"}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Min RAM / Disk space"}),(0,i.jsx)(n.td,{children:"Yes"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Note that some checks are considered non-essential. For eg., the disk space check looks for 1TB+ disk space, but if the user is on a laptop with 256GB SSD, the check will report a warning instead of failing. This can also be configured in per-project basis from ",(0,i.jsx)(n.code,{children:"flake.nix"})," (see below)."]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.p,{children:"nix-health is still in development. To run the development version,"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'nix run "github:juspay/nix-browser#nix-health"\n'})}),"\n",(0,i.jsx)(n.p,{children:"To run nix-health along with health check configuration specified in a project flake, pass that flake as an argument. For eg., to run nix-health with additional checks from the nammayatri project, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# The argument can be any flake URL (including a local path)\nnix run "github:juspay/nix-browser#nix-health" github:nammayatri/nammayatri\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"conf",children:["Configuring in ",(0,i.jsx)(n.code,{children:"flake.nix"})]}),"\n",(0,i.jsx)(n.p,{children:"To add project specific health checks or configure health checks, add the following flake output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nix",children:'{\n  outputs = inputs: {\n    nix-health.default = {\n      # Add configuration here\n      caches.required = [ "https://ourproject.cachix.org" ];\n    };\n  };\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["To see all available configuration options, run ",(0,i.jsx)(n.code,{children:"nix-health --dump-schema"}),". This will dump the schema of the configuration in JSON format. Convert that to a Nix attrset to see what can be added under the ",(0,i.jsx)(n.code,{children:"nix-health.default"})," attrset of your flake."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh-session",children:'$ nix-health --dump-schema > schema.json\n$ nix eval --impure --expr \'builtins.fromJSON (builtins.readFile ./schema.json)\' | nix run nixpkgs#alejandra -- --quiet\n{\n  caches = {required = ["https://cache.nixos.org/"];};\n  direnv = {\n    enable = true;\n    required = false;\n  };\n  flake-enabled = {};\n  max-jobs = {};\n  nix-version = {min-required = "2.13.0";};\n  rosetta = {\n    enable = true;\n    required = true;\n  };\n  system = {\n    enable = true;\n    min_disk_space = "1024.0 GB";\n    min_ram = null;\n    required = false;\n  };\n  trusted-users = {};\n}\n'})}),"\n",(0,i.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,i.jsxs)(n.p,{children:["nix-health originally began as a ",(0,i.jsx)(n.a,{href:"https://github.com/srid/nix-health",children:"script"})," which is now deprecated. ",(0,i.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{id:"user-content-fn-2",children:["\n",(0,i.jsxs)(n.p,{children:["This check is only performed on macOS with Apple Silicon. ",(0,i.jsx)(n.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var i=t(7294);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);