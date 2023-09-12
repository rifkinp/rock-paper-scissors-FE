import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const {
    name,
    className,
    type,
    placeholder,
    onChange,
    disabled,
  } = props;
  return (
    <input
      name={name}
      className={`text-sm w-full border rounded placeholder-neutral-950 opacity-50 p-2 ${className}`}
      type={type}
      id={name}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  name: '',
  className: '',
  type: 'text',
  placeholder: '',
  onChange: () => {},
  disabled: false,
};

export default Input;
