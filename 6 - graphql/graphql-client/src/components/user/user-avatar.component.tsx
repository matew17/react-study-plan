import {
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";

import { useApolloClient, useMutation } from "@apollo/client";

import { LOGIN } from "../../users/mutations.ts";
import styles from "./user-avatar.component.module.css";
import UserData from "../user-data/user-data.component.tsx";
import { useForm } from "../../core/custom-hooks/use-form.ts";

const UserAvatar = ({
  token,
  setToken,
}: {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [login, loginResult] = useMutation(LOGIN);
  const { cache } = useApolloClient();

  const { values, handleChange } = useForm({
    username: "",
    password: "",
  });

  const handleLogin = (e: SyntheticEvent) => {
    e.preventDefault();

    login({
      variables: {
        username: values.username,
        password: values.password,
      },
    });
  };

  const handleLogout = async () => {
    setShowModal(false);

    setToken("");

    localStorage.removeItem("graphql-user");

    cache.reset();
  };

  useEffect(() => {
    if (loginResult.data) {
      const { login } = loginResult.data;

      setToken(login.value);

      localStorage.setItem("graphql-user", login.value);

      setShowLoginModal(false);
    }

    if (loginResult.error) {
      console.log(loginResult.error);
    }
  }, [loginResult.data, loginResult.error, setToken]);

  return (
    <>
      {token ? (
        <>
          <button className={styles.avatar} onClick={() => setShowModal(true)}>
            &#128508;
          </button>

          <button onClick={handleLogout}>LogOut</button>
        </>
      ) : (
        <button onClick={() => setShowLoginModal(true)}>Log In</button>
      )}

      {showModal &&
        createPortal(
          <div className={styles.modal}>
            <section className={styles.modalHeader}>
              <h2>User info</h2>
              <button onClick={() => setShowModal(false)}>Close</button>
            </section>
            <section>
              <UserData />
            </section>
          </div>,
          document.body
        )}

      {showLoginModal &&
        createPortal(
          <div className={styles.modal}>
            <section className={styles.modalHeader}>
              <h2>Login</h2>
              <button onClick={() => setShowLoginModal(false)}>Close</button>
            </section>

            <form
              className={styles.loginForm}
              noValidate
              onSubmit={handleLogin}
            >
              <input
                type="text"
                placeholder="username"
                name="username"
                value={values.username}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />

              {loginResult.error && <p>{loginResult.error.message}</p>}
              <button type="submit">Login</button>
            </form>
          </div>,
          document.body
        )}
    </>
  );
};

export default UserAvatar;
