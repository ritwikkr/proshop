import styled from "styled-components";

const Wrapper = styled.div`
  /* border: 2px solid blue; */
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 10px;
  width: 300px;
  /* height: 300px; */
  margin: 10px;
  .body {
    > .image {
      /* border: 2px solid red; */
      width: 80%;
      margin: 10px auto;
      > img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default Wrapper;
