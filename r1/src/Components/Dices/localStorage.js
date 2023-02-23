import { v4 as uuidv4 } from 'uuid';

const write = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const read = key => {
    const data = localStorage.getItem(key);
    if (null === data) {
        return [];
    }
    return JSON.parse(data);
}

export const create = (key, data) => {
    const allData = read(key);
    data.id = uuidv4();
    allData.push(data);
    write(key, allData);
}