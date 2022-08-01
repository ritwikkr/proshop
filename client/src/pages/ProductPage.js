import React from "react";
import {useParams} from 'react-router-dom'
import Wrapper from "../wrapper/ProductPageWrapper";

function ProductPage() {
  const {id} = useParams()
  return <Wrapper>
    <div className="body">
      <div className="back-btn">
        <button>go back</button>
      </div>
      <div className="dashboard">
        <div className="image">
          <img src="" alt=""/>
        </div>
        <div className="prod-details">
        </div>
        <div className="price-box"></div>
      </div>
    </div>
  </Wrapper>;
}

export default ProductPage;