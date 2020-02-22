import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';

const testData = [
    {cardName: "Serra Angel", flavorText: "Angel"},
    {cardName: "Counterspell", flavorText: "Nope"},
    {cardName: "Duress", flavorText: "Discard"},
    {cardName: "Lightning Bolt", flavorText: "Boom"},
    {cardName: "Giant Growth", flavorText: "Big"}
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CardList />
      </header>
    </div>
  );
}

const CardList = (props) => {
  return (
      <div>
          <Card {...testData[0]} />
          <Card {...testData[1]} />
          <Card {...testData[2]} />
          <Card {...testData[3]} />
          <Card {...testData[4]} />
      </div>
  )
};

function Card(props) {
    return (
        <div>{props.cardName} --------- {props.flavorText}</div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);

export default App;
