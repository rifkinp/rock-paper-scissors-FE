import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { variant, title, onClick, type } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      onClick={onClick}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'bg-red-300',
  title: '...',
  type: 'button',
  onClick: () => {},
};

export default Button;
