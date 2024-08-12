# ./javascript-objects

Objects are primarily useful for grouping related data.
* Objects have properties that originate from the objects and have functional wires like variables.
* Must be uniquely named per object and are case sensitive.
* Again, they don't contain values, they point to them.
* Aren't quite nested as an object structure may suggest.
* * Think of these as different objects.

Accessing properties with either...
* dot notation ==> person.name
* bracket notation ==> person['name']

Properties that don't exist will return undefined or throw an error.
* person.noProperty ==> undefined / person.noProperty.nestedNoProperty ==> Error

Mutation
* Best to avoid when possible.
* Changes code in all places, must take to care to not mutate shared data unless you have a reason.
* john = {address: {city: "Attleboro"}}
* john.address.city ==> Mutataes above.
