import Editor from './Editor'
import React,{useState,useEffect} from 'react'
import "./Style.css"
import UseLocalStorage from '../Hooks/LocalStorage'


function App() {

  const [html,setHtml] = UseLocalStorage("html","")
  const [css,setCss] = UseLocalStorage("css","")
  const [js,setJs] = UseLocalStorage("js","")
  const [print , setPrint] = useState("")
  

  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      setPrint(`
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>
      `) 
    },250)
           return ()=> clearTimeout(timeOut);
  },[html,css,js])

  return (
    <>
    <div className='header'>Codepen-Clone</div>
    <div className='pane top-pane'>
      <Editor
       language = "xml"
       displayName = "HTML"
       value ={html}
       onChange = {setHtml}/>
      <Editor
      language = "css"
      displayName = "CSS"
      value ={css}
      onChange = {setCss}/>
      <Editor
      language = "javascript"
      displayName = "JAVASCRIPT"
      value ={js}
      onChange = {setJs}/>
    </div>
    <div className='pane frame'>
      <iframe 
      srcDoc = {print}
      title='output'
      sandbox='allow-scripts'
      frameBorder="0"
      width="100%"
      height="100%"
      />
    </div>
    </>
   
  );
}

export default App;
