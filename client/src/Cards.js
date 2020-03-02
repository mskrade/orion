import React from "react";
import "./Cards.css"

function CardList(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type Line</th>
                    <th>Mana Cost</th>
                    <th>Oracle Text</th>
                    <th>Combat Stats/Loyalty</th>
                    <th>Flavor Text</th>
                </tr>
            </thead>
            <tbody>
                {props.cardList.map(cardInfo => <Card key={cardInfo.name} {...cardInfo} />)}
            </tbody>
        </table>
    )
};

function Card(props) {

    // const getFlavorText = () => {
    //     if (props.flavorText) {
    //         return `'${props.flavorText}'`
    //     } else {
    //         return null;
    //     }
    // }

    const handleNewlines = text => {
        if (text) {
            return text.split("\n")
                .map((textLine, num) => {
                    return <p key={num}>{textLine}</p>
                });
        } else {
            return null;
        }
    }

    const getStats = () => {
        if (props.typeLine.includes("Creature")) {
            return `${props.power}/${props.toughness}`
        } else if(props.typeLine.includes("Planeswalker")) {
            return `${props.loyalty}`
        } else {
            return null;
        }
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.typeLine}</td>
            <td>{props.manaCost}</td>
            <td> {handleNewlines(props.oracleText)}</td>
            <td>{getStats(props.typeLine)}</td>
            <td className="flavorText">{handleNewlines(props.flavorText)}</td>
        </tr>
    )
}

export default CardList;