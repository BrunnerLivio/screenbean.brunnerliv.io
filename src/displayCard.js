import React, { useRef } from "react";
import styled from "styled-components";
import { saveAs } from "file-saver";
import htmlToImage from "html-to-image";
import { generateBoxShadow } from "./util/generateBoxShadow";

const Card = styled.div`
  border-radius: 8px;
  margin: 0 32px;
  overflow: hidden;
  position: relative;
  box-shadow: ${generateBoxShadow('#000000')};
`;

const ActionBar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px;
`;

export default function displayCard(Component) {
  function DisplayCard({ image, ...rest }) {
    const $display = useRef();

    async function saveImage() {
      $display.current.style.display = "flex";
      const dataUrl = await htmlToImage.toPng($display.current);
      $display.current.style.display = "none";

      saveAs(dataUrl, "image.png");
    }

    let imgWidth = null,
      imgHeight = null;

    if (image.width > image.height) {
      imgHeight = "75%";
    } else {
      imgWidth = "75%";
    }

    return (
      <Card>
        <Component
          ref={$display}
          {...rest}
          width={1800}
          height={1350}
          imgWidth={imgWidth}
          imgHeight={imgHeight}
          image={image}
          style={{ display: "none" }}
        />
        <Component
          image={image}
          imgWidth={imgWidth}
          imgHeight={imgHeight}
          {...rest}
        />
        <ActionBar className="action-bar">
          <button onClick={saveImage}>Save</button>
        </ActionBar>
      </Card>
    );
  }

  return React.forwardRef((props, ref) => (
    <DisplayCard {...props}></DisplayCard>
  ));
}
