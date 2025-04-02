import { useEffect, useState } from "react"
import { Menu_Api } from "./constants";

const useRestaurantMenu = (resId) =>{
    const [resInfo,setResInfo] = useState(null);
    useEffect (()=>{
        fetchData();
    },[]);
     const fetchData = async ()=>{
        try{
            const data = await fetch(Menu_Api+resId);
            const json = await data.json();
            setResInfo(json.data);
        }
        catch (error){
            console.log(error);
        }
        
     }
    return resInfo;
}
export default useRestaurantMenu;