import React from "react";

function Destructing() {
    const person = { name: "John", age: 25 };
    const { name, age } = person;
    const numbers = ["one", "two", "three"];
    const [ first, second, third ] = numbers;
    return (
      <div>
        <h2>Destructing</h2>
        <h3>Object Destructing</h3>
        {`const {name, age} = name : "${name}" age: ${age}`}<br/><br/>
        name = {name}<br />
        age = {age}
        <h3>Array Destructing</h3>
        const [first, second, third] = {JSON.stringify(numbers)}<br/><br/>
        first = {first}<br />
        second = {second}<br />
        third = {third}
      </div>
    );
   }
   export default Destructing;