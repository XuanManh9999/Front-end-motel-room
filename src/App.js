import { Routes, Route } from "react-router-dom";
import { Login, Home } from "./containers/Public";
import { path } from "./ultils/constant";

function App() {
  return (
    <div className="h-screen w-screen bg-primary w-1100">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={path.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;