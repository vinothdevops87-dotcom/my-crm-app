import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ContactDetails from "./pages/ContactDetails";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/contact/:id" element={<ContactDetails />} />
    </Routes>
  );
}
