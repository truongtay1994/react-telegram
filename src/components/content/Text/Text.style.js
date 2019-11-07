import styled, { css } from 'styled-components';
import { provider } from 'styles';

export const views = {};

views['h1'] = css`
  ${({ theme }) => css`
    font-size: 52px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-weight: 500;
    font-family: ApercuProCondensed;
    @media screen and (max-width: 1440px) {
      font-size: 42px;
    }
    @media screen and (max-width: 600px) {
      font-size: 30px;
    }
  `}
`;

views['h2'] = css`
  ${({ theme }) => css`
    ${views['h1']}
    font-size: 36px;
    @media screen and (max-width: 1440px) {
      font-size: 32px;
    }
    @media screen and (max-width: 600px) {
      font-size: 24px;
    }
  `}
`;

views['h3'] = css`
  ${({ theme }) => css`
    font-family: ApercuProCondensed;
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    @media screen and (max-width: 1440px) {
      font-size: 22px;
    }
    @media screen and (max-width: 600px) {
      font-size: 19px;
    }
  `}
`;

views['h4'] = css`
  ${({ theme }) => css`
    font-family: ApercuProCondensed;
    font-size: 21px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    @media screen and (max-width: 1440px) {
      font-size: 19px;
    }
    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  `}
`;

views['p'] = css`
  ${({ theme }) => css`
    font-size: 22px;
    font-weight: 300;
    line-height: 1.7;
    @media screen and (max-width: 1440px) {
      font-size: 19px;
    }
    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  `}
`;

views['p2'] = css`
  ${({ theme }) => css`
    ${views['p']}
    font-size: 18px;
    @media screen and (max-width: 1440px) {
      font-size: 16px;
    }
    @media screen and (max-width: 600px) {
      font-size: 15px;
    }
  `}
`;

views['p3'] = css`
  ${({ theme }) => css`
    ${views['p']}
    font-size: 16px;
    @media screen and (max-width: 1440px) {
      font-size: 14px;
    }
    @media screen and (max-width: 600px) {
      font-size: 13px;
    }
  `}
`;

views['digit'] = css`
  ${({ theme }) => css`
    ${views['h1']}
    font-size: 62px;
  `}
`;

views['footerLink'] = css`
  ${({ theme }) => css`
    ${views['h1']}
    font-size: 16px;
    font-weight: 400;
    @media screen and (max-width: 1440px) {
      font-size: 16px;
    }
    @media screen and (max-width: 600px) {
      font-size: 14px;
    }
  `}
`;

const Text = styled.div`
  text-transform: inherit;
  display: inline-flex;
  ${({ theme: { props } }) => {
    const view = props.view && views[props.view];

    return css`
      ${view}
      ${props.uppercase &&
        css`
          text-transform: uppercase;
        `}
      ${props.fontSize &&
        css`
          font-size: ${props.fontSize} !important;
        `}  
      ${props.fontWeight &&
        css`
          font-weight: ${props.fontWeight} !important;
        `}
      ${props.lineHeight &&
        css`
          line-height: ${props.lineHeight} !important;
        `}  
      ${props.opacity &&
        css`
          opacity: ${[props.opacity]};
        `}
    `;
  }}
`;

export default Text;
