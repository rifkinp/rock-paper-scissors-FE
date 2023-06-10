const Input = props => {
  const {type, placeholder, name, disabled = false} = props;

  return (
    <input
      type={type}
      className="w-full text-white rounded-md border-2 bg-transparent border-metal py-1 px-3 focus:text-white"
      placeholder={placeholder}
      name={name}
      disabled={disabled}
    />
  );
};

export default Input;
