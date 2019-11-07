import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import styled from 'styled-components';

import { Layout } from 'containers';
import { Icon } from 'components';

import * as icons from './static';
const iconNames = Object.keys(icons);

const stories = storiesOf('Components|content/Icon', module);

stories.addDecorator(withKnobs);

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const IconItem = styled.div`
  height: 50px;
  min-width: 50px;
  padding: 0 10px;
  border: 1px solid gray;
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

stories.add('all', () => (
  <Layout>
    <Wrapper>
      {iconNames.map(icon => (
        <IconItem>
          <Icon name={icon} />
        </IconItem>
      ))}
    </Wrapper>
  </Layout>
));
