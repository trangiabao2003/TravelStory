import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Plus } from "lucide-react";

export default function StoryContainer() {
  const [date, setDate] = useState(new Date());
  
  const createStory = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/story", {
        userid: "123",
        title: "My First Story",
        content: "This is my first story. I am so excited to share it with you!",
        tags: ["travel", "adventure"],                  
        });
    } catch (error) {
        console.error(error);
        }
    }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 relative">
      {/* Main Content */}
      <div className="text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-blue-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 3h18v18H3V3z"></path>
              <path d="M7 15l4-4 4 4"></path>
            </svg>
          </div>
        </div>
        {/* Text */}
        <p className="text-gray-700 max-w-md mx-auto px-4">
          Start creating your first Travel Story! Click the 'Add' button to jot
          down your thoughts, ideas, and memories. Let's get started!
        </p>
      </div>

      {/* Calendar */}
      <div className="absolute top-10 right-10 bg-white p-4 shadow-lg rounded-lg">
        <Calendar onChange={setDate} value={date} />
      </div>

      {/* Floating Add Button */}
      <button className="absolute bottom-12 right-20 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700" onClick={createStory}>
        <Plus size={24} />
      </button>
    </div>
  );
}
