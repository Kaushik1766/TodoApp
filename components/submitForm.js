'use server'
import { useDispatch } from "react-redux"
export default async function submitForm(formData) {
    const dispatch = useDispatch()
    const task = {
        name: formData.get('name'),
        description: formData.get('description')
    }
    dispatch(addTask(task))
    console.log(task);
}