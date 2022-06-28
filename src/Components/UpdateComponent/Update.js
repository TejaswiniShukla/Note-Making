import React,{useState} from 'react';
import "./Update.css"

export const Update = (props) => {
 
  const [inps, setinp] = useState({});

  const setinpvalues=(e)=>{
      setinp({...inps,[e.target.name]: e.target.value})
  }
  const sendediteddata=(i)=>{
    props.dataa("display")
    props.data(i)
    }
  
  const dataa=props.dataaa.map((el,i)=>{
    return  <div key={i} className="rectt">
    <input 
     type="text"
     placeholder='topic...'
     name='topic'
     onChange={setinpvalues}
     defaultValue={el.topic}
   
      />
        <hr  style={{height: 3}}/>
     <div className="innerrectt">
     <textarea name="note" defaultValue={el.note} onChange={setinpvalues}  placeholder='edit your note..'></textarea><br></br><br></br>
     </div>
     <button id={i} onClick={()=>sendediteddata(inps)} className='btnn' >save</button>
    </div>
  })
  
  
  return <div className='main5'>
           <h4>Edit Your note-📝</h4>
    {dataa}
  </div>;
};

