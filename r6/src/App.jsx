import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import { useContext } from 'react';
import { Store } from './store';

import Nav from './Componets/Nav';
import Home from './Pages/Home';
import SectionsCreate from './Pages/Sections/Create';
import Login from './Pages/Auth/Login';



function App() {

  const { page, pageTop } = useContext(Store);

  return (
    <>
      {pageTop === 'nav' ? <Nav /> : null}


      {page === 'home' ? <Home /> : null}
      {page === 'sections-create' ? <SectionsCreate /> : null}
      {page === 'login' ? <Login /> : null}

    </>
  );



}

export default App;
