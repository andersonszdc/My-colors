import React, { useEffect, useState } from "react";

type InViewProps = {
  children: React.FunctionComponent<boolean>;
  callback: any;
};

function WithIntersectionObserver({ children, callback }: InViewProps) {
  const [inView, setInView] = useState(false);
  const element = children(inView);
  let options = {
    threshold: 0.5,
  };
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !inView) {
        setInView(true);
        callback();
      }
    }, options);
    intersectionObserver.observe(
      document.querySelector(`#${element!.props.id}`) as HTMLDivElement
    );
    return () => intersectionObserver.disconnect();
  });

  return element;
}

export default WithIntersectionObserver;
