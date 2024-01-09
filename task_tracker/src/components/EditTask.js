import React from 'react'
import { useParams , Link } from 'react-router-dom'
import Task from './Task';

const EditTask = (props) => {
    const {id} = useParams();
    const taskToUpdate = props.data.find((task)=>((task.id).toString() === id));
   


  return (
    <main className='EditTask'>
            {taskToUpdate && props.data &&
                <Task 
                    item = {taskToUpdate.id}
                    task = {taskToUpdate.task}
                    date = {taskToUpdate.date}
                    time = {taskToUpdate.time}
                    description = {taskToUpdate.description}
                    reminder = {taskToUpdate.reminder}
                    handleSubmit = {props.handleSubmit}
                />
            }

            {!taskToUpdate &&
                <>
                    <h2>Task Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                        <Link to='/'>Visit Our Homepage</Link>
                    </p>
                </>
            }
      
    </main>
  )
}

export default EditTask
