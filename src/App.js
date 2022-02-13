import React, {Component} from 'react'
import './App.css';

class List extends Component {
  render(){
    return(
      <div className="liste">
        Ici c'est ma liste
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <h1>Lorem ipsum dolor sit amet.</h1>
      <h1>Apprendre React.JS</h1>
      <p className="app-intro">
        <List />
      </p>
    </div>
  );
}

export default App;
