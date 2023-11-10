import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/UserSlice";
import { useNavigate } from "react-router-dom";
const Create = () => {
    const [usersData,setUsersData ] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getUserData = (e) => {
        setUsersData({...usersData,[e.target.name]:e.target.value})
    }
  function handleSubmit(e){
    e.preventDefault();
    dispatch(createUser(usersData))
    navigate("/read")
  }
  return (
    <form class="max-w-md mx-auto p-6 bg-white rounded-md shadow-md" onSubmit={handleSubmit}>
      <div class="mb-4">
        <label for="username" class="block text-gray-700 font-semibold mb-2">
          Full name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          class="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500" onChange={getUserData}
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-semibold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          class="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500" onChange={getUserData}
        />
      </div>
      <div class="mb-4">
        <label for="nickname" class="block text-gray-700 font-semibold mb-2">
          Nickname:
        </label>
        <input
          type="nickname"
          id="nickname"
          name="nickname"
          class="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500" onChange={getUserData}
        />
      </div>
      <div class="mb-3">
        <input
          class="form-check-input"
          name="gender"
          value="Male"
          type="radio" onChange={getUserData}
          required
        />
        <label class="form-check-label">Male</label>
      </div>
      <div class="mb-3">
        <input
          class="form-check-input"
          name="gender"
          value="Female"
          type="radio" onChange={getUserData}
        />
        <label class="form-check-label">Female</label>
      </div>
      <button
        type="submit"
        class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        Submit
      </button>
    </form>
  );
};

export default Create;
