import React,{useState} from 'react';
import "./Create.css"

const Create = (props) => {
  
    const [inp, setinp] = useState({});

    const setinpvalues=(e)=>{
        setinp({...inp,[e.target.name]: e.target.value})
    }
    const senddata=(i)=>{
        props.data("display")
        props.dataa(i)
    }

  return <div className='main4'>
      <h1 className='h1'>create your note:</h1>
      <div  className="rect">
      <input type="text"
         placeholder='Topic ....'
         name='topic'
         onChange={setinpvalues}
      />
      
       <hr  style={{height: 3}}/>
  
      <div className="innerrect">
          
          <p><textarea name="note" onChange={setinpvalues} placeholder='type note...'></textarea></p>
          
      </div>
      <button className='btcreate' onClick={()=>senddata(inp)} >👍</button>
   </div>      
</div>;
};

export default Create;


















// import React from 'react';

// const Create = ({forchangingpage}) => {
//     console.log(forchangingpage);
//   return <div>
//       <h1>this is create page</h1>
//       <form >
//           <input type="text" placeholder='name'/>
//           <textarea name="desc" id="" cols="30" rows="10"></textarea>
//       </form>
//   </div>;
// };

// export default Create;
