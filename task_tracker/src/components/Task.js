import moment from 'moment';
import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Task = (props) => {

        const [task , setTask] = useState(props.task ? props.task : '');
        const [date , setDate] = useState(props.date ? props.date : '');
        const [time , setTime] = useState(props.time ? props.time : '');
        const [description , setDescription] = useState(props.description ? props.description : '');
        const [reminder , setReminder] = useState(props.reminder  ? props.reminder : false);

        const navigate = useNavigate();

       
       const resetStates = (e) => {
        e.preventDefault();
        if(task && date && time && description){
                props.handleSubmit(task , date , reminder, time, description, props.item);
        }
        setTask('');
        setDate('');
        setTime('');
        setDescription('');
        setReminder(false);
        navigate(-1);
       }

  return (
    <form className='Form' onSubmit={(e)=>(e.preventDefault())}>
        <div className='forTask'>
                <label htmlFor="task">Task</label>
                <input 
                id='task'
                type="text"
                placeholder='Add Task'
                required
                value = {task}
                onChange = {(e)=>(setTask(e.target.value))}
                />
        </div>
        <div className='forDate'>
                <label htmlFor="date">Date</label>
                <input 
                type='date'
                min = {moment().format("YYYY-MM-DD")}
                id='date'
                placeholder='Add Date'
                required
                value = {date}
                onChange = {(e)=>(setDate(e.target.value))}
                />
        </div>

        <div className='forTime'>
                <label htmlFor="time">Time</label>
                <input 
                type='time'
                id='time'
                placeholder='Add Time in HH:MM'
                required
                value = {time}
                onChange = {(e)=>(setTime(e.target.value))}
                />
        </div>

        <div className='forDescription '>
                <label htmlFor="description">Description</label>
                <textarea 
                type='text'
                id='description'
                placeholder='Explain Your Task here'
                required
                value = {description}
                onChange = {(e)=>(setDescription(e.target.value))}
                ></textarea>
        </div>
        
        <div className='forReminder'>
                <label htmlFor="checkBox">Set Reminder</label>
                <input 
                id='checkBox'
                type="checkbox"
                checked = {reminder}
                onChange = {(e)=>(setReminder(e.target.checked))}
                />
        </div>
        <button type='submit' onClick={(e)=>(resetStates(e))}>
            {props.item ?  'Update Task'  : 'Save Task'}
        </button>
    </form>
  )
}

export default Task
