import PropTypes from "prop-types";
import { createContext } from "react";
const MyContext = createContext(null);
const AuthContext = ({ children }) => {
  const MyObj = {};
  return <MyContext.Provider value={MyObj}>{children}</MyContext.Provider>;
};
AuthContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, MyContext };
