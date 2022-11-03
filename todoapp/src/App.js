import { Routes, Route } from "react-router-dom";
import "./App.css";
import FormAddNewTask from "./components/FormAddNewTask";
import Header from "./layouts/Header";
import MainContent from "./layouts/MainContent";
import Sidebar from "./layouts/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/add-newtask" element={<FormAddNewTask />} />
        </Routes>
      </div>
    </>
  );
}
export default App;