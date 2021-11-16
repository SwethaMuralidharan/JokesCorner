import logo from './logo.svg';
import './App.css';
import Joke from './joke.js';

function App() {
  return (
    <div className="App">
      <Joke punchLine = "Its hard to explain punch to kleptomaniacs because they always take things literally"/>
      <Joke question = "Whats the best thing about Switzerland?" punchLine = "I dont know, but the flag is a big plus"/>
      <Joke question = "Did you hear about a mathematician who is afraid of negative numbers?" punchLine = "He ll stop at nothing to avoid them"/>
      <Joke question = "Did you hear about a restaurant named Karma?" punchLine = "There is no menu. You get what you deserve!"/>
      <Joke question ="Heard about the actor who fell through floor boards?" punchLine = "He was just going through a stage"/>
    </div>
  );
}

export default App;
