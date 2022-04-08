import { useEffect } from 'react';
import { isAsyncFunction, isFunction } from '../lib/Utils';
import { useAPICallback } from './useAPICallback';

export const useAPIEffect = (func = () => {}, deps = []) => {
  const effect = useAPICallback(func, deps);

  useEffect(
    () => {
      const result = effect();
      if (isAsyncFunction(result))
        throw new Error(
          'useAPIEffect cannot have an async function as a cleanup'
        );
      if (isFunction(result)) return result;
    },
    [effect]
  );
};
