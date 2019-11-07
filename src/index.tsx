import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { Router, Route, hashHistory } from 'react-router'
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';

import { initStore } from 'store';
import { Button } from 'components';
import { PageWrapper } from 'containers';
import { MainPage, ProductPage } from 'pages';

const store = initStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <PageWrapper>
            <Switch>
              <Route exact path="/" children={<div>test</div>} />
            </Switch>
          </PageWrapper>
        </HashRouter>
      </Provider>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
