import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-7xl text-[#687EFF] font-bold">404</h1>
            <p className="text-2xl">page not found</p>
            <Link to="/" className="btn btn-primary my-4">Go To Home</Link>
        </div>
    );
};

export default ErrorPage;