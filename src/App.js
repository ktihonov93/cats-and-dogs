import { Component } from "react"
import Dropdown from './components/Dropdown'
import './App.css';
import Title from './components/Title'
import animals from './data'
import AnimalsList from './components/AnimalsList'

class App extends Component {
  constructor (props){
    super(props)
    this.state = {
      userSelection: 'All'
    }
  }

  handleAnimalSelection = (event) => {
    this.setState({userSelection: event.target.value})
  }
  
  arrayChoice = () => {
    const {userSelection} = this.state;
    if (userSelection === "All"){
      return animals
    } else if (userSelection === "Cats") {
      return animals.filter(animal => animal.type === 'cat')
    } else {
      return animals.filter(animal => animal.type === 'dog')
    }
  }

  render(){    
    return (
      <div className="App">
        <Title pageTitle="React Cats and Dogs"/>
        <Dropdown handleSelect={this.handleAnimalSelection}/>
        <AnimalsList animalsArray={this.arrayChoice()}/>
      </div>
    );
  }
  
}

export default App;
