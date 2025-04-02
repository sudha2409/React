import React, { Suspense, lazy, useEffect, useState } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import './index.css';
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/userContext";
//import Grocery from "./components/Grocery";


//Chunking
//code spliting
//Dymamic Bundling
//Lazy Loading
// On Demand Loading
// Dynamic import

const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = ()=>{
     //authentication 
    const [userName,setUserName] =useState();
   
    //Make an api call and send username and password
    useEffect(()=>{
        const data =  {
            name:"Sudha Lohani"
        };
        setUserName(data.name);
    },[]);

    return(
        <UserContext.Provider value={{loggedInUser:userName , setUserName}}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    { 
        path: "/",
        element : <AppLayout/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path: "/about",
                element : <About/>
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path : "/restaurant/:resId",
                element : <RestaurantMenu/>
            },
            {
                path : "/Grocery",
                element : <Suspense fallback={<h1>Loading PLease wait</h1>}>
                    <Grocery/></Suspense>
            },

        ],
        errorElement : <Error/>
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router= {appRouter}/>); 