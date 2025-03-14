import React, {useState} from 'react'
const Card = ({prompt = [["A young escort from Brooklyn meets and impulsively marries the son of a Russian oligarch. Once the news reaches Russia, her fairy tale is threatened as his parents set out for New York to get the marriage annulled.", "Anora"],["When a visionary architect and his wife flee post-war Europe in 1947 to rebuild their legacy and witness the birth of modern United States, their lives are changed forever by a mysterious, wealthy client.", "The Brutalist"],["Mickey 17, known as an 'expendable,' goes on a dangerous journey to colonize an ice planet.", "Mickey 17"],["In 1961, an unknown 19-year-old Bob Dylan arrives in New York City with his guitar and forges relationships with musical icons on his meteoric rise, culminating in a groundbreaking performance that reverberates around the world.","A Complete Unknown"]]}) => {
    const [pairIndex, setPairIndex] = useState(0);
    const [text, setText] = useState(prompt[pairIndex][0]);
    const [flipped, setFlipped] = useState(false);
    const handleClick = () => {
        setText(prompt[pairIndex][1]);
        setFlipped(true);
    }
    const handleNext = () => {
        setFlipped(false);
        setIsMatch(null);
        if (pairIndex === prompt.length - 1) {
            setPairIndex(pairIndex);
        } else{
            setPairIndex(pairIndex + 1);
            setText(prompt[pairIndex + 1][0]);
        }
        
    }
    const handlePrev = () => {
        setFlipped(false);
        setIsMatch(null);
        if (pairIndex === 0) {
            setPairIndex(0);
        } else{
            setPairIndex(pairIndex - 1);
            setText(prompt[pairIndex - 1][0]);
        }
        
    }

    const onInput = (e) => {  
        setFilmName(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!flipped) {
            if (filmName.toLowerCase() == prompt[pairIndex][1].toLowerCase()) {
                setIsMatch(true);
            } else {
                setIsMatch(false);
            }
        }
        
    }
    const [filmName, setFilmName] = useState('');
    const [isMatch, setIsMatch] = useState();
  return (
    <div>
        <div style={{display: 'flex', alignItems: 'center', height: '200px', border: '1px solid black', backgroundColor: 'grey', width:'800px'}} onClick={handleClick}>
            <p>{text}</p>
            
        </div>

        <form onSubmit={handleSubmit} >
            Guess the Answer: 
            <input
            type="text"
            value={filmName}
            onChange={onInput}
            style={{backgroundColor: isMatch === null 
                ? 'white' 
                : isMatch === true 
                ? 'green' 
                : 'red',
            color: 'black'}}
            />
            <button type='submit'>Submit</button>
            
        </form>
        
            
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
        
    </div>
  )
}

export default Card