import React from "react";
import styled from "styled-components";

const ColorBlock = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: ${(props) => props.background};
  margin-bottom: 8px;
`;

const ColorContainer = styled.div`
  font-size: 10px;
  width: 40px;
  height: 40px;
  text-align: center;
  text-overflow: wrap;
  margin: 12px;
  margin-bottom: 32px;
  color: #696670;
  font-weight: bold;
`;

export default function Color({ name, ...props }) {
  return (
    <ColorContainer>
      <ColorBlock {...props} />
      {name}
    </ColorContainer>
  );
}
