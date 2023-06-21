import React from "react";
import Emblem from "../Assets/emblem.svg";

const GameHistoryTable = () => {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="w-1/5 h-full flex flex-col  bg-gray-900 items-center justify-evenly">
        <div className="w-60 h-40 flex flex-col justify-center items-center bg-mandarin rounded-xl">
          <img src={Emblem} className="w-24 h-24" />
          <span className="text-xl font-bold">Epic</span>
        </div>
        <div className="w-60 h-80 flex flex-col justify-center items-center">
          <div className="w-30 h-24 justify-center items-center flex flex-col">
            <div className="text-lg text-white font-bold">Rank</div>
            <div className="text-xl font-bold text-mandarin">#5</div>
          </div>
          <div className="w-30 h-24 justify-center items-center flex flex-col">
            <div className="text-lg text-white font-bold">Win/Lose/Draw</div>
            <div className="text-xl font-bold text-mandarin">32/6/1</div>
          </div>
          <div className="w-30 h-24 justify-center items-center flex flex-col">
            <div className="text-lg text-white font-bold">Total Played</div>
            <div className="text-xl font-bold text-mandarin">1250</div>
          </div>
        </div>
      </div>

      <div className=" w-4/5 h-full p-10 flex flex-col bg-metal  items-center">
        {/* Title */}
        <div className="rounded-t-xl sm:px-6 w-full bg-gray-900">
          <div className="px-4 md:px-10 py-4 md:py-7">
            <div className="flex items-center justify-between">
              <p
                tabIndex="0"
                className="focus:outline-none text-lg md:text-xl lg:text-2xl font-bold leading-normal text-mandarin"
              >
                Game History
              </p>
              <div className="py-3 px-4 flex items-center text-sm font-medium leading-none bg-gray-900 text-white cursor-pointer rounded">
                <p>Sort By:</p>
                <select
                  aria-label="select"
                  className="focus:text-white focus:outline-none bg-transparent ml-1"
                >
                  <option className="text-sm text-gray-800">All Time</option>
                  <option className="text-sm text-gray-800">Week</option>
                  <option className="text-sm text-gray-800">Month</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* Table */}
        <div class="p-5 w-full h-full bg-gray-100 rounded-b-xl">
          <div class="overflow-auto rounded-lg shadow hidden md:block">
            <table class="w-full">
              <thead class="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th class="w-20 p-3 text-sm font-semibold tracking-wide text-center">
                    ID Room
                  </th>
                  <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">
                    Versus
                  </th>
                  <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">
                    Result
                  </th>
                  <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">
                    Status
                  </th>
                  <th class="w-32 p-3 text-sm font-semibold tracking-wide text-center">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr class="bg-white">
                  <td class="p-3 text-sm text-center text-gray-700 whitespace-nowrap">
                    <a href="#" class="font-bold text-blue-500 hover:underline">
                      #174
                    </a>
                  </td>
                  <td class="p-3 text-sm text-center text-gray-700 whitespace-nowrap">
                    Udin Fitness
                  </td>
                  <td class="p-3 text-sm text-center text-gray-700 whitespace-nowrap">
                    <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                      WIN
                    </span>
                  </td>
                  <td class="p-3 text-sm text-center text-gray-700 whitespace-nowrap">
                    Completed
                  </td>
                  <td class="p-3 text-sm text-center text-gray-700 whitespace-nowrap">
                    16/10/2021
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            <div class="bg-white space-y-3 p-4 rounded-lg shadow">
              <div class="flex items-center space-x-2 text-sm">
                <div>
                  <a href="#" class="text-blue-500 font-bold hover:underline">
                    #174
                  </a>
                </div>
                <div class="text-gray-500">10/10/2021</div>
                <div>
                  <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-green-200 rounded-lg bg-opacity-50">
                    WIN
                  </span>
                </div>
              </div>
              <div class="text-sm text-gray-700">Udin Fitness</div>
              <div class="text-sm font-medium text-black">Completed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHistoryTable;
