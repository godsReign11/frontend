import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import GameManager from "./pages/GameManager";
import PlayerManager from "./pages/PlayerManager";
import LoginForm from "./pages/LoginForm";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/player-manager" element={<PlayerManager />} />
        <Route path="/game-manager" element={<GameManager />} />
        <Route path="/login" element={<LoginForm />} />
        {/* <Route path="/settings" element={<Settings />} /> */}
        {/* <Route path="/build/:bID" element={<Build />} />
        <Route path="/analytics/:aID" element={<Analytics />} /> */}
      </Routes>
    </RootLayout>
  );
};

export default App;
