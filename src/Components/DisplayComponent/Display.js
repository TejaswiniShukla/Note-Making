import React from 'react';
import "./Display.css"

const Display = (props) => {

    const sendtheeditordata=(elem)=>{
        props.dat("update")
        props.foredit(elem)
    }
    
   const values=props.valuess.map((a,i)=>{
       return <div key={i} className="rect1">
                 <h4>{a.topic}</h4>
      
       <hr  style={{ border:"none", height: 4, backgroundColor: 'white'}}/>
  
      <div className="innerrect1">
          <p>{a.note}</p>
      </div>
      <div className="foricons">
           <p onClick={()=>sendtheeditordata(a)}>📝</p>
                <i id={i} onClick={()=>props.fordeletevalue(i)} className="ri-delete-bin-line"></i>           
      </div>
   </div>
   })
 

  return <div className='main3'>
     
         
          {values}
      
     
     
    
       
  </div>;
};

export default Display;
