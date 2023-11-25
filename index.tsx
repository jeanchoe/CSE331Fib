import React from 'react';
import { createRoot } from 'react-dom/client';
import { nextFib } from './fib';
import './index.css';




const main: HTMLElement | null = document.getElementById('main');
if (main === null) {
  console.log('Uh oh! no "main" element!');
} else {
  const root = createRoot(main);
  const params: URLSearchParams = new URLSearchParams(window.location.search);
  const age: string | null = params.get("age");
  const firstName: string | null = params.get("firstName");
  if (age === null || firstName === null) {
    root.render(
      <div className = "main">
        <form action="/">
          <p className = "p">Hi there! Please enter the following information:</p>
          <p className = "p">Your first name: <input type="text" name="firstName"></input></p>
          <p className = "p">Your age:<input type="number" name="age" min="0"></input></p>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  } if (age !== null && firstName !== null) {
    const userAge: number | null = parseInt(age, 10);


    if (userAge === nextFib(userAge)) {
      root.render(
        <div className = "main">
          <p className = "p">Hi, {firstName}! Your age ({age}) is a Fibonacci number!</p>
          <p className = "p"> <a href="/"> Start Over</a></p>
        </div>
      );
    }
    else {
      root.render(
        <div className = "main">
          <p className = "p">Hi, {firstName}! Your age ({age}) will be a Fibonacci number in {nextFib(userAge) - userAge} years.</p>
          <p className = "p"> <a href="/"> Start Over</a></p>
        </div>
      );
    }
  }




  // TODO: replace this when you get to problem 5
  // root.render(<p>The 11th Fibonacci number is {nextFib(11)}</p>);
}