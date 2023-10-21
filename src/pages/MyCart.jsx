import { Link } from "react-router-dom";
import Banner2 from "../components/Banner2";
import MycartCard from "../components/MycartCard";
import swal from "sweetalert";
import { url } from "../router/Router";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MyContext } from "../AuthContext";
const MyCart = () => {
  // const loadData = useLoaderData();
  const {user} = useContext(MyContext)
  const [loaderData, setLoaderData] = useState([]);
  useEffect(()=>{
    fetch(`${url}cardData/${user?.email}`)
    .then(res=>res.json())
    .then(data=> setLoaderData(data))
  },[user])
 
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        fetch(`${url}cardData/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast.success("Your Product is Successfully to Delete");
              const filder = loaderData.filter((data) => data._id !== id);
              console.log(filder);
              setLoaderData(filder);
            } else {
              toast.error("Your Product is Failed to Delete");
            }
          });
      }
    });
  };
  return (
    <div>
      <Banner2 text={"My Cart"} />
      <div className="container mx-auto pt-10">
        {loaderData.length > 0 ? (
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            {loaderData.map((data) => (
              <MycartCard
                key={data._id}
                data={data}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <h3 className="font-bold text-2xl dark:text-white">No Product Available on your Cart</h3>
            <Link to="/" className="btn btn-primary my-4">
              Go To Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;
