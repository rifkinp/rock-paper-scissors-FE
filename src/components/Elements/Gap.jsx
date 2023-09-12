import React from 'react';
import { PropTypes } from 'prop-types';

function Gap({ width, height }) {
  return <div style={{ width, height }} data-testid="wh-element" />;
}

Gap.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

Gap.defaultProps = {
  width: 10,
  height: 10,
};

export default Gap;
