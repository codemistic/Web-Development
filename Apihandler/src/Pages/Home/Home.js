import axios from 'axios'
import React, {useContext} from 'react'
import Usercard from '../../Components/Usercard/Usercard';
import UserContext from '../../Context/UserContext';
import "./Home.css"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Landing from '../../Components/Landing/Landing';



function Home() {
  
    const context = useContext(UserContext);
    const {info,load,setInfo} = context;

  return (
    
    <div className="homeContainer">
  

   {info.length==0? (
   
   <div id = "landing">
    <Landing/>
   <Backdrop
     sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
     open={load}
     
   >
     <CircularProgress color="inherit" />
   </Backdrop>
 </div>
   
   )
   :
   
   <div className='grid' >
     {info.map((info)=>{
        return (
        <Usercard user = {info} key = {info.id}/> 

        );
      })}
      </div>
      
      }
      </div>
  )
}

export default Home
