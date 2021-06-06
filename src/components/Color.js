import React, { useState } from "react";
import styled from "styled-components";
import { HexColorPicker } from "react-colorful";

const ColorBlock = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: ${(props) => props.background};
  margin-bottom: 8px;
  cursor: pointer;
  border: 3px solid ${(props) => (props.active ? "#2b2b2b" : "transparent")};
`;

const ColorContainer = styled.div`
  font-size: 10px;
  width: 40px;
  height: 40px;
  text-align: center;
  text-overflow: wrap;
  margin: 12px;
  margin-bottom: 32px;
  color: #696670;
  font-weight: bold;
`;

const PickerOverlay = styled.div`
  position: absolute;
  left: 54px;
  top: -73px;

  .react-colorful {
    z-index: 8;
    position: relative;
  }
`;

const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 7;
`;

export default function Color({ name, onChange, ...props }) {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [color, setColor] = useState(props.background);

  return (
    <div style={{ position: "relative" }}>
      <ColorContainer onClick={() => setIsPickerOpen(true)}>
        <ColorBlock active={isPickerOpen} background={color} />
        {name}
      </ColorContainer>

      {isPickerOpen ? (
        <PickerOverlay>
          <HexColorPicker
            color={color}
            onChange={(color) => {
              onChange && onChange(color);
              setColor(color);
            }}
          />
          <Cover onClick={() => setIsPickerOpen(false)} />
        </PickerOverlay>
      ) : null}
    </div>
  );
}
