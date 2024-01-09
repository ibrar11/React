import { Modal, Table, Spin } from 'antd'


const RoadsWork = (props) => {
 
    const handleCancel = () => {
        props.setRoadWorks([]);
        props.setIsLoading(true);
        props.setIsWorksModal(false);
    }

  const column = [
    {
        title: 'Tile',
        dataIndex: 'title',
        key: 'key',
    },
    {
        title: 'SubTitle',
        dataIndex: 'subtitle',
        key: 'key',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'key',
    },
    {
        title: 'Coordinate',
        key: 'key',
        render: payload => {
            return <p>latitude:{payload.coordinate.lat} longitude:{payload.coordinate.long}</p>
        }
    }
  ]

  return (
    <div className='roadsWork'>
       
        <Modal
            title="Road Works"
            centered
            open = {props.isWorksModal}
            footer = {null}
            width= {1000}
            height = {600}
            onCancel={handleCancel}
            destroyOnClose= {true}
        >
        {props.roadWorks.length > 0 ? <Table
            dataSource={props.roadWorks}
            columns={column}
        /> :
        props.isLoading ? <Spin>Lodaing, Please Wait!</Spin> : 'Data not Found!'
        }
        </Modal>
       
    </div>
  )
}

export default RoadsWork
