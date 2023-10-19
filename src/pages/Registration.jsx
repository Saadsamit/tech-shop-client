import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">registrar now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label" htmlFor="name">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="User Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="image">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  placeholder="Image"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="password">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  registrar
                </button>
              </div>
              <p className="text-sm capitalize">
                if you have a account{" "}
                <Link
                  to="/login"
                  className="text-[#687EFF] link-hover text-base"
                >
                  login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
