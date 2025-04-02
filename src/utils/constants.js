const lat='12.9715987';
const lng='77.5945627';
export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const Logo_URL = "https://cdn.dribbble.com/users/1191192/screenshots/4250680/foodie_faster.jpg";
export const Menu_Api =  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=`;
export const Body_Api = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
