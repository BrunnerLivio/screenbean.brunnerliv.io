import React from "react";

import styled from "styled-components";
import { generateBoxShadow } from "../util/generateBoxShadow";

const DEFAULT_BOX_SHADOW = generateBoxShadow("#000000");

const Display = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  border-radius: 16px;
`;

export const BackgroundDisplay = React.forwardRef(
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
