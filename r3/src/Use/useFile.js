import { useEffect, useRef, useState } from 'react';


export const useFile = _ => {

    const [file, setFile] = useState(null);
    const uploadInput = useRef(null);

    useEffect(() => {
        // console.log(file);
    }, [file]);

    const fileReader = file => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = _ => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const readFile = e => {
        uploadInput.current = e.target;
        fileReader(e.target.files[0])
            .then(f => setFile(f))
            .catch(_ => {
                //error
            })
    }

    const remImage = _ => {
        setFile(null);
        if (null !== uploadInput.current) {
            uploadInput.current.value = null;
        }
    }





    return [file, readFile, remImage];

}