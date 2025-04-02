import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Body_Api } from "../utils/constants";
import UserContext from "../utils/userContext";
 


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    const RestaurantCardWithPromoted = WithPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(Body_Api);
        const json = await response.json();
        const restaurantCards = json.data?.cards;
        const topRestaurantCard = restaurantCards.find(restaurantCard => restaurantCard.card?.card?.id === 'top_brands_for_you');
        const topRestaurants = topRestaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        setListOfRestaurants(topRestaurants);
        setFilteredRestaurants(topRestaurants);
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (
            <div className="p-4 text-center">
                <h1 className="text-xl font-semibold text-red-600">Looks Like You are Offline!! Please Check your Internet Connection</h1>
            </div>
        );
    }

   const {loggedInUser,setUserName} = useContext(UserContext);

    return (listOfRestaurants == null) ? (
        <Shimmer />
    ) : (
        <div className="p-4">
            {/* Filter and Search Section */}
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:justify-between">
                <div className="flex flex-col md:flex-row gap-2">
                    <input
                        type="text"
                        className="border border-gray-300 rounded-md p-2 w-full md:w-64"
                        placeholder="Search restaurants..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                        onClick={() => {
                            const filterRestaurants = listOfRestaurants.filter((res) => {
                                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                            });
                            setFilteredRestaurants(filterRestaurants);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <label> UserName: </label>
                    <input className=" p-2 border border-black" 
                    value={loggedInUser}
                    onChange={(e)=> setUserName(e.target.value)}/>
                </div>
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition mt-2 md:mt-0"
                    onClick={() => {
                        const filterList = listOfRestaurants.filter(
                            (res) => res.info.avgRating>4
                        );
                        setListOfRestaurants(filterList);
                        setFilteredRestaurants(filterList); 
                        console.log(filterList);
                    }}
                >
                    Top Rated Restaurants
                </button>
               
            </div>

            {/* Restaurant Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredRestaurants.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id} className="block">
                        {restaurant.info.promoted ? (
                            <RestaurantCardWithPromoted resData={restaurant} />
                        ) : (
                            <RestaurantCard resData={restaurant} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
