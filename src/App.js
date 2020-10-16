import React, { useCallback, useState } from "react";
import displayCard from "./displayCard";
import * as displays from "./displays";
import getProminetColors from "./util/getProminentColors";
import styled from "styled-components";
import Color from "./Color";
import Dropzone from "./Dropzone";
import useWindowSize from "./util/useWindowSize";
import Footer from "./Footer";

const displayComponents = Object.values(displays).map(
  ({ component, ...rest }) => ({
    ...rest,
    component: displayCard(component),
  })
);

const DisplayRow = styled.section`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  flex-wrap: wrap;
  margin: auto;
  padding: 32px 0;
`;

const Layout = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: rgb(66, 36, 241);
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    344deg,
    rgba(66, 36, 241, 1) 0%,
    rgba(109, 131, 233, 1) 51%,
    rgba(157, 237, 225, 1) 100%
  );
`;

const DisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DisplayDescription = styled.p`
  margin: 64px 32px 16px 32px;
  color: #696670;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
`;

function App() {
  const [{ colors, ...result }, setColors] = useState({
    colors: null,
    image: null,
  });

  const onDrop = useCallback(async (acceptedFiles) => {
    const c = await getProminetColors(acceptedFiles[0]);
    setColors(c);
  }, []);

  const window = useWindowSize();

  let width = 1200;
  const ratio = 0.75;

  if (window.width < 2600) {
    width = 600;
  }
  if (window.width < 2000) {
    width = 500;
  }
  if (window.width < 1800) {
    width = 400;
  }
  if (window.width < 1100) {
    width = 300;
  }

  if (!colors) {
    return (
      <Layout>
        <Content>
          <Dropzone onDrop={onDrop} />
        </Content>
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
        {displayComponents.map(({ name, component: Component }, index) => (
          <DisplayWrapper>
            <DisplayDescription>{name}</DisplayDescription>
            <Component
              colors={colors}
              {...result}
              width={width}
              height={width * ratio}
              key={index}
            />
          </DisplayWrapper>
        ))}
      </DisplayRow>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
