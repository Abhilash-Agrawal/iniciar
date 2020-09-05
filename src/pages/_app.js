import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="XT-PS">
      <Component {...pageProps} />
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default MyApp;
