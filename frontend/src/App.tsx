import "./styles/styles.scss";

import { Home, Login } from "./screens";
import { Route, Routes } from "react-router-dom";
import { UserContext, useUser } from "./context/user.context";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [user] = useUser();

  return (
    <>
      <UserContext.Provider value={user as any}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
