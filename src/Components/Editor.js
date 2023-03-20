import React,{useState} from 'react'
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/xml/xml"
import "codemirror/mode/css/css"
import { Controlled as ControlledEditor } from 'react-codemirror2'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{faCompressAlt,faExpandAlt} from "@fortawesome/free-solid-svg-icons"


const Editor = (props) => {
     const [open ,setOpen] = useState(true)
     const {displayName, language,value,onChange } = props

     const handleChange = (editor,data,value) =>{
          onChange(value)
     }
  return (
    
    <div className={`editor-container ${open ?"":"collapsed"}`}>
     <div className='editor-title'>
          {displayName}
          <button
          type = "button"
          className = "expand-collapse-btn"
           onClick={()=>setOpen(preOpen => !preOpen)}>
               <FontAwesomeIcon icon  = {open? faCompressAlt:faExpandAlt}/>
               </button>
     </div>
     <ControlledEditor  
       onBeforeChange={handleChange}
       value={value}
       className = "code-mirror-wrapper"
       options={{
          lineWrapping:true,
          lint:true,
          mode:language,
          lineNumbers:true,
          theme:"material"
       }}
       />
    </div>
    
  )
}

export default Editor
