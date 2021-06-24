import React from 'react';
import SectionName from "../SectionName/SectionName";
import TaskContainer from "../TasksContainer/TasksContainer";

const TaskSection = () => {
    return (
        <div>
            <SectionName/>
            <TaskContainer/>
        </div>
    );
};

export default TaskSection;
