import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import { useContext } from 'react';
import { Store } from './store';

import Nav from './Componets/Nav';
import Home from './Pages/Home';
import Empty from './Pages/Empty';

import Login from './Pages/Auth/Login';

import Messages from './Componets/Messages';
import Loader from './Componets/Loader';


import SectionsList from './Pages/Sections/List';
import SectionsCreate from './Pages/Sections/Create';
import SectionsEdit from './Pages/Sections/Edit';

import DistrictsList from './Pages/Districts/List';
import DistrictsCreate from './Pages/Districts/Create';
import DistrictsEdit from './Pages/Districts/Edit';

import CommentsEdit from './Pages/Comments/List';

import CommonList from './Pages/Front/List';
import Comments from './Pages/Front/Comments';



function App() {

  const { page, pageTop, messages, loader } = useContext(Store);



  return (
    <>
      {loader ? <Loader/> : null}
      
      {pageTop === 'nav' ? <Nav /> : null}

      {(messages && messages.length) ? <Messages messages={messages} /> : null }


      {console.log('PAGE:', page)}


      {page === 'empty' ? <Empty /> : null}
      {page === 'home' ? <Home /> : null}
      {page === 'sections-create' ? <SectionsCreate /> : null}
      {page === 'sections-list' ? <SectionsList /> : null}
      {page === 'sections-show-edit' ? <SectionsEdit /> : null}

      {page === 'districts-create' ? <DistrictsCreate /> : null}
      {page === 'districts-list' ? <DistrictsList /> : null}
      {page === 'districts-show-edit' ? <DistrictsEdit /> : null}

      {page === 'common-list' ? <CommonList /> : null}
      {page === 'comments' ? <Comments /> : null}

      {page === 'comments-show-edit' ? <CommentsEdit /> : null}

      

      {page === 'login' ? <Login /> : null}

    </>
  );



}

export default App;
