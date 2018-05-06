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

```js
const Title = props => <h1>Olá `${props.name} ${props.lastName}`</h1>
```

or


```js
const Title = {name, lastName} => <h1>Olá `${name} ${lastName}`</h1>
```