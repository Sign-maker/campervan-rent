import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { routes } from "../../routes";
import css from "./Layout.module.css";
import { Loader } from "../Loader/Loader";

export const Layout = () => {
  return (
    <>
      <header className={`container ${css.header}`}>
        <nav className={css.navContainer}>
          <ul className={css.navList}>
            <li>
              <NavLink className={css.navLink} to={routes.HOME}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={css.navLink} to={routes.CATALOG}>
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink className={css.navLink} to={routes.FAVORITES}>
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};
