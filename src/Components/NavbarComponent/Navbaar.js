import React, { useState } from 'react';
import "./Navbaar.css"




const Navbaar = (props) => {

        
  return <div className='main2'>
   
   <h1>My Notes</h1>
      <button onClick={()=>props.getdata("create")} >Add 📝</button>
      <button onClick={() => props.getdata('display')}>Home 🏡</button>
   
      <button onClick={() => props.getdata('trash')}>Trash <i className="ri-delete-bin-line"></i></button>
       <hr />
  </div>;
};

export default Navbaar;
