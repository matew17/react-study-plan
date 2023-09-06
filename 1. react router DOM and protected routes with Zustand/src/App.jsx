import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Dashboard } from "./pages/dashboard";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Navbar } from "./components/navbar";
import { ProtectedRoute } from "./routes/protected";
import { useAuth } from "./store/user";

function App() {
  const isLoggedIn = useAuth((state) => state.isLoggedIn);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Navigate replace to="home" />}></Route>

          <Route element={<ProtectedRoute isAllowed={!!isLoggedIn} />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Route>

          {/* Note: this is the other way of using the protected route component. */}
          {/* <Route
            path="/home"
            element={
              <ProtectedRoute isAllowed={!!user}>
                <Home />
              </ProtectedRoute>
            }
          ></Route> */}

          <Route path="/login" element={<Login />}></Route>

          <Route path="/*" element={<h1>404, Page not found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
