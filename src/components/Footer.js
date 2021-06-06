import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 300;
  margin: 64px 0;
  margin-bottom: 32px;
  margin-left: 64px;
  word-wrap: break-word;
  @media only screen and (max-width: 600px) {
    display: none;
  }
  & > svg,
  span,
  a {
    margin: 0 6px;
  }
  a {
    color: rgba(109, 131, 233, 1);
    text-decoration: none;
  }
`;

const JSLogo = styled.span`
  background: #ead54d;
  padding: 4px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 16px;
  height: 16px;
  font-size: 11px;
  border-radius: 4px;
  color: #31322e;
  font-weight: bold;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      Made with{"  "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-heart"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#F44336"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      </svg>
      {"  "} and {"  "} <JSLogo>JS</JSLogo> by{" "}
      <a href="https://brunnerliv.io">Livio Brunner</a> ·{" "}
      <a href="https://github.com/BrunnerLivio/screenbean.brunnerliv.io">
        Github
      </a>
    </FooterWrapper>
  );
}
