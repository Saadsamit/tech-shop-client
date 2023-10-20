import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { MyContext } from "../AuthContext";

const PriveteRouter = ({ children }) => {
    const {isLoading,user} = useContext(MyContext)
    if(isLoading){
        return <div className='flex justify-center h-screen'><span className="loading MyGradient loading-dots loading-lg"></span></div>
    }if(!user?.email){
        return <Navigate state={location.pathname} to="/login"/>
    }
  return children;
};
PriveteRouter.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PriveteRouter;
