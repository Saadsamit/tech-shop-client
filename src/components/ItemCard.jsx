import PropTypes from "prop-types";
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const ItemCard = ({ data }) => {
  const { _id, image, name, brand, type, price, rating, description } = data;
  return (
    <div className="card bg-base-100 dark:text-white dark:bg-slate-700 dark:border-none border shadow-xl p-4">
      <figure>
        <img src={image} alt={name} className="w-48" />
      </figure>
      <div className="card-body">
        <div className="card-actions">
          <div className="badge badge-outline">{type}</div>
          <div className="badge badge-outline">{brand}</div>
        </div>
        <h2 className="card-title">{name}</h2>
        <p className="text-zinc-500 dark:text-slate-400 font-semibold text-xl">$ <span className="font-normal">{price}</span></p>
        <p className="text-zinc-500 dark:text-slate-400">
          {description.length > 70
            ? `${description.slice(0, 70)}...`
            : description}
        </p>
        <Rating
          initialRating={rating}
          emptySymbol={<AiOutlineStar className="text-2xl text-[#687EFF]" />}
          fullSymbol={<AiFillStar className="text-2xl text-[#687EFF]" />}
          readonly
        />
        <Link to={`/cardDetail/${_id}`} className="btn btn-primary">Details button</Link>
        <Link to={`/UpdateProduct/${_id}`} className="btn btn-primary">Update button</Link>
      </div>
    </div>
  );
};
ItemCard.propTypes = {
  data: PropTypes.object.isRequired,
};
export default ItemCard;
