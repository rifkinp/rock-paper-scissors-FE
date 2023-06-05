import Input from "./Input";
import Label from "./Label";

const InputForm = props => {
  const {title, name, placeholder, type} = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{title}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
