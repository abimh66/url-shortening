import { useState } from 'react';

function NavBar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="md:flex-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10 md:hidden"
        onClick={() => setShowNav((cur) => !cur)}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <div
        className={`${
          showNav ? '' : 'hidden'
        } md:flex md:static md:text-base md:justify-between md:p-0 md:bg-transparent md:font-medium  md:text-gray-violet md:flex-row md:m-0 md:w-auto md:translate-x-0  z-50 flex flex-col rounded-lg bg-dark-violet p-10 text-white text-xl absolute left-1/2 w-11/12 mt-5 -translate-x-1/2`}>
        <div className="flex flex-col md:p-0 md:border md:flex-row md:border-none gap-6 pb-6 items-center font-bold border-b-[1px] border-b-gray-violet">
          <span>Features</span>
          <span>Pricing</span>
          <span>Resources</span>
        </div>
        <div className="flex flex-col md:p-0 md:flex-row gap-6 pt-6 items-center font-bold">
          <span>Login</span>
          <button className="bg-cyan md:text-white md:px-5 md:py-2 md:rounded-full w-full rounded-2xl py-1">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
