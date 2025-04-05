import { useReducer } from 'react';
import './App.css';

function App() {

  const [state,dispatch] = useReducer(reducer, {value:0})

  function reducer(action,payload){
    switch(action){
      case 'increment':  state.value++
      break;
      case 'decrement':  state.value++
      break;

    }
  }

  return <>
    {state.value}
    <div>
    <button onClick={()=>{dispatch("increment")}}>Increment</button>
    <button onClick={()=>{dispatch("decrement")}}>Decrement</button>
    </div>

  </>;
}

export default App;
