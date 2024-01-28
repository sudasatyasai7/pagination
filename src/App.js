import React,{useState,useEffect} from 'react'
import Pagination from './pagination';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
const App = () => {
  const[data,setData]=useState([]);
  const[perPage,setPerpage]=useState([])
  const submitHandler=(pages)=>{
    setPerpage(data.slice(0,pages*10))
  }
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{setData(res.data);setPerpage(res.data.slice(0,10));})
  },[])
  return (
    <div>
      {data.length>=1?<div className="Post">{perPage.map(Post=><Card>
      <Card.Body>{Post.title}</Card.Body>
    </Card>)}<br></br> <Pagination data={data} submitHandler={submitHandler}/></div>
      :<p>no data</p>}
    </div>
  )
}

export default App
