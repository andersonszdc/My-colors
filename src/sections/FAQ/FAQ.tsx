import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container } from "./styles";

const FAQ = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/FAQ.json")
      .then((res) => res.json())
      .then((res) => setData(res.FAQ));
  });
  return (
    <Container>
      <h1 className="title">Algumas dúvidas comuns</h1>
      <div className="questions">
        {data.map((data: any, index) => (
          <div key={index}>
            <h2 className="question">{data.question}</h2>
            <h3 className="answer">{data.answer}</h3>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FAQ;
