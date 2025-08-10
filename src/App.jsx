import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoteFound from "./pages/NoteFound";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoteFound />} />
      </Routes>
      <Toaster position="top-center" />
    </BrowserRouter>
  );
};

export default App;
