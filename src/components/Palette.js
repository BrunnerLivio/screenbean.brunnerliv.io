import React, { useState } from "react";
import styled from "styled-components";

import Color from "./Color";

const Colors = styled.section`
  text-align: center;
  z-index: 5;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  height: 550px;
  top: calc(50% - 275px);
  padding: 8px;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    padding: 2px;
  }
  h2 {
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 8px;
    color: #696670;
  }
`;

export default function Palette({ onChange, ...props }) {
  const [colors, setColors] = useState(props.colors);

  function onColorChange(name, color) {
    const newColors = { ...colors, [name]: { hex: color } };
    setColors(newColors);
    onChange(newColors);
  }

  return (
    <Colors>
      <h2>Palette</h2>
      <Color
        name="Vibrant"
        background={colors.Vibrant.hex}
        onChange={(c) => onColorChange("Vibrant", c)}
      ></Color>
      <Color
        name="Dark Vibrant"
        background={colors.DarkVibrant.hex}
        onChange={(c) => onColorChange("DarkVibrant", c)}
      ></Color>
      <Color
        name="Light Vibrant"
        background={colors.LightVibrant.hex}
        onChange={(c) => onColorChange("LightVibrant", c)}
      ></Color>
      <Color
        name="Muted"
        background={colors.Muted.hex}
        onChange={(c) => onColorChange("Muted", c)}
      ></Color>
      <Color
        name="Dark Muted"
        background={colors.DarkMuted.hex}
        onChange={(c) => onColorChange("DarkMuted", c)}
      ></Color>
      <Color
        name="Light Muted"
        background={colors.LightMuted.hex}
        onChange={(c) => onColorChange("LightMuted", c)}
      ></Color>
    </Colors>
  );
}
