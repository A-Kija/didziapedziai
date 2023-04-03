import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [colors, setColors] = useState([]);
  const [text, setText] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3003/colors.json')
      .then(res => setColors(res.data));
  }, []);

  const go = _ => {
      axios.post('http://localhost:3003/post', {text})
        .then(res => console.log(res.data));
  }


  return (
    <div className="App">
      <header className="App-header">

        {
          colors.map(c => <div key={c.id} style={{ color: c.color }}><h2>{c.number}</h2></div>)
        }

        <input type="text" value={text} onChange={e => setText(e.target.value)}></input>

        <button onClick={go}>GO</button>

      </header>
    </div>
  );
}

export default App;
