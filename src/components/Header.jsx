import React from "react";
import style from "./styles/Header.module.css";
function Header({ currentMonth, setCurrentMonth }) {
  function handleLastMonth() {
    setCurrentMonth((prev) => new Date(prev.setMonth(prev.getMonth() - 1)));
  }
  function handleNextMonth() {
    setCurrentMonth((prev) => new Date(prev.setMonth(prev.getMonth() + 1)));
  }
  function handleToday() {
    setCurrentMonth(new Date());
  }

  return (
    <header className={style.header}>
      <h1 className={style.month}>
        {currentMonth.toLocaleString("default", {
          month: "long",
          year: "numeric",
        })}
      </h1>
      <div className={style.contenedor}>
        <button onClick={handleLastMonth}>
          <svg
            class="w-6 h-6 text-blue "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
        </button>
        <button onClick={handleToday}>Today</button>
        <button onClick={handleNextMonth}>
          <svg
            class="w-6 h-6 text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m9 5 7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
export default Header;
