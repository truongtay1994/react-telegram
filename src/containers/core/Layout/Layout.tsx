import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';

import global from 'styles/global';
import { client } from 'controllers';

console.log(client)

import 'styles/fonts.css';
import '/styles/reset.css';

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
