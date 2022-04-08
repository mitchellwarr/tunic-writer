import { forwardRef } from 'react';
import classNames from 'classnames';
import './Row.scss';

export const RowItem = ({
  children,
  right,
  bottom,
  flexible,
  inflexible,
  column,
  className = '',
  style,
  ...props
}) => (
  <div
    {...props}
    className={
      classNames(
        'system-layout-row__item',
        {
          [className]: className,
          'system-layout-row__item--layout-row': !column,
          'system-layout-row__item--layout-column': column,
          'system-layout-row__item--flexible': flexible,
          'system-layout-row__item--inflexible': inflexible,
          'system-layout-row__item--right': right,
          'system-layout-row__item--bottom': bottom
        }
      )
    }
    style={style}
  >
    {children}
  </div>
);

export const Row = forwardRef((props, ref) => {
  const {
    children,
    wrap,
    center,
    flexible,
    className = '',
    style = {},
    innerStyle = {},
    spacing: propsSpacing,
    alignItems,
    justifyContent,

    ...restProps
  } = props;

  const spacing = style.spacing || propsSpacing;

  return (
    <div
      className={
        classNames(
          'system-layout-row__wrapper',
          { 'system-layout-row__wrapper--flexible': flexible }
        )
      }
      style={style}
      ref={ref}
      {...restProps}
    >
      <div
        className={
          classNames(
            className,
            'system-layout-row',
            `system-layout-row--spacing-${spacing}`,
            {
              'system-layout-row--wrap': wrap,
              'system-layout-row--center': center
            }
          )
        }
        style={{
          alignItems,
          justifyContent,
          ...innerStyle
        }}
      >
        {children}
      </div>
    </div>
  );
});
