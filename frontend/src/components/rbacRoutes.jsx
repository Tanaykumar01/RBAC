import React, { useEffect, useState } from "react";

// Helper function to fetch data
const fetchData = async (url, setData) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await response.json();
    setData(data);
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    setData({ error: "Unable to fetch data. Please try again later." });
  }
};

// User Route Component
function UserRoute() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData("http://localhost:8000/api/v1/roles/user", setData);
  }, []);

  return (
    <div className="text-white text-center mt-8">
      <h1 className="text-2xl font-bold text-black">User Route</h1>
      <pre className="mt-4 bg-gray-800 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

// Manager Route Component
function ManagerRoute() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData("http://localhost:8000/api/v1/roles/manager", setData);
  }, []);

  return (
    <div className="text-white text-center mt-8">
      <h1 className="text-2xl font-bold text-black">Manager Route</h1>
      <pre className="mt-4 bg-gray-800 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

// Admin Route Component
function AdminRoute() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData("http://localhost:8000/api/v1/roles/admin", setData);
  }, []);

  return (
    <div className="text-white text-center mt-8">
      <h1 className="text-2xl font-bold text-black">Admin Route</h1>
      <pre className="mt-4 bg-gray-800 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export { UserRoute, ManagerRoute, AdminRoute };