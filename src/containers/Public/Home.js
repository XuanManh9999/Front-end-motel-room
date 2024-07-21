import Header from "./Header";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import Search from "./Search";

function Home() {
  return (
    <div className="w-full flex flex-col items-center h-full bg-primary ">
      <Header />
      <Navigation />
      <Search />
      <div className="w-4/5 lg:w-4/5 flex flex-col items-start justify-start bg-primary">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
