import bannerImg from "../assets/banneg.jpg";
const Banner = () => {
  return (
    <div
      className="hero min-h-screen container mx-auto rounded-3xl"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Your Tech Haven{" "}
            <span className="text-3xl block">Discover the Future Today</span>
          </h1>
          <p className="mb-5">
            Discover Innovation: Your Trusted Source for Quality Electronics,
            Gadgets, and Tech Solutions. Shop the Future Today.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
