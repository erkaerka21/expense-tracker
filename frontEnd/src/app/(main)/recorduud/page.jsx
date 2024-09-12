"use client";
import AddrecordModal from "@/app/components/addRecordModal";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
const Recorduud = () => {
  const [seeModal, setSeeModal] = useState(false);
  return (
    <div className="flex flex-row">
      <div>
        <div class="flex flex-col rounded-lg bg-gray-200 shadow-sm max-w-96 p-8 my-6 border border-slate-600">
          <div class="pb-8 m-0 mb-8 text-center text-black border-b border-slate-600">
            <p class="text-2xl uppercase font-bold text-black">Records</p>
            <button
              className="btn bg-blue-600 text-white font-medium flex flex-row rounded-3xl"
              onClick={() => setSeeModal(true)}
            >
              <FaPlus />
              Record
            </button>
            <label class="relative hidden md:flex">
              <input
                className=" placeholder:text-gray-600 block bg-gray-100 w-full border border-gray-100 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search"
                type="text"
                name="search"
              />

              <IoSearch className="h-5 w-5 absolute right-2 bottom-2 text-gray-400"></IoSearch>
            </label>
          </div>
          <div class="p-0">
            <ul class="flex flex-col gap-4">
              <li class="flex items-center gap-4">
                <span class="p-1 border rounded-full border-slate-500 bg-slate-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-4 h-4 text-slate-300"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                </span>
                <p class="text-slate-300">5 team members</p>
              </li>
              <li class="flex items-center gap-4">
                <span class="p-1 border rounded-full border-slate-500 bg-slate-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-4 h-4 text-slate-300"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                </span>
                <p class="text-slate-300">200+ components</p>
              </li>
              <li class="flex items-center gap-4">
                <span class="p-1 border rounded-full border-slate-500 bg-slate-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-4 h-4 text-slate-300"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                </span>
                <p class="text-slate-300">40+ built-in pages</p>
              </li>
              <li class="flex items-center gap-4">
                <span class="p-1 border rounded-full border-slate-500 bg-slate-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-4 h-4 text-slate-300"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                </span>
                <p class="text-slate-300">1 year free updates</p>
              </li>
              <li class="flex items-center gap-4">
                <span class="p-1 border rounded-full border-slate-500 bg-slate-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-4 h-4 text-slate-300"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                </span>
                <p class="text-slate-300">Lifetime technical support</p>
              </li>
            </ul>
          </div>
          <div class="p-0 mt-12"></div>
        </div>
      </div>
      <div></div>
      {seeModal ? <AddrecordModal setSeeModal={setSeeModal} /> : null}
    </div>
  );
};

export default Recorduud;
