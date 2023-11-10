import React, { Children, useState } from "react";
import "./CustomModal.css";
import { useSelector } from "react-redux";
const CustomModal = ({ id, popup, setPopup }) => {
  const { users } = useSelector((state) => state.app);
  const singleuser = users.filter((item) => item.id === id);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h2 class="text-gray-900 text-lg title-font font-medium">
          View Details
        </h2>
        <p class="text-xl font-semibold text-blue-700 italic underline">
          Name
        </p>
        <h3 class="text-lg font-semibold text-gray-800 mb-1">{singleuser[0].name}</h3>
        <h3 className="text-xl font-semibold text-blue-700 italic underline">Email</h3>
        <h3 class="text-lg font-semibold text-gray-800 mb-1">{singleuser[0].email}</h3>
        <h3  className="text-xl font-semibold text-blue-700 italic underline">Nickname</h3>
        <h3 class="text-lg font-semibold text-gray-800 mb-1">{singleuser[0].nickname}</h3>
        <button
          class="text-gray-700 hover:text-red-500 focus:outline-none absolute top-10"
          style={{ right: "540px" }}
          onClick={() => setPopup(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CustomModal;
