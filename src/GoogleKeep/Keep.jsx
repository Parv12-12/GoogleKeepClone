import React, { useState } from "react";
import Header from "./Header";
import "./keep.css"
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const Keep = ()=>{
    const [addItem,setAddItem] = useState([]);

    const addNote = (note)=>{
       
        setAddItem((prevData)=>{
            return [...prevData,note]
        });
        
        
    }
    const onDelete = (id)=>{
        setAddItem((oldItems)=>
            oldItems.filter((currVal,index)=>{
                return index!== id;
            })
        )

    }

    return (
        <>
          <Header/>
          <CreateNote passNote={addNote}/>
          {
            addItem.map((val,index)=>{
              return(  <Note 
                    key={index}
                    id ={index}
                    title={val.title}
                    content={val.content}
                    deleteItem={onDelete}
                />)
            })
          }
          <Footer/>
         
        </>
    )
}

export default Keep;