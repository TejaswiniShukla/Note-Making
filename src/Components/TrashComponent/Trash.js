import React from 'react';
import "./Trash.css"

const Trash = (props) => {
  
      const trash=props.data.map((g,i)=>{
           return  <div key={i} className="recttrash">
           <h4>{g.topic}</h4>
           <hr  style={{height: 3,}}/>

         <div className="innertrashrect1">
            <p>{g.note}</p>
         </div>
         <div className="fortrashicons">
          <i onClick={()=>props.res(i)}  className="ri-restart-line"></i>restore | delete
          <i onClick={()=>props.datta(i)} className="ri-delete-bin-line"></i>
               
       </div>
      </div>
      })
  return <div className='maintrash'>
           {trash}
</div>

 
};

export default Trash;
