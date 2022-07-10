import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    incCounter: () => void
    resetCounter: () => void
    setOnLocaleStorage: () => void
    getOnLocaleStorage: () => void
    clearLocaleStorage: () => void
    count: number
}

export const Button = (props: ButtonPropsType) => {

    const incCounterHandler = () => {
        props.incCounter()
    }

    const resetCounterHandler = () => {
        props.resetCounter()
    }

    const setOnLocaleStorageHandler = () => {
        props.setOnLocaleStorage()
    }

    const getOnLocaleStorageHandler = () => {
        props.getOnLocaleStorage()
    }

    const clearLocaleStorageHandler = () => {
        props.clearLocaleStorage()
    }


    return (
        <>
            <div>
                <button className={s.button}
                        disabled={props.count >= 5}
                        onClick={incCounterHandler}>inc
                </button>
                <button className={s.button}
                        disabled={props.count === 0}
                        onClick={resetCounterHandler}>reset
                </button>
            </div>
            <button className={s.button}
                    onClick={setOnLocaleStorageHandler}>setOnLocaleStorage
            </button>
            <button className={s.button}
                    onClick={getOnLocaleStorageHandler}>getOnLocaleStorage
            </button>
            <button className={s.button}
                    onClick={clearLocaleStorageHandler}>clearLocaleStorage
            </button>
        </>
    )
}
