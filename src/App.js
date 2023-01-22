import { useState } from "react";
import axios from "axios";
import './App.css'
import img1 from './images/img1.jpeg'
const App = () =>{ 
  const [data , setData] = useState('')
  const [author , setAuthor] = useState('')
  const getApi = () =>{
    axios.get('https://api.quotable.io/random').then(res=>{
      setData(res.data.content)
      setAuthor(res.data.author)
    })
  }


  const AppStyle = {
    backgroundImage:'url("https://images.pexels.com/photos/1647120/pexels-photo-1647120.jpeg?auto=compress&cs=tinysrgb&w=600")',
    width:'100vw',
    height:'100vh',
    
  }
  return(
   <div  className="App" style={AppStyle}>
     <div className="container">
     {data == null ? <h4>Loading</h4> : <h4 className="content">{data}</h4>}
    {author == null ? <h1>Loading</h1> : <h1 className="author">{author}</h1>}
    <button onClick={getApi}>Get Content</button>
   
     </div>
   </div>
  )
}
export default App

