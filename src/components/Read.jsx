import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, readUser } from "../redux/UserSlice";
import Modal from "./CustomModal";

const Read = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [popup, setPopup] = useState(false);
  const [radioData, setRadioData] = useState("");
  const { users, searchUser } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(readUser());
  }, []);
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            All Data
          </h1>
          {popup ? <Modal id={id} popup={popup} setPopup={setPopup} /> : false}
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Banh mi cornhole echo park skateboard authentic crucifix neutra
            tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
            twee
          </p>
        </div>
        <div class="lg:w-2/3 w-full mx-auto overflow-auto">
          <input
            type="radio"
            className="form-check-input"
            name="gender"
            checked={radioData===""}
            onChange={(e)=>setRadioData("")}
          />
          <label className="form-check-label  ml-2">All</label>
          <input
            type="radio"
            class="form-check-input ml-2"
            name="gender"
            value="Male"
            onChange={(e) => setRadioData(e.target.value)}
          />
          <label className="form-check-label ml-2">Male</label>
          <input
            type="radio"
            class="form-check-input ml-2"
            name="gender"
            value="Female"
            onChange={(e) => setRadioData(e.target.value)}
          />
          <label htmlFor="" className="ml-2">
            Female
          </label>
          <table class="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Name
                </th>
                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  
                  Email
                </th>
                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Nickname
                </th>
                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Gender
                </th>
                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  View
                </th>
                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Edit
                </th>

                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users
                  .filter((elm) => {
                    if (searchUser && searchUser === 0) {
                      return elm;
                    } else {
                      return elm.name
                        .toLowerCase()
                        .includes(searchUser && searchUser.toLowerCase());
                    }
                  })
                  .filter((elm) => {
                    if (radioData === "Male") {
                      return elm.gender === radioData;
                    } else if (radioData === "Female") {
                      return elm.gender === radioData;
                    } else {
                      return elm;
                    }
                  })
                  .map((item) => (
                    <tr>
                      <td class="px-4 py-3">{item.name}</td>
                      <td class="px-4 py-3">{item.email}</td>
                      <td class="px-4 py-3">{item.nickname}</td>
                      <td class="px-4 py-3 text-lg text-gray-900">
                        {item.gender}
                      </td>
                      <td class="border-t-2 border-gray-200 w-10 text-center">
                        <Link
                          onClick={() => {
                            setId(item.id), setPopup(true);
                          }}
                        >
                          View
                        </Link>
                      </td>
                      <td class="border-t-2 border-gray-200 w-10 text-center">
                        <Link to={`/edit/${item.id}`}>Edit</Link>
                      </td>
                      <td class="border-t-2 border-gray-200 w-10 text-center">
                        <Link onClick={() => dispatch(deleteUser(item.id))}>
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Read;
