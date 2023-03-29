import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import { useContext } from 'react';
import { Store } from './store';

import Nav from './Componets/Nav';
import Home from './Pages/Home';

import Login from './Pages/Auth/Login';


import SectionsList from './Pages/Sections/List';
import SectionsCreate from './Pages/Sections/Create';



function App() {

  const { page, pageTop } = useContext(Store);

  return (
    <>
      {pageTop === 'nav' ? <Nav /> : null}


      {page === 'home' ? <Home /> : null}
      {page === 'sections-create' ? <SectionsCreate /> : null}
      {page === 'sections-list' ? <SectionsList /> : null}


      

      {page === 'login' ? <Login /> : null}

    </>
  );



}

export default App;
