import { useState, useCallback } from 'react';
import { isFunction } from '../lib/Utils';

export const useStateReducer = (init = {}, { onChange } = {}) => {
  const [state, setState] = useState(init);
  const setStateWrapper = useCallback(
    (changes, options = {}) => {
      const { replace } = options;
      setState((state) => {
        if (isFunction(changes)) changes = changes(state);
        if (changes == state) return state;
        if (onChange) return onChange({ state, changes, options });
        if (replace) return changes;
        return { ...state, ...changes };
      });
    },
    [onChange, setState]
  );
  return [state, setStateWrapper];
};
