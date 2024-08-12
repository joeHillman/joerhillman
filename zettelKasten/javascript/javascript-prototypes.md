# ./javascript-prototypes

Prototypes while underpinning JS aren't really directly dealt with while coding.
The prototype chain describes the relationship of objects on a prototype.
* Top >> Middle {__proto__: top}>> Bottom {__proto__: middle}==>
* * In the absence of a property when read, JS will traverse the prototype chain to read it.
* * In the absence of a property when written, it will write to the immediate object.

All objects have a prototype but you can create an object with no prototype.
* { __proto__: null }

This is why the types have built in methods, they are wrapped by the prototype.
* i.e. string.toLowerCase()

It is possible to pollute the prototype by writing to it, but this is very bad practice.
ES6 has introduced classes which is a more modern syntax to Prototypes and uses prototype under the hood.

```
class Donut { constructor() { this.shape = 'round' } eat() {console.log('nom nom')} }
let donut1 = new Donut(); // __proto__: Donut.prototype
```
