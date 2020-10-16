import React from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { generateBoxShadow } from "../util/generateBoxShadow";

const DropareaCard = styled.section`
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
  }
`;

const Droparea = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 3;
  flex-grow: 1;
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

export default function Dropzone({ onDrop }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <DropareaCard>
      <Droparea {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-cloud-upload"
              width="82"
              height="82"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#F15D97"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#FAA778" />
                  <stop offset="100%" stop-color="#F0569A" />
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
              Drop file here to pimp your screenshots{" "}
              <span role="img" aria-label="Sparkels emoji">
                ✨
              </span>
            </FileTitle>
            <FileDetail>
              Allowed file types are SVG, JPG, GIF or PNG
            </FileDetail>
          </>
        )}
      </Droparea>
    </DropareaCard>
  );
}
