import {Route, Routes} from "react-router-dom";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import {Navbar} from "./components/Layouts/Navbar";
import RockPaperScissors from "./pages/RockPaperScissors";
import CreateRoom from "./pages/CreateRoom";
import GameHistoryTable from "./components/Fragments/GameHistoryTable";
import Home from "./pages/Home";
import Testos from "./pages/Testos";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rockpaperscissors" element={<RockPaperScissors />} />
        <Route path="/create-room" element={<CreateRoom />} />
        <Route path="/game-history" element={<GameHistoryTable />} />
        <Route path="/testos" element={<Testos />} />
      </Route>
      <Route path="*" element={<div>HALAMAN 404</div>} />
    </Routes>
  );
};
export default App;
