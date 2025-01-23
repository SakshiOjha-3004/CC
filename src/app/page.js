"use client";

import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContractOwnerDashboard = () => {
  const [currentSection, setCurrentSection] = useState("add-inspector"); // Tracks which section is displayed
  const [landInspectors, setLandInspectors] = useState([]);
  const [formData, setFormData] = useState({
    address: "",
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
        address: "123 Main St, New York, NY",
        name: "John Doe",
        age: 35,
        designation: "Senior Inspector",
        city: "New York",
      },
      {
        id: 2,
        address: "456 Elm St, Los Angeles, CA",
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
    // Validate input fields
    const { address, name, age, designation, city } = formData;

    if (!address || !name || !age || !designation || !city) {
      toast.error("Please fill in all the fields to add a Land Inspector!");
      return;
    }

    // Add land inspector logic
    const newInspector = { ...formData, id: Date.now() };
    setLandInspectors([...landInspectors, newInspector]);
    setFormData({ address: "", name: "", age: "", designation: "", city: "" });
    toast.success("Land Inspector added successfully!");
  };

  const handleRemoveInspector = (id) => {
    setLandInspectors(landInspectors.filter((inspector) => inspector.id !== id));
    toast.info("Land Inspector removed.");
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <div className="flex h-screen">
        {/* Toast Notifications */}
        <ToastContainer />

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
        <main className="flex-1 p-6 space-y-12 bg-[#000000] flex justify-center items-start">
          {currentSection === "add-inspector" && (
            <section className="bg-[#1F1F1F] p-6 rounded shadow-lg text-white max-w-md w-full">
              <h2 className="text-2xl font-extrabold mb-4 text-[#BB86FC]">Add Land Inspector</h2>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-white font-semibold">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter Address"
                    className="w-full p-3 rounded bg-[#2E2E2E] text-white focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-white font-semibold">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                    className="w-full p-3 rounded bg-[#2E2E2E] text-white focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-white font-semibold">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Enter Age"
                    className="w-full p-3 rounded bg-[#2E2E2E] text-white focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-white font-semibold">Designation</label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="Enter Designation"
                    className="w-full p-3 rounded bg-[#2E2E2E] text-white focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-white font-semibold">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter City"
                    className="w-full p-3 rounded bg-[#2E2E2E] text-white focus:outline-none"
                  />
                </div>
                <button
                  onClick={handleAddInspector}
                  className="w-full py-3 px-4 bg-green-500 hover:bg-purple-500 rounded text-black font-semibold"
                >
                  Add
                </button>
              </form>
            </section>
          )}

          {/* Other sections unchanged */}
        </main>
      </div>
    </div>
  );
};

export default ContractOwnerDashboard;

