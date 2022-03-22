import { ReactElement, useEffect, useMemo } from "react";

type InViewProps = {
  children: JSX.Element;
  callback: any;
};

function WithIntersectionObserver({ children, callback }: InViewProps) {
  const ElementId = useMemo(
    () => (children as ReactElement).props.id,
    [children]
  );
  useEffect(() => {
    const options = {
      threshold: 0.5,
    };
    const intersectionObserver = new IntersectionObserver((entries) => {
      console.log(entries[0]);
      if (entries[0].isIntersecting) {
        callback();
      }
    }, options);
    intersectionObserver.observe(
      document.querySelector(`#${ElementId}`) as HTMLDivElement
    );
    return () => intersectionObserver.disconnect();
  }, [callback, ElementId]);

  return children;
}

export default WithIntersectionObserver;
