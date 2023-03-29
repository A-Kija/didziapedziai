import { NAVIGATE, SECTIONS_LIST } from "./types";

export const navigate = to => {
    return {
        type: NAVIGATE,
        payload: {
            to
        }
    };
}

export const sectionsList = _ => {
    return {
        type: SECTIONS_LIST,
        payload: {
            url: 'admin/sections',
            method: 'get',
            page: 'sections-list'
        }
    }
}