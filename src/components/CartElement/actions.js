import {getDownloadURL, getStorage, ref} from "firebase/storage";
export const getImage= (id,folderId , callback) => {
    return async () => {
        const storage = getStorage();
        getDownloadURL(ref(storage, `images/${folderId}/${id}`))
            .then((url) => {
                callback(url)
            })
            .catch((error) => {
                console.log(error)
            });
    }

}