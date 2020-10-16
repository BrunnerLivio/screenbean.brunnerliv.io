import React from "react";
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

export default function Palette({ colors }) {
  return (
    <Colors>
      <h2>Palette</h2>
      <Color name="Vibrant" background={colors.Vibrant.hex}></Color>
      <Color name="Dark Vibrant" background={colors.DarkVibrant.hex}></Color>
      <Color name="Light Vibrant" background={colors.LightVibrant.hex}></Color>
      <Color name="Muted" background={colors.Muted.hex}></Color>
      <Color name="Dark Muted" background={colors.DarkMuted.hex}></Color>
      <Color name="Light Muted" background={colors.LightMuted.hex}></Color>
    </Colors>
  );
}
