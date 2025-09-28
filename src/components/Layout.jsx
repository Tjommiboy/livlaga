import { Outlet, Link } from "react-router-dom";
import Nav from "./Nav";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen text-center">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 w-full">
        <Nav />
      </header>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <Outlet /> {/* Page content will be centered */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 p-4 w-full">
        <div className="flex justify-center items-center space-x-4">
          <span>&copy; {new Date().getFullYear()} Liv/Laga</span>
          <Link to="/admin" className="text-blue-600 hover:underline">
            Admin
          </Link>
        </div>
      </footer>
    </div>
  );
}
