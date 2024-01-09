import React from 'react'
import ListComponent from './ListCompnent'
import Task from './Task'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <main className='Home'>

      {
        props.isModalOpen &&
            <Task 
              handleSubmit = {props.handleSubmit}
            />
      }
    
        <Link to={'/alltask'} id='allTask'>
          <button id='allTaskBtn'>
             View Tasks
          </button>
        </Link>
   
      
        <div className={props.isModalOpen ? 'openModalTask' : 'closeModalTask'}>
            {props.isModalOpen ?  props.data.slice(0,1).map((item) =><ListComponent
                    key={item.id}
                    item = {item}
                    handleDelete={props.handleDelete}
                  />) :
                    props.data.slice(0,4).map((item) =><ListComponent
                    key={item.id}
                    item = {item}
                    handleDelete={props.handleDelete}
                    />)
            }
        </div>
    </main>
  )
}

export default Home

