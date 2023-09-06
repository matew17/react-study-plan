import { RouterProvider } from "react-router-dom";

import { useAuth } from "./store/user";
import { router } from "./routes/main-router";

function App() {
  const isLoggedIn = useAuth((state) => state.isLoggedIn);

  return (
    <>
      <RouterProvider router={router(isLoggedIn)} />
    </>
  );
}

export default App;
