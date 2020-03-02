import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom'
import Loading from './Loading.js'
import SetSelector from './SetSelector';
import Filter from './Filter';
import CardList from './Cards';
import './App.css'
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
                setCards(data);
                setDisplayCards(data);
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
      <React.Fragment>
          <div className="center">
              <Loading doneLoading={doneLoading}/>
              <SetSelector currentSet={currentSet} onChange={changeSet}/>
              <Filter searchValue={searchValue} onChange={filterCards}/>
          </div>
          <CardList cardList={displayCards}/>
      </React.Fragment>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);

export default App;