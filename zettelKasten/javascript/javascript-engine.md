# ./javascript-engine

The engine is responsible for converting the JS to machine code.
There's a lot that goes on in this process.
1. Lexical Analysis
   * Breaks things into tokens that creat the
2. AST - Abstract Sytax Tree - astexplorer.net
3. Interpreter, Compiler
   * Interpreter - Translates and reads the file, line by line on the fly.
     * Outputs Bytecode
   * Compiler - Once thru for basic understanding and compiles to another language. 
     * Could output Machine Code
   * JIT Compiler - Just In Time compilation
4. Profiler
   * Makes notes on how someone could optimize the code.
* Including a Call Stack and Memory Heap
The end result is what the computer understands.
