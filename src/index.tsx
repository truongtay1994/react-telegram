import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { Router, Route, hashHistory } from 'react-router'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { initStore } from 'store';
import { PageWrapper } from 'containers';

const store = initStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <PageWrapper>
            <Switch>
              <Route exact path="/" children={<div>test</div>} />
            </Switch>
          </PageWrapper>
        </BrowserRouter>
      </Provider>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
