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
        title="Email"
        name="email"
        placeholder="example@example.com"
        type="email"
      />
      <InputForm
        title="Password"
        name="password"
        placeholder="******"
        type="password"
      />
      <Button title="Register" variant="bg-mandarin" />
    </form>
  );
};

export default FormLogin;
