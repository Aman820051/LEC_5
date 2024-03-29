import React , {useRef} from 'react'
import './App.css';

function App_1()
{
    let inputRef = useRef();

    function handleInput()
    {
        console.warn("Function Call");
        inputRef.current.value = "RAVI"
    }
    return(
        <div className='App'>
            <input type='text' ref={this.inputRef}></input>
            <button onClick={handleInput}>Get Value</button>
        </div>
    )
}
export default App_1;