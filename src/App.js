import React, { useCallback, useState } from "react";
import styled from "styled-components";

import Dropzone from "./components/Dropzone";
import Footer from "./components/Footer";
import DisplayList from "./components/DisplayList";
import Palette from "./components/Palette";

import getProminetColors from "./util/getProminentColors";

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

function App() {
  const [{ colors, ...result }, setColors] = useState({
    colors: null,
    image: null,
  });

  const onDrop = useCallback(async (acceptedFiles) => {
    const c = await getProminetColors(acceptedFiles[0]);
    setColors(c);
  }, []);

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
      <Palette colors={colors} />
      <DisplayList colors={colors} {...result} />
      <Footer />
    </Layout>
  );
}

export default App;
