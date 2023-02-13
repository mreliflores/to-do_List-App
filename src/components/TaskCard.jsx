import React from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext"
import { MdDelete } from "react-icons/md";

export function TaskCard({ task }) {

    const { deleteTask } = useContext(TaskContext)


    return (
        <div key={task.id} className="flex-row bg-gray-800 text-white rounded-md capitalize px-2 py-2">
            <h1 className="mb-5 text-xl">{task.title}</h1>

            <p className=" text-gray-400 mb-3">{task.description}</p>

            <button onClick={() => deleteTask(task.id)} className=" bg-red-700 hover:bg-red-500 text-white font-bold border border-red-700 rounded mx-auto py-2 w-full place-self-end">
                <div className="flex justify-center">
                    <span><MdDelete size={24} /></span>
                    Delete Task
                </div>
            </button>
        </div>
    )
}