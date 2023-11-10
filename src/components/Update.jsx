import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../redux/UserSlice";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updateData, setUpdateData] = useState();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.app);
  useEffect(() => {
    if (id) {
      const singleuser = users.filter((item) => item.id === id);
      setUpdateData(singleuser[0]);
    }
  }, []);
  function newData(e) {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  }
  console.log(updateData);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read");
  }

  return (
    <form
      class="max-w-md mx-auto p-6 bg-white rounded-md shadow-md"
      onSubmit={handleSubmit}
    >
      <div class="mb-4">
        <label for="username" class="block text-gray-700 font-semibold mb-2">
          Full name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          class="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          defaultValue={updateData && updateData.name}
          onChange={newData}
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
          class="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          defaultValue={updateData && updateData.email}
          onChange={newData}
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
          class="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          defaultValue={updateData && updateData.nickname}
          onChange={newData}
        />
      </div>
      <div class="mb-3">
        <input
          class="form-check-input"
          name="gender"
          value="Male"
          type="radio"
          defaultChecked={
            updateData && updateData.gender === "Male"
          }
          onChange={newData}
          required
        />
        <label class="form-check-label">Male</label>
      </div>
      <div class="mb-3">
        <input
          class="form-check-input"
          name="gender"
          value="Female"
          type="radio"
          defaultChecked={
            updateData && updateData.gender === "Female"
        
          }
          onChange={newData}
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

export default Update;
