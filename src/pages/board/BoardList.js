import React from "react";
import { Link } from "react-router-dom";

const BoardList = () => {
  return (
    <div className="flex flex-col mx-auto max-w-7xl p-6">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="w-0.5/6  px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    className="w-3/6 px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                  >
                    제목
                  </th>
                  <th
                    scope="col"
                    className="w-0.5/6 px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    글쓴이
                  </th>
                  <th
                    scope="col"
                    className="w-0.5/6 px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    작성시간
                  </th>
                  <th
                    scope="col"
                    className="w-0.5/6 px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    좋아요
                  </th>
                  <th
                    scope="col"
                    className="w-0.5/6 px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    조회수
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    1
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    제목입니다
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    홍길동
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    2022-01-01
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    5
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    5
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Link to="/BoardWrite">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded float-right mt-3">
              글쓰기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BoardList;
