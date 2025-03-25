import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate  } from "react-router-dom";
export default function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const login = async (form) => {	

	try {
    if (form.username && form.password) {
      const data = {
        email: form.username,
        password: form.password,
      }
      const response = await axios.post("http://localhost:8000/login", data,{ 
        headers: {
        'Content-Type': 'application/json',
      },}
      );
      if (response.status === 200) {
        console.log(response.data.accessToken);
        localStorage.setItem("token", response.data.accessToken);
        navigate("/dashboard",{ state: { userdata: response.data.user, } });
      }
      else{
        alert("Invalid username or password");
    }
  }
  } catch (error) {
    console.error(error);
  }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with", form);
    login(form);
  };


  return (
    <div className="flex items-center min-h-screen bg-gray-100">
      {/* Left Side - Image & Title */}
      <div className="w-3/4 h-screen hidden md:block relative opacity-90">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-6">
          <h1 className="text-5xl font-bold text-light-blue-400 mb-4">Travel Story</h1>
          <p className="text-lg text-center max-w-lg">Discover new places, create unforgettable memories, and share your journey with the world.</p>
        </div>
        <img 
          src="https://th.bing.com/th?id=OIP.Ygbzcvmx92s4HOKkHgiK9AHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" 
          alt="Login Visual" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-96 p-6 shadow-lg bg-white rounded-2xl"
        >
          <div className="p-4">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <form onSubmit={handleSubmit } className="space-y-4">
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔑</span>
                <input
                  type="text"
                  name="username"
                  placeholder="Email"
                  value={form.username}
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
              <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg">Login</button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
