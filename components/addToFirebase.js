import { collection, addDoc } from "firebase/firestore";
import { db } from '@/firebase/config'

async function addToFirebase(task) {
    try {
        const docRef = await addDoc(collection(db, "tasks"), task);
        console.log("Document written with ID: ", docRef.id);
    }
    catch (e) {
        console.error("Error adding document: ", e);
    }

}
export default addToFirebase