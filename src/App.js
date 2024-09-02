import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import AuthLayout from "./components/layout/AuthLayout";
import DashboardLayout from "./components/layout/DashboardLayout";
import Register from "./components/Register";
import NewCourse from "./components/NewCourse";
import CourseDetail from "./components/CourseDetails";
import EditProfile from "./components/EditProfile";
import AllCourses from "./components/AllCourses";
import CourseDetails from "./components/CourseDetails";
import PrivateRoute from "./components/middleware/PrivateRoute";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import RestrictedRoute from "./components/middleware/RestrictedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<AuthLayout />}>
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <Login />
            </RestrictedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute>
              <Register />
            </RestrictedRoute>
          }
        />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/new-course"
          element={
            <PrivateRoute>
              <NewCourse />
            </PrivateRoute>
          }
        />
        <Route
          path="/course-details"
          element={
            <PrivateRoute>
              <CourseDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/courses/:courseId"
          element={
            <PrivateRoute>
              <CourseDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/courses"
          element={
            <PrivateRoute>
              <AllCourses />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
