import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { MyContext } from "../AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { googleLogin, login } = useContext(MyContext);
  const location = useLocation()
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
    .then(() => {
      toast.success("Login Successfull");
      navigate(location?.state ? location.state : "/");
    })
    .catch((error) => {
      const errorMessage = error?.message
        ?.replace("Firebase: Error (", "")
        ?.replace(")", "");
        if(errorMessage.includes("auth/invalid-login-credentials.")){
          toast.error(" Email/Password doesn't match");
        }else{
          toast.error(errorMessage);
        }
    });
  }
  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        toast.success("Login Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error?.message
          ?.replace("Firebase: Error (", "")
          ?.replace(")", "");
        toast.error(errorMessage);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 dark:bg-slate-800 dark:text-white">
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
            <form className="card-body text-black" onSubmit={handleSubmit}>
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
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
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
                onClick={handleGoogle}
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
