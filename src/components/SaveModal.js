import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  background: white;
  opacity: 0;
  transition: 0.5s ease-in-out opacity;
  font-size: 32px;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  &.is-open {
    opacity: 1;
  }
`;

export default function SaveModal({ isOpen, children }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (isOpen) {
      document.body.style = "overflow: hidden";
      setDimensions({ width: "100vw", height: "100vh" });
    } else {
      window.setTimeout(() => {
        setDimensions({ width: 0, height: 0 });
        document.body.style = "overflow: hidden";
      }, 500);
    }
  }, [isOpen]);

  return (
    <Modal style={dimensions} className={isOpen ? "is-open" : ""}>
      {children}
    </Modal>
  );
}
