import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "./components/Join/Join";
// import Chat from "./components/Chat/Chat";
import Room from "./components/Room/Room";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Room} />
    </Router>
  );
}

export default App;
