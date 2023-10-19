import { useLoaderData } from "react-router-dom";
import Banner2 from "../components/Banner2";
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { url } from "../router/Router";
import swal from "sweetalert";

const CardDetail = () => {
  const loaderData = useLoaderData();
  const { image, name, brand, type, price, rating, description } =
    loaderData;
  const handleClick = () => {
    const fromData = { image, name, brand, type, price, rating, description }
    fetch(`${url}cardData`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(fromData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          swal("Added successfully on your Card", "", "success");
        } else {
          swal(" Failed to Add Card", "", "error");
        }
      });
  };
  return (
    <div>
      <Banner2 text="Detail" />
      <div className="container mx-auto flex lg:flex-row flex-col justify-center items-center">
        <div className="lg:w-1/2">
          <img src={image} alt={name} className="w-full" />
        </div>
        <div className="lg:w-1/2 space-y-3">
          <h3 className="text-4xl font-bold">{name}</h3>
          <div className="space-x-2 text-[#687EFF]">
            <div className="badge badge-outline">{type}</div>
            <div className="badge badge-outline">{brand}</div>
          </div>
          <p className="text-zinc-500 text-4xl font-semibold">
            $ <span className="font-normal">{price}</span>
          </p>
          <Rating
            initialRating={rating}
            emptySymbol={<AiOutlineStar className="text-2xl text-[#687EFF]" />}
            fullSymbol={<AiFillStar className="text-2xl text-[#687EFF]" />}
            readonly
          />
          <p className="text-zinc-500">{description}</p>
          <button onClick={handleClick} className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
