import PropTypes from "prop-types";
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
const MycartCard = ({ data, handleDelete }) => {
  const { _id, image, name, brand, type, price, rating, description } = data;
  return (
    <div className="card sm:card-side bg-base-100 shadow-xl border">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <div className="space-x-2 text-[#687EFF]">
          <div className="badge badge-outline">{type}</div>
          <div className="badge badge-outline">{brand}</div>
        </div>
        <h2 className="card-title">{name}</h2>
        <p className="text-zinc-500 font-semibold text-xl">
          $ <span className="font-normal">{price}</span>
        </p>
        <p className="text-zinc-500">
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
        <div className="card-actions justify-end">
          <button className="btn btn-error" onClick={()=>handleDelete(_id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
MycartCard.propTypes = {
  data: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired
};
export default MycartCard;
