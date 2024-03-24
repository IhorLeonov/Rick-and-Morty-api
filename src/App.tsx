import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";

const Home = lazy(() => import("./pages/Home/Home"));
const CharacterDetails = lazy(() => import("./pages/CharacterDetails/CharacterDetails"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/char/:id" element={<CharacterDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
