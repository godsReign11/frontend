import { useState } from "react";
import Sidebar from "./sidebar/Sidebar";

function RootLayout({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="flex gap-2">
      <div>{isLogin ? "" : <Sidebar />}</div>
      <main className="max-w-5xl flex-1 mx-auto p-2">{children}</main>
    </div>
  );
}

export default RootLayout;
