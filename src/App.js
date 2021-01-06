import React from 'react'
import './App.css';
import Menu from "./Menu"
import List from "./List"

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      libros:[
        {id:0, rating:3, title: "Harry Potter y el cáliz de fuego",image:"harry.jpg"},
        {id:1,rating:1,title:"El principito",image:"principito.jpg"}
      ]
    };
  }
  render(){
    return (
      <div className="App">
        <Menu title="Aplicacion Prueba"/>
        <List items={this.state.libros} />
      </div>
    );
  }
}


export default App;
