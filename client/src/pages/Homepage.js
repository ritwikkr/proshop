import React, { useEffect, useState } from "react";
import DemoCarousel from "../components/Carousel";
import Product from "../components/Product";
import Wrapper from "../wrapper/HomePageWrapper";
import axios from "axios";
import Loading from "../components/Loading";

function Homepage() {
  const [products, setProducts] = useState([]);
  async function fetchProducts() {
    try {
      const { data } = await axios.get("/api/v1/product/getProducts");
      setProducts(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  // if (products.length === 0) {
  //   return <Loading />;
  // }
  return (
    <Wrapper>
      <div className="body">
        <DemoCarousel />
        <div className="featured">
          <h2>latest products</h2>
          <div className="products">
            {products.map((item) => (
              <Product key={item._id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Homepage;
