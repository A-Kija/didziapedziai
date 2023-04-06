import { useContext, useState } from 'react';
import { actionsList, Store } from '../../store';
import '../../styles/list.scss';

export default function Comments() {

    const { store, dispach } = useContext(Store);

    const [text, setText] = useState('');


    const add = _ => {
        const did = store?.data?.find(d => d.type === 'district').id;
        const sid = store?.data?.find(d => d.type === 'section').id;

        dispach(actionsList['add-comment'](
            [did, sid],
            { text }
        ));
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="card m-5">
                        <div className="card-header">
                            <h1 className="list-title">{store?.data?.find(d => d.type === 'district').data}</h1>
                            <h2 className="list-subtitle">{store?.data?.find(d => d.type === 'section').data}</h2>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                {
                                    store?.data?.map(c => c.type === 'comment' ? <li key={c.id} className="list-group-item">
                                        <div className="list-bin">
                                            <div className="list-comments">
                                                {c.data}
                                            </div>
                                        </div>
                                    </li> : null)
                                }
                            </ul>
                            <div className="mt-5">
                                <label className="form-label">Jūsų pasiūlymas:</label>
                                <textarea className="form-control" rows="7" value={text} onChange={e => setText(e.target.value)}></textarea>
                            </div>
                            <button type="button" className="btn btn-primary mt-3" onClick={add}>Pateikti pasiūlymą</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}