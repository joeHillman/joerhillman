# typeChecking

TypeScript's type system is comprised of types and it's underlying architecture.

## Types by...
### Inference
```let helloWorld = "Hello World"```

Typescript would infer the above type is a string and by extension let you know if you are trying to use a method not available to string types.

### Definition
```const user = { name: "Hayes", id: 0 }```

The above case is not possible to infer automatically due to the mixed types.
This can be described using an interface declaration which follows closely the syntax for JS objects and annotated simply.

* Description
* * ```interface User { name: string, id: number }```
* * ```const name: TypeName = Obj```
* * ```const user: User = { name: "Hayes", id: 0 }```

### Composing
```type myBool = true | false```
```type windowStates = "open" | "closed" | "minimized" ```
... or another use case could be error states.

### Generics
```type StringArray = Array<string>```

Generics could contain anything.

### Structure
Know that TypeScript is smart enough to know if you're using the same type elsewhere.
