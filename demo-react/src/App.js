import "./App.css";
import Header from "./layout/Header";
import MainContent from "./layout/MainContent";
import Sidebar from "./layout/Sidebar";

import "./App.css";
function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
