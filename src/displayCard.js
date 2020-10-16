import React, { useRef, useState } from "react";
import styled from "styled-components";
import { saveAs } from "file-saver";
import htmlToImage from "html-to-image";
import Loader from "react-loader-spinner";

import SaveModal from "./components/SaveModal";

import { generateBoxShadow } from "./util/generateBoxShadow";
import Check from "./components/icons/Check";
import Cross from "./components/icons/Cross";

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const Card = styled.div`
  border-radius: 8px;
  margin: 0 32px;
  overflow: hidden;
  position: relative;
  box-shadow: ${generateBoxShadow("#000000")};
`;

const ActionBar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
`;

const Spacer = styled.span`
  flex-grow: 1;
`;

const DownloadButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    stroke: rgba(255, 255, 255, 0.8);
    margin-right: 8px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export default function displayCard(Component) {
  function DisplayCard({ image, ...rest }) {
    const $display = useRef();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    async function saveImage() {
      setIsModalOpen(true);
      await sleep(500);

      try {
        $display.current.style.display = "flex";
        const dataUrl = await htmlToImage.toPng($display.current);
        saveAs(dataUrl, "image.png");
        setIsSaved(true);
        await sleep(500);
      } catch (error) {
        console.error(error);
        setIsSaved("error");
        await sleep(2000);
      } finally {
        $display.current.style.display = "none";
        setIsModalOpen(false);
        await sleep(500);
        setIsSaved(false);
      }
    }

    let imgWidth = null,
      imgHeight = null;

    if (image.width > image.height) {
      imgHeight = "75%";
    } else {
      imgWidth = "75%";
    }

    return (
      <>
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
            <Spacer />
            <DownloadButton onClick={saveImage}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-download"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                <polyline points="7 11 12 16 17 11" />
                <line x1="12" y1="4" x2="12" y2="16" />
              </svg>
              <span>Download</span>
            </DownloadButton>
          </ActionBar>
        </Card>
        <SaveModal isOpen={isModalOpen}>
          {isSaved === true ? (
            <>
              <Check color="#F0569A" />
            </>
          ) : isSaved === "error" ? (
            <>
              <Cross color="red" />
              <span>Could not save the image :(</span>
            </>
          ) : (
            <>
              <Loader type="Rings" color="#F0569A" height={80} width={80} />
              <span>Saving...</span>
            </>
          )}
        </SaveModal>
      </>
    );
  }

  return React.forwardRef((props, ref) => (
    <DisplayCard {...props}></DisplayCard>
  ));
}
