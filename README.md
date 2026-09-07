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

## Callback in JavaScript / Node.js

A callback is a function that is passed to another function as an argument and is called later, usually when some operation has completed.

Think of it as:
> **"Do this work, and when you're finished, call this function."**

**Simple example**
```
function greet(name, callback) {
  console.log("Hello " + name);

  callback();
}

function done() {
  console.log("Greeting completed");
}

greet("Piyali", done);
```

Output:
```
Hello Piyali
Greeting completed
```
Here:
```
greet("Piyali", done);
```
done is the callback function.

## Why do we need callbacks in Node.js?

Node.js performs many operations asynchronously, such as:
- Reading files
- Database queries
- HTTP requests
- Timers
- Network operations

**Example:**
```
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});

console.log("Reading started...");
```
**The callback:**
```
(err, data) => {
   console.log(data);
}
```
runs after the file-reading operation completes.

**So conceptually:**
```
Node.js
   │
   │ readFile()
   ↓
Operating System
   │
   │ File I/O
   ↓
Operation completes
   │
   ↓
Callback placed for execution
   │
   ↓
Event Loop
   │
   ↓
Callback executes
```

Callback vs normal function

**Normal function:**
```
function add(a, b) {
  return a + b;
}

const result = add(10, 20);
```
The function executes and returns immediately.

**Callback:**
```
setTimeout(() => {
  console.log("Done");
}, 2000);
```
You're telling Node.js:
```
"Wait 2 seconds, and then call this function."
```
The important Node.js connection

**This is where your previous V8 + Node.js diagram connects:**
```
JavaScript
     ↓
   V8
     ↓
Node.js Runtime
     ↓
Async Operation
     ↓
Event Loop
     ↓
Callback
     ↓
V8 executes callback
```

And this leads directly to the next important Node.js concepts:
> **Callback → Callback Queue → Event Loop → Non-blocking I/O**

## fs vs os

The fs module allows Node.js to interact with files and directories.

You can:
```
Create files
Read files
Write files
Update files
Delete files
Rename files
Work with directories
```
Import it:
```
const fs = require("fs");
Read a file
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});
```
Notice the callback:
```
(err, data) => {
   ...
}
```
This is connected to what we discussed earlier about callbacks.

The os module provides information about the machine/operating system on which Node.js is running.
```
const os = require("os");
```
For example:

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.hostname());

Possible output:
```
win32
x64
[ ... CPU information ... ]
17179869184
8589934592
MY-PC
```



