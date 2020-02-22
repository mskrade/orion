import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import axios from 'axios'

function App() {
    const [cards, setCards] = useState([]);
    const [displayCards, setDisplayCards] = useState([]);
    useEffect(() => {
        axios
            .get(
                "http://localhost:8080/cardlist"
            )
            .then(({ data }) => {
                setCards(data.data);
                setDisplayCards(data.data);
            });
    }, []);

    const filterCards = searchValue => {
       setDisplayCards(cards.filter(card => card.name.toUpperCase().indexOf(searchValue) !== -1));
    }

    return (
      <div>
          <Filter onChange={filterCards}/>
          <CardList cardList={displayCards}/>
      </div>
    );
}

function Filter(props) {
    const [search, setSearch] = useState("");
    const handleSearch = (event, searchValue) => {
        setSearch(searchValue);
        props.onChange(searchValue.toUpperCase());
    }
    return (
        <form>
            <input
                type="text"
                value={search}
                onChange={event => handleSearch(event, event.target.value)}
                placeholder="Card name..."/>
        </form>
    )
}

function CardList(props) {
    return (
      <div>
          {props.cardList.map(cardInfo => <Card {...cardInfo} />)}
      </div>
    )
};

function Card(props) {
    return (
        <div>
            ****************<br/>
            {props.name}<br/>
            {props.mana_cost}<br/>
            {props.oracle_text}<br/>
            {props.flavor_text}<br/>
            ****************<br/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);

export default App;