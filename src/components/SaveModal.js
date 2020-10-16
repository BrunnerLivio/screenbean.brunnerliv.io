import React from "react";
import styled from "styled-components";
import ReactModal from "react-modal";

ReactModal.setAppElement("body");

const Modal = styled.div`
  font-size: 32px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: black;
  display: flex;
  overflow: hidden;
`;

export default function SaveModal({ isOpen, children }) {
  //   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  //   useEffect(() => {
  //     if (isOpen) {
  //       document.body.style = "overflow: hidden";
  //       setDimensions({ width: "100vw", height: "100vh" });
  //     } else {
  //       window.setTimeout(() => {
  //         setDimensions({ width: 0, height: 0 });
  //         document.body.style = "overflow: hidden";
  //       }, 500);
  //     }
  //   }, [isOpen]);

  return (
    <ReactModal className="Modal" overlayClassName="Overlay" isOpen={isOpen}>
      <Modal>{children}</Modal>
    </ReactModal>
  );
}
