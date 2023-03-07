import Create from './Components/Dices2/Create';
import List from './Components/Dices2/List';
import './Components/Dices2/style.scss';
import Messages from './Components/Dices2/Messages';
import { GlobalContextProvider } from './Components/Dices2/GlobalContext';


function App() {
    return (
        <GlobalContextProvider>
            <div className="dices">
                <div className="content">
                    <div className="left">
                        <Create />
                    </div>
                    <div className="right">
                        <List />
                    </div>
                </div>
            </div>
            {
                <Messages/>
            }
        </GlobalContextProvider>
    );
}

export default App;