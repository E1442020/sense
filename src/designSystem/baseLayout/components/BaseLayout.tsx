import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { Header } from "./Header";
import Affixx from "./Affix";
import { FooterLinks } from "./FooterLinks";

export default function BaseLayout() {
  return (
    <div className="page-wrapper">
      <Header />
      <ScrollToTop />
      <div className="main-content">
        <Outlet />
      </div>
      <Affixx />
      <FooterLinks />
      {/* Drawer content */}
    </div>
  );
}
