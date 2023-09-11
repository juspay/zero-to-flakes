"use strict";(self.webpackChunkzero_to_flakes=self.webpackChunkzero_to_flakes||[]).push([[7679],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={slug:"/docker"},o="Building a docker image",l={unversionedId:"practices/docker",id:"practices/docker",title:"Building a docker image",description:"Building a docker image is much simpler with Nix compared to writing Dockerfile. Since the entire build process is handled by Nix flakes, most of what's left to do for docker image creation is copying of the derivations and configuration.",source:"@site/docs/practices/docker.md",sourceDirName:"practices",slug:"/docker",permalink:"/docker",draft:!1,editUrl:"https://github.com/juspay/zero-to-flakes/edit/main/docs/practices/docker.md",tags:[],version:"current",frontMatter:{slug:"/docker"},sidebar:"tutorialSidebar",previous:{title:"Using direnv to manage dev environments",permalink:"/direnv"},next:{title:"Gotchas",permalink:"/gotchas"}},s={},c=[{value:"Writing the Nix to build the docker image",id:"writing-the-nix-to-build-the-docker-image",level:2},{value:"Build the docker image",id:"build-the-docker-image",level:2},{value:"Tips",id:"tips",level:2},{value:"Size",id:"size",level:3},{value:"Time",id:"time",level:3},{value:"Tag",id:"tag",level:3},{value:"SSL certs",id:"ssl-certs",level:3},{value:"Example",id:"example",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"building-a-docker-image"},"Building a docker image"),(0,i.kt)("p",null,"Building a docker image is much simpler with Nix compared to writing ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile"),". Since the entire build process is handled by Nix flakes, most of what's left to do for docker image creation is copying of the derivations and configuration."),(0,i.kt)("h2",{id:"writing-the-nix-to-build-the-docker-image"},"Writing the Nix to build the docker image"),(0,i.kt)("p",null,'Consider a haskell-flake project "foo". To copy the binaries generated by the ',(0,i.kt)("inlineCode",{parentName:"p"},"default")," package to ",(0,i.kt)("inlineCode",{parentName:"p"},"/bin")," on the image,  one can use ",(0,i.kt)("inlineCode",{parentName:"p"},"copyToRoot")," attribute offered by ",(0,i.kt)("a",{parentName:"p",href:"https://nixos.org/manual/nixpkgs/stable/#sec-pkgs-dockerTools"},(0,i.kt)("inlineCode",{parentName:"a"},"dockerTools.buildImage")),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nix"},'{\n  # Inside perSystem\n  packages.dockerImage = pkgs.dockerTools.buildImage {\n    name = "foo";\n    copyToRoot = pkgs.buildEnv {\n      paths = with pkgs; [\n        self\'.packages.default\n      ];\n      name = "foo-root";\n      pathsToLink = [ "/bin" ];\n    };\n  };\n}\n')),(0,i.kt)("p",null,"In addition to copying over the flake ",(0,i.kt)("inlineCode",{parentName:"p"},"packages"),", we may also copy ",(0,i.kt)("em",{parentName:"p"},"paths")," in the project. ",(0,i.kt)("inlineCode",{parentName:"p"},"self")," can be added to ",(0,i.kt)("inlineCode",{parentName:"p"},"paths")," to expose the project directory. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nix"},'{\n  copyToRoot = pkgs.buildEnv {\n    paths = with pkgs; [\n      coreutils\n      bash\n      self\n    ];\n    name = "foo-root";\n    pathsToLink = [ "/foo_sub" "/bin" ];\n  };\n}\n')),(0,i.kt)("p",null,"If you'd like your docker image to run your haskell project's default package when the container starts, use the following config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nix"},"{\n  # Inside dockerImage's `buildImage`\n  config = {\n    Cmd = [ \"${pkgs.lib.getExe self'.packages.default}\" ];\n  };\n}\n")),(0,i.kt)("h2",{id:"build-the-docker-image"},"Build the docker image"),(0,i.kt)("p",null,"To build the docker image ",(0,i.kt)("em",{parentName:"p"},"as a Nix derivation"),", run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nix build .#dockerImage\n")),(0,i.kt)("p",null,"To load this image into your local docker image registry, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker load -i $(nix build .#dockerImage --print-out-paths)\n")),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("h3",{id:"size"},"Size"),(0,i.kt)("p",null,"Packages in ",(0,i.kt)("inlineCode",{parentName:"p"},"self'.packages")," are shipped with symlinks to other store paths, like ",(0,i.kt)("inlineCode",{parentName:"p"},"$out/lib"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"$out/nix-support")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"$out/share/doc"),". Along with these, enabling profiling or haddock can also increase the size of the package that you ship. Thus, you will want to strip all but the executables before copying the package to the docker image. This can be achieved using ",(0,i.kt)("inlineCode",{parentName:"p"},"justStaticExecutables"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nix"},"  # Inside perSystem\n  packages.default = pkgs.haskell.lib.justStaticExecutables self'.packages.foo;\n")),(0,i.kt)("h3",{id:"time"},"Time"),(0,i.kt)("p",null,"If you don't want ",(0,i.kt)("inlineCode",{parentName:"p"},"docker images")," showing that the image was created several decades ago, use the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nix"},'{\n  # Inside perSystem.packages\' `dockerImage`:\n  pkgs.dockerTools.buildImage {\n    name = "foo";\n    created = "now";\n  };\n}\n')),(0,i.kt)("h3",{id:"tag"},"Tag"),(0,i.kt)("p",null,"If you want to tag the images with the commit id of the working copy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nix"},'{\n  # Inside perSystem.packages\' `dockerImage`:\n  pkgs.dockerTools.buildImage {\n    name = "foo";\n    tag = builtins.substring 0 9 (self.rev or "dev");\n  };\n}\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://nixos.org/manual/nix/stable/language/builtins.html#builtins-substring"},(0,i.kt)("inlineCode",{parentName:"a"},"builtins.substring 0 9 self.rev"))," is the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"git rev-parse --short HEAD"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"self.rev")," is non-null only on a clean working copy and hence the tag is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," when the working copy is dirty."),(0,i.kt)("h3",{id:"ssl-certs"},"SSL certs"),(0,i.kt)("p",null,"In order to be able to make https connections from inside of the docker image, you must expose the cacert Nix package via the relevant environment variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nix"},'{\n  # Inside dockerTools.buildImage\n  config = {\n    Env = [ \n      "SSL_CERT_FILE=${pkgs.cacert}/etc/ssl/certs/ca-bundle.crt" \n      # Ref: https://hackage.haskell.org/package/x509-system-1.6.7/docs/src/System.X509.Unix.html#getSystemCertificateStore\n      "SYSTEM_CERTIFICATE_PATH=${pkgs.cacert}/etc/ssl/certs/ca-bundle.crt"\n    ];\n  };\n}\n')),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nammayatri/nammayatri/pull/14/files#diff-18ea3dd9a6a84702796b8dac608d0cad8e396a7c2e8c52732fcb7e5f52d1b0b9"},"Sample flake-parts module for docker"))))}u.isMDXComponent=!0}}]);