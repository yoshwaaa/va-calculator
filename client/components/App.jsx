import React from 'react';
import Header from './Header.jsx';

let name = "Bob Dole";

let changeThis = () => {
  console.log('I can change this');
};


export default class App extends React.Component {

  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello Daryl</h1>
        <button onClick={changeThis}>Click me!</button>
        <Header name={name} changeThis={changeThis}/>
      </div>);
  }
}
