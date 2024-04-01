import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from '@/firebase/config'

async function enableTask(name) {
    const tasksRef = collection(db, "tasks");
    const q = query(tasksRef, where("name", "==", name));
    const querySnapshot = await getDocs(q);

    let docRef = ''
    querySnapshot.forEach((document) => {
        docRef = doc(db, 'tasks', document.id)
        console.log(document.id);
    })
    await updateDoc(docRef, {
        active: false
    });
    console.log('updated successfully');
}
export default enableTask