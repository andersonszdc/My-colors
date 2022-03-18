import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const FAQ = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/FAQ.json")
      .then((res) => res.json())
      .then((res) => setData(res.FAQ));
  });
  return (
    <div>
      <h1>Algumas dúvidas comuns</h1>
      <div>
        {data.map((data: any, index) => (
          <div key={index}>
            <h2>{data.question}</h2>
            <h3>{data.answer}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
