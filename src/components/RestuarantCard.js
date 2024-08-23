import { CDN_URL } from "../utils/constants";

const styleCard={
    background:"#f0f0f0",
};


const RestuarantCard=(props) =>{
    //console.log(props);
    const {resData}=props;

    const {name,cuisines,avgRatingString,costForTwo,cloudinaryImageId}=resData?.info;
    const {deliveryTime}=resData?.info.sla;
    //console.log(resData);
    return(
        <div className="res-card" style={styleCard}>
        <img className="res-logo" alt="res-logo" 
        src={
        CDN_URL + cloudinaryImageId
        }
        />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
        </div>
    )
};
export default RestuarantCard;