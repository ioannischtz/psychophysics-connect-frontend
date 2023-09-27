import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useScrollToHash = (options?: ScrollIntoViewOptions) => {
  const location = useLocation();
  const navigate = useNavigate();

  const hashElement = useMemo(() => {
    if (location.hash) {
      const hash = location.hash.slice(1);
      return document.getElementById(hash);
    }
    return null;
  }, [location]);

  useEffect(() => {
    if (hashElement) {
      hashElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        ...options,
      });

      // navigate(location.pathname); // this removes the hash from the url afterwards so we can navigate to the element again
    }
  }, [hashElement, location.pathname, navigate, options]);
};
