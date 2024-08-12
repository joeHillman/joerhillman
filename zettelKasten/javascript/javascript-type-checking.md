# ./javascript-type-checking
* Equality of values matters.
* * You can check in various ways for value and type of value equality.
* * Typically you'll use the strict equality operator when performing type checks.

## Same Value
* Object.is(1, 2) compares 2 values for sameness
* === is strict equality and comapres value and typeof value
* == is loose equality and should just be largely avoided
* * 2 Special cases for NaN and -0, both of which you can lookup.
