import contactImg from "../assets/contect.jpg";
import { FaHeadset } from "react-icons/fa";
const ContactUs = () => {
  return (
    <div
      style={{ backgroundImage: `url(${contactImg})`, backgroundSize: "cover" }}
      className="rounded-lg container mx-auto bg-no-repeat mt-10"
    >
      <div className="text-white flex md:flex-row flex-col space-y-4 items-center p-10">
        <div className="md:w-1/2 border-l-4">
          <h4 className="sm:text-5xl text-4xl font-semibold pl-5">
            To make requests for further information, contact us
          </h4>
        </div>
        <div className="flex flex-col items-center md:w-1/2 space-y-2">
          <FaHeadset className="sm:text-5xl text-4xl" />
          <p className="sm:text-3xl text-2xl">Call Us For Any inquiry</p>
          <a className="sm:text-2xl text-xl">+44-920-090-505</a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
