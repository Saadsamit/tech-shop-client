import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { url } from "./router/Router";
import Footer from "./components/Footer";

function App() {
  console.log(url);

  return (
    <div className="font-Roboto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
