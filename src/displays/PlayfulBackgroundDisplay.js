import React from "react";

import styled from "styled-components";
import { generateBoxShadow } from "../util/generateBoxShadow";

const DEFAULT_BOX_SHADOW = generateBoxShadow("#000000");

const Display = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  border-radius: 16px;
  position: relative;
  z-index: 2;
`;

const DotOne = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  left: -${(props) => props.size / 2}px;
  top: -${(props) => props.size / 1.5}px;
  border-radius: 300px;
  position: absolute;
  background: rgba(0, 0, 0, 0.1);
`;

const DotTwo = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  right: ${(props) => props.size / 1.3}px;
  top: ${(props) => props.size * 2}px;
  border-radius: 300px;
  position: absolute;
  background: ${(props) => props.background};
`;

const DotThree = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  left: ${(props) => props.size * 1.5}px;
  bottom: ${(props) => props.size * 4}px;
  border-radius: 300px;
  position: absolute;
  background: ${(props) => props.background};
`;

const DotFour = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  right: -${(props) => props.size / 4}px;
  bottom: -${(props) => props.size / 3}px;
  border-radius: 300px;
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
`;

export const PlayfulBackgroundDisplay = React.forwardRef(
  (
    {
      colors,
      image,
      width,
      height,
      background,
      boxShadow,
      imgWidth,
      imgHeight,
      dotTwoBackground,
      dotThreeBackground,
      style = {},
    },
    ref
  ) => {
    return (
      <Display
        ref={ref}
        style={{
          height,
          width,
          background: background(colors),
          ...style,
        }}
      >
        {width && (
          <>
            <DotOne size={width * 0.5} />
            <DotTwo size={width * 0.08} background={dotTwoBackground(colors)} />
            <DotThree
              size={width * 0.05}
              background={dotThreeBackground(colors)}
            />
            <DotFour size={width * 0.3} />
          </>
        )}

        <Image
          alt="Display"
          style={{
            boxShadow: boxShadow ? boxShadow(colors) : DEFAULT_BOX_SHADOW,
          }}
          height={imgWidth}
          width={imgHeight}
          src={image.src}
        />
      </Display>
    );
  }
);
