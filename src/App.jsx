
import Home from './components/Home/home.jsx';

// function App() {
  

//   return (
//     <>
//       <Home />
//     </>
//   )
// }

// export default App;

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import MoodJournal from "./MoodJournal";
import MoodHistory from "./components/Mood-History/history.jsx";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<MoodHistory />} />
      </Routes>
    </Router>
  );
}

export default App;

