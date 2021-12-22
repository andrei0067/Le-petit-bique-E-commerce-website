import {collection, getDocs, addDoc, doc, deleteDoc} from "firebase/firestore";
import {database} from "../config/firebaseConfig";

const productCollectionRef = collection(database,"products");


export const createProductFbService = async (products) => {
    return await addDoc(productCollectionRef , products )
}

export const fetchProductsFbService = async () => {
    return await getDocs(productCollectionRef).then(response => {
        return response.docs.map(doc => {
            return {...doc.data() , id: doc.id}
        })
    }).catch(error => console.log(error));

}

export const deleteProductFbService = async (id) =>{
    const productDoc=doc(database , "products" , id);
    await deleteDoc(productDoc);
}
