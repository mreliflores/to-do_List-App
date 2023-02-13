import { useState, useContext } from "react"
import { TaskContext } from '../context/TaskContext'


function TaskForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const { createTask, tasks } = useContext(TaskContext)

    const handleInputTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleInputDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = {
            id: tasks.length + 1,
            title: title,
            description: description
        }

        createTask(newTask)
        setTitle("")
        setDescription("")
    }

    return (<div>
        <form onSubmit={handleSubmit} className="bg-gray-900 p-5">
            <label className="text-xl text-white font-extrabold">To-do List</label>
            <input
                id="input"
                className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-xs"
                value={title}
                placeholder="Write your task"
                onChange={handleInputTitle}
                autoFocus
                required
            />
            
            <textarea
                className="mb-3 textarea textarea-bordered textarea-sm w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-xs"
                value={description}
                placeholder="Write your description"
                onChange={handleInputDescription}
                required
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Save Task
            </button>
        </form>
    </div>)
}

export default TaskForm