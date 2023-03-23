import { useState } from 'react';
import './App.scss';

function App() {

  const [count, setCount] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <div className="nice-menu">
        <a href="http://briedis.com/">Home</a>
        <a href="http://briedis.com/plus-one">Plus One</a>
        <a href="http://briedis.com/blue">Blue</a>
        </div>

        <h1>{count}</h1>

        <button className="red" onClick={_=>setCount(c => c + 1)}>+1</button>
      </header>
    </div>
  );
}

export default App;
