# NodeJS-Playground
A hands-on Node.js coding playground for exploring JavaScript, Node.js APIs, asynchronous programming, Express.js, performance, testing, and real-world backend development concepts.

> **JavaScript source code → V8 → Bytecode / optimized machine code**

1. NodeJS Tutorial For Beginners (Hindi) : https://www.youtube.com/playlist?list=PLzjZaW71kMwScTRKzoasdyB1sX-a9EbFp

## Intro
1. Node.js is a JavaScript runtime built around the V8 JavaScript engine, allowing JavaScript to execute outside the browser.
2. V8 is the JavaScript engine; Node.js is the runtime environment that uses V8 plus APIs/runtime components such as timers, filesystem, networking, streams, and its event-loop infrastructure.
3. V8 is Google's open-source JavaScript engine. It was originally developed for the Google Chrome browser to execute JavaScript efficiently.

```
             Node.js
                │
                ↓
       JavaScript Runtime
                │
                ↓
          V8 JavaScript
             Engine
                │
       ┌────────┴────────┐
       ↓                 ↓
    Parser           Runtime
       │
       ↓
      AST
       │
       ↓
    Ignition
       │
       ↓
    Bytecode
       │
       ↓
    TurboFan
       │
       ↓
 Optimized Machine Code
       │
       ↓
       CPU
```

## What is V8?

**V8 is Google's open-source JavaScript engine.**

It was originally developed for the Google Chrome browser to execute JavaScript efficiently.
```
JavaScript Code
      ↓
   V8 Engine
      ↓
Machine Code
      ↓
     CPU
```

**For example:**
```
const a = 10;
const b = 20;

console.log(a + b);
```
The CPU cannot directly execute this JavaScript source code. V8 processes it and ultimately generates executable machine code.

## Where does Node.js come in?

Node.js embeds the V8 JavaScript engine so that JavaScript can run outside the browser.
```
                 JavaScript
                     │
          ┌──────────┴──────────┐
          ↓                     ↓
       Browser                Node.js
          │                     │
       Chrome                Node Runtime
          │                     │
          ↓                     ↓
       V8 Engine             V8 Engine
          │                     │
          └──────────┬──────────┘
                     ↓
              Execute JavaScript
```

So the important interview statement is:
> **Node.js is a JavaScript runtime built around the V8 JavaScript engine, allowing JavaScript to execute outside the browser.**

## How does V8 execute JavaScript?

**A simplified view is:**
```
Human-readable JavaScript
          │
          ↓
        Parser
          │
          ↓
         AST
   (Abstract Syntax Tree)
          │
          ↓
   Ignition Interpreter
          │
          ↓
       Bytecode
          │
          ↓
   TurboFan Optimizer
          │
          ↓
   Optimized Machine Code
          │
          ↓
          CPU
```

**V8 doesn't simply perform:**
```
JavaScript → Machine Code
```
as a single straightforward step. Modern V8 uses parsing, bytecode interpretation, profiling, and JIT optimization to execute JavaScript efficiently.

