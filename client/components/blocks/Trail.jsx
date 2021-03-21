import React, { memo } from "react";
import { useTrail, animated as a } from "react-spring";

export function Trail({ children, ...props }) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: 1,
    x: 0,
    height: "auto",
    from: { opacity: 0, x: 20, height: 0 }
  });
  return (
    <div className="trails-main" {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={index}
            className="trails-text"
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
            }}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}

export function withTrail(COMP) {
  function WrappedCompWithTrail({ children, ...props }) {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 2000, friction: 200 },
      opacity: 1,
      x: 0,
      height: "auto",
      from: { opacity: 0, x: 20, height: 0 }
    });

    return (
      <COMP {...props}>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={index}
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
            }}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </COMP>
    );
  }

  return memo(WrappedCompWithTrail);
}

export default memo(Trail);
