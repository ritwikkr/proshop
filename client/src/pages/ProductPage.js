import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Ratings from "../components/Ratings";
import Reviews from "../components/Reviews";
import Wrapper from "../wrapper/ProductPageWrapper";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchProduct();
  }, []);

  async function fetchProduct() {
    try {
      const { data } = await axios.get(`/api/v1/product/getProduct/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!product._id) {
    return <h1>Loading</h1>;
  }

  console.log(product);

  const { name, image, rating, numReviews, price, description } = product;
  return (
    <Wrapper>
      <div className="back-btn">
        <Link to={"/"}>
          <button>go back</button>
        </Link>
      </div>
      <div className="dashboard">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="prod-details">
          <div className="title">{name}</div>
          <hr />
          <div className="rating">
            <Ratings stars={rating} />
            <span>{numReviews} reviews</span>
          </div>
          <hr />
          <div className="price">
            <p>Price: ${price}</p>
          </div>
          <hr />
          <div className="desc">
            <p>Description: {description}</p>
          </div>
        </div>
        <div className="price-box">
          <div className="price">
            <p>Price:</p>
            <p>$ {price}</p>
          </div>
          <div className="status">
            <p>Status:</p>
            <p>In Stock</p>
          </div>
          <div className="qty">
            <p>Qty</p>
            <select name="qty" id="qty">
              <option value="1">1</option>
            </select>
          </div>
          <Link to={"/cart"}>
            <div className="btn">
              <button>add to cart</button>
            </div>
          </Link>
        </div>
      </div>
      <div className="reviews">
        <Reviews />
      </div>
    </Wrapper>
  );
}

export default ProductPage;
