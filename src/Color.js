import React from "react";
import styled from "styled-components";

const ColorBlock = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background: ${(props) => props.background};
`;

const ColorContainer = styled.div`
  font-size: 10px;
  width: 50px;
  height: 50px;
  text-align: center;
  text-overflow: wrap;
  margin: 16px;
`;

export default function Color({ name, ...props }) {
  return (
    <ColorContainer>
      <ColorBlock {...props} />
      {name}
    </ColorContainer>
  );
}
