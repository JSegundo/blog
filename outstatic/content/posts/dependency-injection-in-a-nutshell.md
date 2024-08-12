---
title: 'Dependency injection in a nutshell'
status: 'published'
author:
  name: 'Segundo Juan'
  picture: 'https://avatars.githubusercontent.com/u/87492687?v=4'
slug: 'dependency-injection-in-a-nutshell'
description: ''
coverImage: ''
tags: ''
aws: ''
publishedAt: '2024-08-12T20:24:25.523Z'
---

a piece of code that uses another piece of code and instead of using that code directly, its passed in.

opposite of "tight coupling" the class is responsible for instantiating or obtaining its dependent objects.

```python
class DataProcessor {
 private database: IDatabase;
 constructor(database: IDatabase) { // DI
   this.database = database;
  }
}
```

the dependency is provided from outside 

---

```javascript
class DataProcessor { 
 private database: Database;                              constructor() { 
 this.database = new Database(); // 	it manages its own dependencies internally
}
```

 

---

 

DI is prefered for flexibility, testability and maintanability

 