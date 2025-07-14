import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SwipeView from "./pages/SwipeView";
import CreateAccount from "./pages/CreateAccount";
import Unauthorized from "./pages/Unauthorized";
import ProtectedRoutes from "./components/ProtectedRoutes";
import JobPosts from "./pages/JobPosts";
import AdminDashboard from "./pages/AdminDashboard";
import PublicRoutes from "./components/PublicRoutes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/createAccount"
        element={
          <PublicRoutes>
            <CreateAccount />
          </PublicRoutes>
        }
      />

      <Route path="/unauthorized" element={<Unauthorized />} />

      <Route
        path="/swipeView"
        element={
          <ProtectedRoutes allowedRoles={["jobSeeker"]}>
            <SwipeView />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/job-posts"
        element={
          <ProtectedRoutes allowedRoles={["recruiter"]}>
            <JobPosts />
          </ProtectedRoutes>
        }
      />
      <Route
        path="admin-dashboard"
        element={
          <ProtectedRoutes allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
};

export default App;
