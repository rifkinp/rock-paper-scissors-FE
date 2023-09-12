const Button = props => {
  const {
    title = "button",
    variant = "bg-mandarin",
    size = "w-44",
    type = "button",
    onClick = () => {},
  } = props;
  return (
    <button
      className={`${variant} ${size} h-10 px-6 rounded-md text-black m-2`}
      type={type}
      onClick={() => onClick()}
    >
      {title}
    </button>
  );
};

export default Button;
