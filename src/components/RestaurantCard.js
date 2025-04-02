import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,
    } = resData?.info;

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-300 flex flex-col h-full transition-transform transform hover:scale-105 hover:shadow-xl">
    
            <div className="relative w-full h-48">
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={CDN_URL + cloudinaryImageId}
                    alt="res-logo"
                />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
                <p className="text-sm text-gray-500 mt-1">{cuisines.join(", ")}</p>
                <div className="flex items-center mt-2">
                    <span className="flex items-center text-yellow-500 mr-2">
                        ★ {avgRating}
                    </span>
                </div>
                <div className="mt-2 flex justify-between items-center text-gray-700">
                    <span className="font-medium">{costForTwo}</span>
                    <span>{sla.slaString}</span>
                </div>
            </div>
        </div>
    );
};



// Higher Order Components
// input - RestaurantCard => RestaurantCard Promoted 

export const WithPromotedLabel = () => {
    return(props) => {
        return(
            <div>
                <label> <h1>Promoted</h1> </label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard;