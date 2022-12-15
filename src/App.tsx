import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="h-screen bg-secondary p-3 flex flex-col gap-3 overflow-x-hidden">
      <Header />
      <div className="flex h-[85vh]">
        <div className="basis-1/5 h-100">
          <Sidebar />
        </div>
        <div className="basis-4/5">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default App;
