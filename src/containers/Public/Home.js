import Header from "./Header";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="w-full flex flex-col items-center h-full border border-red-500">
      <Header />
      <Navigation />
      <div className="w-1100 flex flex-col items-center justify-start">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;