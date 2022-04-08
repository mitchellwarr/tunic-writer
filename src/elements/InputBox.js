import { useCallback, useEffect, useRef, useState } from 'react';
import { useTextField } from '@react-aria/textfield';

export const InputBox = ({
  className,
  value: propsValue,
  style,
  onSubmit,
  ...rest
}) => {

  const [value, setValue] = useState(() => propsValue);
  
  useEffect(
    () => setValue(propsValue),
    [propsValue]
  );
  
  const onKeyUp = useCallback(
    ({ key }) => key == 'Enter' && onSubmit(value),
    [onSubmit, value]
  );

  const onBlur = useCallback(
    () => onSubmit(value),
    [onSubmit, value]
  );

  const ref = useRef();
  const {
    inputProps
  } = useTextField(
    {
      value,
      onBlur,
      onKeyUp,
      onChange: setValue,
      ...rest
    },
    ref
  );

  return (
    <input
      className={className}
      type={'text'}
      style={style}
      {...inputProps}
    />
  );
};
