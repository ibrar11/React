import { Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import { useState } from "react";
import EditTask from "./components/EditTask";
import Footer from "./components/Footer";
import AllTask from "./components/AllTask";
import ViewTask from "./components/ViewTask";

function App() {

  const [data, setData] = useState([]);
  const [isModalOpen , setIsModalOpen] = useState(false);

 const handleForm = () => {
  setIsModalOpen(!isModalOpen)
 }


 const handleDelete = (id) => {
   const newList = data.filter((item) => ((item.id)!==id))
   setData(newList);
 }

 const handleSubmit = async (task,date,reminder,time,description,id) => {

  if(!id){
      const newId = data.length > 0 ? data[data.length-1].id + 1 : 1;
      const taskToAdd = {
        id: newId,
        task: task,
        date,
        time,
        description,
        reminder:reminder
        }
      const newList = [...data,taskToAdd];
      setData(newList);
      return 
  }
      const taskToAdd = {
        id,
        task,
        date,
        time,
        description,
        reminder
        }
      setData(data.map( (task) => task.id === id ? {...taskToAdd} : task));
}


  

  return (
    <div className="App">
      <Header 
        handleForm = {handleForm}
        isModalOpen = {isModalOpen}
    
      />
      <Routes>
        <Route path="/" 
          element={
            <Home
              data={Object.values(data).reverse()}
              handleDelete = {handleDelete}
              handleSubmit = {handleSubmit}
              isModalOpen = {isModalOpen}
            />
          }
        />
        <Route path="/:id" element = {<EditTask
            data={data}
            handleSubmit={handleSubmit}
        />} 
        />
        <Route path="/alltask" element = {<AllTask 
            data={Object.values(data).reverse()} 
            handleDelete={handleDelete} 
            />}/>

        <Route path="/task/:id" element = {<ViewTask data = {data} />}
            />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;