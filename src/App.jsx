import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./pages/LoginForm";
import CreateGame from "./pages/CreateGame";
import AllGames from "./pages/AllGames";
import CreatePlayer from "./pages/CreatePlayer";
import AllPlayerList from "./pages/AllPlayerList";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/game-manager" element={<CreateGame />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/allgames" element={<AllGames />} />
        <Route path="/create-player" element={<CreatePlayer />} />
        <Route path="/get-all-player" element={<AllPlayerList />} />
        {/* <Route path="/settings" element={<Settings />} /> */}
        {/* <Route path="/build/:bID" element={<Build />} />
        <Route path="/analytics/:aID" element={<Analytics />} /> */}
      </Routes>
    </RootLayout>
  );
};

export default App;
