import ContactForm from "../components/ContactForm";
import ContactTable from "../components/ContactTable";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const [contacts, setContacts] = useState(() => {
    const stored = localStorage.getItem("crm_contacts");
    return stored ? JSON.parse(stored) : [];
  });

  const [editing, setEditing] = useState(null);

  useEffect(() => {
    localStorage.setItem("crm_contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filteredAndSorted = contacts
    .filter((c) => {
      const t = search.toLowerCase();
      return (
        c.name.toLowerCase().includes(t) ||
        c.email.toLowerCase().includes(t) ||
        c.phone.toLowerCase().includes(t)
      );
    })
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "email") return a.email.localeCompare(b.email);
      if (sortBy === "newest") return b.id - a.id;
      if (sortBy === "oldest") return a.id - b.id;
      return 0;
    });

  return (
    <div className="p-6 max-w-5xl mx-auto bg-gray-50 min-h-screen">
      
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-5 rounded-lg shadow-lg">
        🚀 CRM Dashboard
      </h1>

      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Search by name, email or phone..."
        className="border border-gray-300 p-3 w-full rounded mb-4 shadow-sm focus:ring-2 focus:ring-blue-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Sort dropdown */}
      <select
        className="border p-3 rounded mb-6 w-full bg-white shadow-sm focus:ring-2 focus:ring-indigo-400"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="name">Sort by Name (A–Z)</option>
        <option value="email">Sort by Email (A–Z)</option>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>

      {/* Contact Form */}
      <div className="mb-8">
        <ContactForm
          addContact={(contact) =>
            setContacts([{ id: Date.now(), ...contact }, ...contacts])
          }
          updateContact={(updated) =>
            setContacts(
              contacts.map((c) => (c.id === updated.id ? updated : c))
            )
          }
          editing={editing}
          setEditing={setEditing}
        />
      </div>

      {/* Contact Table */}
      <ContactTable
        contacts={filteredAndSorted}
        deleteContact={(id) =>
          setContacts(contacts.filter((c) => c.id !== id))
        }
        setEditing={setEditing}
      />
    </div>
  );
}
