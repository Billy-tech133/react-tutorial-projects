import { cleanup } from "@testing-library/react";
import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, reSize] = useState(window.innerWidth);

  const checkSize = () => {
    reSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });
  return (
    <>
      <h2>Window</h2>
      <h3>{size} px</h3>
    </>
  );
};

export default UseEffectCleanup;
