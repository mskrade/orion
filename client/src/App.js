import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import axios from 'axios'

function App() {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        axios
            .get(
                "http://localhost:8080/cardlist"
            )
            .then(({ data }) => {
                setCards(data.data);
            });

    }, []);

    const filterCards = () => {
       setCards([]);
    }

    return (
      <div>
          <Filter onSubmit={filterCards}/>
          <CardList cardList={cards}/>
      </div>
    );
}

function Filter(props) {
    const [search, setSearch] = useState({searchValue: ""});
    const handleSearch = event => {
        event.preventDefault();
        console.log(search.searchValue);
        props.onSubmit();
    }
    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={search.searchValue}
                onChange={event => setSearch({searchValue: event.target.value})}
                placeholder="card name"/>
            <button>Search</button>
        </form>
    )
}

const CardList = (props) => {
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