import "./App.css";
import Login from "./component/login";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexAlign: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Login />
    </div>
  );
};
export default App;
