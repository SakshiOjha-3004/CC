"use client";

import React, { useState, useEffect } from "react";

const ContractOwnerDashboard = () => {
  const [currentSection, setCurrentSection] = useState("add-inspector"); // Tracks which section is displayed
  const [landInspectors, setLandInspectors] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    designation: "",
    city: "",
  });

  useEffect(() => {
    // Dummy data for viewing land inspectors; replace with API call if needed
    setLandInspectors([
      {
        id: 1,
        name: "John Doe",
        age: 35,
        designation: "Senior Inspector",
        city: "New York",
      },
      {
        id: 2,
        name: "Jane Smith",
        age: 29,
        designation: "Junior Inspector",
        city: "Los Angeles",
      },
    ]);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddInspector = () => {
    // Add land inspector logic; replace with backend integration
    const newInspector = { ...formData, id: Date.now() };
    setLandInspectors([...landInspectors, newInspector]);
    setFormData({ name: "", age: "", designation: "", city: "" });
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="bg-[#000000] w-64 h-screen p-4">
          <h1 className="text-2xl font-bold mb-6 text-white">Contract Owner</h1>

          <nav className="space-y-4">
            <button
              onClick={() => setCurrentSection("add-inspector")}
              className={`w-full py-2 px-4 text-left ${
                currentSection === "add-inspector" ? "text-[#BB86FC]" : "text-[#FFFFFF]"
              } hover:text-[#BB86FC] rounded-md border-none bg-transparent`}
            >
              Add Land Inspector
            </button>
            <button
              onClick={() => setCurrentSection("view-inspectors")}
              className={`w-full py-2 px-4 text-left ${
                currentSection === "view-inspectors" ? "text-[#BB86FC]" : "text-[#FFFFFF]"
              } hover:text-[#BB86FC] rounded-md border-none bg-transparent`}
            >
              View Land Inspectors
            </button>
            <button
              onClick={() => setCurrentSection("change-owner")}
              className={`w-full py-2 px-4 text-left ${
                currentSection === "change-owner" ? "text-[#BB86FC]" : "text-[#FFFFFF]"
              } hover:text-[#BB86FC] rounded-md border-none bg-transparent`}
            >
              Change Contract Owner
            </button>
            <button
              className="w-full py-2 px-4 bg-transparent text-[#CF6679] hover:text-red-300 rounded-md border-none"
              onClick={() => alert("Logout functionality coming soon!")}
            >
              Logout
            </button>
          </nav>
        </aside>

        {/* Separator Line */}
        <div className="w-0.5 bg-white h-full"></div>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-12 bg-[#000000]">
          {/* Conditional Rendering Based on Current Section */}
          {currentSection === "add-inspector" && (
            <section className="bg-[#000000] p-6 rounded shadow-lg text-white">
              <h2 className="text-2xl font-extrabold mb-4">Add Land Inspector</h2>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="flex-1 p-2 rounded bg-[#1F1F1F] text-white focus:outline-none"
                  />
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Age"
                    className="flex-1 p-2 rounded bg-[#1F1F1F] text-white focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="Designation"
                  className="w-full p-2 rounded bg-[#1F1F1F] text-white focus:outline-none"
                />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full p-2 rounded bg-[#1F1F1F] text-white focus:outline-none"
                />
                <button
                  onClick={handleAddInspector}
                  className="py-2 px-4 bg-[#BB86FC] hover:bg-[#CF7BFF] rounded text-white"
                >
                  Add
                </button>
              </form>
            </section>
          )}

          {currentSection === "view-inspectors" && (
            <section className="bg-[#000000] p-6 rounded shadow-lg text-white">
              <h2 className="text-2xl font-extrabold mb-4">Land Inspectors</h2>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-600 text-white">
                    <th className="p-2">Name</th>
                    <th className="p-2">Age</th>
                    <th className="p-2">Designation</th>
                    <th className="p-2">City</th>
                  </tr>
                </thead>
                <tbody>
                  {landInspectors.map((inspector) => (
                    <tr
                      key={inspector.id}
                      className="border-b border-gray-600 hover:text-[#BB86FC]"
                    >
                      <td className="p-2">{inspector.name}</td>
                      <td className="p-2">{inspector.age}</td>
                      <td className="p-2">{inspector.designation}</td>
                      <td className="p-2">{inspector.city}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}

          {currentSection === "change-owner" && (
            <section className="bg-[#000000] p-6 rounded shadow-lg text-white">
              <h2 className="text-2xl font-extrabold mb-4">Change Contract Owner</h2>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <input
                  type="text"
                  placeholder="New Contract Owner Address"
                  className="w-full p-2 rounded bg-[#1F1F1F] text-white focus:outline-none"
                />
                <button
                  onClick={() =>
                    alert("Change Contract Owner functionality coming soon!")
                  }
                  className="py-2 px-4 bg-[#BB86FC] hover:bg-[#CF7BFF] rounded text-white"
                >
                  Change
                </button>
              </form>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default ContractOwnerDashboard;
