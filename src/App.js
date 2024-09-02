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

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new-course" element={<NewCourse />} />
        <Route path="/course-details" element={<CourseDetail />} />
        <Route path="/settings" element={<EditProfile />} />
        <Route path="/courses" element={<AllCourses />} />
      </Route>
    </Routes>
  );
}

export default App;
