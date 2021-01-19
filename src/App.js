import './App.css';

import React, { Component } from 'react'

export class App extends Component {
  state={
    titre:"heyho",
    paragraphe:"coucou zuehdkbehzdkjhazbef"
  }
  changeTitle=()=>{
    this.setState({titre: "bouloulou"});
  }

  render() {
    return (
      <div>
        <h1 onClick={()=>{this.changeTitle()}}>{this.state.titre}</h1>

        <p className="para">{this.state.paragraphe}</p>

        <button onClick = {() =>
        {
          this.setState({paragraphe:"coucou liehrfkzhberf"})

        }} >Changez le paragraphe ici</button>
      </div>
    )
  }
}

export default App
