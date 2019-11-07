import { css } from 'styled-components';
import provider from './provider';

export default css`
  html {
    font-size: 16px;
    overflow: auto;
    @media screen and (max-width: 1500px) {
      font-size: 15px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 14px;
    }
    @media screen and (max-width: 600px) {
      font-size: 13px;
    }
  }
  body {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ApercuPro;
    color: ${provider.color.black};
    background-color: white;
    line-height: 1.5;
    word-break: break-word;
    word-wrap: break-word;
    font-size: 16px;
    @media screen and (max-width: 1500px) {
      font-size: 15px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 14px;
    }
    @media screen and (max-width: 600px) {
      font-size: 13px;
    }
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`;
