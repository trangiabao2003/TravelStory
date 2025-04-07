import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import axiosInstance from "../../utils/axiosInstance";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(null);

  // Get User Info
  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/get-user");
      if (response.data && response.data.user) {
        // Set user info if data exists
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if (error.response.status === 401)
        // Clear storage if unauthorized
        localStorage.clear();
      navigate("/login"); //redirect to login
    }
  };

  useEffect (() => {
    getUserInfo()

    return () => {}
  }, [])
  return (
    <>
      <Navbar userInfo={userInfo}/>
      <div className="container mx-auto py-10">
        <div className="flex gap-7">
          <div className="flex-1"></div>

          <div className="w-[320px]"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
