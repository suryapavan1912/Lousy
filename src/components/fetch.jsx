import axios from "./axios";
import { useEffect, useState } from "react";


function useFetch(url){

const [data,setdata] = useState(null)

useEffect(()=>{

async function dofetch(){
  try{
    const responce = await axios.get(url)
    if(responce.data){
    setdata(responce.data)
    }
    else{
      throw Error('404 Not found')
    }
    
  }
  catch(error){
  }
} 
  dofetch()
},[url])

    return [data]
}

export default useFetch;