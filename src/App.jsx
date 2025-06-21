import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsDetail from "./page/NewsDetail";
import MyHome from "./page/Home";
import News from "./page/News";
import MyCatur from "./CategoryPage/Catur";
import MyBridge from "./CategoryPage/Bridge";
import MyEsport from "./CategoryPage/Esport";
import MyAbout from "./page/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyHome />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/Catur" element={<MyCatur />} />
        <Route path="/Bridge" element={<MyBridge/>} />
        <Route path="/Esport" element={<MyEsport />} />
        <Route path="/About" element={<MyAbout />} />
      </Routes>
    </Router>
  );
}

export default App;
