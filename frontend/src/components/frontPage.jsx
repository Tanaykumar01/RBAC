import React from "react";
import { Link } from "react-router-dom";

export function FrontPage() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-6">Role-Based Access Control (RBAC)</h1>
      <div className="flex flex-col space-y-4 justify-center items-center">
        <div className="flex space-x-4">
          <Link
            to="/login"
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-400 transition duration-200"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-6 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-400 transition duration-200"
          >
            Register
          </Link>
        </div>
        <h2 className="text-2xl font-semibold mt-8 flex justify-center items-center">Authorized Routes</h2>
        <div className="flex flex-col space-y-3 mt-4 justify-center items-center">
          <Link
            to="/user"
            className="px-6 py-2 bg-purple-600 text-white font-medium rounded hover:bg-purple-400 transition duration-200"
          >
            User Route (Access: Admin, Manager, User)
          </Link>
          <Link
            to="/manager"
            className="px-6 py-2 bg-yellow-600 text-black font-medium rounded hover:bg-yellow-400 transition duration-200"
          >
            Manager Route (Access: Admin, Manager)
          </Link>
          <Link
            to="/admin"
            className="px-6 py-2 bg-red-600 text-white font-medium rounded hover:bg-red-400 transition duration-200"
          >
            Admin Route (Access: Admin Only)
          </Link>
        </div>
      </div>
    </div>
  );
}