import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';

import actionsCreators from 'store/actions';
import global from 'styles/global';

import 'styles/fonts.css';
import '/styles/reset.css';

const a = 5;

const GlobalStyle = createGlobalStyle`
    ${global}
`;

export default class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <>
        <GlobalStyle />
        {children}
      </>
    );
  }
}
