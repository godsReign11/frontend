import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./pages/LoginForm";
import CreateGame from "./pages/CreateGame";
import AllGames from "./pages/AllGames";
import CreatePlayer from "./pages/CreatePlayer";
import AllPlayerList from "./pages/AllPlayerList";
import CreateContest from "./pages/CreateContest";
import AllContest from "./pages/AllContest";
import CreateBanner from "./pages/CreateBanner";
import AllUsers from "./pages/AllUsers";
import SingleUserDetail from "./pages/SingleUserDetail";
import GameComponent from "./layouts/Components/Game";
import PlayerComponent from "./layouts/Components/Player";
import EventComponent from "./layouts/Components/Event";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginForm />} />

        <Route path="/game-manager" element={<GameComponent />} />

        {/* <Route path="/all-games" element={<AllGames />} /> */}
        <Route path="/players-manager" element={<PlayerComponent />} />
        {/* <Route path="/all-players" element={<AllPlayerList />} /> */}
        <Route path="/create-contest" element={<EventComponent />} />
        {/* <Route path="/all-contest" element={<AllContest />} /> */}
        <Route path="/create-banner" element={<CreateBanner />} />
        {/* <Route path="all-banners" element={<AllBanner />} /> */}
        <Route path="all-users" element={<AllUsers />} />
        <Route path='user_details' element={<SingleUserDetail />} />

        {/* <Route path="/settings" element={<Settings />} /> */}
        {/* <Route path="/build/:bID" element={<Build />} />
        <Route path="/analytics/:aID" element={<Analytics />} /> */}
      </Routes>
    </RootLayout>
  );
};

export default App;
