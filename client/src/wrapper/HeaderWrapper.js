import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid red;
  height: 80px;
  width: 100vw;
  padding: 10px;
  > .body {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > .navigation {
      display: flex;
    }
  }
`;

export default Wrapper;
