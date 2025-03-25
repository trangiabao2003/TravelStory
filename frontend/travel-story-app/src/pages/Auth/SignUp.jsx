import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const SignUp = () => {
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const signUp = async () => {
    try {
      if (!form.fullName || !form.email || !form.password) {
        alert("Please fill in all fields!");
        return;
      }

      const response = await axios.post("http://localhost:8000/create-account", form, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        alert("Sign up successful!");
      } else {
        alert("Sign up failed.");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("An error occurred while signing up.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up with", form);
    signUp();
  };

  return (
    <div className="flex items-center min-h-screen bg-gray-100">
      {/* Left Side - Image & Title */}
      <div className="w-3/4 h-screen hidden md:block relative opacity-90">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-6">
          <h1 className="text-5xl font-bold text-light-blue-400 mb-4">Travel Story</h1>
          <p className="text-lg text-center max-w-lg">
            Discover new places, create unforgettable memories, and share your journey with the world.
          </p>
        </div>
        <img
          src="https://th.bing.com/th?id=OIP.Ygbzcvmx92s4HOKkHgiK9AHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2"
          alt="Sign Up Visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-96 p-6 shadow-lg bg-white rounded-2xl"
        >
          <div className="p-4">
            <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">📧</span>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 pl-10 border rounded-lg"
                  required
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">👤</span>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={form.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 pl-10 border rounded-lg"
                  required
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔒</span>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 pl-10 border rounded-lg"
                  required
                />
              </div>

              <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg">
                Sign Up
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;
