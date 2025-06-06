import React, { useState } from "react";
import db from "../firebase"; // Make sure this path is correct and the file exists
import { collection, addDoc } from "firebase/firestore";

export default function DuelForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    causeA: "",
    causeB: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setMessage("");
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   for (let key in formData) {
  //     if (!formData[key]) {
  //       setError("❌ All fields are required.");
  //       return;
  //     }
  //   }

  //   try {
  //     await addDoc(collection(db, "duels"), {
  //       ...formData,
  //       createdAt: new Date(),
  //     });

  //     setMessage("✅ Thanks for starting a duel!");
  //     setFormData({ name: "", email: "", causeA: "", causeB: "" });
  //   } catch (err) {
  //     console.error("Firestore Error:", err);
  //     setError("❌ Something went wrong. Please try again.");
  //   }
  // };


  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("📦 Submitting:", formData); // Debug

  for (let key in formData) {
    if (!formData[key]) {
      setError("❌ All fields are required.");
      return;
    }
  }

  try {
    const docRef = await addDoc(collection(db, "duels"), {
      name: formData.name,
      email: formData.email,
      causeA: formData.causeA,
      causeB: formData.causeB,
      createdAt: new Date(),
    });

    console.log("✅ Document saved with ID:", docRef.id); // Debug

    setMessage("✅ Thanks for starting a duel!");
    setFormData({ name: "", email: "", causeA: "", causeB: "" });
  } catch (err) {
    console.error("❌ Firestore Error:", err); // Debug
    setError("❌ Something went wrong. Please try again.");
  }
};


  return (
    <div className="max-w-2xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-8 rounded-xl shadow-lg space-y-5 border border-gray-100"
      >
        {error && <div className="text-red-600 font-semibold">{error}</div>}
        {message && <div className="text-green-600 font-semibold">{message}</div>}

        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="col-span-2 sm:col-span-1 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="col-span-2 sm:col-span-1 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="causeA"
            placeholder="Cause A"
            value={formData.causeA}
            onChange={handleChange}
            className="col-span-2 sm:col-span-1 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <input
            type="text"
            name="causeB"
            placeholder="Cause B"
            value={formData.causeB}
            onChange={handleChange}
            className="col-span-2 sm:col-span-1 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            className="w-full sm:w-auto flex-1 bg-red-500 text-white font-bold py-3 rounded-md hover:bg-red-600 transition"
          >
            Submit
          </button>
          <button
            type="reset"
            onClick={() =>
              setFormData({ name: "", email: "", causeA: "", causeB: "" })
            }
            className="w-full sm:w-auto flex-1 border border-gray-500 text-gray-700 font-semibold py-3 rounded-md hover:bg-gray-100 transition"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
