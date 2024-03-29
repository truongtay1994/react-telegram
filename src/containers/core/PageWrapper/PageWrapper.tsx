import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { debounce } from 'throttle-debounce';

import { Layout } from 'containers';
import actionsCreators from 'store/actions';

const mapDispatchToProps = (dispatch: any): any => {
  return {
    actions: {
      changeDimensions: bindActionCreators(actionsCreators.changeDimensions, dispatch)
    }
  };
};

const mapStateToProps = (state: any): any => {
  return {
    app: state.app
  };
};

type Props = {
  actions: any;
}

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class PageWrapper extends Component<Props> {
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize(null, true);
  }

  onResize = (e?: any, force?: boolean) => {
    if (force) {
      this.changeDimensions(e);
    } else {
      this.debonuceResize(e);
    }
  };

  debonuceResize = debounce(300, e => {
    this.changeDimensions(e);
  });

  changeDimensions(e?: any) {
    const { actions } = this.props;
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;

    actions.changeDimensions(width, height);
  }

  render() {
    const { children: page } = this.props;

    return (
      <>
        <Layout>
          {page}
        </Layout>
      </>
    );
  }
}
