import { useRef } from 'react';
import classNames from 'classnames';
import { useButton } from 'react-aria';
import './Button.scss';

export const Button = (props) => {
  const { style } = props;
  const ref = useRef();
  const {
    buttonProps,
    isPressed
  } = useButton(props, ref);
  const { children } = props;

  return (
    <button
      className={
        classNames(
          'system-button',
          {
            'system-button--pressed': isPressed
          }
        )
      }
      {...buttonProps}
      ref={ref}
      style={style}
    >
      {children}
    </button>
  );
};
