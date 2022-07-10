import React, {useState} from 'react';
import './App.css';
import {Button} from "./Components/Button";
import {Scoreboard} from "./Components/Scoreboard";

function App() {

    const [count, setCount] = useState<number>(0)

    const incCounter = () => {
        setCount(count + 1)
    }

    const resetCounter = () => {
        setCount(0)
    }

    const setOnLocaleStorage = () => {
        localStorage.setItem("countValue", JSON.stringify(count))
    }

    const getOnLocaleStorage = () => {
        let countValue = (localStorage.getItem("countValue"))
        if (countValue) {
            let newCountValue = JSON.parse(countValue)
            setCount(newCountValue)
        }
    }

    const clearLocaleStorage = () => {
        localStorage.clear()
        setCount(0)
    }

return (
    <div className={"App"}>
        <Scoreboard count={count}/>
        <Button incCounter={incCounter}
                resetCounter={resetCounter}
                setOnLocaleStorage={setOnLocaleStorage}
                getOnLocaleStorage={getOnLocaleStorage}
                clearLocaleStorage={clearLocaleStorage}
                count={count}/>
    </div>
)
}

export default App;
