const Button = props => {
  const {
    title = "button",
    variant = "bg-mandarin",
    type = "button",
    onClick = () => {},
  } = props;
  return (
    <button
      className={`${variant} min-w-max h-10 px-12 rounded-md text-black m-2`}
      type={type}
      onClick={() => onClick()}
    >
      {title}
    </button>
  );
};

export default Button;
