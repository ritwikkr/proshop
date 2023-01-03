import React from "react";
import styled from "styled-components";

function Alert() {
  return (
    <Wrapper>
      <p>Please sign in to write a review</p>
    </Wrapper>
  );
}

export default Alert;

const Wrapper = styled.div`
  /* border: 2px solid red; */
  width: 400px;
  padding: 10px;
  background-color: rgb(202, 229, 245);
`;
