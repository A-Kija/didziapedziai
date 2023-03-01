import Delete from "./Delete";
import Edit from "./Edit";

function List({ list, setDeleteModal, deleteModal, setDeleteData, editModal, setEditModal, setEditData }) {

    if (null === list) {
        return (
            <div className="list">
                <div className="loader">
                    LOADING...
                </div>
            </div>
        )
    }

    
    return (
        <>
            <div className="title">
                List
            </div>
            <div className="list">
                {
                    list.map(d => <div key={d.id ?? d.promiseId} className="item">
                        <div className={'dice _' + d.number} style={{
                            fontSize: d.size + 'px',
                            color: d.color
                        }}></div>
                        {
                            !d.promiseId 
                            ?
                            <>
                            <div className="delete-button" onClick={() => setDeleteModal(d)}></div>
                            <div className="edit-button" onClick={() => setEditModal(d)}></div>
                            </>
                            :
                            null
                        }

                        {
                            deleteModal && deleteModal.id === d.id ? <Delete dice={d} setDeleteModal={setDeleteModal} setDeleteData={setDeleteData} /> : null
                        }
                        {
                            editModal && editModal.id === d.id ? <Edit setEditModal={setEditModal} editModal={editModal} setEditData={setEditData} /> : null
                        }
                        
                        
                        
                    </div>)
                }
            </div>
        </>
    );
}

export default List;