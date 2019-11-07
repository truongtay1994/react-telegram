import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Block from './Text.style.js';

export default class Text extends Component {
  static propTypes = {
    as: PropTypes.string,
    view: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'p', 'p2', 'p3', 'digit', 'footerLink']),
    fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    uppercase: PropTypes.bool,
    opacity: PropTypes.number,
    lineHeight: PropTypes.number,
    href: PropTypes.string
  };

  static defaultProps = {
    as: 'div',
    children: ''
  };

  getProps() {
    const { view, uppercase, opacity, fontWeight, fontSize, lineHeight } = this.props;

    return {
      view,
      uppercase,
      opacity,
      fontWeight,
      fontSize,
      lineHeight
    };
  }

  render() {
    const { children, as, href, ...restProps } = this.props;
    const props = this.getProps();

    return (
      <ThemeProvider theme={{ props }}>
        <Block href={href} as={as} {...restProps}>
          <span>{children}</span>
        </Block>
      </ThemeProvider>
    );
  }
}
