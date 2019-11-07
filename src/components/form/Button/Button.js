import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { uuidv4 } from 'utils';
import { Icon } from 'components';
import Block from './Button.style.js';

export default class Button extends Component {
  uuid = null;

  static propTypes = {
    as: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    type: PropTypes.string,
    view: PropTypes.oneOf(['common', 'like', 'stroke-like', 'rounded']),
    size: PropTypes.oneOf(['normal', 'small']),
    disabled: PropTypes.bool,
    fit: PropTypes.bool,
    fontSize: PropTypes.number,
    uppercase: PropTypes.bool,
    isActive: PropTypes.bool
  };

  static defaultProps = {
    size: 'normal',
    type: 'button',
    as: 'button',
    children: '',
    style: {}
  };

  constructor(props) {
    super(props);

    this.uuid = uuidv4();
  }

  getProps = e => {
    const { view, disabled, fit, uppercase, size, isActive } = this.props;

    return {
      view,
      disabled,
      fit,
      uppercase,
      size,
      isActive
    };
  };

  render() {
    const { children, as, onClick, href, type, style, view, disabled } = this.props;

    const props = this.getProps();

    return (
      <ThemeProvider theme={{ props }}>
        <>
          <Block
            disabled={disabled}
            style={style}
            as={as}
            href={href}
            type={type}
            onClick={onClick}
          >
            <React.Fragment>
              {view === 'like' && (
                <span>
                  <Icon name="heart" />
                </span>
              )}
              {view === 'stroke-like' && (
                <span>
                  <Icon name="strokeHeart" />
                </span>
              )}
              {view === 'common' && (
                <Block.Background>
                  <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%">
                    <mask id={`button-mask-${this.uuid}`} fill="#fff">
                      <rect id={`button-mask-rect-${this.uuid}`} width="100%" height="100%"></rect>
                      <circle id="button-mask-circle" cx="0" cy="50%" r="5" fill="#000"></circle>
                      <circle id="button-mask-circle" cx="100%" cy="50%" r="5" fill="#000"></circle>
                    </mask>
                    <use
                      id="button-mask-result"
                      xlinkHref={`#button-mask-rect-${this.uuid}`}
                      mask={`url(#button-mask-${this.uuid})`}
                    ></use>
                  </svg>
                </Block.Background>
              )}
              {children && <span>{children}</span>}
            </React.Fragment>
          </Block>
        </>
      </ThemeProvider>
    );
  }
}
