import { Route, Routes } from "react-router-dom";
import TaxiParks from "../pages/TaxiparkList";
import Applications from "../pages/ApplicationList";
import Main from "../pages/Main";
import AdminLayout from "./AdminLayout/AdminLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route
        path="/admin/*"
        element={
          <AdminLayout>
            <Routes>
              <Route path="parks" element={<TaxiParks />} />
              <Route path="applications" element={<Applications />} />
            </Routes>
          </AdminLayout>
        }
      />
    </Routes>
  );
};

export default AppRouter;
