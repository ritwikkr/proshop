import styled from "styled-components";

const Wrapper = styled.div`
  height: 80px;
  width: 100vw;
  padding: 10px;
  background-color: rgb(46, 50, 56);
  color: rgb(220, 224, 231);
  > .body {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;
    .left {
      display: flex;
      .logo {
        margin-right: 150px;
        h2 {
          height: 100%;
          text-transform: uppercase;
        }
      }
    }
    .search-bar {
      height: 40px;
      input {
        height: 100%;
        margin-right: 10px;
        border: none;
        padding-left: 20px;
        outline: none;
      }
      button {
        height: 100%;
        width: 70px;
        background-color: transparent;
        color: rgb(59, 117, 88);
        border: 2px solid rgb(59, 117, 88);
        text-transform: uppercase;
      }
    }
    > .navigation {
      display: flex;
      .cart,
      .profile {
        margin-right: 10px;
        a {
          display: flex;
          text-transform: uppercase;
          font-size: 15px;
          color: rgb(146, 150, 159);
          .icon {
            margin-right: 5px;
          }
        }
      }
    }
  }
`;

export default Wrapper;
