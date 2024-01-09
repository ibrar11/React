import { Modal, Table, Input, Select , Button} from 'antd'
import React, { useState } from 'react'

const RoadDetails = (props) => {

  const [comment , setComment] = useState('');
  const [color , setColor] = useState('');
  const [roadName , setRoadName] = useState('');
  const [infoModalOpen , setInfoModalOpen] = useState(false);
    
  const { Option } = Select;

  const stateSetter = (e, roadName) => { 
    e.preventDefault();
    setInfoModalOpen(true)
    setRoadName(roadName);
    const road = props.favoriteRoads.find((road)=> road.roadName === roadName);
    setComment(road.comment);
    setColor(road.color);
  }

  const addDetails = (e) => {
    e.preventDefault();
    props.updateDetails(roadName,comment,color);
  }

  const handleDetailsModal = () => {
    setComment('');
    setColor('');
    setRoadName('');
    setInfoModalOpen(false);
  }

  const data = props.roads.map( 
    (item,index)=>{return {
      key: index+1,
      roadName: item,
    }})

  const column = [
    {
      title:'Road Name',
      dataIndex:'roadName',
      key: 'key'
    },
    {
      title:'Road Work',
      key: 'key',
      render: payload => {
        return <button onClick={(e)=>(props.fetchRoadWorks(e, payload.roadName))}>View</button>
      }
    },
    {
      title:'Action',
      key: 'key',
      render: payload => {
      if (props.favoriteRoads.find((road)=> road.roadName === payload.roadName)){
        return(  
        <div className='infoButton'>
          <button 
            onClick={(e)=>(props.deleteFavorite(e,payload.roadName))}
          >
            Remove
          </button>
          <button 
            onClick={(e)=>(stateSetter(e,payload.roadName))}
          >
            Additional Info
          </button>
        </div> 
        )
      }else {
        return( 
          <button 
            onClick={(e)=>(props.handleFavorite(e,payload.roadName))}
          >
            Add to favorite
          </button>
        )
      }
      }
    }
  ]

  return (
    <main className='roadTable'>
      <Table
        dataSource={data}
        columns = {column}
      />
      <Modal
        className='detailsModal'
        title = 'Additional Info'
        open = {infoModalOpen}
        centered
        width={700}
        onOk = {handleDetailsModal}
        onCancel={handleDetailsModal}
      >
      <div className='fields'>
      <div className='field1'>
        <label htmlFor="commentField"><p id='staric'>*</p>Comment:</label>
        <Input 
        id='commentField'
        required
        value = {comment}
        onChange={(e)=>(setComment(e.target.value))}
        />
      </div>
      <div className='field2'>
        <label>Select:</label>
        <Select
          className='colorField'
          value = {color}
          showSearch
          onChange={(value)=>(setColor(value))} >
          <Option value="Red"></Option>
          <Option value="White"></Option>
          <Option value="Black"></Option>
          <Option value="Green"></Option>
          <Option value="Yellow"></Option>
          <Option value="Brown"></Option>
          <Option value="Blue"></Option>
        </Select>
      </div>
      <Button 
        id='submitButton'
        type='primary'
        onClick={(e)=>(addDetails(e))}
      >
        Submit
      </Button>
      </div>
      </Modal>
    </main>
  )
}

export default RoadDetails;
