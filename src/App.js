import logo from './logo.svg';
import './App.css';
import Joke from './joke.js';
import jokesData from "./jokesData"

function App() {
  var filteredJokesData  = jokesData.filter(joke => joke.question)
  const jokesComponents = 
  filteredJokesData.map((joke)=>{
      return (
          <Joke key = {joke.id} question = {joke.question} punchLine = {joke.punchLine} />
      )
  })
  return (
    <div className="App">
      <h1 style={{color:'pink' , backgroundColor:'black',height:'100px', textAlign:'center'}}>JokesCorner</h1>
      {jokesComponents}
    </div>
  );
}

export default App;
