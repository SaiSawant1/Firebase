import { Container } from "react-bootstrap";
import Signup from "./components/Signup";
import AuthProvider from "./components/context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import { UpdateProfile } from "./components/UpdateProfile";
function App() {
  return (
    <BrowserRouter>
      <Container
        style={{ minHeight: "100vh" }}
        className="d-flex align-items-center justify-content-center"
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route path="/update" element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
            </Routes>
          </AuthProvider>
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;
