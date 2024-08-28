import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg md:max-w-4xl px-4 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
