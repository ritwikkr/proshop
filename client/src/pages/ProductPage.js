import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Ratings from "../components/Ratings";
import Reviews from "../components/Reviews";
import Wrapper from "../wrapper/ProductPageWrapper";
import { fetchProduct } from "../store/slices/singleProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";

function ProductPage() {
  const { id } = useParams();
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  const { name, image, rating, numReviews, price, description, countInStock } =
    data;
  const stockArr = [];
  for (let i = 1; i <= countInStock; i++) {
    if (i > 10) {
      break;
    }
    stockArr.push(i);
  }

  function addToCartHandler() {
    console.log(qty);
    // dispatch add to cart slice
    dispatch(addToCart({ ...data, qty }));
  }

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
            {countInStock > 0 ? (
              <p className="instock">In Stock</p>
            ) : (
              <p className="outofstock">Out of Stock</p>
            )}
          </div>
          <div className="qty">
            <p>Qty</p>
            <select
              name="qty"
              id="qty"
              onChange={(e) => setQty(e.target.value)}
            >
              {stockArr.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="btn">
            <button
              onClick={() => addToCartHandler()}
              className={countInStock < 1 ? `disabled` : null}
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="reviews">
        <Reviews />
      </div>
    </Wrapper>
  );
}

export default ProductPage;
