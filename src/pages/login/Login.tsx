import React from "react";
import { Lock, Mail, User } from "lucide-react";

interface LoginProps {
  toggleForm: () => void;
}

const Login: React.FC<LoginProps> = ({ toggleForm }) => {
  return (
    <div className="p-8">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-gray-800">Sign In</h3>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="email"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="doctor@hospital.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="password"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="rounded text-blue-600" />
            <span className="ml-2 text-gray-600">Remember me</span>
          </label>
          <a href="#" className="text-blue-600 hover:text-blue-700">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <User className="h-5 w-5" />
          Sign In
        </button>
      </form>

      <p className="text-center mt-6 text-gray-600">
        Don't have an account?{" "}
        <button
          onClick={toggleForm}
          className="text-blue-600 hover:text-blue-700 font-semibold"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Login;
