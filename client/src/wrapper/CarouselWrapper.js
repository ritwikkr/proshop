import styled from "styled-components";

const Wrapper = styled.div`
  /* border: 12px solid blue; */
  width: 90%;
  margin: 20px auto 0;
  height: 200px;
  background-color: black;
  img {
    width: 100%;
    height: 200px;
  }
  .thumbs-wrapper {
    display: none;
  }

  .carousel .slide .legend {
    position: absolute;
    top: 5%;
    left: 50%;
    height: 40px;
    &:hover {
      background-color: blue;
    }
  }
`;

export default Wrapper;
