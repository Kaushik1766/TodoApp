import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from '@/firebase/config'

// function to set task as active(incomplete) or inactive(completed)
async function completionStatus(name, status) {
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

    // change the active status of the referred document
    await updateDoc(docRef, {
        active: status
    });
    console.log('updated successfully');
}
export default completionStatus