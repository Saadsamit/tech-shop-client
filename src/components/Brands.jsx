import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

const Brands = () => {
    const brandsData = useLoaderData()
    return (
        <div className="pt-10 container mx-auto">
            <h3 className="text-5xl text-center font-bold">Our Brands</h3>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 pt-10">
            {brandsData?.map(data=> <BrandCard key={data._id} data={data}/>)}
            </div>
        </div>
    );
};

export default Brands;