import {useEffect, useState} from "react";
import html2pdf from "html2pdf.js"

export default function GameScoreKeeper({numPlayers = 3, target = 5}){
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));
    const [disabled, setDisabled] = useState(false);
    const [won, setWon] = useState();

    const handleDownloadPDF = () => {
      // Get the root element of the page to be converted to PDF
      const rootElement = document.getElementById("pdf-content");
    
      // Options for PDF conversion (you can customize as needed)
      const options = {
        margin: 10,
        filename: "my_page.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };
    
      // Start PDF conversion
      html2pdf()
        .from(rootElement)
        .set(options)
        .save();
    };

    const resetScores = () => {
       setScores(new Array(numPlayers).fill(0));
       setDisabled(false);
    }

    // Two ways to handle increment
    const increment = (index) => {
        setScores((prevScores) => {
                const copy = [...prevScores];
                copy[index] += 1;
                setWon(copy[index]);
                return copy;
        });
    };

    // const increment = (index) =>{
    //      setScores((prevScores) => {
    //        return(prevScores.map((score, id)=>{
    //             if(id === index){
    //                 setWon(score + 1)
    //                 return (score + 1);
    //             } else {return score};
    //        }));
    //     });
    // };

   useEffect(()=>{
    console.log(won)
    won === target && setDisabled(true);
   }, [won, target])

    return (
        <div id="pdf-content">
            <h1>Score Keeper</h1>
            <button onClick={handleDownloadPDF}>Download PDF</button>
            <ul>
                {scores.map((score, index) => {
                  return (
                    <li key={index}>Player{index + 1}: {score}
                        <button onClick={()=>increment(index)} disabled={disabled}> +1 </button>
                        {score >= target && <p> Winner</p>}
                    </li>)}
                )}
            </ul>
            <button onClick={resetScores}>Reset</button>
        </div>
    )
};