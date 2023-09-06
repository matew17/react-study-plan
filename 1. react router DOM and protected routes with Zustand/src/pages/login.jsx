/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/user";

export const Login = () => {
  const login = useAuth((state) => state.login);
  const isLoggedIn = useAuth((state) => state.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  const handleLogin = () => {
    login();
  };

  return (
    <>
      <h1>Login page</h1>

      <button onClick={handleLogin}>Login</button>
    </>
  );
};
