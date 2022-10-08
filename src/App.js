import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import AddUsers from "./pages/addUsers/AddUsers";
import Login from "./pages/login/Login";
import SingleUser from "./pages/singleUser/SingleUser";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/" />;
    }
    return children;
  };

  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route
        index
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addUser"
          element={
            <ProtectedRoute>
              <AddUsers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/singleUser"
          element={
            <ProtectedRoute>
              <SingleUser />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
