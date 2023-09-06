import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./pages/LoginForm";
import CreateBanner from "./pages/CreateBanner";
import AllUsers from "./pages/AllUsers";
import SingleUserDetail from "./pages/SingleUserDetail";
import GameComponent from "./layouts/Components/Game";
import PlayerComponent from "./layouts/Components/Player";
import EventComponent from "./layouts/Components/Event";
import CreateEvent from "./pages/CreateEvent";
import CreateVideos from "./pages/CreateVideos";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginForm />} />

        <Route path="/game-manager" element={<GameComponent />} />

        <Route path="/players-manager" element={<PlayerComponent />} />

        <Route path="/event-manager" element={<EventComponent />} />

        <Route path="/create-event" element={<CreateEvent />} />


        <Route path="/create-banner" element={<CreateBanner />} />
        {/* <Route path="all-banners" element={<AllBanner />} /> */}
        <Route path="all-users" element={<AllUsers />} />
        <Route path='user_details' element={<SingleUserDetail />} />

        <Route path='create-videos' element={<CreateVideos />} />

        {/* <Route path="/settings" element={<Settings />} /> */}
        {/* <Route path="/build/:bID" element={<Build />} />
        <Route path="/analytics/:aID" element={<Analytics />} /> */}
      </Routes>
    </RootLayout>
  );
};

export default App;
