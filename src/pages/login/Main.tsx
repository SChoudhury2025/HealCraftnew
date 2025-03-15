import React, { useState } from "react";
import Login from "./Login"
import SignUp from "./SignUp";

function Main() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
        {isLogin ? <Login toggleForm={() => setIsLogin(false)} /> : <SignUp toggleForm={() => setIsLogin(true)} />}
      </div>
    </div>
  );
}

export default Main;
