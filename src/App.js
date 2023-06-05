import {Route, Routes} from "react-router-dom";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import {Navbar} from "./components/Layouts/Navbar";
import RockPaperScissors from "./pages/RockPaperScissors";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rockpaperscissors" element={<RockPaperScissors />} />
      </Route>
      <Route path="*" element={<div>HALAMAN 404</div>} />
    </Routes>
  );
};
export default App;
