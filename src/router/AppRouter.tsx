import { Navigate, Route, Routes } from "react-router-dom";
import { CategoryPage, PeajePage, TurnsPage } from "../peaje/";
import { ReportPage } from "../peaje/page/ReportPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PeajePage />} />
      <Route path="/turns" element={<TurnsPage />} />
      <Route path="/categories" element={<CategoryPage />} />
      <Route path="/report" element={<ReportPage />} />


      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
