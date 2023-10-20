import { useLoaderData } from "react-router-dom";
import Banner2 from "../components/Banner2";
import { url } from "../router/Router";
import toast from "react-hot-toast";
const AddProduct = () => {
  const loaderData = useLoaderData();
  const data =
    loaderData &&
    loaderData?.map((data) => (
      <option
        key={data?._id}
        className="capitalize"
        value={data?.brand_name.toLowerCase()}
      >
        {data?.brand_name.toLowerCase()}
      </option>
    ));
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
      toast.error("Enter between 1 - 5", "", "warning");
      return;
    }
    const formData = { image, name, brand, type, price, rating, description };
    fetch(`${url}brandItem`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Your Product is Successfully Added");
        } else {
          toast.error("Your Product is Failed to Add");
        }
      });
    form.reset();
  };
  return (
    <div>
      <Banner2 text={"Add Product"} />
      <div className="container mx-auto pt-10">
        <form className="space-y-4" onSubmit={productSubmit}>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="form-control">
              <input
                type="text"
                id="image"
                name="image"
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
                placeholder="Product Name"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            <select
              className="select select-bordered w-full"
              required
              name="brand"
            >
              <option disabled selected value="">
                Product Brand
              </option>
              {data}
            </select>
            <select
              className="select select-bordered w-full"
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
                placeholder="Product Rating: Enter between 1 - 5"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <textarea
            name="description"
            placeholder="Product Short Description"
            className="textarea textarea-bordered textarea-lg w-full"
          ></textarea>
          <div className="text-center">
            <button className="btn btn-primary" type="submit">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
