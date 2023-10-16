---
sidebar_position: 2
---

# Command Line Basics

For most basic uses of OpenMud, you can perform all of your development, running and debugging use the `omd` (OpenMud) command-line. For more advanced development and debugging (for example, customizing the client, server or OpenMud Framework) you will likely forgoe the command-line for traditional development tools such as Visual Studio (see **[Advanced Development](/docs/getting-started/advanced-development.md)** for more information on setting up a full-fledged development environment)


## OMD Commands

The OMD Command-Line exposes 3 main verbs:
* create
* run
* build

### create
The create verb of the OMD Command-Line helps you create new OpenMud games / projects.

When you create an OpenMud project, you will need to select some sort of scaffold / template to bootstrap your project. We reccomend using the `quick-start` template. We are glad to accept any templates, you can contribute by adding them to the **(scaffold repository here)[https://github.com/OpenMud/scaffold]**

### run

The run verb is used to run and debug your game. Remember to `build` your game before debugging or running.

### build

The build verb is used to build your game source files into a distributable form, or building them into an executable form you can run the game with.