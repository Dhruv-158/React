/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../Tasklist/TaskList'

function EmployeeDashboard(props) {
    
    return (
        <>
            <div className='p-10 bg-[#1c1c1c] h-screen overflow-scroll'>
                <Header changeUser={props.changeUser} data={props.data}/>
                <TaskListNumber data={props.data} />
                <TaskList data={props.data} />
            </div>
        </>
    )
}

export default EmployeeDashboard