"use strict";(self.webpackChunkzero_to_flakes=self.webpackChunkzero_to_flakes||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Intro","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Install Nix","href":"/install","docId":"intro/install"},{"type":"link","label":"Rapid Introduction to Nix","href":"/nix-rapid","docId":"intro/nix-rapid"}],"href":"/intro"},{"type":"category","label":"Foundations","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"The Nix Store","href":"/store","docId":"foundations/nix-store"},{"type":"link","label":"The Nix Language","href":"/lang","docId":"foundations/lang"},{"type":"category","label":"Flakes","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Nixifying a Haskell project using nixpkgs","href":"/nixpkgs-haskell","docId":"foundations/flakes/nixpkgs-haskell"}],"href":"/flakes"},{"type":"link","label":"Module System","href":"/mod","docId":"foundations/mod"},{"type":"link","label":"flake-parts","href":"/flake-parts","docId":"foundations/flake-parts"}],"href":"/foundations"},{"type":"category","label":"Modules","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Haskell (haskell-flake)","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Getting Started","href":"/haskell-flake/start","docId":"modules/haskell-flake/start/start"},{"type":"category","label":"Guide","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overriding dependencies","href":"/haskell-flake/dependency","docId":"modules/haskell-flake/guide/dependency"},{"type":"link","label":"DevShell","href":"/haskell-flake/devshell","docId":"modules/haskell-flake/guide/devshell"},{"type":"link","label":"Project modules","href":"/haskell-flake/modules","docId":"modules/haskell-flake/guide/modules"},{"type":"link","label":"Creating package sets","href":"/haskell-flake/package-set","docId":"modules/haskell-flake/guide/package-set"}],"href":"/haskell-flake/guide"},{"type":"link","label":"Examples","href":"/haskell-flake/examples","docId":"modules/haskell-flake/examples"},{"type":"link","label":"Reference","href":"/haskell-flake/ref","docId":"modules/haskell-flake/ref"}],"href":"/haskell-flake"},{"type":"link","label":"Devshell scripts (mission-control)","href":"/mission-control","docId":"modules/mission-control"},{"type":"category","label":"nixos-flake","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Getting Started","href":"/nixos-flake/start","docId":"modules/nixos-flake/start"},{"type":"category","label":"Ref","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Module outputs","href":"/nixos-flake/module-outputs","docId":"modules/nixos-flake/ref/module-outputs"},{"type":"link","label":"Flake Templates","href":"/nixos-flake/templates","docId":"modules/nixos-flake/ref/templates"}],"href":"/nixos-flake/ref"},{"type":"link","label":"Examples","href":"/nixos-flake/examples","docId":"modules/nixos-flake/examples"}],"href":"/nixos-flake"},{"type":"link","label":"Auto formatting (treefmt-nix)","href":"/treefmt-nix","docId":"modules/treefmt"}],"href":"/modules"},{"type":"category","label":"Best Practices","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Using direnv to manage dev environments","href":"/direnv","docId":"practices/direnv"},{"type":"link","label":"Building a docker image","href":"/docker","docId":"practices/docker"}],"href":"/practices"},{"type":"link","label":"Gotchas","href":"/gotchas","docId":"gotchas"}]},"docs":{"foundations/flake-parts":{"id":"foundations/flake-parts","title":"flake-parts","description":"Write this","sidebar":"tutorialSidebar"},"foundations/flakes/flakes":{"id":"foundations/flakes/flakes","title":"Flakes","description":"Write this","sidebar":"tutorialSidebar"},"foundations/flakes/nixpkgs-haskell":{"id":"foundations/flakes/nixpkgs-haskell","title":"Nixifying a Haskell project using nixpkgs","description":"This tutorial enables you to write a flake using nothing but nixpkgs] to nixify an existing Haskell project. The tutorial serves a pedagogic purpose; in the real-world scenario, we recommend that you use [haskell-flake.","sidebar":"tutorialSidebar"},"foundations/lang":{"id":"foundations/lang","title":"The Nix Language","description":"Write this","sidebar":"tutorialSidebar"},"foundations/mod":{"id":"foundations/mod","title":"Module System","description":"Write this","sidebar":"tutorialSidebar"},"foundations/nix-store":{"id":"foundations/nix-store","title":"The Nix Store","description":"Write this","sidebar":"tutorialSidebar"},"gotchas":{"id":"gotchas","title":"Gotchas","description":"Nix can behave unexpectedly in certain cases.","sidebar":"tutorialSidebar"},"intro/install":{"id":"intro/install","title":"Install Nix","description":"Install Nix using the DeterminateSystems installer.","sidebar":"tutorialSidebar"},"intro/intro":{"id":"intro/intro","title":"Intro","description":"These docs are heavily a work in progress. DO NOT SHARE YET. See About.","sidebar":"tutorialSidebar"},"intro/nix-rapid":{"id":"intro/nix-rapid","title":"Rapid Introduction to Nix","description":"The goal of this document is to introduce you to Nix as quickly as possible while also preparing the motivated learner to dive deeper into the whole Nix ecosystem. At the end of this introduction, you will be able to create a flake for building a package and providing a developer environment shell.","sidebar":"tutorialSidebar"},"modules/haskell-flake/examples":{"id":"modules/haskell-flake/examples","title":"Examples","description":"- srid/haskell-template","sidebar":"tutorialSidebar"},"modules/haskell-flake/guide/dependency":{"id":"modules/haskell-flake/guide/dependency","title":"Overriding dependencies","description":"Haskell libraries ultimately come from Hackage, and nixpkgs] contains [most of these. Adding a library to your project usually involves modifying the .cabal file and restart the nix shell:","sidebar":"tutorialSidebar"},"modules/haskell-flake/guide/devshell":{"id":"modules/haskell-flake/guide/devshell","title":"DevShell","description":"haskell-flake uses the shellFor function to provide a Haskell development shell. shellFor in turn uses the standard mkShell function to create a Nix shell environment. The mkShellArgs option can be used to pass custom arguments to mkShell.","sidebar":"tutorialSidebar"},"modules/haskell-flake/guide/modules":{"id":"modules/haskell-flake/guide/modules","title":"Project modules","description":"haskell-flake\'s per-project configuration can be modularized and shared among multiple repos. This is done using the flake.haskellFlakeProjectModules flake output.","sidebar":"tutorialSidebar"},"modules/haskell-flake/guide/package-set":{"id":"modules/haskell-flake/guide/package-set","title":"Creating package sets","description":"While haskell-flake is generally used to develop and build individual Haskell projects, you can also use it to create a custom Haskell package set that you can use in other projects. This is useful if you want to create a common package set to be shared across multiple projects.","sidebar":"tutorialSidebar"},"modules/haskell-flake/index":{"id":"modules/haskell-flake/index","title":"haskell-flake","description":"haskell-flake is a flake-parts module to make Haskell development simpler with Nix.","sidebar":"tutorialSidebar"},"modules/haskell-flake/ref":{"id":"modules/haskell-flake/ref","title":"Reference","description":"Documentation on all module options provided by haskell-flake can be found here//flake.parts/options/haskell-flake.html","sidebar":"tutorialSidebar"},"modules/haskell-flake/start/start":{"id":"modules/haskell-flake/start/start","title":"Getting Started","description":"Before using haskell-flake you must first install Nix.","sidebar":"tutorialSidebar"},"modules/mission-control":{"id":"modules/mission-control","title":"Devshell scripts (mission-control)","description":"The mission-control flake-parts module enables creating a set of scripts or commands to run in the Nix dev shell. This makes it possible for the project\'s user to locate all of the commands\xa0they need (to get started) in one place, often replacing the likes of Makefile or bin/ scripts.","sidebar":"tutorialSidebar"},"modules/nixos-flake/examples":{"id":"modules/nixos-flake/examples","title":"Examples","description":"- https://github.com/srid/nixos-config (using #both template)","sidebar":"tutorialSidebar"},"modules/nixos-flake/index":{"id":"modules/nixos-flake/index","title":"nixos-flake","description":"nixos-flake a flake-parts module to unify NixOS + nix-darwin + [home-manager] configuration in a single flake, while providing a consistent interface (and enabling common modules) for both Linux and macOS.","sidebar":"tutorialSidebar"},"modules/nixos-flake/ref/module-outputs":{"id":"modules/nixos-flake/ref/module-outputs","title":"Module outputs","description":"Importing the nixos-flake flake-parts module will autowire the following flake outputs in your flake:","sidebar":"tutorialSidebar"},"modules/nixos-flake/ref/templates":{"id":"modules/nixos-flake/ref/templates","title":"Flake Templates","description":"We provide four templates, depending on your needs:","sidebar":"tutorialSidebar"},"modules/nixos-flake/start":{"id":"modules/nixos-flake/start","title":"Getting Started","description":"Pick your desired operating system and follow the below instructions.","sidebar":"tutorialSidebar"},"modules/treefmt":{"id":"modules/treefmt","title":"Auto formatting (treefmt-nix)","description":"treefmt provides an interface to run multiple code formatters at once, so you don\'t have to run them manually for each file type.","sidebar":"tutorialSidebar"},"practices/direnv":{"id":"practices/direnv","title":"Using direnv to manage dev environments","description":"direnv, and [nix-direnv] in particular, is an important piece of tool you can use to both persist nix devshell environments and to share it automatically with text editors and IDEs. It also obviates having to run nix develop manually every time you open a new terminal. The moment you cd into your project directory, the devshell is automatically activated, thanks to direnv.","sidebar":"tutorialSidebar"},"practices/docker":{"id":"practices/docker","title":"Building a docker image","description":"Building a docker image is much simpler with Nix compared to writing Dockerfile. Since the entire build process is handled by Nix flakes, most of what\'s left to do for docker image creation is copying of the derivations and configuration.","sidebar":"tutorialSidebar"}}}')}}]);