import React from 'react'
import { TaskCard } from './TaskCard';
import { TaskContext } from '../context/TaskContext'
import { useContext } from 'react';

function TaskList() {

    const { tasks } = useContext(TaskContext)

    if (tasks.length === 0) {
        return(<div>
            <h1 className='text-white text-xl font-extrabold text-center'>There are not tasks yet...</h1>
        </div>)
    }

    return (<div className='grid grid-cols-3 place-items-stretch gap-3 p-5 max-sm:grid-cols-1'>
        {
            tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
    </div>);
}

export default TaskList