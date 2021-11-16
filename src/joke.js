import react from 'react';

function Joke(props){
    console.log(props)
    return(
        <div>
        
            <h1 style= {{display: props.question?"block":"none"}}>Question : {props.question}</h1>
            <h2 style={{color: props.question?"black":"#888888"}}>Answer : {props.punchLine}</h2>
            <hr/>
        </div>
    )
}
export default Joke;