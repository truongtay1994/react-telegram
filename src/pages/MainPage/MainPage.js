import React from 'react';
import { Helmet } from 'react-helmet';

import Block from './MainPage.style';

export default class MainPage extends React.Component {
  render() {
    return (
      <Block>
        <Helmet>
          <title>telegram app</title>
        </Helmet>
      </Block>
    );
  }
}
