import React, { useState } from "react";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("placement");

  const renderContent = () => {
    const placements = [
      { name: "placement", label: "Placements for Internship 2018-19" },
      { name: "download", label: "Placements 2018-19" },
      { name: "collegeEvent", label: "Placement Companies 2018-19" },
      { name: "event", label: "Placements Schedules" },
      { name: "previous", label: "Previous Placements" },
    ];
    const foundPlacement = placements.find((place) => place.name === activeTab);

    switch (activeTab) {
      case "placement":
        return (
          <ul className="list">
            {[...Array(10)].map((_, index) => (
              <li key={index}>
                {foundPlacement.label}
              </li>
            ))}
          </ul>
        );
      case "download":
        return (
          <ul className="list">
            {[...Array(20)].map((_, index) => (
              <li key={index}>Download List Item {index + 1}</li>
            ))}
          </ul>
        );
      case "collegeEvent":
        return (
          <ul className="list">
            <li>College Event List Item 1</li>
            <li>College Event List Item 2</li>
          </ul>
        );
      case "event":
        return (
          <ul className="list">
            <li>Event List Item 1</li>
            <li>Event List Item 2</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-6 ">
      <div className="flex flex-wrap border-b  border-gray-200">
        <button
          className={`flex-2 sm:flex-1 m-2 py-2 px-4 text-center ${
            activeTab === "placement" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("placement")}
        >
          Placement
        </button>
        <button
          className={`flex-2 sm:flex-1 m-2 py-2 px-4 text-center ${
            activeTab === "download" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("download")}
        >
          Download
        </button>
        <button
          className={`flex-2 sm:flex-1 m-2 py-2 px-4 text-center ${
            activeTab === "collegeEvent" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("collegeEvent")}
        >
          College Event
        </button>
        <button
          className={`flex-2 sm:flex-1 m-2 py-2 px-4 text-center ${
            activeTab === "event" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("event")}
        >
          Notice
        </button>
      </div>
      <div className="p-4">{renderContent()}</div>

      <style jsx>{`
        .list {
          list-style-type: none;
          padding: 0;
          margin: 0;
          height: 200px; /* Example height, adjust as needed */
          overflow-y: auto; /* Add scroll if content exceeds height */
          font-size: 16px; /* Example font size, adjust as needed */
          line-height: 1.6; /* Example line height, adjust as needed */
        }

        .list li {
          padding: 8px 0; /* Adjust padding as needed */
          border-bottom: 1px solid #ccc; /* Example border */
        }
        .list li:hover {
          color: red;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default TabComponent;
