import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { url } from "../router/Router";
import ProductAds from "../components/ProductAds";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ItemCard from "../components/ItemCard";

const BrandDetail = () => {
  const loaderData = useLoaderData();
  const { brand_ads, brand_name } = loaderData;
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`${url}brandItem/${brand_name}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [brand_name]);
  return (
    <div>
      <div className="container mx-auto pt-10">
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
        >
          {brand_ads &&
            brand_ads.map((data, idx) => (
              <SwiperSlide key={idx}>
                <ProductAds img={data} />
              </SwiperSlide>
            ))}
        </Swiper>
        {product.length > 0 ? (
          <div className="pt-10">
            <h3 className="text-5xl text-center font-bold capitalize">
              {brand_name} Product
            </h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
                {product.map(data =><ItemCard  key={data._id} data={data}/>)}
            </div>
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="font-bold text-2xl">No Product Available</p>
            <Link to="/" className="btn btn-primary my-4">
              Go To Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandDetail;
