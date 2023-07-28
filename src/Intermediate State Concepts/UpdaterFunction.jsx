import { useState } from "react";

export const UpdaterFunction =()=>{
    const [count, setCount] = useState(0);

    const addThree =()=>{
        // Correct way to update state when state depends on the old version of the state. Pass a callback function
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }
    return(
        <>
            <h1>Counter</h1>
            <button onClick={addThree}>Click to Count</button>
            <p>{count}</p>
        </>
    )
}