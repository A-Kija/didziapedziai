import { useState } from "react"

export const useModal = _ => {

    const [deleteModal, setDeleteModal] = useState(null);
    const [addModal, setAddModal] = useState(null);
    const [remModal, setRemModal] = useState(null);

    return [deleteModal, setDeleteModal, addModal, setAddModal, remModal, setRemModal];
}