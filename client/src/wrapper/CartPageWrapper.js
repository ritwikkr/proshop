import styled from "styled-components";

const Wrapper = styled.div`
  min-height: calc(100vh - 130px);
  display: flex;
  width: 90%;
  margin: auto;
  .cart {
    width: 1200px;
    .title {
      margin: 20px 0;
      p {
        text-transform: uppercase;
        font-size: 30px;
      }
    }
    .body {
      .item {
        display: flex;
        align-items: flex-start;
        padding: 10px;
        .image {
          width: 120px;
          margin-right: 20px;
          img {
            border-radius: 5px;
            width: 100%;
            height: 100%;
          }
        }
        .product-title {
          text-transform: capitalize;
          letter-spacing: 1.1px;
          width: 250px;
          margin-right: 20px;
        }
        .price {
          margin-right: 20px;
          font-weight: bold;
        }
        .qty {
          select {
            width: 80px;
            background-color: rgb(240, 240, 240);
            height: 30px;
            outline: none;
            border: none;
            padding-left: 20px;
          }
          margin-right: 20px;
        }
        .remove {
          /* border: 2px solid red; */
          cursor: pointer;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgb(240, 240, 240);
        }
      }
    }
  }
  .subtotal {
    border: 1px solid lightgray;
    width: 400px;
    height: fit-content;
    margin-top: 20px;
    .title {
      padding: 10px;
      p {
        font-size: 22px;
        text-transform: uppercase;
      }
    }
    .amt {
      padding: 10px;
      border-bottom: 1px solid lightgray;
      font-weight: bold;
    }
    .btn {
      padding: 10px;
      button {
        cursor: pointer;
        width: 100%;
        border: none;
        outline: none;
        height: 40px;
        text-transform: uppercase;
        background-color: black;
        color: white;
        font-size: 16px;
      }
    }
  }
`;

export default Wrapper;
