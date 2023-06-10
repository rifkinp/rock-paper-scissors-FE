import Input from "./Input";
import Label from "./Label";

const InputForm = props => {
  const {title, name, placeholder, type, disabled} = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{title}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export default InputForm;
