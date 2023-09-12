import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CreateRoom from './pages/CreateRoom';
import GameHistory from './pages/GameHistory';
import VersusComputer from './pages/VersusComputer';
import VersusPlayer from './pages/VersusPlayer';
import PageNotFound from './pages/PageNotFound';
import ProtectedRoute from './Utils/ProtectedRoute';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path=""
        element={(
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        )}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/vs-com/"
        element={(
          <ProtectedRoute>
            <VersusComputer />
          </ProtectedRoute>
        )}
      />
      <Route
        path="/vs-play/:id"
        element={(
          <ProtectedRoute>
            <VersusPlayer />
          </ProtectedRoute>
        )}
      />
      <Route path="/dashboard">
        <Route
          path=""
          element={(
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          )}
        />
        <Route
          path="create-room"
          element={(
            <ProtectedRoute>
              <CreateRoom />
            </ProtectedRoute>
          )}
        />

        <Route
          path="game-history"
          element={(
            <ProtectedRoute>
              <GameHistory />
            </ProtectedRoute>
          )}
        />
      </Route>
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
