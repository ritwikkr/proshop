import React, { useState } from "react";
import Wrapper from "../wrapper/HeaderWrapper";
import { BsFillCartFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  function searchHandler(e) {
    e.preventDefault();
    // Hint: Build Search Functionality
    console.log(searchTerm);
  }
  return (
    <Wrapper>
      <div className="body">
        <Link to={"/"} style={{ color: "unset", textDecoration: "unset" }}>
          <div className="logo">
            <h2>proshop</h2>
          </div>
        </Link>
        <div className="search-bar">
          <form onSubmit={searchHandler}>
            <input
              type="text"
              placeholder="Search Products"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="navigation">
          <Link
            to={"/cart"}
            style={{ color: "unset", textDecoration: "unset" }}
          >
            <div className="cart">
              <BsFillCartFill />
              <p>cart</p>
            </div>
          </Link>
          <Link
            to={"/login"}
            style={{ color: "unset", textDecoration: "unset" }}
          >
            <div className="profile">
              <FaUserAlt />
              <p>sign in</p>
            </div>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;
