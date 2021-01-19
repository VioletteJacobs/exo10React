import './App.css';

import React, { Component } from 'react'

export class App extends Component {

  state={
    titre:"heyho",
    paragraphe:"coucou zuehdkbehzdkjhazbef",
    sousTitre:"bimbam",
    para2: "alzeijflie laerknfle akjnrf"
  }

  changeTitle=()=>{
    this.setState({titre: "bouloulou"});
  }

  changeH2=()=>{
    let input= document.querySelector("input");
    let val = input.value; 
    this.setState({sousTitre: val});
  }

  changePara=()=>{
    let textarea = document.querySelector("textarea");
    let val2 = textarea.value;
    this.setState({para2: val2 })
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

        <h2>{this.state.sousTitre}</h2>

        <input type="text"/>

        <button onClick={()=>{this.changeH2()}}>Nouveau sous titre</button>

        <p>{this.state.para2}</p>
        <textarea onChange={()=>{this.changePara()}} name="" id="" cols="30" rows="10"></textarea>

      </div>
    )
  }
}

export default App
