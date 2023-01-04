import React, { useState } from "react";
import Wrapper from "../wrapper/HeaderWrapper";
import { BsFillCartFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logOut } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);
  // console.log(data);

  function searchHandler(e) {
    e.preventDefault();
    // Hint: Build Search Functionality
    console.log(searchTerm);
  }
  function logoutHandler() {
    // console.log(`object`);
    dispatch(logOut());
  }
  return (
    <Wrapper>
      <div className="body">
        <div className="left">
          <div className="logo">
            <Link to={"/"}>
              <h2>proshop</h2>
            </Link>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search Products..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
          </div>
        </div>
        <div className="navigation">
          <div className="cart">
            <Link to={"/cart"}>
              <div className="icon">
                <BsFillCartFill />
              </div>
              <p>cart</p>
            </Link>
          </div>
          <div className="profile">
            {data ? (
              <p onClick={() => logoutHandler()}>Logout</p>
            ) : (
              <Link to={"/login"}>
                <div className="icon">
                  <FaUserAlt />
                </div>
                <p>Sign In</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;
