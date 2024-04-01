import { collection, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from '@/firebase/config'

async function deleteData(name) {
    const tasksRef = collection(db, "tasks");
    const q = query(tasksRef, where("name", "==", name));
    const querySnapshot = await getDocs(q);

    let docRef = ''
    querySnapshot.forEach((document) => {
        docRef = doc(db, 'tasks', document.id)
        console.log(document.id);
    })
    await deleteDoc(docRef);
    console.log('deleted successfully');
}
export default deleteData