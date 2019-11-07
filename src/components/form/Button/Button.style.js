import styled, { css } from 'styled-components';
import { provider } from 'styles';

const views = {};

views['common'] = css`
  ${({ theme }) => css`
    height: auto;
    color: black;
    font-size: 18px;
    padding: 15px 30px;
    text-transform: uppercase;
    transition: background-color 0.2s ease;
    border-radius: 8px;
    letter-spacing: 0.15em;
    #button-mask-result {
      transition: all 0.3s ease;
      fill: ${provider.color.brown};
    }
    span {
      display: inline-flex;
    }
    &:hover {
      #button-mask-result {
        fill: #ffdbb4;
      }
    }
  `}
`;

views['common'].small = css`
  padding: 5px 15px;
  font-size: 22px;
`;

views['like'] = css`
  ${({ theme }) => css`
    height: 62px;
    width: 62px;
    color: ${provider.color.brown};
    border-radius: 50%;
    font-size: 18px;
    span {
      display: flex;
    }
    :after {
      content: '';
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border: 1px solid ${provider.color.brown};
      border-radius: 50%;
      opacity: 0.5;
      transition: all 0.2s ease;
    }
    &:hover {
      &:after {
        opacity: 1;
      }
    }
  `}
`;

views['like'].small = css`
  height: 42px;
  width: 42px;
`;

views['stroke-like'] = css`
  ${views['like']}
  height: 42px;
  width: 42px;
  font-size: 15px;
`;

views['rounded'] = css`
  color: red;
  padding: 10px 20px 11px 20px;
  font-weight: 300;
  color: white;
  border-radius: 30px;
  border: 1px solid rgba(235, 190, 140, 0.35);
  font-size: 14px;
  line-height: 0.8;
  font-family: ApercuPro;
  &:hover {
    border-color: rgba(235, 190, 140, 0.5);
  }
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  -webkit-appearance: none;
  outline: none;
  border: none;
  font-size: 1em;
  color: currentColor;
  user-select: none;
  text-transform: inherit;
  letter-spacing: inherit;
  transition: all 0.1s ease;
  font-family: ApercuProCondensed;
  position: relative;

  span {
    position: relative;
    display: flex;
  }

  ${({ theme: { props } }) => css`
      ${props.view && views[props.view] ? views[props.view] : ''}
      ${props.view &&
        props.size &&
        views[props.view] &&
        views[props.view][props.size] &&
        css`
          ${views[props.view][props.size]}
        `}
      ${props.fit &&
        css`
          height: 100%;
          width: 100%;
        `}
      ${props.uppercase &&
        css`
          text-transform: uppercase;
        `}
      ${props.disabled &&
        css`
          opacity: 0.35;
          pointer-events: none;
        `}
  `}
`;

Button.Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default Button;
