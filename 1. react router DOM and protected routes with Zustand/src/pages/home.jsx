import { useAuth } from "../store/user";

export const Home = () => {
  const { name, email } = useAuth((state) => state.user);

  return (
    <>
      <h1>Home page</h1>
      <p>
        Welcome: <b>{name}</b>
      </p>
      <p>{email}</p>
    </>
  );
};
