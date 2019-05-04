import React from 'react';
import { withNamespaces } from '../i18n.js';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <p>
        {this.props.statusCode ? `An error ${this.props.statusCode} occurred on server` : 'An error occurred on client'}
      </p>
    );
  }
}

Error.getInitialProps = async ({ req }) => {
  return { namespacesRequired: ['translation'] };
};

export default withNamespaces('translation')(Error);
