import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';

let student: string = 'Johny';

let age: number = 69;

let isSmart: boolean = true;

let students: string[] = ['Joe', 'Biden', 'Harris'];

let fees: number[] = [12, 23, 43, 21, 45];

interface Person {
  name: string,
  job: string,
  age?: number,
  location?: string | number
};

const handleAddUser = (firstName: string, age: number, address: string): string => {

  const total: number = 50;

  console.log(firstName, age, address);

  return address;
};

// const person: { name: string, job: string, age: number } = { name: 'Bill Clinton', job: 'Unemployed', age: 87 };

const person: Person = { name: 'Bill Clinton', job: 'Unemployed', age: 87, location: '55/60' };

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

export default App;
