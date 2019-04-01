import React, { Component } from 'react';
import './App.css';
import CarsPageContainer from "./containers/CarePageContainer/CarsPageContainer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <CarsPageContainer/>
      </div>
    );
  }
}

export default App;
