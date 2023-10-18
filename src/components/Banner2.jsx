import { Link } from "react-router-dom";
import bannerImg from "../assets/banner2.jpg";
import PropTypes from "prop-types";
const Banner2 = ({ text }) => {
  return (
    <div
      className="hero min-h-[70vh]"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{text}</h1>
          <p className="mb-5">
            <Link to="/" className="hover:underline">
              Home
            </Link>{" "}
            - {text}
          </p>
        </div>
      </div>
    </div>
  );
};
Banner2.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Banner2;
