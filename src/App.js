import React, { useCallback, useState } from "react";
import styled from "styled-components";

import Dropzone from "./components/Dropzone";
import Footer from "./components/Footer";
import DisplayList from "./components/DisplayList";
import Palette from "./components/Palette";

import getProminetColors from "./util/getProminentColors";

const Layout = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  margin-top: 64px;
  margin-bottom: 64px;
  max-width: 100%;
  @media only screen and (max-width: 800px) {
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;

const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: rgb(66, 36, 241);
  align-items: center;
  background: linear-gradient(
    344deg,
    rgba(66, 36, 241, 1) 0%,
    rgba(109, 131, 233, 1) 51%,
    rgba(157, 237, 225, 1) 100%
  );
`;

function App() {
  const [state, setState] = useState({ colors: null, image: null });
  const [isLoading, setIsLoading] = useState(false);

  const { colors, image } = state;

  const onDrop = useCallback(async (acceptedFiles) => {
    setIsLoading(true);
    const c = await getProminetColors(acceptedFiles[0]);
    setTimeout(() => {
      setState(c);
    }, 500);
  }, []);

  if (!colors) {
    return (
      <Layout>
        <Content>
          <Logo
            src="/logo.png"
            alt="Logo"
            style={{ marginTop: "64px", marginBottom: "64px" }}
          />
          <Dropzone onDrop={onDrop} isLoading={isLoading} />
        </Content>
      </Layout>
    );
  }

  return (
    <>
      <Layout>
        {/* <img
        src="/logo.png"
        alt="Logo"
        style={{ margin: "64px", marginLeft: "128px" }}
      /> */}
        <Palette
          colors={colors}
          onChange={(colors) => setState({ ...state, colors })}
        />
        <DisplayList colors={colors} image={image} />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
