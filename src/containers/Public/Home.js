import Header from "./Header";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import Search from "./Search";

function Home() {
  return (
    <div className="w-full flex flex-col items-center h-full border ">
      <Header />
      <Navigation />
      <Search />

      <div className="w-4/5 lg:w-3/5 flex flex-col items-start justify-start">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
