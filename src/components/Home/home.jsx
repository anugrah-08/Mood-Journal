import "./home.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const moods = [
    "Work",
    "Exersise",
    "Family",
    "Education",
    "Travel",
    "Drinks",
    "Food",
    "Relation",
    "Finance",
    "Health",
    "Sleep",
    "Music",
    "Weather",
    "Hobbies",
  ];

  const [selectedMood, setSelectedMood] = useState("");
// const [selected, setSelected] = useState({});
const [thoughts, setThoughts] = useState("");


  // Object to keep track of which mood is selected
  const [selected, setSelected] = useState({});

  const handleClick = (mood) => {
    // Toggle the selected status of the clicked mood
    setSelected((prevSelected) => ({
      ...prevSelected,
      [mood]: !prevSelected[mood],
    }));
  };
const handleSubmit = () => {
  const selectedItems = Object.keys(selected).filter((key) => selected[key]);
  
  const moodEntry = {
    mood: selectedMood,
    reasons: selectedItems,
    note: thoughts,
    timestamp: new Date().toISOString()
  };

  // Store in localStorage (you can store multiple entries too)
  const existing = JSON.parse(localStorage.getItem("moodEntries")) || [];
  existing.push(moodEntry);
  localStorage.setItem("moodEntries", JSON.stringify(existing));

  // Optional: Reset after submit
  setSelectedMood("");
  setSelected({});
  setThoughts("");
  alert("Mood entry submitted successfully!");
};

const [currentTime, setCurrentTime] = useState(new Date());

React.useEffect(() => {
  const timer = setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  return () => clearInterval(timer); // Clean up
}, []);

const formattedTime = currentTime.toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true
});

  // const moodSelect = [
  //   { emoji: "😀", label: "Happy" },
  //   { emoji: "🥺", label: "Sad" },
  //   { emoji: "😡", label: "Angry" },
  //   { emoji: "😐", label: "Neutral" },
  // ];

  // const handleMoodClick = (label) => {
  //   localStorage.setItem("selectedMood", label);
  //   console.log("Stored mood:", label);
  // };

  return (
    <>
    <header className="home-head">
      <nav>
        <Link to="/"><a href="">Journal</a></Link> 
        <Link to="/history"><a href="">Mood History</a></Link> 
      </nav>
    </header>
      <section id="home">
        <div className="mood-container">
          <h1 className="emoji emoji1">🤩</h1>
          <h1 className="emoji emoji2">🫣</h1>
          <div className="section-container">
            <div className="left">
              <h1>
                WELCOME TO THE <br /> <span>MOOD JOURNAL</span>
              </h1>
              <p>Track your mood and reflect on your day.</p>
            </div>
            <div className="right">
              <div className="mobile-container">
                <header>
                  <small>{formattedTime}</small>
                  <ul>
                    {/* <li>range-icon</li> */}
                    <li>
                      <i className="bx bx-wifi" />
                    </li>
                    <li>
                      <i className="bx bxs-battery" />
                    </li>
                  </ul>
                </header>
                <h1>Mood</h1>
                <hr />
                <div className="mood-section">
                  <h1>How are You Feeling?</h1>
                  <div className="mood-options">
                    
                    <div className="mood-wrap">
    <button 
  className={`mood-button happy ${selectedMood === "happy" ? "selected" : ""}`} 
  onClick={() => setSelectedMood("happy")}
>
  😀
</button>
    <span className="mood-label">Happy</span>
  </div>
  <div className="mood-wrap">
    <button 
  className={`mood-button sad ${selectedMood === "sad" ? "selected" : ""}`} 
  onClick={() => setSelectedMood("sad")}
>
  🥺
</button>
    <span className="mood-label">Sad</span>
  </div>
  <div className="mood-wrap">
    <button 
  className={`mood-button angry ${selectedMood === "angry" ? "selected" : ""}`} 
  onClick={() => setSelectedMood("angry")}
>
  😡
</button>
    <span className="mood-label">Angry</span>
  </div>
  <div className="mood-wrap">
    <button 
  className={`mood-button neutral ${selectedMood === "neutral" ? "selected" : ""}`} 
  onClick={() => setSelectedMood("neutral")}
>
  😐
</button>
    <span className="mood-label">Neutral</span>
  </div>
                  </div>
                  <div className="mood-section">
                    <h3>What's effecting your mood?</h3>
                    <hr />
                    <div className="items">
                      <ul>
                        {moods.map((mood, index) => (
                          <li
                            key={index}
                            onClick={() => handleClick(mood)}
                            className={selected[mood] ? "active" : ""}
                          >
                            {mood}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="write-section">
                    <h3>Let's write about it..!</h3>
                    <textarea
  placeholder="Write your thoughts here..."
  value={thoughts}
  onChange={(e) => setThoughts(e.target.value)}
/>
                  <button className="submit-button" onClick={handleSubmit}>
  Submit
</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
