import { Routes, Route } from "react-router-dom";
import {
  Login,
  Home,
  OfficePremises,
  RentalApartment,
  RentalHouse,
  RoomRent,
  HomePage,
} from "./containers/Public";
import { path } from "./ultils/constant";

function App() {
  return (
    <div className="h-screen w-screen bg-primary w-1100">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path="*" element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<RentalApartment />} />
          <Route path={path.NHA_CHO_THUE} element={<RentalApartment />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<RoomRent />} />
          <Route path={path.MAT_BANG_VAN_PHONG} element={<OfficePremises />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
