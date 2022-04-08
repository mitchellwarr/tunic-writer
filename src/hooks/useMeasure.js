import { useState, useEffect, useCallback } from 'react';
import { useUpdatingElementRef } from './useUpdatingElementRef';

export const useMeasure = (props) => {
  const {
    fixed,
    useWindow
  } = props || {};

  const [ref, setRef] = useUpdatingElementRef();
  const [bounds, setBounds] = useState(
    () => ({ left: 0, top: 0, width: 0, height: 0 })
  );
  const set = useCallback(
    obj => setBounds(
      oldState => {
        let bbox;
        if (obj.getBBox) {
          try {
            bbox = obj.getBBox();
          } catch (e) {
            bbox = { x: 0, y: 0, width: 0, height: 0 };
          }
          return ({
            left: bbox.x,
            top: bbox.y,
            width: bbox.width,
            height: bbox.height
          });
        }
        if (obj.offsetWidth) {
          bbox = obj.getBoundingClientRect();
          return ({
            left: obj.offsetLeft,
            top: obj.offsetTop,
            width: obj.offsetWidth,
            height: obj.offsetHeight,
            boundingClientRect: bbox,
            yFromPage: bbox.top - document.body.getBoundingClientRect().top
          });
        }
        return oldState;
      }
    ),
    [setBounds]
  );

  const [ro] = useState(
    () => new ResizeObserver(
      ([entry]) => void set(entry.target)
    )
  );
  useEffect(
    () => {
      if (fixed) return;
      if (!ref.current) return;

      if (useWindow) {
        const catchResize = () => set(ref.current);
        set(ref.current);
        window.addEventListener('resize', catchResize);
        return () => window.removeEventListener('resize', catchResize);
      }

      set(ref.current);
      ro.observe(ref.current);
      return () => {
        ro.disconnect();
      };
    },
    [ref.current, fixed, useWindow, set]
  );
  return [{ ...!fixed && ({ ref: setRef }) }, bounds, ref];
};
