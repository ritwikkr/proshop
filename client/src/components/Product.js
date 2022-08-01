import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../wrapper/ProductWrapper";
import Ratings from "./Ratings";

function Product({ _id, title, image, price, stock }) {
  return (
    <Wrapper>
      <Link
        to={`/productPage/${_id}`}
        style={{ color: "unset", textDecoration: "unset" }}
      >
        <div className="body">
          <div className="image">
            <img src={image} alt={title} />
          </div>
          <div className="description">
            <div className="title">
              <p>{title}</p>
            </div>
            <div className="rating">
              <Ratings stars={3.5} />
            </div>
            <div className="price">
              <p>$ {price}</p>
            </div>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
}

export default Product;
