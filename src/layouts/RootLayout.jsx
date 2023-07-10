import { useState } from "react";
import Sidebar from "./sidebar/Sidebar";

function RootLayout({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div class="flex gap-5">
      {isLogin ? "" : <Sidebar />}
      <main className="max-w-5xl flex-1 mx-auto py-4">{children}</main>
    </div>
  );
}

export default RootLayout;
