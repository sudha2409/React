
import UserContext from "../utils/userContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component {
    constructor(props) {
        super(props);
    
    }
    componentDidMount (){
   
    }
    render() {
       
        return (
            <div>
                <h1>About</h1>
                <h4>This is Swiggy Clown</h4>
                <div> LoggedIn User  
               <UserContext.Consumer>
                {({loggedInUser})=> <h1 className="font-bold text-lg">{loggedInUser}</h1>}
               </UserContext.Consumer>
                </div>

                {/* <User name={"sudha (function)"} location={"Rajnandgaon (function)"}/> */}
               <UserClass name= {"First (class)"} location={"Rajnandgaon (class)"}/>
               <UserClass name= {"Second (class)"} location={"Rajnandgaon (class)"}/>
            </div>
        )
    }
    
}
export default About;