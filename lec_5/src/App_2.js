import React, { createRef } from 'react';
import './App.css';

class App_2 extends React.Component {
  constructor() {
    super();
    // Create a ref to store the DOM element
    this.inputRef = createRef();
  }

  componentDidMount() {
    // When the component mounts, set the value of the input element to an empty string
    console.log(this.inputRef.current.value = "");
  }

  // Method to get the value of the input element and modify its styles
  getValue() {
    console.warn(this.inputRef.current.value); // Log the current value
    // Change the text color and background color of the input element
    this.inputRef.current.style.color = 'green';
    this.inputRef.current.style.backgroundColor = 'yellow';
  }

  render() {
    return (
      <div className="App">
        {/* Input element with ref */}
        <input type='text' ref={this.inputRef}></input>
        {/* Button to trigger getValue() method */}
        <button onClick={() => this.getValue()}>Get Ref</button>
      </div>
    );
  }
}

export default App_2;

