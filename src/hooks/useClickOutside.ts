import { useEffect, RefObject, useState } from 'react';

function useClickOutside(wrapperRef: RefObject<HTMLDivElement>) {
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setFocused(false);
      } else {
        setFocused(true);
      }
    };

    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('click', clickOutside);
    };
  }, [wrapperRef]);

  return focused;
}

export default useClickOutside;
