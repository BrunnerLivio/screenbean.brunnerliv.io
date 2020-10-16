import React from "react";
import styled from "styled-components";

const DisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DisplayDescription = styled.p`
  margin: 64px 32px 16px 32px;
  color: #97949c;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  text-shadow: 0px 2px 3px #ffffff, 0px 4px 6px #ffffff;
`;

const DisplayRow = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  padding: 0 0 32px 0;
  margin-left: 64px;
`;

const CategoryWrapper = styled.section`
  text-align: center;
  h3 {
    margin-left: 64px;
    font-weight: 300;
    color: #696670;
    margin-top: 64px;
    font-size: 32px;
    text-shadow: 0px 2px 3px #ffffff, 0px 4px 6px #ffffff;
  }
`;

export default function DisplayCategory({
  category,
  colors,
  displayWidth,
  displayHeight,
  ...props
}) {
  return (
    <CategoryWrapper>
      <h3>{category.name}</h3>
      <DisplayRow>
        {category.displays.map(
          ({ name, component: Component }, displayIndex) => (
            <DisplayWrapper>
              <DisplayDescription>{name}</DisplayDescription>
              <Component
                colors={colors}
                width={displayWidth}
                height={displayHeight}
                key={displayIndex}
                {...props}
              />
            </DisplayWrapper>
          )
        )}
      </DisplayRow>
    </CategoryWrapper>
  );
}
