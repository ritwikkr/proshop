import styled from "styled-components";

const Wrapper = styled.div`
  /* background-color: linen; */
  > .body {
    > .featured {
      margin-top: 20px;
      > .products {
        /* border: 5px solid red; */
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
    }
  }
`;

export default Wrapper;
