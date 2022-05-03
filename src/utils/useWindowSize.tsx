import React, { useEffect, useState } from 'react';
import debounce from "lodash/debounce";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      debouncedUli([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const uli = debounce(
    (value) => {
      setSize(value);
    },
    300
  )

  const debouncedUli = React.useCallback((value) => uli(value), [])

  return size;
}

export default useWindowSize;