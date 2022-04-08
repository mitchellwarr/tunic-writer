import { useState } from 'react';
import { makeRandomID } from 'lib/Utils';
import { NumberInput } from '../NumberInput';
import './Slider.scss';

export const Slider = ({
  style = {},
  value,
  onChange,
  label,
  min,
  max,
  step,
  ...rest
}) => {
  const [id] = useState(() => makeRandomID());
  return (
    <div
      className={'slider'}
      style={style}
    >
      <div
        className={'slider__label'}
        id={id}
      >
        {label}
      </div>
      <input
        className={'slider__slider'}
        type={'range'}
        value={value}
        onChange={({ target: { value } }) => onChange(parseFloat(value))}
        style={style.slider}
        step={step}
        min={min}
        max={max}
        {...rest}
      />
      <NumberInput
        className={'slider__input'}
        aria-labelledby={id}
        value={value || 0}
        onSubmit={onChange}
        style={style.input}
        step={step}
        minValue={min}
        maxValue={max}
      />
    </div>
  );
};

Slider.defaultProps = {
  onChange: () => {}
};
