import { Outlet, useLocation } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { FooterSection } from "../Sections/Footer/Footer";
import { HeaderSection } from "../Sections/Header/Header";
import { HeroSection } from "../Sections/Hero/Hero";
import { Wrapper, MainSection } from "./Layout.styled";
import TemporaryDrawer from "../Drawer/Drawer";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectError, selectIsLoading, selectListView } from "../../redux/selectors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resetError } from "../../redux/mainSlice";
import { FAB } from "../Fab/Fab";
import { Loader } from "../Loader/Loader";
import { useSelector } from "react-redux";

export const Layout = () => {
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isLoading = useSelector(selectIsLoading);
  const listView = useSelector(selectListView);

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
      dispatch(resetError());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <FAB
            styles={charFabStyles()}
            disabled={location.pathname.includes("char")}
            listViewing={listView}
          />
        </MainSection>
      </main>
      <FooterSection />
      <TemporaryDrawer />
      <ToastContainer />
      {isLoading && <Loader />}
    </Wrapper>
  );
};
