import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        title="Username"
        name="username"
        placeholder="rpsgames"
        type="text"
      />
      <InputForm
        title="Password"
        name="password"
        placeholder="******"
        type="password"
      />
      <Button title="Login" variant="bg-mandarin" />
    </form>
  );
};

export default FormLogin;
