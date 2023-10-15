---
sidebar_position: 2
---

# Framework
We can separate the Dream Maker Programming language generally into two pieces:
1. The Programming Language itself (Semantic and grammar model)
2. The framework which implements the core features necessary to leverage Dream Maker Language to produce a game.

OpenMud allows for expansion, and customization of the framework independant of the programming language itself. It is important to consider that OpenMud's framework, while ideally similar to Byond's, will likely diverge to support new features. Most of what OpenMud is lacking currently to support porting complex games written for Byond, it is lacking with respect to the framework & not the language features.

## What is the Framework?

For example, consider the below potion created using the Dream Maker Language

```
obj
  portion
    icon = 'potion.dmi'
    desc = "A shiny red fluid contained in a glass bottle."
    verb
      drink()
        usr << "You drank a potion and gain 12 hitpoints!"
        usr.health += 12

        view(10) << "[usr] drank a potion."
```

* The above code defines an object potion, which inherits from the obj primitive class. An obj represents a tangible object in your game world, but is never defined by the user when they write the code for their game. The obj class defines some default behaviours and charateristics (for example, the default move behaviours) that pertain to all objects. The implementation of obj is considered part of the framework (you can see the obj basics implemented as part of the framework **[here](https://github.com/OpenMud/OpenMud/blob/master/OpenMud.Mudpiler.Framework/Behaviours/ObjMovement.cs#L29)** )

* There is a call to a global method 'view', used to broadcast a message to all users within a visible range of the item. This method is also defined as part of the game framework and not part of the Programming Language itself. This specific function is defined as part of the framework **[here.](https://github.com/OpenMud/OpenMud/blob/master/OpenMud.Mudpiler.Framework/Behaviours/AtomicEnvironmentInteraction.cs#L42)**

## Expanding the Framework

You are free to customize the framework to your needs, or expand it as necessary. However, we encourage open-source games to stick to what is in the official OpenMud framework and, when it is lacking, to contribute to the OpenMud framework to fill gaps. This helps to sustain a standard framework for all OpenMud games.

For an example of how to build, or customize the OpenMud framework, please see the BaseFramework repository **[here.](https://github.com/OpenMud/OpenMud/tree/master/OpenMud.Mudpiler.Framework)**
