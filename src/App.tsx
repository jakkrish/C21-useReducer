import { useReducer } from 'react';
import './App.css';

const INCREMENT = 'increment'
const DECREMENT = 'decrement'

function App() {

  const [state,dispatch] = useReducer(reducer, {value:0})

  function reducer(state,action){
    switch(action.type){
      case INCREMENT:  return{
        ...state,
        value:state.value+1
      }
      break;
      case DECREMENT:  return{
        ...state,
        value : state.value-1
      }
      break;
      default: return{
        ...state
      }
        
    }
  }

  return <>
    {state.value}
    <div>
    <button onClick={()=>{dispatch({type:INCREMENT})}}>Increment</button>
    <button onClick={()=>{dispatch({type:DECREMENT})}}>Decrement</button>
    </div>

  </>;
}

export default App;
