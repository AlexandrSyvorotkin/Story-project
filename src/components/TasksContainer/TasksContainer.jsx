import React from 'react';
import Task from "../Task/Task";
import './TasksContainer.css'

const TaskContainer = () => {

    const tasksArray = [
        {
            id: 1,
            title: "Find dad's wallet",
            points: "20",
            isCompleted: false
        },
        {
            id: 2,
            title: "Put away old toys to white boxes on the balkoney",
            points: "80",
            isCompleted: false
        },
        {
            id: 3,
            title: "Wash the dishes",
            points: "110",
            isCompleted: false
        },
        {
            id: 4,
            title: "Make your bed in the morning",
            points: "135",
            isCompleted: false
        }
    ]


    return (
        <div className='containerLayout'>
            {tasksArray.map((item) => {
                return (
                    <Task
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        points={item.points}
                    />
                )
            })}
        </div>
    );
}

export default TaskContainer;
