import React from 'react';
import Generator from './Generator';
import Telmo from './Telmo';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <p>Welcome to Doogle</p>
        </div>
        <div>
          <Generator />
        </div>
        <br>

        </br>
        <div>
          Mapping
          <br></br>
          <Telmo />
        </div>
      </div>
    )
  };
}

export default App;