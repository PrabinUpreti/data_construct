import {
  EmployeeIcon,
  HomePageIcon,
  WelcomePageIcon,
  LogOutIcon,
} from "@/components/custom/common/icons";
import { removeAuthToken } from "@/redux/appSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800  flex flex-col justify-between">
          <div>
            <div className="font-black text-2xl text-blue-600 pb-5">
              Data Construct
            </div>
            <ul className="space-y-2 h-96 font-medium flex flex-col items-stretch">
              <li>
                <a
                  href="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <HomePageIcon />
                  <span className="ms-3">Home Page</span>
                </a>
              </li>
              <li>
                <a
                  href="crud"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <EmployeeIcon />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Employee
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="welcome"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <WelcomePageIcon />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Welcome Page
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="bottom-0">
                <button
                  onClick={() => {
                    dispatch(removeAuthToken());
                    navigate(`/login`);
                  }}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <LogOutIcon />
                  <span className="flex-1 ms-3 whitespace-nowrap">Log Out</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};
