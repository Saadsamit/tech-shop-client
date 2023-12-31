import PropTypes from "prop-types";
import contactImg from "../assets/contect.jpg";
import { Link } from "react-router-dom";

const BrandCard = ({ data }) => {
  const { _id, brand_name, brand_img } = data;
  return (
    <Link to={`/brandDetail/${_id}`}>
      <div
        className="hero h-80 rounded-xl text-white hover:underline cursor-pointer"
        style={{ backgroundImage: `url(${contactImg})` }}
      >
        <div className="hero-overlay rounded-xl bg-opacity-60"></div>
        <div className="hero-content flex-col text-center">
          <img src={brand_img} alt={brand_name} className="w-36" />
          <h4 className="font-semibold text-2xl">{brand_name}</h4>
        </div>
      </div>
    </Link>
  );
};

BrandCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BrandCard;
