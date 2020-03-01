import React from "react";

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

export default CardList;