# ./typescript-object-types

## Object Types are Passed Data in 3 ways...
1. Anonymous: ```function greet(person: {name: string, age: number}){return person.name}```
2. Interface: ```interface Person {name: string; age: number} function greet(person: Person){return person.name}```
3. Type Alias: ```type Person = {name: string; age: number} function greet(person: Person){...}```

## Property Modifiers
* ```interface Person {name?: string, readonly age: number}```
* * Question Mark as optional, readonly as, well, readonly!