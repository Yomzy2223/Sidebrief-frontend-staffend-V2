"use client";

import { RefObject, useEffect } from "react";

export const useOnClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: (event: MouseEvent | TouchEvent) => void
): void => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("mousedown", listener);
      window.addEventListener("touchstart", listener);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousedown", listener);
        window.removeEventListener("touchstart", listener);
      }
    };

    // Add empty array as second parameter to run the effect only once
  }, [ref, handler]);
};

export default useOnClickOutside;
