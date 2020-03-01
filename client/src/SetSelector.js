import React, {useEffect, useState} from "react";
import axios from "axios";

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

export default SetSelector;