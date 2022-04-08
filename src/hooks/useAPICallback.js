import { useEffect, useCallback, useRef } from 'react';

const overloadArgs = (...args) => {
  if (args.length == 2) return [undefined, ...args];
  return args;
};

export const useAPICallback = (...args) => {
  const [keyMap = () => {}, func, deps] = overloadArgs(...args);

  const isCurrent = useRef({});

  useEffect(
    () => () => {
      for (let key in isCurrent.current) {
        isCurrent.current[key].cleanUp();
        isCurrent.current[key].current = false;
      }
    },
    []
  );

  return useCallback((...args) => {
    const key = keyMap(...args);

    if (isCurrent.current[key]) {
      isCurrent.current[key].cleanUp();
      isCurrent.current[key].current = false;
    }

    isCurrent.current[key] = {
      cleanUp: () => {},
      current: true,
    };

    return func(isCurrent.current[key], ...args);
  }, deps);
};
