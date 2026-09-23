import { Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "./context/ToastContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Callback from "./pages/Callback";
// import PracticePage from "./pages/PracticePage";

// function ProtectedPractice() {
//   return (
//     <ProtectedRoute>
//       <PracticePage />
//     </ProtectedRoute>
//   );
// }

export default function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/callback" element={<Callback />} />
          {/* <Route path="/practice" element={} /> */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Navigate to="/practice" replace />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </ToastProvider>
  );
}
