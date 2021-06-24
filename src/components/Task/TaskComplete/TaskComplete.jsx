import React, {useState} from 'react';
import {AiOutlineCheck} from "react-icons/ai";
import './TaskComplete.css'

const TaskComplete = ({points}) => {

    const [taskComplete, setTaskComplete] = useState({})

    // TODO: Принять функцию и поменять стайл у компонента чтобы он рендерился

    return (
        <div className='taskComplete' style={taskComplete}>
            <div className='iconCompleteContainer'>
                <AiOutlineCheck/>
            </div>
            <span>Well done</span>
            <span>You earned {points} Help Coins</span>
        </div>
    );
};

export default TaskComplete;
