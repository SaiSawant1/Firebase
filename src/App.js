import { Container } from "react-bootstrap";
import Signup from "./components/Signup";
import AuthProvider from "./components/context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
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
              <Route exact path="/" element={<Dashboard/>} />
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
