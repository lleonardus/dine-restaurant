import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export function AppLayout() {
  return (
    <div className="flex h-screen w-screen justify-center font-spartan">
      <div className="grid h-full w-full max-w-[1920px] grid-rows-3">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
