export default function ContactTable({ contacts, deleteContact, setEditing }) {
  return (
    <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <tr>
          <th className="p-3 text-left">Name</th>
          <th className="p-3 text-left">Email</th>
          <th className="p-3 text-left">Phone</th>
          <th className="p-3 text-right">Actions</th>
        </tr>
      </thead>

      <tbody>
        {contacts.length === 0 ? (
          <tr>
            <td colSpan="4" className="p-5 text-center text-gray-500">
              No contacts found
            </td>
          </tr>
        ) : (
          contacts.map((c) => (
            <tr
              key={c.id}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="p-3 font-semibold text-gray-800">{c.name}</td>
              <td className="p-3 text-gray-600">{c.email}</td>
              <td className="p-3 text-gray-600">{c.phone}</td>

              <td className="p-3 text-right space-x-2">

                {/* View */}
                <a
                  href={`/contact/${c.id}`}
                  className="inline-block px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700 text-sm"
                >
                  View
                </a>

                {/* Edit */}
                <button
                  onClick={() => setEditing(c)}
                  className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm"
                >
                  Edit
                </button>

                {/* Delete */}
                <button
                  onClick={() => deleteContact(c.id)}
                  className="px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700 text-sm"
                >
                  Delete
                </button>

              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
