import React, { memo } from "react";
import { useTrail, animated as a } from "react-spring";

export function Trail({ children, ...props }) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 250 },
    opacity: 1,
    x: 0,
    height: "auto",
    from: { opacity: 0, x: 20, height: 0 }
  });
  return (
    <div {...props}>
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
    </div>
  );
}

export function withTrail(COMP, options = null) {
  function WrappedCompWithTrail({ children, ...props }) {
    const { trailConfig } = options
      ? options
      : { trailConfig: { mass: 5, tension: 2000, friction: 200 } };

    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
      config: trailConfig,
      opacity: 1,
      x: 0,
      height: "auto",
      from: { opacity: 0, x: 20, height: 0 }
    });

    return (
      <COMP {...props}>
        <div className="trail-wrapper">
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
        </div>
      </COMP>
    );
  }

  return WrappedCompWithTrail;
}

export default memo(Trail);
