"use client";

import style from "./MeowArticle.module.css";
import { useEffect, useState } from "react";

export default function MeowArticle() {
  const [text, setText] = useState("정보 불러오는 중...");
  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com")
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);

  return (
    <article className={style.article}>
      <h2>Meow Fact</h2>
      <p>{text}</p>
    </article>
  );
}
