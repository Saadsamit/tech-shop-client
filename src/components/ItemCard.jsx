import PropTypes from "prop-types";
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
const ItemCard = ({ data }) => {
  const { _id, image, name, brand, type, price, rating, description } = data;
  console.log(_id);
  return (
    <div className="card bg-base-100 border shadow-xl p-4">
      <figure>
        <img src={image} alt={name} className="w-48" />
      </figure>
      <div className="card-body">
        <div className="card-actions">
          <div className="badge badge-outline">{type}</div>
          <div className="badge badge-outline">{brand}</div>
        </div>
        <h2 className="card-title">{name}</h2>
        <p>${price}</p>
        <p>
          {description.length > 100
            ? `${description.slice(1, 100)}...`
            : description}
        </p>
        <Rating
          initialRating={rating}
          emptySymbol={<AiOutlineStar className="text-2xl text-[#687EFF]" />}
          fullSymbol={<AiFillStar className="text-2xl text-[#687EFF]" />}
          readonly
        />
        <button className="btn btn-primary">Details button</button>
        <button className="btn btn-primary">Update button</button>
      </div>
    </div>
  );
};
ItemCard.propTypes = {
  data: PropTypes.object.isRequired,
};
export default ItemCard;
