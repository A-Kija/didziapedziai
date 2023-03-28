import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import './app.scss';
import Nav from './Componets/Nav';
import Home from './Pages/Home';
import { Store } from './store';


function App() {

  const { page, pageTop } = useContext(Store);

  return (
    <>
      {pageTop === 'nav' ? <Nav /> : null}


      {page === 'home' ? <Home /> : null}

    </>
  );



}

export default App;
