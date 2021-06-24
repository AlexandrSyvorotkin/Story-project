import React, {useEffect, useState} from 'react';
import './Task.css'

import ReactCardFlip from "react-card-flip";
import TaskBackCard from "./TaskBackCard/TaskBackCard";


const Task = ({id, title, points}) => {

    const [TaskColor, setTaskColor] = useState("#FFB966")
    const [isFlipped, setIsFlipped] = useState(false)

    const taskClick = () => {
        setIsFlipped(!isFlipped)
    }


    useEffect(() => {
        if (points >= 10 && points <= 74 ) {
            setTaskColor('#FFB966')
        } else if (points >= 75 && points <= 99 ) {
            setTaskColor('#FE8368')
        } else if (points >= 100 && points <= 124 ) {
            setTaskColor('#FF5F5F')
        }
        else if (125 <= points) {
            setTaskColor('#FF4670')
        }
    }, [points])



    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className='task' style={{backgroundColor: TaskColor}} onClick={taskClick}>
           <p className='title'>{title}</p>
           <span className='points'>{points}</span>
        </div>
            <TaskBackCard title={title} taskClick={taskClick} setBackCard={setIsFlipped}/>
        </ReactCardFlip>
    );
};

export default Task;
