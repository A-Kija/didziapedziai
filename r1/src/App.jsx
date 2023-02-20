'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Circle from './Components/011/Circle';
import Number from './Components/011/Number';

function App() {


    return (
        <div className="App">
            <header className="App-header">

            <Circle>
                <Number type="n1"/>
                <Number type="n2"/>
                <Number type="n3"/>
                <Number type="n4"/>
            </Circle>
            
                

            </header>
        </div>
    );

}

export default App;