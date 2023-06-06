import React from "react";

const GameHistoryTable = () => {
  return (
    <div>
      <div className="sm:px-6 w-full">
        <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="flex items-center justify-between">
            <p
              tabIndex="0"
              className="focus:outline-none text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
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
      <div class="p-5 h-screen bg-gray-100">
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
  );
};

export default GameHistoryTable;
