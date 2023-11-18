import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import styles from "./RootLayout.module.css";

const RootLayout = () => {
  return (
    <Fragment>
      <MainHeader />
      <main className={styles.main}>
        {/* the outlet represents the place where any react element will be added */}
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default RootLayout;
