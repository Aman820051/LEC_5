import React, { createRef } from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }

  componentDidMount() {
    // Setting the value directly without logging it
    this.inputRef.current.value = "5000";
  }

  render() {
    return (
      <div className="App">
        <input type='text' ref={this.inputRef}></input>
      </div>
    );
  }
}

export default App;
