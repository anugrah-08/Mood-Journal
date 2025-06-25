// import React, { useEffect, useState } from "react";
// import "./history.css"; // Assuming you have a CSS file for styling
// import { Link } from "react-router-dom";

// const MoodHistory = () => {
//   const [entries, setEntries] = useState([]);

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("moodEntries")) || [];
//     setEntries(stored.reverse()); // Show latest on top
//   }, []);

//   const clearHistory = () => {
//     localStorage.removeItem("moodEntries");
//     setEntries([]);
//   };

//   return (
//     <div id="history">
//       <header className="history-head"><Link to={"/"}><button className="home"><i class='bx bx-arrow-back'></i>Home</button></Link></header>
//     <div className="history-section">
      
//       <h1>Your Mood History</h1>
//       {entries.length === 0 ? (
//         <p>No entries found.</p>
//       ) : (
//         <div className="wrapper">
//         <ul className="history-list">
//           {entries.map((entry, index) => (
//             <li key={index} className="history-item">
//               <h3>{new Date(entry.timestamp).toLocaleString()}</h3>
//               <p><strong>Mood:</strong> {getMoodEmoji(entry.mood)} ({entry.mood})</p>
//               <p><strong>Reasons:</strong> {entry.reasons.join(", ")}</p>
//               <p><strong>Note:</strong> {entry.note || "None"}</p>
//             </li>
//           ))}
//         </ul>
//         </div>
//       )}
//       {entries.length > 0 && (
//         <button onClick={clearHistory} className="clear-button">Clear All History</button>
//       )}
//     </div>
//     </div>
//   );
// };

// // Helper to return emoji from mood string
// const getMoodEmoji = (mood) => {
//   switch (mood) {
//     case "happy":
//       return "😀";
//     case "sad":
//       return "🥺";
//     case "angry":
//       return "😡";
//     case "neutral":
//       return "😐";
//     default:
//       return "❓";
//   }
// };

// export default MoodHistory;

import React, { useEffect, useState } from "react";
import "./history.css";
import { Link } from "react-router-dom";

const MoodHistory = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("moodEntries")) || [];
    setEntries(stored.reverse()); // Show latest on top
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("moodEntries");
    setEntries([]);
  };

  const deleteEntry = (indexToDelete) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(indexToDelete, 1);
    setEntries(updatedEntries);

    // Save updated (reversed back to original order)
    localStorage.setItem("moodEntries", JSON.stringify([...updatedEntries].reverse()));
  };

  return (
    <div id="history">
      <header className="history-head">
        <Link to={"/"}>
          <button className="home"><i className='bx bx-arrow-back'></i> Home</button>
        </Link>
      </header>

      <div className="history-section">
        <h1>Your Mood History</h1>
        {entries.length === 0 ? (
          <p>No entries found.</p>
        ) : (
          <div className="wrapper">
            <ul className="history-list">
              {entries.map((entry, index) => (
                <li key={index} className="history-item">
                  <h3>{new Date(entry.timestamp).toLocaleString()}</h3>
                  <p><strong>Mood:</strong> {getMoodEmoji(entry.mood)} ({entry.mood})</p>
                  <p><strong>Reasons:</strong> {entry.reasons.join(", ")}</p>
                  <p><strong>Note:</strong> {entry.note || "None"}</p>
                  <button
                    className="delete-button"
                    onClick={() => deleteEntry(index)}
                  >
                    <i class='bx bxs-trash'></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {entries.length > 0 && (
          <button onClick={clearHistory} className="clear-button">Clear All History</button>
        )}
      </div>
    </div>
  );
};

const getMoodEmoji = (mood) => {
  switch (mood) {
    case "happy":
      return "😀";
    case "sad":
      return "🥺";
    case "angry":
      return "😡";
    case "neutral":
      return "😐";
    default:
      return "❓";
  }
};

export default MoodHistory;
