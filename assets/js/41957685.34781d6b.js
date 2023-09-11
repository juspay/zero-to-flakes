"use strict";(self.webpackChunkzero_to_flakes=self.webpackChunkzero_to_flakes||[]).push([[7679],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={slug:"/docker"},o="Building a docker image",l={unversionedId:"practices/docker",id:"practices/docker",title:"Building a docker image",description:"Building a docker image is much simpler with Nix compared to writing Dockerfile. Since the entire build process is handled by Nix flakes, most of what's left to do for docker image creation is copying of the derivations and configuration.",source:"@site/docs/practices/docker.md",sourceDirName:"practices",slug:"/docker",permalink:"/docker",draft:!1,editUrl:"https://github.com/juspay/zero-to-flakes/edit/main/docs/practices/docker.md",tags:[],version:"current",frontMatter:{slug:"/docker"},sidebar:"tutorialSidebar",previous:{title:"Using direnv to manage dev environments",permalink:"/direnv"},next:{title:"Gotchas",permalink:"/gotchas"}},s={},c=[{value:"Writing the Nix to build the docker image",id:"writing-the-nix-to-build-the-docker-image",level:2},{value:"Build the docker image",id:"build-the-docker-image",level:2},{value:"Tips",id:"tips",level:2},{value:"Size",id:"size",level:3},{value:"Time",id:"time",level:3},{value:"Tag",id:"tag",level:3},{value:"SSL certs",id:"ssl-certs",level:3},{value:"Example",id:"example",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"building-a-docker-image"},"Building a docker image"),(0,r.kt)("p",null,"Building a docker image is much simpler with Nix compared to writing ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),". Since the entire build process is handled by Nix flakes, most of what's left to do for docker image creation is copying of the derivations and configuration."),(0,r.kt)("h2",{id:"writing-the-nix-to-build-the-docker-image"},"Writing the Nix to build the docker image"),(0,r.kt)("p",null,'Consider a haskell-flake project "foo". To copy the binaries generated by the ',(0,r.kt)("inlineCode",{parentName:"p"},"default")," package to ",(0,r.kt)("inlineCode",{parentName:"p"},"/bin")," on the image,  one can use ",(0,r.kt)("inlineCode",{parentName:"p"},"copyToRoot")," attribute offered by ",(0,r.kt)("a",{parentName:"p",href:"https://nixos.org/manual/nixpkgs/stable/#sec-pkgs-dockerTools"},(0,r.kt)("inlineCode",{parentName:"a"},"dockerTools.buildImage")),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nix"},'{\n  # Inside perSystem\n  packages.dockerImage = pkgs.dockerTools.buildImage {\n    name = "foo";\n    copyToRoot = pkgs.buildEnv {\n      paths = with pkgs; [\n        self\'.packages.default\n      ];\n      name = "foo-root";\n      pathsToLink = [ "/bin" ];\n    };\n  };\n}\n')),(0,r.kt)("p",null,"In addition to copying over the flake ",(0,r.kt)("inlineCode",{parentName:"p"},"packages"),", we may also copy ",(0,r.kt)("em",{parentName:"p"},"paths")," in the project. ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," can be added to ",(0,r.kt)("inlineCode",{parentName:"p"},"paths")," to expose the project directory. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nix"},'{\n  copyToRoot = pkgs.buildEnv {\n    paths = with pkgs; [\n      coreutils\n      bash\n      self\n    ];\n    name = "foo-root";\n    pathsToLink = [ "/foo_sub" "/bin" ];\n  };\n}\n')),(0,r.kt)("p",null,"If you'd like your docker image to run your haskell project's default package when the container starts, use the following config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nix"},"{\n  # Inside dockerImage's `buildImage`\n  config = {\n    Cmd = [ \"${pkgs.lib.getExe self'.packages.default}\" ];\n  };\n}\n")),(0,r.kt)("h2",{id:"build-the-docker-image"},"Build the docker image"),(0,r.kt)("p",null,"To build the docker image ",(0,r.kt)("em",{parentName:"p"},"as a Nix derivation"),", run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nix build .#dockerImage\n")),(0,r.kt)("p",null,"To load this image into your local docker image registry, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker load -i $(nix build .#dockerImage --print-out-paths)\n")),(0,r.kt)("h2",{id:"tips"},"Tips"),(0,r.kt)("h3",{id:"size"},"Size"),(0,r.kt)("p",null,"Docker images including Haskell packages can be optimized using the methods described ",(0,r.kt)("a",{parentName:"p",href:"/haskell-flake/size"},"here"),"."),(0,r.kt)("h3",{id:"time"},"Time"),(0,r.kt)("p",null,"If you don't want ",(0,r.kt)("inlineCode",{parentName:"p"},"docker images")," showing that the image was created several decades ago, use the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nix"},'{\n  # Inside perSystem.packages\' `dockerImage`:\n  pkgs.dockerTools.buildImage {\n    name = "foo";\n    created = "now";\n  };\n}\n')),(0,r.kt)("h3",{id:"tag"},"Tag"),(0,r.kt)("p",null,"If you want to tag the images with the commit id of the working copy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nix"},'{\n  # Inside perSystem.packages\' `dockerImage`:\n  pkgs.dockerTools.buildImage {\n    name = "foo";\n    tag = builtins.substring 0 9 (self.rev or "dev");\n  };\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://nixos.org/manual/nix/stable/language/builtins.html#builtins-substring"},(0,r.kt)("inlineCode",{parentName:"a"},"builtins.substring 0 9 self.rev"))," is the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"git rev-parse --short HEAD"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"self.rev")," is non-null only on a clean working copy and hence the tag is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," when the working copy is dirty."),(0,r.kt)("h3",{id:"ssl-certs"},"SSL certs"),(0,r.kt)("p",null,"In order to be able to make https connections from inside of the docker image, you must expose the cacert Nix package via the relevant environment variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nix"},'{\n  # Inside dockerTools.buildImage\n  config = {\n    Env = [ \n      "SSL_CERT_FILE=${pkgs.cacert}/etc/ssl/certs/ca-bundle.crt" \n      # Ref: https://hackage.haskell.org/package/x509-system-1.6.7/docs/src/System.X509.Unix.html#getSystemCertificateStore\n      "SYSTEM_CERTIFICATE_PATH=${pkgs.cacert}/etc/ssl/certs/ca-bundle.crt"\n    ];\n  };\n}\n')),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nammayatri/nammayatri/pull/14/files#diff-18ea3dd9a6a84702796b8dac608d0cad8e396a7c2e8c52732fcb7e5f52d1b0b9"},"Sample flake-parts module for docker"))))}u.isMDXComponent=!0}}]);