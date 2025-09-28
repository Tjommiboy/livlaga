import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-200 p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}

        {/* Hamburger button (visible on small screens) */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Desktop links */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/">Home</Link>
          <Link to="/book">Book</Link>

          <Link to="/omOss">Om oss</Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="flex flex-col mt-2 md:hidden space-y-2">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/book" onClick={() => setIsOpen(false)}>
            Book
          </Link>
          <Link to="/admin" onClick={() => setIsOpen(false)}>
            Admin
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Nav;
