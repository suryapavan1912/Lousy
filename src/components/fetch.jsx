import axios from "./axios";
import { useEffect, useState } from "react";


function useFetch(url){

const [data,setdata] = useState(null)

useEffect(()=>{

async function dofetch(){
  try{
    const responce = await axios.get(url)
    setdata(responce.data)
    console.log(responce.data);
  }
  catch(error){
      console.log(error.message)
  }
} 
  dofetch()
},[url])

    return [data]
}

export default useFetch;