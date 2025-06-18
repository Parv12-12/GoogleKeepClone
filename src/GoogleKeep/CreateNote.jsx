import React, { useState } from "react";
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const [expand,setExpand] = useState(false);

    const inputEvent = (event)=>{
        const {name , value} = event.target;
        setNote((preVal)=>{
            return {
                ...preVal,
                [name]: value,

            }

        })

    }

    const addEvent = ()=>{
        props.passNote(note);
        setNote(
            {
              title: "",
              content: ""  
            }
        )
    };

    const expandIt = ()=>{
        setExpand(true);
    }
    const hideAgain =()=>{
        setExpand(false);
    }
    return (
        <>
            <div className="main_note" onDoubleClick={hideAgain}>
                <form>
                   { expand? <input type="text"
                        value={note.title} 
                        name="title"
                        onChange={inputEvent}
                        placeholder="Title" 
                        autoComplete="off" /> : null }
                    <textarea rows=""
                     cols="" 
                     value={note.content} 
                     name="content"
                     onChange={inputEvent}
                     placeholder="Write a note ..."
                     onClick={expandIt}>
                    
                     </textarea>
                     { expand?
                    <Button onClick={addEvent}><AddIcon className="plus-sign" /></Button> : null}
                </form>
            </div>
        </>
    )
}

export default CreateNote