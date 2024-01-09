import React from 'react'
import {FaTrashAlt , FaEdit} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import moment from 'moment';


const ListComponent = ({item,handleDelete}) => {
console.log("in list component");

  return (
    <div className='itemBox'>
            <Link to={`/task/${item.id}`} className={item.reminder ? 'reminderOn' : 'reminderOff'}>
            <div className='minorDetails'>
                  <h2>{item.task}</h2>
                  <p>{moment(item.date).format('MMMM Do, YYYY')} at {moment(item.time,'h:mm a').format('h:mm a')}</p> 
            </div>
            </Link>
            
       
       
            <div className='itemButtons'>
                <button 
                    onClick={()=>(handleDelete(item.id))}
                    className='deleteButton'>
                      <FaTrashAlt/>
                </button>
                <Link to={`/${item.id}`}>
                    <button className='editButton'>
                        <FaEdit/>
                    </button>
                </Link>
            </div>
    </div>
  )
}

export default ListComponent
