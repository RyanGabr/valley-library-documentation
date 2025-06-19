import { Outlet } from "react-router-dom";
import "./styles/global.css";

export function Layout() {
  return (
    <>
      <div>Layout</div>
      <main>
        <Outlet />
      </main>
    </>
  );
}
