const Input = props => {
  const {type, placeholder, name} = props;

  return (
    <input
      type={type}
      className="w-full rounded-md border-2 bg-transparent border-metal py-2 px-3 focus:text-white"
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
