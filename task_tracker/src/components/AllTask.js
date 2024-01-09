import React from 'react';
import TaskComponent from './ListCompnent';
import { Link } from 'react-router-dom';

const AllTask = (props) => {
   


  return (
    <div id='mainSection'>
          <div id='HomeButton'>
              <Link to={'/'} id='HomeBtnTxt'>
                <button>
                   Back
                </button>
              </Link> 
          </div>

          <div className='AllTask' >
              {
                props.data.map((item) => (<TaskComponent key={item.id} item = {item}  handleDelete={props.handleDelete}/>))
              }
           </div>
    </div>
    
  )
}

export default AllTask
