import React, { Component } from 'react';
import TanksListPage from './Components/TanksListPage'
import TankDetails from './Components/TankDetails'
import tanks from './API/tanks'



class App extends Component {
  constructor(props){
    super(props)
      this.state ={
          tankId: null
      }
  }
  handleTankSelect = (model) => {

    this.setState({ tankId: model })
  };

  hadleBack  = () => {
      this.setState({ tankId: null })
  };
  render() {
    return (
      <div className="App">
          {
              this.state.tankId
                  ? <TankDetails hadleBack ={this.hadleBack} tank={tanks.find(tank => this.state.tankId === tank.model)}/>
                  : <TanksListPage handleTankSelect = {this.handleTankSelect} items={tanks} />
          }

      </div>
    );
  }
}

export default App;
