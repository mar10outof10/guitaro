import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideTrigger(ref, callback) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
export default function OutsideTrigger(props) {
  const wrapperRef = useRef(null);
  useOutsideTrigger(wrapperRef, props.callback);

  return <div ref={wrapperRef}>{props.children}</div>;
}

OutsideTrigger.propTypes = {
  children: PropTypes.node,
  callback: PropTypes.func,
};
