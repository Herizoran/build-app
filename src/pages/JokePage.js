import React,{useState,useEffect} from 'react';
import './App.css';
function JokePage() {
  const url ="https://api.chucknorris.io/jokes)";
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch(url
    ,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="Joke">
     {
       data && data.length>0 && data.map((item)=><p>{item.about}</p>)
     }
    </div>
  );
}

export default JokePage;