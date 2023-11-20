import { Outlet } from "react-router-dom";
import { FC, Suspense, useEffect } from "react";
import { FooterSection } from "../Footer/Footer";
import { HeaderSection } from "../Header/Header";
import { HeroSection } from "../Hero/Hero";
import { Wrapper, MainSection } from "./Layout.styled";
import TemporaryDrawer from "../Drawer/Drawer";
import Loader from "../Loader/Loader";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectError } from "../../redux/selectors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resetError } from "../../redux/mainSlice";

export const Layout: FC = () => {
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    return () => {
      () => dispatch(resetError());
    };
  }, [error]);

  return (
    <Wrapper>
      <HeaderSection />
      <main>
        <HeroSection />
        <MainSection>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </MainSection>
      </main>
      <FooterSection />
      <TemporaryDrawer />
      <ToastContainer />
    </Wrapper>
  );
};
