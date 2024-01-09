import { useEffect, useState } from 'react';
import 'antd/dist/antd';

import Header from "./components/Header";
import RoadDetails from './components/RoadDetails';
import RoadsWork from './components/RoadsWork';
import axios from 'axios';

function App() {
 
  const [roads , setRoads] = useState([]);
  const [roadsWorks , setRoadWorks] = useState([]);
  const [isWorksModal , setIsWorksModal] = useState(false);
  const [favoriteRoads , setFavoriteRoads] = useState([]);
  const [isLoading , setIsLoading] = useState(true);

  useEffect(()=>{
    
    const fetchData = async () => {
      try{
         const response = await axios.get('https://verkehr.autobahn.de/o/autobahn/');
         setRoads(response.data.roads);
      }catch(err){
        console.log(err.message);
      }
    }
    fetchData();

  } ,[])


  const fetchRoadWorks = async (e,roadName) => {
    e.preventDefault();
    setIsWorksModal(true);
    if(roadName){
    try{
      const response = await axios.get(`https://verkehr.autobahn.de/o/autobahn/${roadName}/services/roadworks`);
      if(response.data.roadworks.length === 0){
        setIsLoading(false);
        return;
      }
      response.data.roadworks.forEach((data, index) => data.key = index)
      setRoadWorks(response.data.roadworks);
    }catch(err){
      setIsLoading(false);
      console.log(err.message);
    }
    }
  }

  const handleFavorite = (e,roadName) => {
      e.preventDefault();
      const roadToAdd = {
        roadName: roadName,
        comment: '',
        color: ''
      }
      setFavoriteRoads([...favoriteRoads,roadToAdd])
  }

  const deleteFavorite = (e,roadName) => {
    e.preventDefault();
    const remianingRoads = favoriteRoads.filter((road)=> road.roadName !== roadName);
    setFavoriteRoads(remianingRoads);
  }

  const updateDetails = (roadName,comment,color) => {
     if(roadName){
      const road = favoriteRoads.find((road)=> road.roadName === roadName);
      if(comment){
        road.comment = comment;
      }
      if(color){
        road.color = color;
      }
     }
  }

  return (
    <div className="App">
       <Header/>
       <RoadDetails
        favoriteRoads = {favoriteRoads}
        roads = {roads}
        fetchRoadWorks = {fetchRoadWorks}
        handleFavorite = {handleFavorite}
        deleteFavorite = {deleteFavorite}
        updateDetails = {updateDetails}
       />
       {isWorksModal && <RoadsWork
         roadWorks = {roadsWorks}
         setRoadWorks = {setRoadWorks}
         isWorksModal = {isWorksModal}
         setIsWorksModal = {setIsWorksModal}
         isLoading = {isLoading}
         setIsLoading = {setIsLoading}
       />}
    </div>
  );
}

export default App;
