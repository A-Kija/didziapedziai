import { useReducer, useState } from 'react';
import './App.scss';
import countReducer from './Components/countReducer';

function App() {

  const [add, setAdd] = useState(0)
  const [count, dispachCount] = useReducer(countReducer, 1);

  const add1 = _ => {
    const action = {
      type: 'add_1'
    };
    dispachCount(action);
  }

  const remove1 = _ => {
    const action = {
      type: 'rem_1'
    };
    dispachCount(action);
  }

  const doAdd = _ => {
    return {
      type: 'add',
      payload: parseInt(add)
    }
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1 style={{
          fontSize: '100px',
          color: 'skyblue'
        }}>{count}</h1>

        <div>
          <button className="coral" onClick={add1}>+1</button>
          <button className="red" onClick={remove1}>-1</button>
          <button className="coral" onClick={_ => dispachCount({ type: 'add_3' })}>+3</button>
          <button className="red" onClick={_ => dispachCount({ type: 'rem_3' })}>-3</button>
        </div>
        <div>
          <input type="number" 
          style={{ fontSize: '26px', width: '50px' }} 
          value={add}
          onChange={e => setAdd(e.target.value)}
          ></input>
          <button className="blue" onClick={doAdd}>add</button>
        </div>

      </header>
    </div>
  );
}

export default App;
