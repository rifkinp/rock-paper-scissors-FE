import React from 'react';
import PropTypes from 'prop-types';

function Label(props) {
  const { htmlFor, children, variant } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={`block ${variant} text-lg font-bold mb-2`}
    >
      {children}
    </label>
  );
}

Label.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.string,
};

Label.defaultProps = {
  htmlFor: '',
  children: '',
  variant: 'text-white',
};

export default Label;
