import PropTypes from "prop-types";
import { createContext, useState } from "react";
const MyContext = createContext(null);
const AuthContext = ({ children }) => {
  const [navbarLogin, setNavbarLogin] = useState(true)
  const MyObj = {navbarLogin,
    setNavbarLogin
  };
  return <MyContext.Provider value={MyObj}>{children}</MyContext.Provider>;
};
AuthContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, MyContext };
