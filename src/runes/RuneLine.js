import { useRef } from 'react';
import classNames from 'classnames';
import {
  mergeProps,
  useHover,
  useFocusRing,
  useOption,
  VisuallyHidden
} from 'react-aria';

export const RuneLine = ({ item, state }) => {

  const ref = useRef();
  const {
    optionProps,
    isSelected,
    isDisabled,
    isPressed
  } = useOption(
    { key: item.key },
    state,
    ref
  );

  const {
    isFocused,
    isFocusVisible,
    focusProps
  } = useFocusRing({});

  const {
    hoverProps,
    isHovered
  } = useHover({});

  return (
    <li
      {...mergeProps(optionProps, focusProps, hoverProps)}
      className={
        classNames(
          'rune-pad__line',
          'rune-pad__line--selectable',
          `rune-pad__line--${item.key}`,
          {
            'rune-pad__line--selected': isSelected,
            'rune-pad__line--pressed': isPressed,
            'rune-pad__line--disabled': isDisabled,
            'rune-pad__line--hovered': isHovered,
            'rune-pad__line--focused': isFocusVisible && isFocused
          }
        )
      }
      ref={ref}
    >
      <VisuallyHidden>{item.rendered}</VisuallyHidden>
    </li>
  );
};
