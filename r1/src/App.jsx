import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import Fox from './Components/016/Fox';
import Home from './Components/016/Home';
import Menu from './Components/016/Menu';
import Racoon from './Components/016/Racoon';
import axios from 'axios';

function App() {

    const [page, setPage] = useState('home');

    const [content, setContent] = useState(null);


    useEffect(() => {
        axios.get('http://localhost:3003/api/' + page)
        .then(res => {
            setContent(res.data);
        });
    }, [page]);


    return (
        <div className="App">
            <header className="App-header">

                <Menu setPage={setPage} />

                {
                    page === 'home' && null !== content ? <Home title={content.title} /> : null
                }

                {
                    page === 'fox' && null !== content ? <Fox title={content.title} /> : null
                }

                {
                    page === 'racoon' && null !== content ? <Racoon title={content.title} /> : null
                }

                {
                    null == content ? <h1>LOADING...</h1> : null
                }

            </header>
        </div>
    );

}

export default App;