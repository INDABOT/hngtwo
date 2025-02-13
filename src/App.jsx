import AttendeeDetails from "./Pages/AttendeeDetails";
import Home from "./Pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="attendee" element={<AttendeeDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
