import React, {useState} from 'react';
import './App.css';
import {Button} from "./Components/Button";
import {Scoreboard} from "./Components/Scoreboard";

function App() {

    let [count, setCount] = useState<number>(0)

    const incCounter = () => {
        count++
        setCount(count)
    }

    const resetCounter = () => {
        setCount(0)
    }

    return (
        <div className={"App"}>
            <Scoreboard count={count}/>
            <Button incCounter={incCounter}
                    resetCounter={resetCounter}
                    count={count}/>
        </div>
    );
}

export default App;
