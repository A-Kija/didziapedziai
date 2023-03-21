import { useState } from "react"

export const useModal = _ => {

    const [editModal, setEditModal] = useState(null);

    return [editModal, setEditModal];
}