import { useState, useContext } from "react";
import { Logo_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";


export const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    console.log({loggedInUser})
    return (
        <header className="bg-white text-black p-4">
            <div className=" mx-auto flex items-center justify-between">
                <div className="w-32">
                    <img className="w-full h-auto" src={Logo_URL} alt="Logo" />
                </div>
                <nav className="flex items-center space-x-4">
                    <ul className="flex space-x-4"> 
                        <li>
                            <Link to="/grocery" className="hover:text-yellow-400">Grocery</Link>
                        </li>
                        <li>
                            <span className={`font-semibold ${onlineStatus ? 'text-green-400' : 'text-red-400'}`}>
                                Online Status: {onlineStatus ? 'HAPPY' : 'SAD'}
                            </span>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-yellow-400">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-yellow-400">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-yellow-400">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/cart" className="hover:text-yellow-400">Cart</Link>
                        </li>
                        <li className="px-4 font-bold">{loggedInUser}</li>
                        </ul>
                  
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
                        onClick={() => {
                            setBtnName(btnName === "Login" ? "Logout" : "Login");
                        }}
                    >
                        {btnName}
                    </button>
                  
                  

                  
                </nav>
            </div>
        </header>
    );
};

export default Header;
