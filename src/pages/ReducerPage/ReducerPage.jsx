import React, { useReducer } from "react"

const ReducerPage = () => {
    const increment = 'increment';
    const decrement = 'decrement';
    const initialState = 0
    const reducer = (state, action) => {
        switch (action) {
            case increment:
                return state += 1;

            case decrement:
                return state -= 1;

            default:
                return state;
        }

    }
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment)}>+</button>
            <button onClick={() => dispatch(decrement)}>-</button>


        </div>
    )

}
export default ReducerPage