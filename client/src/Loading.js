import React, {useState, useEffect} from "react";

function Loading(props) {
    const [loadingBarProgress, setLoadingBarProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingBarProgress((loadingBarProgress + 1) % 5);
        }, 500);
        return () => clearInterval(interval);
    }, [loadingBarProgress]);

    if (!props.doneLoading) {
        return (
            <div>
                <h1>Loading...</h1>
                <LoadingBar progress={loadingBarProgress}/>
            </div>
        )
    } else {
        return (
            <LoadingBar progress={4}/>
        )
    }
}

function LoadingBar(props) {
    return (
        <div>
            <img src={require("./resources/W.svg")} alt="W" width="50" height="50"/>
            {props.progress > 0 && <img src={require("./resources/U.svg")} alt="U" width="50" height="50"/>}
            {props.progress > 1 && <img src={require("./resources/B.svg")} alt="B" width="50" height="50"/>}
            {props.progress > 2 && <img src={require("./resources/R.svg")} alt="R" width="50" height="50"/>}
            {props.progress > 3 && <img src={require("./resources/G.svg")} alt="G" width="50" height="50"/>}
        </div>
    )
}

export default Loading;