import { useState } from "react";
import { v4 as uuid } from 'uuid';


export function EmojiClicker(){
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: "😁"}, {id: uuid(), emoji: "😭"},{id: uuid(), emoji: "❤️"}]);
    //this syntax is not recommended, cos we are updating the old values of the arr, we use callback syntax instead
    // function addEmojis(){
    //     setEmojis([...emojis, "👍", "👌"])
    // } 

    // Callback syntax
    function addEmojis(){
        setEmojis(prevEmojis => [...prevEmojis, {id: uuid(), emoji: "👍"}, {id: uuid(), emoji: "👌"}])
    }
    const deleteEmoji =(id)=>{
        console.log(id)
        setEmojis(prevEmojis => prevEmojis.filter(emo => emo.id !== id))
    }
    const handleHearts =()=>{
        setEmojis((prevEmojis) => prevEmojis.map((emo) => {
            return {...emo, emoji: emo.emoji = "❤️"}
        }))
    }
    return (
        <>
            <h1>Emoji Clicker</h1>
            <button onClick={handleHearts}>Make them all ❤️</button>
            {emojis.map((emo)=><p key={emo.id} style={{fontSize: "4rem"}} onClick={()=>deleteEmoji(emo.id)}>{emo.emoji}</p>)}
            <button onClick={addEmojis}>Add Emoji</button>
        </>
    )
};

