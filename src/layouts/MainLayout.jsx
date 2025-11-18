import { Link, useLocation } from "react-router-dom";

export default function MainLayout({ children }) {
  const loc = useLocation();

  const linkClass = (path) =>
    `block px-4 py-2 rounded-lg mb-2 font-medium ${
      loc.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-5">
        <h1 className="text-2xl font-extrabold text-blue-600 mb-6">
          CRM App
        </h1>

        <nav>
          <Link to="/" className={linkClass("/")}>🏠 Dashboard</Link>
          <Link to="/contacts" className={linkClass("/contacts")}>📇 Contacts</Link>
          <Link to="/settings" className={linkClass("/settings")}>⚙️ Settings</Link>
        </nav>
      </aside>

      {/* Page Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
