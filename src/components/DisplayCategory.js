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
  text-shadow: 0px 2px 3px #ffffff;
  @media only screen and (max-width: 800px) {
    font-size: 12px;
    font-weight: 500;
  }
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
`;

const CategoryTitleWrapper = styled.div`
  margin-left: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  position: relative;

  h3 {
    font-weight: 300;
    color: #696670;
    font-size: 32px;
    text-shadow: 0px 2px 3px #ffffff;
    position: relative;
    z-index: 1;
    background: #ececec;
    padding: 0 24px;
    text-align: center;
    margin: 0;
  }
`;

const Line = styled.div`
  position: absolute;
  width: 300px;
  height: 2px;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 2px 3px #ffffff;
  left: calc(50% - 150px);
  top: 22px;
  z-index: 0;
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
      <CategoryTitleWrapper>
        <div>
          <h3>{category.name}</h3>
          <Line />
        </div>
      </CategoryTitleWrapper>
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
