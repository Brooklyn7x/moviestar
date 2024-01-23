import Sidebar from "@/components/SIdebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Sidebar />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
