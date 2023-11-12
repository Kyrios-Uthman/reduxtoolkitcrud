import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/UserSlice";

const UpdateModal = ({ editid, epopup, setePopup }) => {
  const { users } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [update, setUpdate] = useState();
  useEffect(() => {
    const singleuser = users.filter((item) => item.id === editid);
    setUpdate(singleuser[0]);
  },[]);

  function newData(e) {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateUser(update));
    setePopup(false);
  }
  return (
    <div>
      {/* Modal Trigger Button */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Open Modal
      </button>

      {/* Modal */}
      <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
        <div className="modal-content bg-white w-1/2 p-6 rounded-md">
          {/* Modal Header */}
          <div className="mb-4">
            <span className="text-2xl font-bold">Modal Title</span>
            <button
              onClick={() => setePopup(false)}
              className="float-right text-gray-700 hover:text-red-500"
            >
              &times;
            </button>
          </div>

          {/* Modal Body */}
          <p>Your modal content goes here.</p>
          <form action="" onSubmit={handleSubmit}>
            <div class="grid grid-cols-3 gap-4">
              <div>
                <label
                  for="input1"
                  class="block text-gray-700 font-semibold mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                  value={update && update.name}
                  onChange={newData}
                />
              </div>

              <div>
                <label
                  for="input2"
                  class="block text-gray-700 font-semibold mb-2"
                >
                  Email:
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  class="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                  value={update && update.email}
                  onChange={newData}
                />
              </div>

              <div>
                <label
                  for="input3"
                  class="block text-gray-700 font-semibold mb-2"
                >
                  Nickname:
                </label>
                <input
                  type="text"
                  id="nickname"
                  name="nickname"
                  class="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                  value={update && update.nickname}
                  onChange={newData}
                />
              </div>
              <div class="mb-3">
                <input
                  class="form-check-input"
                  name="gender"
                  value="Male"
                  type="radio"
                  checked={update && update.gender === "Male"}
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
                  checked={update && update.gender === "Female"}
                  onChange={newData}
                />
                <label class="form-check-label">Female</label>
              </div>
              <button
                type="submit"
                class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
