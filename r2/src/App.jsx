import 'bootstrap/dist/css/bootstrap.min.css';
import './style/app.scss';
import { GlobalProvider } from './Components/Global';
import Nav from './Components/Nav';
import Routes from './Components/Routes';


// import Login from './Components/Login';

function App() {
  return (
    <GlobalProvider>

      <Nav />

      <Routes />

    </GlobalProvider>
  );
}

export default App;
