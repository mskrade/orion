import React from "react";

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

export default Filter;