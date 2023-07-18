"use strict";(self.webpackChunkzero_to_flakes=self.webpackChunkzero_to_flakes||[]).push([[272],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(a),d=o,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(k,s(s({ref:t},c),{},{components:a})):n.createElement(k,s({ref:t},c))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:o,s[1]=p;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3612:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var n=a(7462),o=(a(7294),a(3905));const r={slug:"/process-compose-flake",sidebar_position:3,sidebar_label:"Processes"},s="Process management using process-compose-flake",p={unversionedId:"modules/process-compose-flake/index",id:"modules/process-compose-flake/index",title:"Process management using process-compose-flake",description:"process-compose-flake is a flake-parts module for process-compose.",source:"@site/docs/modules/process-compose-flake/index.md",sourceDirName:"modules/process-compose-flake",slug:"/process-compose-flake",permalink:"/process-compose-flake",draft:!1,editUrl:"https://github.com/juspay/zero-to-flakes/tree/main/docs/modules/process-compose-flake/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/process-compose-flake",sidebar_position:3,sidebar_label:"Processes"},sidebar:"tutorialSidebar",previous:{title:"Scripts",permalink:"/mission-control"},next:{title:"Services",permalink:"/services-flake"}},i={},l=[{value:"Quick Example",id:"quick-example",level:2},{value:"Usage",id:"usage",level:2},{value:"Module API",id:"module-api",level:2},{value:"Related projects",id:"related-projects",level:2}],c={toc:l},m="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"process-management-using-process-compose-flake"},"Process management using ",(0,o.kt)("inlineCode",{parentName:"h1"},"process-compose-flake")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Platonic-Systems/process-compose-flake"},"process-compose-flake")," is a ",(0,o.kt)("a",{parentName:"p",href:"https://flake.parts/"},"flake-parts")," module for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/F1bonacc1/process-compose"},"process-compose"),"."),(0,o.kt)("p",null,"This ",(0,o.kt)("inlineCode",{parentName:"p"},"flake-parts")," module allows you to declare one or more ",(0,o.kt)("inlineCode",{parentName:"p"},"process-compose")," configurations using Nix attribute sets. It will generate corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"packages")," that wrap the ",(0,o.kt)("inlineCode",{parentName:"p"},"process-compose")," binary with the given configuration."),(0,o.kt)("p",null,"This module is practical for local development e.g. if you have a lot of runtime dependencies that depend on each other. Stop executing these programs imperatively over and over again in a specific order, and stop the need to write complicated shell scripts to automate this. ",(0,o.kt)("inlineCode",{parentName:"p"},"process-compose")," gives you a process dashboard for monitoring, inspecting logs for each process, and much more, all of this in a TUI."),(0,o.kt)("h2",{id:"quick-example"},"Quick Example"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Platonic-Systems/process-compose-flake/blob/main/example/flake.nix"},(0,o.kt)("inlineCode",{parentName:"a"},"example/flake.nix"))," for an example flake. This example shows a demo of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/coleifer/sqlite-web"},"sqlite-web")," using the sample ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lerocha/chinook-database"},"chinhook-database"),"."),(0,o.kt)("p",null,"To run this example locally,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir example && cd example\nnix flake init -t github:Platonic-Systems/process-compose-flake\nnix run\n")),(0,o.kt)("p",null,"This should open ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:8213/"},"http://127.0.0.1:8213/")," in your web browser. If not, navigate to the logs for the ",(0,o.kt)("inlineCode",{parentName:"p"},"sqlite-web")," process and access the URL. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"demo")," as the password to access sqlite-web. The interface should look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/Platonic-Systems/process-compose-flake/assets/3998/254443fa-f3c2-4675-9ced-2a39ac23591d",alt:null})),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Let's say you want to have a ",(0,o.kt)("inlineCode",{parentName:"p"},"devShell")," that makes a command ",(0,o.kt)("inlineCode",{parentName:"p"},"watch-server")," available, that you can use to spin up your projects ",(0,o.kt)("inlineCode",{parentName:"p"},"backend-server"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"frontend-server"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"proxy-server"),"."),(0,o.kt)("p",null,"To achieve this using ",(0,o.kt)("inlineCode",{parentName:"p"},"process-compose-flake")," you can simply add the following code to the ",(0,o.kt)("inlineCode",{parentName:"p"},"perSystem")," function in your ",(0,o.kt)("inlineCode",{parentName:"p"},"flake-parts")," flake."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nix"},'process-compose.watch-server = {\n  settings.processes = {\n    backend-server.command = "${self\'.apps.backend-server.program} --port 9000";\n    frontend-server.command = "${self\'.apps.frontend-server.program} --port 9001";\n    proxy-server.command =\n      let\n        proxyConfig = pkgs.writeTextFile {\n          name = "proxy.conf";\n          text = \'\'\n            ...\n          \'\';\n        };\n      in\n      "${self\'.apps.proxy-server.program} -c ${proxyConfig} -p 8000";\n  };\n};\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"process-compose-flake")," will generate the ",(0,o.kt)("inlineCode",{parentName:"p"},"packages.${system}.watch-server")," output for you."),(0,o.kt)("p",null,"You can then spin up the processes by running ",(0,o.kt)("inlineCode",{parentName:"p"},"nix run .#watch-server"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"package")," output in turn can be used to make the ",(0,o.kt)("inlineCode",{parentName:"p"},"watch-server")," command available in your ",(0,o.kt)("inlineCode",{parentName:"p"},"devShell"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nix"},'devShells = {\n  default = pkgs.mkShell {\n    name = "my-shell";\n    nativeBuildInputs = [\n      self\'.packages.watch-server\n    ];\n  };\n};\n')),(0,o.kt)("p",null,"You can enter your devShell by running ",(0,o.kt)("inlineCode",{parentName:"p"},"nix develop")," and run ",(0,o.kt)("inlineCode",{parentName:"p"},"watch-server")," to run your processes."),(0,o.kt)("h2",{id:"module-api"},"Module API"),(0,o.kt)("p",null,"Our submodule mirrors the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/F1bonacc1/process-compose/blob/main/process-compose.yaml"},"process-compose YAML schema"),". A few things to remember:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"process-compose.<name>.environment"),": In the YAML config, a list of environment strings are specified. While this is supported, you can also specify the env vars as a Nix attrset"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"process-compose.<name>.processes.<name>.command"),": The command string does not have access to the process environment, so if your command becomes shellscript-like you probably want to wrap it in a ",(0,o.kt)("inlineCode",{parentName:"li"},"pkgs.writeShellApplication")," (see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Platonic-Systems/process-compose-flake/issues/22"},"#","22"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"process-compose.<name>.shell"),": This is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"pkgs.bash")," by default, obviating reproducibility issues due to depending on globally available bash.")),(0,o.kt)("h2",{id:"related-projects"},"Related projects"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/srid/proc-flake"},(0,o.kt)("inlineCode",{parentName:"a"},"proc-flake")),": A similar module that uses a ",(0,o.kt)("inlineCode",{parentName:"li"},"Procfile"),"-based runner. It is less feature-rich, but ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Platonic-Systems/process-compose-flake/issues/30"},"at times more reliable")," than process-compose."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/services-flake"},(0,o.kt)("inlineCode",{parentName:"a"},"services-flake")),": NixOS-like services built on top of process-compose-flake.")))}u.isMDXComponent=!0}}]);