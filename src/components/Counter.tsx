"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log("hi! - client");

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>count 증가</button>
    </>
  );
}
