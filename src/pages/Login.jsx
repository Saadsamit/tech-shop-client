import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
              <p className="text-sm capitalize">
              if you don&apos;t have account{" "}
              <Link
                to="/registration"
                className="text-[#687EFF] link-hover text-base"
              >
                registrar
              </Link>
            </p>
              <div className="flex justify-around items-center px-4">
                <div className="bg-[#687EFF] h-[2px] w-2/5"></div>
                <p className="text-center">or</p>
                <div className="bg-[#687EFF] h-0.5 w-2/5"></div>
              </div>
              <button
                type="button"
                className="py-2 mt-2 border-2 border-borderColor rounded-xl w-full"
              >
                <div className="flex justify-center items-center text-lg hover:underline">
                  <FcGoogle className="text-2xl mr-2" />
                  Sign up with google
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
