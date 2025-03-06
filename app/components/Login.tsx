"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const query = `
      mutation {
        login(email: "${formData.email}", password: "${formData.password}") {
          token
          user {
            id
            email
          }
        }
      }
    `;

    try {
      const response = await fetch("https://bomb-d3f6.onrender.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const result = await response.json();

      // Check for GraphQL errors first
      if (result.errors) {
        throw new Error(result.errors[0].message);
      }

      // Ensure data exists before accessing token
      if (!result.data || !result.data.login || !result.data.login.token) {
        throw new Error("Invalid response from server: No token received");
      }

      const token = result.data.login.token;
      if(typeof window !=="undefined"){
        localStorage.setItem("token", token as string);
        console.log("this is local storage", localStorage, Object.keys(localStorage), localStorage.getItem("token"))
      }
      console.log("Token saved:", token); // Debug log

      // Redirect to dashboard (use window.location for external URL)
      window.location.href = "https://dashboard-roan-two.vercel.app/";
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message || "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-red-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h1>
        {error && <div className="text-red-600 text-center mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <a href="/forgottenpassword">
            <div className="hover:underline ml-[13rem] mt-2">
              Forgotten Password?
            </div>
          </a>
          <button
            type="submit"
            className={`w-full border border-red-600 text-black hover:text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition duration-200 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <div className="flex items-center justify-center space-x-1">
            <div className="text-base">Dont have an account?</div>
            <a href="/signup">
              <div className="hover:underline">Sign up</div>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;