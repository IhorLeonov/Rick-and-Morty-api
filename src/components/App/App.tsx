import { Routes, Route } from "react-router-dom";
import { FC, lazy } from "react";
import { Layout } from "../Layout/Layout";
import { NotFound } from "../NotFounf/NotFounf";

const Home = lazy(() => import("../../pages/Home/Home"));
const CharacterDetails = lazy(() => import("../../pages/CharacterDetails/CharacterDetails"));

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<CharacterDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
