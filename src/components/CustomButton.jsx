import React from 'react';
import { useSnapshot } from 'valtio';
import state from "../store";

const CustomButton = ({type,title,customStyles,handleClick}) => {
  const snap=useSnapshot(state)

  const genrateStyle=(type)=>{
    if(type=='filled'){
      return {
        backgroundColor:snap.color,
        color:'#fff'
      }
    }
  }
  return (
   <button onClick={handleClick}
   style={genrateStyle(type)}
   className={`px-3 py-1.5 flex-1 rounded-md ${customStyles}`} >
    {title}
   </button>
  )
}

export default CustomButton