import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./pages/LoginForm";
import CreateGame from "./pages/CreateGame";
import AllGames from "./pages/AllGames";
import CreatePlayer from "./pages/CreatePlayer";
import AllPlayerList from "./pages/AllPlayerList";
import CreateContest from "./pages/CreateContest";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/game-manager" element={<CreateGame />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/all-games" element={<AllGames />} />
        <Route path="/create-player" element={<CreatePlayer />} />
        <Route path="/all-players" element={<AllPlayerList />} />
        <Route path="/create-contest" element={<CreateContest />} />
        {/* <Route path="/settings" element={<Settings />} /> */}
        {/* <Route path="/build/:bID" element={<Build />} />
        <Route path="/analytics/:aID" element={<Analytics />} /> */}
      </Routes>
    </RootLayout>
  );
};

export default App;
