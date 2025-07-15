import { useState } from "react";
import Index from "./pages/Index";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-white min-h-full min-w-full">
      <Home />
      <Index />
    </div>
  );
}

export default App;
