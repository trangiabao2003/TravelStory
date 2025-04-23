import React from 'react'
import { MdAdd, MdDeleteOutline, MdUpdate, MdClose } from "react-icons/md";

const AddEditTravelStory = ({ storyInfo, type, onClose, getAllTravelStories, }) => {
  const HandleAddOrUpdateClick = () => {}
  return (
    <div>
      <div className="flex items-center justify-between">
        <h5 className="text-xl font-medium text-slate-700">
          {type === "add" ? "Add Story" : "Upadte Story"}
        </h5>

        <div>
          <div className="flex items-center gap-3 bg-cyan-50/50 p-2 rounded-l-lg">
            {type === "add" ? 
            (<button className="btn-small" onClick={HandleAddOrUpdateClick}>
              <MdAdd className="text-lg" /> ADD STORY
            </button>) : ( <>

            <button className="btn-small" onClick={HandleAddOrUpdateClick}>
              <MdUpdate className="text-lg" /> UPDATE STORY
            </button>
            </>)}

            <button className="" onClick={onClose}>
              <MdClose className="text-xl text-slate-400" />
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex-1 flex flex-col gap-2 pt-4">
          <label className="input-label">TITLE</label>
          <input
            type="text"
            className="text-2xl text-slate-950 outline-none"
            placeholder="A Day at the Great Wall"
          />
          <div className="my-3">
            DateSelector
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEditTravelStory