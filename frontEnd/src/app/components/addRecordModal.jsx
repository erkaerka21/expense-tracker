import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
const AddrecordModal = ({ setSeeModal }) => {
  const [darsanButton, setDarsanButton] = useState("INC");
  return (
    <div>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-50/10">
        <div className="relative w-auto my-6 mx-auto max-w-fit">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-100 rounded-t gap-10">
              <h3 className="text-3xl font-bold">Add Record</h3>
              <button
                className="bg-transparent border-0 text-black float-right"
                onClick={() => {
                  return setSeeModal(false);
                }}
              >
                <IoClose className="text-2xl text-black hover:text-gray-400 focus:outline-none focus:ring focus:ring-gray-300" />
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-auto flex flex-col gap-y-5">
                <div className="grid grid-cols-2 bg-white rounded-full mb-3 gap-10">
                  <button
                    className={`w-full text-center py-2 rounded-full transition-colors duration-300 ${
                      darsanButton === "EXP"
                        ? "bg-blue-500 text-white"
                        : "bg-transparent text-black"
                    }`}
                    onClick={() => setDarsanButton("EXP")}
                  >
                    Expense
                  </button>
                  <button
                    className={`w-full text-center py-2 rounded-full transition-colors duration-300 ${
                      darsanButton === "INC"
                        ? "bg-green-500 text-white"
                        : "bg-transparent text-black"
                    }`}
                    onClick={() => setDarsanButton("INC")}
                  >
                    Income
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div>
                      <label className="flex flex-col">
                        Amount
                        <input
                          type="text"
                          placeholder="000.00₮"
                          className="input input-bordered"
                        />
                      </label>
                      <div className="flex flex-col">
                        <label>Category</label>
                        <select className="select select-bordered">
                          <option disabled selected>
                            Choose
                          </option>
                          <option value="food">машин такси</option>
                          <option value="drink">хоол хүнс</option>
                          <option value="rent">бензин, шатахуун</option>
                          <option value="other">
                            Хятад улсад 9.1 ээс 9.19
                          </option>
                          <option value="other">бусад</option>
                        </select>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex flex-col">
                          <label>Date</label>
                          <input type="date" className="input input-bordered" />
                        </div>
                        <div className="flex flex-col">
                          <label>Time</label>
                          <input type="time" className="input input-bordered" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ModalsLeftSide darsanButton={darsanButton} />
                  </div>
                </div>
              </form>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className={`btn rounded-3xl ${
                  darsanButton === "EXP" ? "bg-blue-500" : "bg-green-500"
                } text-white w-full`}
                onClick={() => setSeeModal(false)}
              >
                Add Record
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export const ModalsRightSide = () => {
//   return (
//     <div>
//       <div>
//         <button
//           className={`px-11 py-2 rounded-full transition-colors duration-300 ${
//             darsanButton === "EXP"
//               ? "bg-blue-500 text-white"
//               : "bg-transparent text-black"
//           }`}
//           onClick={() => setDarsanButton("EXP")}
//         >
//           Expense
//         </button>
//         <button
//           className={`px-11 py-2 rounded-full transition-colors duration-300 ${
//             darsanButton === "INC"
//               ? "bg-green-500 text-white"
//               : "bg-transparent text-black"
//           }`}
//           onClick={() => setDarsanButton("INC")}
//         >
//           Income
//         </button>
//       </div>
//       <label className="flex flex-col">
//         Amount
//         <input
//           type="text"
//           placeholder="000.00₮"
//           className="input input-bordered"
//         />
//       </label>
//       <div className="flex flex-col">
//         <label>Category</label>
//         <select className="select select-bordered">
//           <option disabled selected>
//             Choose
//           </option>
//           <option value="food">Food</option>
//           <option value="drink">Drink</option>
//           <option value="rent">Rent</option>
//           <option value="other">Other</option>
//         </select>
//       </div>
//       <div className="flex gap-3">
//         <div className="flex flex-col">
//           <label>Date</label>
//           <input type="date" className="input input-bordered" />
//         </div>
//         <div className="flex flex-col">
//           <label>Time</label>
//           <input type="time" className="input input-bordered" />
//         </div>
//       </div>
//     </div>
//   );
// };
export const ModalsLeftSide = ({ darsanButton }) => {
  return (
    <div>
      <div className="flex flex-col">
        <label className="text-lg font-medium">
          {darsanButton === "EXP" ? "Зарлагын утга" : "Орлогын утга"}
        </label>
        <input
          type="text"
          placeholder="Утга"
          className="input input-bordered"
        />
      </div>
      <div className="flex flex-col">
        <label>Дэлгэрэнгүй</label>
        <textarea
          name="note"
          id="note"
          className=" textarea textarea-bordered"
          placeholder="Дэлгэрэнгүйг бичнэ үү"
        ></textarea>
      </div>
    </div>
  );
};
export default AddrecordModal;
