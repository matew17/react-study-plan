import { NavLink, useNavigate } from "react-router-dom";

import styles from "./navbar.module.scss";

import { useAuth } from "../../store/user";

export const Navbar = () => {
  const isLoggedIn = useAuth((state) => state.isLoggedIn);
  const logout = useAuth((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <ul className={styles.navbar}>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? styles.isActive : "")}
          >
            Home page
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? styles.isActive : "")}
          >
            Dashboard
          </NavLink>
        </li>

        <li>
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? styles.isActive : "")}
            >
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </>
  );
};
