import React, { useState } from "react";
import Header from "./components/Header";

function App() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  return (
    <div className="App">
      <Header currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
    </div>
  );
}

export default App;
