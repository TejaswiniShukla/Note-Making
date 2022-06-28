 import React, {
   useState
 } from 'react';
 import Navbaar from "./Components/NavbarComponent/Navbaar.js"
 import Create from "./Components/CreateComponet/Create.js"
 import Display from './Components/DisplayComponent/Display.js';
 import Trash from './Components/TrashComponent/Trash.js';
import  {Update} from './Components/UpdateComponent/Update.js';
import "./App.css"

 const App = () => {

   const [page, setpage] = useState({
     create: false,
     display: true,
     update: false,
     trash: false
   })

   const ChangePage = (pagedisplay) => {
     if (pagedisplay === "create") {
       setpage({
         create: true,
         display: false,
         update: false,
         trash: false
       })

     } else if (pagedisplay === "display") {
       setpage({
         create: false,
         display: true,
         update: false,
         trash: false
       })
     } else if (pagedisplay === "update") {
       setpage({
         create: false,
         display: false,
         update: true,
         trash: false
       })
     } else if (pagedisplay === "trash") {
       setpage({
         create: false,
         display: false,
         update: false,
         trash: true
       })
     }
   }
   
   const [values, setvalue] = useState([]);
   
   const forinpvalues=(value)=>{
     const valuecopy=[...values]
     valuecopy.push(value)
     setvalue(valuecopy)
   }
   const [trashvalue, settrashvalue] = useState([]);

   const delitingnote=(en)=>{

      const copyvalues=[...values]
      const filteredvalues=copyvalues.filter((d,i)=>{
           return i !== en
      })
      setvalue(filteredvalues)
      const trashvalues=copyvalues.filter((e,i)=>{
        return i === en
      })
       trashvalues.forEach(element => {
        const valcopy=[...trashvalue]
        valcopy.push(element)
        settrashvalue(valcopy)
       });
      
   }
   const forpermanent=(e)=>{
     const copytraghforp=[...trashvalue]
     const permanenttrash=copytraghforp.filter((ele,i)=>{
       return e !== i
     })
     settrashvalue(permanenttrash)
   }
  

   const forrestore=(elem)=>{
    const copytraghforrestore=[...trashvalue]
    const torestore=copytraghforrestore.filter((ele,i)=>{
            return elem !== i
    })
    settrashvalue(torestore)
    const torestorevalue=copytraghforrestore.filter((ele,i)=>{
      return elem === i
   })  
   torestorevalue.forEach(elet => {
    const valuecopy=[...values]
    valuecopy.push(elet)
     setvalue(valuecopy)
   });
  }
  
  const [edit, setedit] = useState([]);

  const checkingforedit=(elem)=>{
     const valuecopy=[...values]
     const index=valuecopy.findIndex((e,i)=>{
       return e === elem
     })
     const foreditfilter=valuecopy.splice(index,1)
      setvalue(valuecopy)
      setedit(foreditfilter)
  }
  
  const editeddata=(data)=>{
    values.push(data)
    setvalue(values)
  }
  

   return <div className='main' >
           
     < Navbaar getdata = { ChangePage }/>

   {
     page.create && <  Create data={ChangePage} dataa={forinpvalues} />
   } {
     page.display && <  Display foredit={checkingforedit} dat={ChangePage} valuess={values} fordeletevalue={delitingnote} />
   } {
     page.update && < Update dataa={ChangePage} data={editeddata} dataaa={edit} />
   } {
     page.trash && < Trash res={forrestore} datta={forpermanent} data={trashvalue}/>
   }





   </div>
 };

 export default App;