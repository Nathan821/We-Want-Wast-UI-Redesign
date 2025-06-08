import React, { useEffect, useState } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import SkipCard from "./SkipCard";

const steps = [
  { title: "Postcode", completed: true },
  { title: "Waste Type", completed: true },
  { title: "Select Skip", completed: true },
  { title: "Permit Check", completed: false },
  { title: "Choose Date", completed: false },
  { title: "Payment", completed: false },
];

const App = () => {
  const [skips, setSkips] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    fetch(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setSkips(data);
        } else if (Array.isArray(data.skips)) {
          setSkips(data.skips);
        } else {
          console.error("Unexpected response format", data);
        }
      })
      .catch((err) => console.error("Failed to fetch skips:", err));
  }, []);

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-6">
      {/* This is Progress Stepper */}
      <div className="flex justify-center mb-10 space-x-4">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                  step.completed
                    ? "bg-green-700 text-white border-green-700"
                    : "bg-white text-gray-600 border-gray-300"
                }`}
              >
                {step.completed ? <Check size={18} /> : index + 1}
              </div>
              <span className="text-sm mt-1">{step.title}</span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-10 h-1 self-center mt-3 ${
                  steps[index + 1].completed ? "bg-green-700" : "bg-gray-300"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* This is Header */}
      <h1 className="text-3xl font-bold text-center mb-2">
        Choose Your Skip Size
      </h1>
      <p className="text-center text-gray-600 mb-8 font-[Poppins]">
        Select the skip size that best suits your needs
      </p>

      {/* This is Skip Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-6">
        {skips.map((skip) => (
          <div
            key={skip.id}
            className="transform scale-105 transition-transform duration-300"
          >
            <SkipCard
              skip={skip}
              isSelected={selectedIds.includes(skip.id)}
              onToggle={toggleSelect}
            />
          </div>
        ))}
      </div>

      {/* This is Bottom Left Text & Arrows */}
      <div className="flex justify-between items-center px-8 mt-8">
        {/* Text aligned left bottom like screenshot */}
        <div className="text-left">
          <p className="text-sm font-semibold font-medium">6 Yard Skip</p>
          <p className="text-green-700 font-medium font-bold">
            £26414 <span className="text-black">day hire</span>
          </p>
        </div>

        {/* This is Navigation Arrows */}
        <div className="flex gap-12">
          <button className="bg-green-600 hover:bg-green-700 text-white p-3 rounded shadow">
            <ChevronLeft size={20} />
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white p-3 rounded shadow">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
