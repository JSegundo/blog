---
title: 'Dependency injection in a nutshell'
status: 'published'
author:
  name: 'Segundo Juan'
  picture: 'https://avatars.githubusercontent.com/u/87492687?v=4'
slug: 'dependency-injection-in-a-nutshell'
description: ''
coverImage: ''
tags: [{"label":"OOP","value":"oop"},{"label":"DI","value":"di"},{"label":"Dependency Inversion Principle","value":"dependencyInversionPrinciple"},{"label":"Concepts","value":"concepts"}]
aws: ''
publishedAt: '2024-10-11T20:24:25.000Z'
---

\
`Dependency injection is just a function parameter that accepts an instance of an object.`

It aims to separate the concerns of **constructing** objects (and using them) for that it uses an injector (or **provider** = responsible of providing dependencies to objs when they needed)\
&nbsp;

> Definition by Angular:\
> When you develop a smaller part of your system, like a module or a class, you may need to use features from other classes. For example, you may need an HTTP service to make backend calls. Dependency Injection, or DI, is a design pattern and mechanism for creating and delivering some parts of an application to other parts of an application that require them.

&nbsp;

#### What is a dependency?

A dependency is just another object that your class needs to function. If you have a Model class that fetches data from a Database class, we can say that **Model has a dependency on Database**

#### What is means to inject dependencies?

The dependency is pushed into the class from the outside. All that means, is that you shouldn't instiatiate dependencies using the **new** operator from inside the class. Instead, take it as a constructor parameter or via a setter.

&nbsp;

### But why should we inject dependencies on the first place?

This is important becase of the **Dependency Inversion Principle**:

- Code should depend upon abstractions, not concrete implementations.
- This ensures we decouple components, making our code more modular.
- Dependencies can be replaced as long as they satisfy **the required interface.**

`We decuple our code from the low level implementations. The opposite of "tight coupling" the class is responsible for instantiating or obtaining its dependent objects.`

&nbsp;

### **Injecting Dependencies: How Does it Work?**

In this example, `DataProcessor` receives `IDatabase` from the outside, making it more flexible and easier to test.

```javascript
class DataProcessor {
 private database: IDatabase;
 constructor(database: IDatabase) { // DI
   this.database = database;
  }
}
```

---

In contrast, this example manages the database internally, making `DataProcessor` less flexible in choosing which database to use and increasing the tight coupling between the components.

```javascript
class DataProcessor { 
 private database: Database;                              constructor() { 
 this.database = new Database(); // 	it manages its own dependencies internally
}
```

---

DI is prefered for flexibility, testability and maintanability