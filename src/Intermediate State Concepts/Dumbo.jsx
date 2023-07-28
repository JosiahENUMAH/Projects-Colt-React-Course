import {useState} from "react"

const generateGameBoard=()=>{
    console.log("Generating Game Board...");
    return Array(5000);
}

const Dumbo =()=>{
    const [board, setBoard] = useState(generateGameBoard());
    return(
        <>
            <h1>Dumbo</h1>
            <button onClick={()=>setBoard("hello")}>Click me to start game!</button>
        </>
    )
}

export default Dumbo;