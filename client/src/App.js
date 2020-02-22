import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [cardInfo, setCardInfo] = useState({name: "", flavorText: ""});
  const showCardInfo = (e) => {
      setCardInfo(
      {
                ...cardInfo,
              [e.target.name]: e.target.value
            }
        );
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button />
        <Card cardName="serra angel" flavorText="sample text"/>
      </header>
    </div>
  );
}

function Button() {
    return (
        <button onClick={loadCard}>TEST</button>
    )
}

function Card(props) {
    return (
        <div>{props.cardName} --------- {props.flavorText}</div>
    )
}

const loadCard = async () => {
    const resp = await fetch("http://localhost:8080/cardlist");
    const data = await resp.json();
    console.log(data.data[0]);
}

export default App;
