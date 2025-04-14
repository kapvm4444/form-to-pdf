import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

export default function App() {
  const [doctor, setDoctor] = useState("");

  return (
    <div className="font-sans font-medium">
      <Navbar onSetDoctor={setDoctor} doctor={doctor} />
      <Form doctor={doctor} />
    </div>
  );
}
