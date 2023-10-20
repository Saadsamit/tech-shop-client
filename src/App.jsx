import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <div className="font-Roboto">
      <Header />
      <Outlet />
      <Footer />
      <Toaster/>
    </div>
  );
}

export default App;
