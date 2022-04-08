import { useRef } from 'react';
import cn from 'classnames';
import { useNumberField } from '@react-aria/numberfield';
import { useNumberFieldState } from '@react-stately/numberfield';
import { useLocale } from '@react-aria/i18n';
import { useButton } from '@react-aria/button';
import './NumberInput.scss';

export const NumberInput = (props) => {
  const {
    className,
    value,
    style,
    label,
    onSubmit,
    ...rest
  } = props;

  const { locale } = useLocale();
  const state = useNumberFieldState({
    ...rest,
    label,
    onChange: onSubmit,
    value,
    locale
  });

  const inputRef = useRef();
  const incrRef = useRef();
  const decRef = useRef();
  const {
    labelProps,
    groupProps,
    inputProps,
    incrementButtonProps,
    decrementButtonProps
  } = useNumberField(
    {
      value,
      label,
      ...rest
    },
    state,
    inputRef
  );

  const { buttonProps: incrementProps } = useButton(incrementButtonProps, incrRef);
  const { buttonProps: decrementProps } = useButton(decrementButtonProps, decRef);

  return (
    <div
      className={cn(
        'number-input',
        className
      )}
      style={style}
    >
      {label && (
        <label
          className={'number-input__label'}
          {...labelProps}
        >
          {label}
        </label>
      )}
      <div
        className={'number-input__group'}
        {...groupProps}
      >
        <input
          className={'number-input__input'}
          {...inputProps}
          ref={inputRef}
        />
        <div
          className={'number-input__buttons'}
        >
          <button {...incrementProps} ref={decRef}>
            +
          </button>
          <button {...decrementProps} ref={incrRef}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};
