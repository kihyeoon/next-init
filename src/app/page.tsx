import os from "os"; // Node.js API

export default function Home() {
  console.log("hi!");
  console.log(os.hostname());

  return <h1>홈페이지!!</h1>;
}
