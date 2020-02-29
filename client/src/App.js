import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom'
import Loading from './Loading.js'
import './App.css';
import axios from 'axios'

function App() {
    const [cards, setCards] = useState([]);
    const [displayCards, setDisplayCards] = useState([]);
    const [currentSet, setCurrentSet] = useState("lea");
    const [searchValue, setSearchValue] = useState("");
    const [doneLoading, setDoneLoading] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8080/cardlist/${currentSet}`)
            .then(({ data }) => {
                setCards(data.data);
                setDisplayCards(data.data);
                setDoneLoading(true);
            });
    }, [currentSet]);

    const filterCards = filterValue => {
        setSearchValue(filterValue);
       setDisplayCards(cards.filter(card => card.name.toUpperCase().indexOf(filterValue.toUpperCase()) !== -1));
    }

    const changeSet = newSet => {
        setDoneLoading(false);
        setSearchValue("");
        setDisplayCards([]);
        setCurrentSet(newSet);
    }

    return (
      <div>
          <Loading doneLoading={doneLoading}/>
          <SetSelector currentSet={currentSet} onChange={changeSet}/>
          <Filter searchValue={searchValue} onChange={filterCards}/>
          <CardList cardList={displayCards}/>
      </div>
    );
}

function SetSelector(props) {
    const [sets, setSets] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/setlist`)
            .then(({data}) => {
                setSets(data);
            });
    });

    return (
        <select value={props.currentSet} onChange={event => props.onChange(event.target.value)}>
            {sets.map(set => <option key={set.name} value={set.code}>{set.name}</option>)}
        </select>
    )
}

function Filter(props) {
    const handleSearch = (event, searchValue) => {
        props.onChange(searchValue);
    }
    return (
        <form>
            <input
                type="text"
                value={props.searchValue}
                onChange={event => handleSearch(event, event.target.value)}
                placeholder="Card name..."/>
        </form>
    )
}

function CardList(props) {
    return (
      <div>
          {props.cardList.map(cardInfo => <Card key={cardInfo.name} {...cardInfo} />)}
      </div>
    )
};

function Card(props) {

    const getFlavorText = () => {
        if (props.flavorText) {
            return <div>{`'${props.flavorText}'`}<br/></div>
        } else {
            return null;
        }
    }

    const getStats = () => {
        if (props.typeLine.includes("Creature")) {
            return <div>{props.power}/{props.toughness}<br/></div>
        } else if(props.typeLine.includes("Planeswalker")) {
            return <div>{props.loyalty}<br/></div>
        } else {
            return null;
        }
    }

    return (
        <div>
            <strong>****************</strong><br/>
            {props.name}<br/>
            {props.typeLine}<br/>
            {props.manaCost}<br/>
            {props.oracleText}<br/>
            {getFlavorText(props.flavorText)}
            {getStats(props.typeLine)}
            <strong>****************</strong><br/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);

export default App;