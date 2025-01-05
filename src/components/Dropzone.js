import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { generateBoxShadow } from "../util/generateBoxShadow";
import useInterval from "@use-it/interval";

const DropareaCard = styled.section`
  @keyframes pulse {
    0% {
      transform: scale(1.1);
    }

    50% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1.1);
    }
  }

  box-shadow: ${generateBoxShadow("#000000")};
  max-width: 600px;
  height: 400px;
  position: relative;
  z-index: 3;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: calc(100% - 20px);
    height: 400px;
    z-index: 2;
    top: 10px;
    left: 10px;
    background: #e6e4f4;
    border: 16px dashed transparent;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: calc(100% - 40px);
    height: 400px;
    z-index: 1;
    top: 20px;
    left: 20px;
    background: #c3bfe7;
    border: 16px dashed transparent;
  }

  &.is-loading {
    svg {
      animation: pulse 1s infinite;
    }
  }
`;

const Droparea = styled.section`
  background: white;
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 3;
  padding: 16px;
`;

const DropareaBorder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  flex-grow: 1;
  border: 8px dashed transparent;
  svg {
    transition: transform 0.2s ease-in-out;
  }

  &.active {
    background: rgba(72, 46, 240, 0.05);
    border: 8px dashed #f15d97;

    svg {
      transform: scale(1.1);
    }
  }
`;

const FileTitle = styled.p`
  color: #696670;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
  padding: 0 36px;
  text-align: center;
`;

const FileDetail = styled.p`
  font-weight: 300;
  text-align: center;
  font-size: 14px;
  max-width: 300px;
  color: #97949c;
  margin: 0;
  padding: 0 36px;
`;

export default function Dropzone({ onDrop, isLoading }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const [gradientPosition, setGradientPosition] = useState(0);
  const [isGradientDesc, setIsGradientDesc] = useState(false);

  // Handle clipboard paste
  useEffect(() => {
    const handlePaste = async (event) => {
      const items = event.clipboardData?.items;
      if (!items) return;

      for (const item of items) {
        if (item.type.indexOf('image') === 0) {
          const file = item.getAsFile();
          if (file) {
            event.preventDefault();
            onDrop([file]);
          }
        }
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [onDrop]);

  useInterval(() => {
    if (isLoading) {
      if (gradientPosition === 100) {
        setIsGradientDesc(true);
      } else if (gradientPosition === 20) {
        setIsGradientDesc(false);
      }
      if (isGradientDesc) {
        setGradientPosition(gradientPosition - 1);
      } else {
        setGradientPosition(gradientPosition + 1);
      }
    }
  }, 10);

  return (
    <DropareaCard className={isLoading ? "is-loading" : ""}>
      <Droparea {...getRootProps()}>
        <DropareaBorder className={isDragActive ? "active" : ""}>
          <input
            {...getInputProps()}
            accept="image/png, image/jpeg, image/svg, image/gif"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-cloud-upload"
            width="82"
            height="82"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#F15D97"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <defs>
              <linearGradient
                id="gradient"
                x1={gradientPosition + "%"}
                y1="0%"
                x2="0%"
                y2={100 - gradientPosition + "%"}
              >
                <stop offset="0%" stopColor="#FAA778" />
                <stop offset="100%" stopColor="#F0569A" />
              </linearGradient>
            </defs>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              stroke="url(#gradient)"
              d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"
            />
            <polyline stroke="#482EF0" points="9 15 12 12 15 15" />
            <line stroke="#482EF0" x1="12" y1="12" x2="12" y2="21" />
          </svg>
          <FileTitle>
            Drop file here or press Ctrl+V to paste{" "}
            <span role="img" aria-label="Sparkels emoji">
              ✨
            </span>
          </FileTitle>
          <FileDetail>Allowed file types are SVG, JPG, GIF or PNG</FileDetail>
        </DropareaBorder>
      </Droparea>
    </DropareaCard>
  );
}