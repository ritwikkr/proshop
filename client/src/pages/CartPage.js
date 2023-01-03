import React from "react";
import Wrapper from "../wrapper/CartPageWrapper";
import { FaTrash } from "react-icons/fa";

function CartPage() {
  return (
    <Wrapper>
      <div className="cart">
        <div className="title">
          <p>shopping cart</p>
        </div>
        <div className="body">
          <div className="item">
            <div className="image">
              <img src="/images/airpods.jpg" alt="" />
            </div>
            <div className="product-title">
              <p>airpods wireless bluetooth headphones</p>
            </div>
            <div className="price">
              <p>$89.99</p>
            </div>
            <div className="qty">
              <select name="qty" id="qty">
                <option value="1">1</option>
              </select>
            </div>
            <div className="remove">
              <FaTrash />
            </div>
          </div>
          {/*  */}
          <div className="item">
            <div className="image">
              <img src="/images/airpods.jpg" alt="" />
            </div>
            <div className="product-title">
              <p>airpods wireless bluetooth headphones</p>
            </div>
            <div className="price">
              <p>$89.99</p>
            </div>
            <div className="qty">
              <select name="qty" id="qty">
                <option value="1">1</option>
              </select>
            </div>
            <div className="remove">
              <FaTrash />
            </div>
          </div>
        </div>
      </div>
      <div className="subtotal">
        <div className="title">
          <p>subtotal (1) items</p>
        </div>
        <div className="amt">
          <p>$89.99</p>
        </div>
        <div className="btn">
          <button>proceed to checkout</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default CartPage;
