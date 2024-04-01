import { collection, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from '@/firebase/config'

// function to delete a task from firebase
async function deleteData(name) {

    // get reference to main tasks collection
    const tasksRef = collection(db, "tasks");

    // build a query searching for the document which has name attribute as the specified name
    const q = query(tasksRef, where("name", "==", name));

    // fetch the documents having name as name provided
    const querySnapshot = await getDocs(q);

    let docRef = ''
    querySnapshot.forEach((document) => {

        // getting document reference
        docRef = doc(db, 'tasks', document.id)
        console.log(document.id);
    })

    // delete the document with the specified document reference
    await deleteDoc(docRef);
    console.log('deleted successfully');
}
export default deleteData