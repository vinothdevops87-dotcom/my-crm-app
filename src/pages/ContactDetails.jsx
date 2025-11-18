import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ContactDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [contact, setContact] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("crm_contacts")) || [];
    const found = data.find((c) => String(c.id) === id);
    setContact(found);
  }, [id]);

  if (!contact) {
    return (
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold">Contact not found</h1>
        <button
          className="mt-4 bg-gray-700 text-white px-4 py-2 rounded"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-4">{contact.name}</h1>

      <div className="space-y-2 mb-4">
        <p><strong>Email:</strong> {contact.email || "—"}</p>
        <p><strong>Phone:</strong> {contact.phone || "—"}</p>
      </div>

      <button
        className="bg-gray-700 text-white px-4 py-2 rounded"
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
}
