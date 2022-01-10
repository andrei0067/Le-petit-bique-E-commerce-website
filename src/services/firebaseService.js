import {collection, getDocs, addDoc, doc, deleteDoc , updateDoc} from "firebase/firestore";
import {database} from "../config/firebaseConfig";
import {getStorage} from "firebase/storage";
import {ref, uploadBytes} from "@firebase/storage";

const productCollectionRef = collection(database,"products");


export const createProductFbService = async (products) => {
    return await addDoc(productCollectionRef , products ).then(response=>{
        return response.id
    }).catch((errors)=>{
        return errors
    })

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

export const uploadPhotoFbService= async (id , image) => {
    const storage =  getStorage()
    debugger;
    const storageRef =  ref(storage, `images/${id}/${image?.id}`)
    const metadata ={
        contentType : image.type
    }
    await uploadBytes(storageRef , image?.file , metadata).then(response=>{
        console.log(response)
    }).catch(errors =>{
        console.log(errors)
    })
}
export const updateProductFbService = async (id ,products) => {
    debugger;
    const productDoc = doc(database , "products" , id)
    const newFields = {...products};
    await updateDoc(productDoc , newFields)
}
