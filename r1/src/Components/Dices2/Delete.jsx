import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

function Delete({setDeleteModal, dice}) {

    const { setDeleteData } = useContext(GlobalContext);

    

    return (
        <div className="delete-modal">
            Confirm delete
            <span onClick={() => setDeleteData(dice)}>&#10003;</span>
            <span onClick={() => setDeleteModal(null)}>Cancel</span>
        </div>
    );

}

export default Delete;