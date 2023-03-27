import { useState } from 'react';
import './App.scss';
import mainReducer from './Components/mainReducer';
import middleware10 from './Components/middleware10';
import useMiddleware from './Components/useMiddleware';

function App() {

  const [add, setAdd] = useState(0)
  const [count, dispachCount] = useMiddleware(mainReducer, {
    number: 1,
    sq: []
  }, [middleware10]);

  const add1 = _ => {
    const action = {
      type: ['c', 'add_1']
    };
    dispachCount(action);
  }

  const remove1 = _ => {
    const action = {
      type: ['c', 'rem_1']
    };
    dispachCount(action);
  }

  const doAdd = _ => {
    dispachCount({
      type: ['c', 'add'],
      payload: parseInt(add)
    });
  }

  return (
    <div className="App">
      <header className="App-header">

        <div className="sq-bin">
          {
            count.sq.map((_, i) => <div key={i} className="sq sm">{count.number + i}</div>)
          }
        </div>

        <div>
          <button className="coral" onClick={add1}>+1</button>
          <button className="red" onClick={remove1}>-1</button>
          <button className="coral" onClick={_ => dispachCount({ type: ['c', 'add_3'] })}>+3</button>
          <button className="red" onClick={_ => dispachCount({ type: ['c', 'rem_3'] })}>-3</button>
        </div>
        <div>
          <input type="number" 
          style={{ fontSize: '26px', width: '50px' }} 
          value={add}
          onChange={e => setAdd(e.target.value)}
          ></input>
          <button className="blue" onClick={doAdd}>add</button>
        </div>
        <div>
        <button className="coral" onClick={_ => dispachCount({ type: ['sq', 'add'] })}>[]</button>
        </div>

      </header>
    </div>
  );
}

export default App;
