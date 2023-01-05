import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function ProgressBar({ shipping, paymentMethod }) {
  const { data } = useSelector((state) => state.user);
  return (
    <Wrapper>
      <div className="progress-bar">
        <ul>
          <li className={data ? "active" : null}>Sign In</li>
          <li className={shipping ? "active" : null}>Shipping</li>
          <li className={paymentMethod ? "active" : null}>Payment</li>
          <li>Place Order</li>
        </ul>
      </div>
    </Wrapper>
  );
}

export default ProgressBar;

const Wrapper = styled.div`
  .progress-bar {
    ul {
      display: flex;
      justify-content: space-between;
      li {
        list-style: none;
        color: gray;
      }
      li.active {
        color: black;
      }
    }
  }
`;
