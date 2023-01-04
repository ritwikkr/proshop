import React, { useEffect } from "react";
import DemoCarousel from "../components/Carousel";
import Product from "../components/Product";
import Wrapper from "../wrapper/HomePageWrapper";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/productsSlice";

function Homepage() {
  const dispatch = useDispatch();

  const { isLoading, data } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="body">
        <DemoCarousel />
        <div className="featured">
          <h2>latest products</h2>
          <div className="products">
            {data.map((item) => (
              <Product key={item._id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Homepage;
