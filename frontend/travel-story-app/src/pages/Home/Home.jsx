import React, { useState, useEffect } from "react";
import { FiSearch, FiPlus } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const [userdata, setUser] = useState(location.state?.userdata || {});
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStory, setNewStory] = useState({
    title: "",
    story: "",
    visitedLocation: "",
    imageUrl: "",
    visitedDate: "",
  });
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    getAllStories();
  }, []);

  const getAllStories = async () => {
	try {
	  const token = localStorage.getItem("token");
  
	  if (!token) {
		console.error("Token không tồn tại!");
		return;
	  }
  
	  const response = await axios.get("http://localhost:8000/get-all-stories", {
		headers: { Authorization: `Bearer ${token}` },
		params: { userId: userdata.id }, // Truyền userId vào query
	  });
  
	  if (response.status === 200 && Array.isArray(response.data.stories)) {
		console.log("Fetched stories:",response.data.stories);
		setPosts(response.data.stories);
	  } else {
		console.error("Error fetching stories:", response.data.stories);
		setPosts([]);
	  }
	} catch (error) {
	  console.error("Error fetching stories:", error.response?.data || error);
	  setPosts([]); // Set lại mảng rỗng khi có lỗi
	}
  };
  

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-500">Travel Story</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Notes"
            className="pl-10 pr-4 py-2 border rounded-full focus:outline-none"
          />
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="font-semibold">{userdata.fullName}</p>
            <a onClick={()=>{
              localStorage.removeItem("token");
			  window.location.href="/login";

			}} href="#" className="text-sm text-gray-500 hover:underline">
              Logout
            </a>
          </div>
          <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full text-xl font-bold">
            W
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="p-6">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No travel stories available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden relative">
                <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:text-red-500">
                  <FaHeart className="text-gray-400" />
                </button>
                <div className="p-4">
                  <h2 className="text-lg font-bold">{post.title}</h2>
                  <p className="text-sm text-gray-500">{post.visitedDate}</p>
                  <p className="text-sm mt-2">{post.story}</p>
                  <p className="text-sm mt-2 text-blue-500 flex items-center">📍 {post.visitedLocation}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Floating Add Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
      >
        <FiPlus size={24} />
      </button>
    </div>
  );
};

export default Home;
