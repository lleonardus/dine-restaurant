import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export function AppLayout() {
  return (
    <div className="flex h-screen w-screen justify-center font-spartan">
      <div className="h-full w-full max-w-[1920px]">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
