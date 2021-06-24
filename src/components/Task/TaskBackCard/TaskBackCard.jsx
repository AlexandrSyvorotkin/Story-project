import React, {useState} from 'react';
import './TaskBack.css'
import {AiOutlineCheck} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";
import TaskComplete from "../TaskComplete/TaskComplete";

const TaskBackCard = ({title, taskClick, setBackCard, points}) => {

    // TODO: Прокинуть функцию taskYesClick в дочерний компонент и поменять стили

    const [taskBack, setTaskBack] = useState({})
    const taskYesClick = () => {
        setTaskBack({
            display: "none"
        })



        setTimeout(()=> {
            setBackCard(false)
        }, 1500)
    }


    return (
        <div className='taskback' style={taskBack}>
            <p className='question'>Did you {title}?</p>
            <div className='taskbackbuttons'>
                <div className='answer'>

                    <div className='dialogAnswer' onClick={taskClick}>
                        <div className='iconContainer'>
                            <AiOutlineClose/>
                        </div>
                        <span>No, maybe later</span>
                    </div>

                    <div className='dialogAnswer' onClick={taskYesClick}>
                        <div className='iconContainer'>
                            <AiOutlineCheck/>
                        </div>
                        <span>Yes, i did</span>
                    </div>

                    <TaskComplete points={points}/>
                </div>
            </div>
        </div>

    );
};

export default TaskBackCard;
