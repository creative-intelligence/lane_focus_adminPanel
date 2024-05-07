import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Drivers from "./pages/Drivers";
import Circles from "./pages/Circles";
import CircleDetail from "./pages/CircleDetail";
import Complains from "./pages/Complains";
import Content from "./pages/Content";
import DriverProfile from "./pages/DriverProfile";
import ComplainBox from "./pages/ComplainBox";
import Profile from "./pages/AdminProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/drivers/details/:id" element={<DriverProfile />} />
            <Route path="/circles" element={<Circles />} />
            <Route path="/circles/details/:id" element={<CircleDetail />} />
            <Route path="/complains" element={<Complains />} />
            <Route path="/complains/details/:id" element={<ComplainBox />} />
            <Route path="/content" element={<Content />} />
            <Route path="/profile" element={<Profile />} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
