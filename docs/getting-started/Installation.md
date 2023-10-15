---
sidebar_position: 1
---

# Installation

This page covers the steps needed to get OpenMud up and running for development purposes. Note, however, that to run OpenMud games already hosted, you **do not** need to perform these installation steps. These steps are only for developers interested in creating OpenMud games.

## Installing the OpenMud Dependencies

Currently, OpenMud has quite a few dependencies and therefore installation can be a little bit of a chore. However, worry-not, this guide will help get you up and running fairly quickly.


You will need to install the below dependencies so that they are available through your command-line (PowerShell for Windows Users, bash/ash/sh/etc for linux users.) This means they must be on your PATH environment variable.

1. Install **[the GIT Command-Line here](https://git-scm.com/downloads)**
2. Install **[Node.JS with NPM](https://nodejs.org/en/download)**
3. Install **[.Net 7.0, with msbuild](https://dotnet.microsoft.com/en-us/download)**
4. Install **[fluidsynth](https://www.fluidsynth.org/download/)**
4. Install **[Visual Studio Code](https://code.visualstudio.com/Download)** This isn't strictly necessary, but the basic OpenMud project templates are optimized for use with Visual Studio Code.


### Setting up fluidsynth

Fuidsynth is used to convert midi audio formats that are not portable (but common in Byond Projects) into wav files so that they can be distributed and deployed onto the web. This is necessary to ensure the games created using OpenMud are portable.

Installing OpenMud is a multi-step process for Windows users:
1. Download the Binaries from the **[fluidsynth website here](https://www.fluidsynth.org/download/)**
2. Create a directory under `C:\Program Files\fluidsynth` and extract the downloaded binaries there.
3. Navigate to the extract bin directory, copy the path to this directory & add it to your PATH environment variable. If you are not familiar with how to modify your PATH environment variable, you can follow this guide **[here on stackoverflow.com](https://stackoverflow.com/a/44272417/1070878)**

## Installing the OpenMud Command Line

After following the above steps, you are ready to install the OpenMud command line, which can be used to create, build and run your OpenMud games.

### Dependency Check
Before we proceed, lets make sure you have the dependencies installed correctly. When you open a PowerShell or Bash terminal, the following commands should execute without any errors:

```
dotnet --version
fluidsynth --version
npm --version
git --version
```

If you run int any issues running these commands & getting the respective version information, stop now and review the steps above. If you are still stuck, please **[create an issue on github](https://github.com/OpenMud/OpenMud/issues)** or visit our slack channel.

### Setting up the Command-Line

After you've ensured all of the necessary dependencies are installed, lets proceed with installing the OpenMud command line.

1. Run the following command in a terminal:

    `dotnet tool install --global OpenMud.Mudpiler.Compiler.Project.Cli`

2. Validate the `omd` command is now available by running the following command:
    `omd --help`

    You should see something like the following:
```
$ omd --help
OpenMud.Mudpiler.Compiler.Project.Cli 2.0.1
Copyright (C) 2023 OpenMud.Mudpiler.Compiler.Project.Cli

  create     Create a new project using scaffolding.

  run        Run the game server & optionally the client as well.

  build      Build the game into a client/server module.

  help       Display more information on a specific command.

  version    Display version information.
```

If that went smoothly, the congrats you have omd all setup! You can proceed to start **[scaffolding your first project.](/docs/getting-started/scaffolding.md)**