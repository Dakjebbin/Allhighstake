"use client";

import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  interface RequestPasswordResetResponse {
    data: {
      requestPasswordReset: {
        message: string;
      };
    };
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://bomb-d3f6.onrender.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            mutation {
              requestPasswordReset(email: "${email}") {
                message
              }
            }
          `,
        }),
      });

      const result: RequestPasswordResetResponse = await response.json();
      if (result.data?.requestPasswordReset?.message) {
        setMessage(result.data.requestPasswordReset.message);
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch {
      setMessage("Error: Unable to send reset request.");
    }

    setIsLoading(false);
    setEmail("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-600 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md border border-gray-200">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold">Reset Password</h1>
          <p className="text-sm text-gray-500">
            Enter your email address and we will send you instructions to reset
            your password.
          </p>
        </div>

        {message && (
          <div className="text-center text-green-600 mb-4">{message}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className="w-full border border-red-600 text-black py-3 rounded-lg font-semibold hover:text-white hover:bg-red-700 transition duration-200"
            disabled={isLoading || !email}
          >
            {isLoading ? "Sending..." : "Send Reset Link"}
          </button>

          <div className="text-center mt-4">
            <a
              href="/login"
              className="text-sm text-gray-600 font-medium hover:text-gray-900 transition-colors duration-200"
            >
              Back to Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
