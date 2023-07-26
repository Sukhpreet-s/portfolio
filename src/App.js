import React from "react";
import { BrowserRouter } from "react-router-dom";

//components
import Container from "./components/Container/Container";

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Container />
    </BrowserRouter>
  );
}

export default App;
