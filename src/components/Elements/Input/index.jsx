import React from 'react';
import Label from './Label';
import Input from './Input';

const inputData = (props) => {
  const {
    name, type, placeholder, variant, className, onChange, label,
  } = props;
  return (
    <div className="mb-5">
      <Label htmlFor={name} variant={variant}>
        {label}
      </Label>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        className={className}
        onChange={onChange}
      />
    </div>
  );
};

export default inputData;
