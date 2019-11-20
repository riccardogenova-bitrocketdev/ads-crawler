/** @format */

import React, {
  useState,
  memo,
  useRef,
  lazy,
  Suspense,
  useEffect
} from "react";
// import 'intersection-observer';

interface Props {
  component: () => Promise<any>;
  onIntersection: () => void;
  fallback: JSX.Element;
  threshold?: number;
}

const Observer = memo(
  ({ component, onIntersection, fallback, threshold = 1, ...rest }: Props) => {
    const [hasIntersected, setIntersected] = useState(false);
    const [Component, setComponent] = useState();

    let observer;

    const observerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
      observer = new IntersectionObserver(handleObserver, {
        root: null,
        threshold
      });
      observer.observe(observerRef.current);
    }, []);

    useEffect(() => {
      if (hasIntersected) {
        if (component) setComponent(lazy(component));
        if (onIntersection) onIntersection();
      }
    }, [hasIntersected]);

    const handleObserver = (entities: any) => {
      const isIntersecting = entities[0].isIntersecting;
      if (isIntersecting && !hasIntersected) {
        setIntersected(true);
      }
    };

    return (
      <div ref={observerRef}>
        {hasIntersected && Component && (
          <Suspense fallback={fallback}>
            {Component && <Component {...rest} />}
          </Suspense>
        )}
      </div>
    );
  }
);

export default Observer;
