import React, {useState} from 'react'

const Card = ({prompt = [["A young escort from Brooklyn meets and impulsively marries the son of a Russian oligarch. Once the news reaches Russia, her fairy tale is threatened as his parents set out for New York to get the marriage annulled.", "Anora"],["When a visionary architect and his wife flee post-war Europe in 1947 to rebuild their legacy and witness the birth of modern United States, their lives are changed forever by a mysterious, wealthy client.", "The Brutalist"],["Mickey 17, known as an 'expendable,' goes on a dangerous journey to colonize an ice planet.", "Mickey 17"]]}) => {
    const [pairIndex, setPairIndex] = useState(0);
    const [text, setText] = useState(prompt[pairIndex][0]);
    const [flipped, setFlipped] = useState(false);
    const handleClick = () => {
        setText(prompt[pairIndex][1]);
    }
    const handleTextChange = () => {
        if (pairIndex === prompt.length - 1) {
            setPairIndex(0);
        } else{
            setPairIndex(pairIndex + 1);
            setText(prompt[pairIndex + 1][0]);
        }
        
    }
  return (
    <div>
        <div style={{display: 'flex', alignItems: 'center', height: '200px', border: '1px solid black', backgroundColor: 'grey', width:'800px'}} onClick={handleClick}>
            <p>{text}</p>
            
        </div>
        <button onClick={handleTextChange}>Change Text</button>
    </div>
  )
}

export default Card