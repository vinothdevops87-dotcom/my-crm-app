import { useState, useEffect } from "react";

export default function ContactForm({ addContact, updateContact, editing, setEditing }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    if (editing) setForm(editing);
  }, [editing]);

  function handleSubmit(e) {
    e.preventDefault();

    if (editing) {
      updateContact(form);
      setEditing(null);
    } else {
      addContact(form);
    }

    setForm({ name: "", email: "", phone: "" });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5 rounded-lg shadow-md space-y-4 border-l-4 border-blue-600"
    >
      <h2 className="text-xl font-bold text-gray-700">
        {editing ? "Edit Contact" : "Add New Contact"}
      </h2>

      <input
        type="text"
        className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />

      <input
        type="email"
        className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
        placeholder="Email Address"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="text"
        className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
        placeholder="Phone Number"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <button
        className={`w-full py-2 rounded text-white font-semibold ${
          editing ? "bg-blue-700 hover:bg-blue-800" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {editing ? "Update Contact" : "Add Contact"}
      </button>
    </form>
  );
}
