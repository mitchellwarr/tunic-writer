import { useState, useCallback } from 'react';

export const useUpdatingElementRef = init => {
  const [{ ref }, setRef] = useState(() => ({ ref: { current: init } }));
  const setRefWrapper = useCallback(
    current => {
      setRef(
        ({ ref }) => {
          ref.current = current;
          return { ref };
        }
      );
    },
    [setRef]
  );
  return [ref, setRefWrapper];
};
