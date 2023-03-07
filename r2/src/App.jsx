import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './Components/Create';
import { GlobalProvider } from './Components/Global';
import List from './Components/List';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <Create />
          </div>
          <div className="col-7">
            <List />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
