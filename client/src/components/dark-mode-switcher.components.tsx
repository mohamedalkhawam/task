import { toggleDarkMode } from "redux/actions/app";
import { useDispatch, useSelector } from "react-redux";
export default function DarkModeSwitch({}) {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector(
    (state: { appReducer: any }) => state.appReducer
  );
  return (
    // eslint-disable-next-line jsx-a11y/aria-proptypes
    <div role="switch" aria-checked={"true"} className="w-auto">
      <div
        className={`w-16 bg-gray-300 h-7 rounded-2xl relative text-xs flex items-center px-2 text-gray-600 ${
          isDarkMode ? "justify-start" : "justify-end"
        }  `}
      >
        {isDarkMode && (
          <button
            aria-label="Light mode"
            onClick={() => dispatch(toggleDarkMode())}
          >
            Light
          </button>
        )}
        <span
          className={`w-7 h-7 dark:bg-neutral-700 bg-neutral-500 rounded-full left-0 transform absolute text-xs ${
            isDarkMode ? "translate-x-10 " : ""
          }transition-all duration-300 `}
        ></span>
        {!isDarkMode && (
          <button
            aria-label="Dark mode"
            onClick={() => dispatch(toggleDarkMode())}
          >
            Dark
          </button>
        )}
      </div>
    </div>
  );
}
