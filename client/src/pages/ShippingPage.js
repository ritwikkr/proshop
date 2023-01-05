import React, { useState } from "react";
import Wrapper from "../wrapper/ShippingPageWrapper";
import { useSelector } from "react-redux";
import ProgressBar from "../components/ProgressBar";

function ShippingPage() {
  const [address, setAddress] = useState({
    address: "",
    city: "",
    postal_code: "",
    country: "",
  });

  function formSubmitHandler(e) {
    e.preventDefault();
    console.log(address);
  }
  const { data } = useSelector((state) => state.user);

  return (
    <Wrapper>
      <div className="main">
        <ProgressBar shipping />
        <div className="content">
          <div className="title">
            <h1>Shipping</h1>
          </div>
          <div className="body">
            <form onSubmit={formSubmitHandler}>
              <div className="form-content">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter Address"
                  onChange={(e) =>
                    setAddress({ ...address, address: e.target.value })
                  }
                />
              </div>
              <div className="form-content">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter City"
                  onChange={(e) =>
                    setAddress({ ...address, city: e.target.value })
                  }
                />
              </div>
              <div className="form-content">
                <label htmlFor="code">Postal Code</label>
                <input
                  type="number"
                  id="code"
                  placeholder="Enter Postal Code"
                  onChange={(e) =>
                    setAddress({ ...address, postal_code: e.target.value })
                  }
                />
              </div>
              <div className="form-content">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  placeholder="Enter Country"
                  onChange={(e) =>
                    setAddress({ ...address, country: e.target.value })
                  }
                />
              </div>
              <div className="form-content">
                <button type="submit">Continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ShippingPage;
