import React from "react";
import styled from "styled-components";
import displayCard from "../displayCard";

import * as displays from "../displays";

import useWindowSize from "../util/useWindowSize";

const DisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DisplayDescription = styled.p`
  margin: 64px 32px 16px 32px;
  color: #696670;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
`;

const displayComponents = Object.values(displays).map(
  ({ component, ...rest }) => ({
    ...rest,
    component: displayCard(component),
  })
);

const DisplayRow = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  padding: 32px 0;
  margin-left: 64px;
`;

export default function DisplayList({ colors, ...props }) {
  const window = useWindowSize();

  let width = 1200;
  const ratio = 0.75;

  if (window.width < 2600) {
    width = 600;
  }
  if (window.width < 2000) {
    width = 500;
  }
  if (window.width < 1800) {
    width = 400;
  }
  if (window.width < 1100) {
    width = 300;
  }
  return (
    <DisplayRow>
      {displayComponents.map(({ name, component: Component }, index) => (
        <DisplayWrapper>
          <DisplayDescription>{name}</DisplayDescription>
          <Component
            colors={colors}
            {...props}
            width={width}
            height={width * ratio}
            key={index}
          />
        </DisplayWrapper>
      ))}
    </DisplayRow>
  );
}
