import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PlayerCard from './components/PlayerCard';
class App extends Component {
  constructor(){
    super();
    this.state = {
      players: []
    }    
  }

  componentDidMount(){
    axios
      .get(`http://localhost:5000/api/footballers`)
      .then(res => {
        // console.table(res.data);
        this.setState({
          players: res.data
        })
      })
      .catch(error => console.log(error))
  }
  
    render() {
      return (
        <div className="App">
          <h1>Happy building <span role="img" aria-label="Smiling emoji">😃</span></h1>


          <div>
            { this.state.players.map(item => ( 
                <PlayerCard playerInfo={item} key={item.id}/> 
            ))}
          </div>
        </div>
      );
    }
}

export default App;
