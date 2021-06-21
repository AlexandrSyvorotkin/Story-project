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
            title: "Find dad's wallett",
            points: "80",
            isCompleted: false
        },
        {
            id: 3,
            title: "Find dad's wallettt",
            points: "110",
            isCompleted: false
        },
        {
            id: 4,
            title: "Find dad's walletttt",
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
