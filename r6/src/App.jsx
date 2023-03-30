import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import { useContext } from 'react';
import { Store } from './store';

import Nav from './Componets/Nav';
import Home from './Pages/Home';

import Login from './Pages/Auth/Login';

import Messages from './Componets/Messages';

import SectionsList from './Pages/Sections/List';
import SectionsCreate from './Pages/Sections/Create';
import SectionsEdit from './Pages/Sections/Edit';
import Loader from './Componets/Loader';



function App() {

  const { page, pageTop, messages, loader } = useContext(Store);



  return (
    <>
      {loader ? <Loader/> : null}
      
      {pageTop === 'nav' ? <Nav /> : null}

      {(messages && messages.length) ? <Messages messages={messages} /> : null }


      {page === 'home' ? <Home /> : null}
      {page === 'sections-create' ? <SectionsCreate /> : null}
      {page === 'sections-list' ? <SectionsList /> : null}
      {page === 'sections-show-edit' ? <SectionsEdit /> : null}


      

      {page === 'login' ? <Login /> : null}

    </>
  );



}

export default App;
