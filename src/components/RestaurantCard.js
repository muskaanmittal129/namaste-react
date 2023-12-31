import { CDN_IMG } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, costForTwo, cloudinaryImageId } = resData.info;
    return (
      <div className="res-card" style={{ background: "#f0f0f0" }}>
        <img
          src={CDN_IMG + cloudinaryImageId}
          alt="res-img"
          className="res-logo"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };
  export default RestaurantCard;