import { ReactElement, useEffect } from "react";

type InViewProps = {
  children: JSX.Element;
  callback: any;
};

function WithIntersectionObserver({ children, callback }: InViewProps) {
  let options = {
    threshold: 0.8,
  };
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        callback();
      }
    }, options);
    intersectionObserver.observe(
      document.querySelector(
        `#${(children! as ReactElement).props.id}`
      ) as HTMLDivElement
    );
    return () => intersectionObserver.disconnect();
  });

  return children;
}

export default WithIntersectionObserver;
