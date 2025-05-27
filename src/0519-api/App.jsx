import axios from "axios" 
import { useEffect, useState } from "react";

export default function App(){
    // https://api.unsplash.com/photos/?client_id=oOiE6Aube9hlUqNcXmE8taQxYOt6JtT5-iobKfu92vk
    const api="https://api.unsplash.com/search/photos";
    const accessKey="oOiE6Aube9hlUqNcXmE8taQxYOt6JtT5-iobKfu92vk";
        const[filterString,setFilterString]=useState('dog');

        // 存放篩選後的資料
        const[jsonData,setJsonData]=useState([]);

        // 建立非同步方法，取得遠端資料
        const getPhotos=async()=>{
            try {
                const result=await axios.get(`${api}?client_id=${accessKey}&query=${filterString}`)
                console.log(result);
            } catch (error) {
                console.log(error)
            }
        }
        useEffect(()=>{
            getPhotos();
        },[])

    return(
        <>
        
        <h1>取得遠端資料</h1>
        </>
    )
}