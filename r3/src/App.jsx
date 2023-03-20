import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from './Components/Global';
import List from './Components/List';
import './style/app.scss';

function App() {
  return (
    <GlobalProvider>
            <>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        CREATE
                    </div>
                    <div className="col-7">
                        <List />
                    </div>
                </div>
            </div>
        </>
    </GlobalProvider>
  );
}


export default App;
