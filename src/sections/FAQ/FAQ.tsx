import React, { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import WithIntersectionObserver from "../../observer/withIntersectionObserver";
import theme from "../../styles/theme";
import { Container } from "./styles";

interface IProps {
  SetTheme: any;
}

const FAQ = ({ SetTheme }: IProps) => {
  const [data, setData] = useState([]);
  const memoizedCallback = useCallback(() => {
    SetTheme({ bg: theme.orange, fg: theme.dark });
  }, [SetTheme]);
  useEffect(() => {
    fetch("/FAQ.json")
      .then((res) => res.json())
      .then((res) => setData(res.FAQ));
  });
  return (
    <WithIntersectionObserver callback={memoizedCallback}>
      <Container id="FAQ">
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
    </WithIntersectionObserver>
  );
};

export default FAQ;
