---
title: "Upgrade from Angular 2 to Angular 4"
description: "Gain an instant 60% reduction in bundled library code."
date: "2018-12-09"
tags:
  - "angular-projects"
image: '../../../../public/static/1200x630_angular.jpg'
authors: ["marklreyes"]
---

In an effort to create an upgrade path from an Angular 2 app to Angular 4, this is what I changed to accomplish just that.

**Do note:**

- This web app predates Angular CLI and is loaded via SystemJS and not webpack.
- This effort is an instant 60% reduction in bundled Angular library code.
- Is backwards compatible with Angular 2.

**tsconfig.json - BEFORE**

```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": true,
    "noImplicitAny": true,
    "suppressImplicitAnyIndexErrors": true,
    "types" : []
  },
  "exclude": [
    "node_modules"
  ]
}
```

**tsconfig.json - AFTER**

```
{
  "compilerOptions": {
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "module": "commonjs",
    "moduleResolution": "node",
    "noImplicitAny": true,
    "removeComments": true,
    "sourceMap": true,
    "suppressImplicitAnyIndexErrors": true,
    "target": "es5",
    "types" : []
  },
  "exclude": [
    "node_modules/*"
  ]
}
```

**package.json - BEFORE**

```
{
  "dependencies": {
    "@angular/common": "2.4.6",
    "@angular/compiler": "2.4.6",
    "@angular/compiler-cli": "2.4.6",
    "@angular/core": "^2.4.6",
    "@angular/forms": "2.4.6",
    "@angular/http": "2.4.6",
    "@angular/platform-browser": "2.4.6",
    "@angular/platform-browser-dynamic": "2.4.6",
    "@angular/router": "3.0.0"
  },
  "devDependencies": {
    "concurrently": "^2.2.0",
    "lite-server": "^2.2.0",
    "typescript": "^2.0.2",
    "typings": "^1.0.4"
  }
}
```

**package.json - AFTER**

```
{
  "dependencies": {
    "@angular/common": "^4.0.0",
    "@angular/compiler": "^4.0.0",
    "@angular/core": "^4.0.0",
    "@angular/forms": "^4.0.0",
    "@angular/http": "^4.0.0",
    "@angular/platform-browser": "^4.0.0",
    "@angular/platform-browser-dynamic": "^4.0.0",
    "@angular/router": "^4.0.0"
  },
  "devDependencies": {
    "@types/node": "^6.0.60",
    "concurrently": "^3.1.0",
    "lite-server": "^2.3.0",
    "typescript": "^2.2.2"
  }
}
```
