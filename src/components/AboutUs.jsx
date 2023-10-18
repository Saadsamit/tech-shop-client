import aboutImg from "../assets/About.jpg";
const AboutUs = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex space-y-4 lg:flex-row-reverse flex-col pt-10">
        <div className="lg:w-1/2">
          <img src={aboutImg} alt="" className="w-full rounded-lg" />
        </div>
        <div className="lg:w-1/2 lg:pr-10 space-y-4 flex flex-col justify-center">
          <h3 className="text-4xl font-semibold">About Tech Shop</h3>
          <p className="text-lg">
            Welcome to Tech Shop, where technology and innovation converge to
            enhance your digital world. At Tech Shop, we{"'"}
            re dedicated to providing you with the latest and greatest in
            electronics and gadgets. Our mission is clear: to connect you with
            the future of electronics. We meticulously curate a wide range of
            products, from smartphones and laptops to smart home devices and
            audio solutions, all designed to elevate your digital lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
