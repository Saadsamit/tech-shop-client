import { useLoaderData, useNavigate } from "react-router-dom";
import Banner2 from "../components/Banner2";
import { url } from "../router/Router";
import swal from "sweetalert";
import { useState } from "react";
import toast from "react-hot-toast";

const UpdateProduct = () => {
    const navigate = useNavigate()
  const loadData = useLoaderData();
  const [loaderData, setLoaderData] = useState(loadData);
  const productSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value.toLowerCase();
    const brand = form.brand.value.toLowerCase();
    const type = form.type.value.toLowerCase();
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    if (rating <= 0 || rating > 5) {
      swal("Enter between 1 - 5", "", "warning");
      return;
    }
    const formData = {
      _id: loaderData._id,
      image,
      name,
      brand,
      type,
      price,
      rating,
      description,
    };
    fetch(`${url}brandItem/${loaderData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Your Product is Successfully Update");
          setLoaderData(formData);
        } else {
          toast.error("Your Product is Failed to Update");
        }
      });
  };
  const handleDelete = () => {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((result) => {
        if (result) {
            fetch(`${url}brandItem/${loaderData._id}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.deletedCount > 0) {
                    toast.success("Your Product is Successfully to Delete");
                        navigate('/')
                    } else {
                      toast.error("Your Product is Failed to Delete");
                    }
              });
        } else {
          swal("Your Product is safe!");
        }
      });
  };
  return (
    <div>
      <Banner2 text={"Update Product"} />
      <div className="container mx-auto pt-10">
        <form className="space-y-4" onSubmit={productSubmit}>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="form-control">
              <input
                type="text"
                id="image"
                name="image"
                defaultValue={loaderData && loaderData?.image}
                placeholder="Product Image"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={loaderData && loaderData?.name}
                placeholder="Product Name"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            <select
              className="select select-bordered w-full"
              defaultValue={loaderData && loaderData?.brand}
              required
              name="brand"
            >
              <option disabled selected value="">
                Product Brand
              </option>
              <option className="capitalize" value="apple">
                apple
              </option>
              <option className="capitalize" value="samsung">
                samsung
              </option>
              <option className="capitalize" value="google">
                google
              </option>
              <option className="capitalize" value="sony">
                sony
              </option>
              <option className="capitalize" value="redmi">
                redmi
              </option>
              <option className="capitalize" value="oppo">
                oppo
              </option>
            </select>
            <select
              className="select select-bordered w-full"
              defaultValue={loaderData && loaderData?.type}
              required
              name="type"
            >
              <option disabled selected value="">
                Product Type
              </option>
              <option className="capitalize" value="phone">
                phone
              </option>
              <option className="capitalize" value="case">
                case
              </option>
              <option className="capitalize" value="headphone">
                headphone
              </option>
            </select>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            <div className="form-control">
              <input
                type="number"
                id="price"
                name="price"
                defaultValue={loaderData && loaderData?.price}
                placeholder="$ Product Price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                id="rating"
                name="rating"
                defaultValue={loaderData && loaderData?.rating}
                placeholder="Product Rating: Enter between 1 - 5"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <textarea
            name="description"
            placeholder="Product Short Description"
            defaultValue={loaderData && loaderData?.description}
            className="textarea textarea-bordered textarea-lg w-full"
          ></textarea>
          <div className="flex sm:flex-row flex-col justify-center items-center space-y-4 space-x-0 sm:space-y-0 sm:space-x-4 ">
            <button className="btn btn-primary" type="submit">
              Update Product
            </button>
            <button
              className="btn btn-error"
              type="button"
              onClick={handleDelete}
            >
              Delete Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
