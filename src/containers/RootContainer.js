import React from 'react';
import { connect } from 'react-redux';

import Root from '../components/Root';

const RootContainer = props => <Root {...props} />;

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
