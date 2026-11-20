import React from "react";
import { useReveal } from "../hooks";

/* Wraps children and fades/slides them in on scroll.
   `as` lets you pick the element; `delay` is 1-5. */
export default function Reveal({ children, as: Tag = "div", delay, className = "", ...rest }) {
  const [ref, shown] = useReveal();
  const d = delay ? ` d${delay}` : "";
  return (
    <Tag ref={ref} className={`reveal${shown ? " in" : ""}${d} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
