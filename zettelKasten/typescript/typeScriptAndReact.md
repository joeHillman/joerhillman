# ./typeScriptAndReact

## Function Components
[For annotation a function component](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components)
```// Declaring type of props - see "Typing Component Props" for more examples
type AppProps = {
  message: string;
}; /* use `interface` if exporting so that consumers can extend */

// Easiest way to declare a Function Component; return type is inferred.
const App = ({ message }: AppProps) => <div>{message}</div>;```

## Class Component

[For annotating a class component](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/class_components)

```type MyProps = {
  // using `interface` is also ok
  message: string;
};
type MyState = {
  count: number; // like this
};
class App extends React.Component<MyProps, MyState> {...}```