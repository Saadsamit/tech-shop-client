import PropTypes from "prop-types";
const ProductAds = ({ img }) => {
  return (
    <div className="card w-full h-80 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={img} alt="Ads" className="w-full" />
      </figure>
      <div className="card-body"></div>
    </div>
  );
};
ProductAds.propTypes = {
  img: PropTypes.string.isRequired,
};
export default ProductAds;
