import moment from 'moment';
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewTask = (props) => {
    const {id} = useParams();
    const item = props.data.find((item)=> item.id.toString() === id);
    let hoursDifference;
    if(item){
        const dateTime1 =`${moment(item.date).format('MMMM Do, YYYY')}, ${moment(item.time,'h:mm a').format('h:mm a')}`;
        const momentDateTime1 =  moment(dateTime1, 'MMMM Do YYYY, h:mm a')
        hoursDifference = momentDateTime1.diff(moment(), 'hours');
    } 
  return (
    <div className='taskView'>
        <div className='editInViewTask'>
                <Link to={'/'} className='linkInView'>
                    <button>
                       Back
                    </button>
                 </Link>
                {item &&
                <Link to={`/${item.id}`} className='linkInView'>
                    <button>
                        Click to Edit
                    </button>
                </Link>}
        </div>
        
        {item &&
          <div className='taskInfo'>
                <p><b>Tile:</b> {item.task}</p>
                <p><b>Date:</b> {moment(item.date).format('MMMM Do, YYYY')}</p>
                <p><b>Time:</b> {moment(item.time,'h:mm a').format('h:mm a')}</p>
                <p><b>Description:</b> {item.description}</p>
                {hoursDifference && hoursDifference > 0 ? <p><b>Hours:</b> {hoursDifference && hoursDifference === '1' ? `${hoursDifference} hour remaining` :
                 `${hoursDifference} hours remaining`}</p> : <p id='isLimit'>Time limit has been reached</p>}
          </div>
        }
    </div>
  )
}

export default ViewTask
