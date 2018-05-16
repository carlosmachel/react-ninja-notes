# react-ninja-notes
React Ninja - Notes


This are my study notes to the course [React Ninja](https://www.udemy.com/curso-reactjs-ninja).

## How to use the boilerplate

```
cp -R boilerplate destination/
cd destination
npm install 
```

## Props

Properties passed as parameters

```js
this.props
```

Example:

- Passing parameter `name`

```js
 <Title name='Carlos Machel' />
```

- Title 

```js
<h1>{this.props.name}</h1>
```


Tip: JSX to HTML: `class` is reserved in javascript, so in REACT you should use `className` and `for` you should use `htmlFor`.

`aria` and `data` attributes you can use with hifen and will be rendered right.

### Method


- `getDefaultProps`: return an object that contains the default properties you want to have in your component if it's not passed anything. 

### Passing other types

```js
const object = {};

myCustomData={object}
```

## Render components with pure functions

- What is?

A pure function should always return the same value if you pass the same parameter.

- How we can create components.


pure function: 
```js
function pureFunction(a, b) {
    return a + b;
}
```

Today is going to be different every day. Even if I pass the same date as parameter you can't garantee that will return the same value.

```js
function calculateDiferenceFromToday(date1) {
    return date1 - new Date();
}
```

Converting to pure function

```js
const date2 = new Date();

function calculateDateDifference(date1, date2) {
    return date1 - date2;
}
```

Pure Function Component 

```js
const Title = props => <h1>Olá `${props.name} ${props.lastName}`</h1>
```

or


```js
const Title = {name, lastName} => <h1>Olá `${name} ${lastName}`</h1>
```

Componentes são feitos com função pura principalmente, quando vocẽ tiver necessidade você coloca classe.

- What is **children** property?

Is a special property from React, this property will render everything that it's inside the component when I rendered him.


```js
/* Component */
const Div = ({children}) => <div>{children}</div>

/* Use*/
/* code omited...*/
return (
    <Div>What I want to put inside the div</Div>
)
```

- What is Composition?

Create a simple and generic component and increment from that to create complex components. See 'like-button' and 'search-button'

```js
const sum = (x, y) => x + y

sum(1,2)

sum(1,2)

sum(sum(1,2), 3) /* composition */
```

- What is State?

in React class components we have access of `this`. 

So you have `this.state`. That has the an object that has all the info about the state of your component.

To have a **statefull** component you must have a `class` extending from `Component` or use `React.createClass`

Pure Function Components are `stateless`, so it won't work.

- What is arrow functions?


The difference in this two piece of code is, one works and the other don't. 

But why? 

using `function() {}` in javascript the `this` is the function itself. And using `() => {}` arrow functions the `this` is the element that contain the arrow function. 

```js
onClick={function() {
    this.setState({ text: 'outro texto' })
}}
```

```js
onClick={() => this.setState({ text: 'outro texto' })}
```

- How can we make work with function? 

make that little hack classe `var self = this` or `var that = this` and pass around in your functions. With ES2015 you don't need that anymore.

Another way you can use `.bind(this)` but this is slow. 

- What is stateful and statelees?

stateless don't manipulate state. Don't have `this`. 

stateful require to manipulate state.

- What is lifecycle?

    - mounting / unmounting
        - componentWillMount
        - componentDidMount
        - componentWillUnmount
    - update
        - componentWillReceiveProps(nextProps)            
        - shouldComponentUpdate(nextProps, nextState) => bool
        - componentWillUpdate(nextProps, nextState)
        - componentDidUpdate(prevProps, prevState)

- What is mounting / unmounting?

    - ComponentWillMount: 
    run in server and in client side. So don't manipulate anything that don't exists in both worlds.

    - ComponentDidMount: After rendered. Manipulate DOM with external library. Execute only once.

    - componentWillUnmount: 

- Never manipulate DOM in React, only data.

- What methods are in lifecycle update?

- componentWillReceiveProps : this method is only called when you pass properties to the element.