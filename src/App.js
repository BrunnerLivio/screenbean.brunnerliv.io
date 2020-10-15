import React, { useRef } from "react";
import displayCard from "./displayCard";
import * as displays from "./displays";
import useProminetColors from "./useProminentColors";
import styled from "styled-components";
import Color from "./Color";

const displayComponents = Object.values(displays).map((c) => displayCard(c));

const DisplayRow = styled.section`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  flex-wrap: wrap;
  margin: auto;
`;

const Layout = styled.main`
  min-width: 100%;
  min-height: 100vh;
  background: #f0f0f0;
`;

function App() {
  const fileInput = useRef();
  const { colors, ...result } = useProminetColors(fileInput);

  if (!colors) {
    return (
      <Layout>
        <input ref={fileInput} type="file" />
      </Layout>
    );
  }

  return (
    <Layout>
      <DisplayRow>
        <Color name="Vibrant" background={colors.Vibrant.hex}></Color>
        <Color name="Dark Vibrant" background={colors.DarkVibrant.hex}></Color>
        <Color
          name="Light Vibrant"
          background={colors.LightVibrant.hex}
        ></Color>
        <Color name="Muted" background={colors.Muted.hex}></Color>
        <Color name="Dark Muted" background={colors.DarkMuted.hex}></Color>
        <Color name="Light Muted" background={colors.LightMuted.hex}></Color>
      </DisplayRow>
      <DisplayRow>
        {displayComponents.map((Component, index) => (
          <Component
            colors={colors}
            {...result}
            width={500}
            height={374.69}
            key={index}
          />
        ))}
      </DisplayRow>
    </Layout>
  );
}

export default App;
