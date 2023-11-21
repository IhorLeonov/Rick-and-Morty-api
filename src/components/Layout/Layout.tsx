import { Outlet, useLocation } from "react-router-dom";
import { FC, Suspense, useEffect } from "react";
import { FooterSection } from "../Footer/Footer";
import { HeaderSection } from "../Header/Header";
import { HeroSection } from "../Hero/Hero";
import { Wrapper, MainSection } from "./Layout.styled";
import TemporaryDrawer from "../Drawer/Drawer";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectError, selectIsLoading } from "../../redux/selectors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resetError } from "../../redux/mainSlice";
import { FAB } from "../Fab/Fab";
import { Spinner } from "../Spinner/Spinner";
import { useSelector } from "react-redux";

export const Layout: FC = () => {
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isLoading = useSelector(selectIsLoading);

  const charFabStyles = () => {
    if (location.pathname.includes("char")) {
      return { bottom: 202 };
    }
  };

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
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
          <FAB styles={charFabStyles()} disabled={location.pathname.includes("char")} />
        </MainSection>
      </main>
      <FooterSection />
      <TemporaryDrawer />
      <ToastContainer />
      {isLoading && <Spinner />}
    </Wrapper>
  );
};
