import { useRef, useMemo } from 'react';
import classNames from 'classnames';
import {
  mergeProps,
  useHover,
  useFocusRing,
  useListBox,
} from 'react-aria';
import {
  useListState,
  Item
} from 'react-stately';
import { RuneLine } from './RuneLine';
import {
  RUNE_KEY,
  GET_PARTS_OF_RUNE
} from './Enum';
import { RuneControls } from './RuneControls';

const CHILDREN_MAPPER = ({ key, label }) => <Item key={key} >{label}</Item>;

export const RuneContainer = (props) => {
  const {
    selectedKeys,
    onRuneInsert,
    onRuneDelete,
  } = props;

  const {
    vowel,
    consonant
  } = useMemo(
    () => GET_PARTS_OF_RUNE(selectedKeys),
    [selectedKeys]
  );

  let label = 'Set Rune';
  if (vowel || consonant) {
    const { letter: vowel_letter = '' } = vowel || {};
    const { letter: consonant_letter = '' } = consonant || {};
    label = selectedKeys.has(RUNE_KEY.SWAP)
      ? `${vowel_letter} ${consonant_letter}`
      : `${consonant_letter} ${vowel_letter}`;
  }

  const state = useListState({
    ...props,
    label,
    children: CHILDREN_MAPPER
  });

  const ref = useRef();
  const {
    listBoxProps,
    labelProps
  } = useListBox(
    {
      ...props,
      label,
      children: CHILDREN_MAPPER
    },
    state,
    ref
  );

  const {
    hoverProps,
    isHovered
  } = useHover({});

  const {
    isFocused,
    isFocusVisible,
    focusProps
  } = useFocusRing({ within: true });

  const topConsonant = (
    selectedKeys.has(RUNE_KEY.CTL)
    || selectedKeys.has(RUNE_KEY.CTT)
    || selectedKeys.has(RUNE_KEY.CTR)
  );
  const bottomConsonant = (
    selectedKeys.has(RUNE_KEY.CBL)
    || selectedKeys.has(RUNE_KEY.CBB)
    || selectedKeys.has(RUNE_KEY.CBR)
  );
  const spine = topConsonant && bottomConsonant;

  return (
    <div
      className={
        classNames(
          'rune-pad',
          {
            'rune-pad--focused': (isFocused && isFocusVisible) || isHovered
          }
        )
      }
      {...mergeProps(focusProps, hoverProps)}
    >
      <ul
        {...listBoxProps}
        ref={ref}
        className={'rune-pad__list'}
      >
        {spine && (
          <div className={'rune-pad__line rune-pad__line--spine'} />
        )}
        {[...state.collection].map((item) => (
          <RuneLine
            key={item.key}
            item={item}
            state={state}
          />
        ))}

        <div className={'rune-pad__line rune-pad__line--window-blocker'} />
        {selectedKeys.size > 0 && (
          <div className={'rune-pad__line rune-pad__line--window-black'} />
        )}
      </ul>
      <RuneControls
        onRuneInsert={onRuneInsert}
        onRuneDelete={onRuneDelete}
      />
      <div
        className={'rune-pad__label'}
        {...labelProps}
      >
        <div>{label}</div>
        <div className={'rune-pad__label-description'} >
          {vowel && (<div>{vowel.description}</div>)}
          {consonant && (<div>{consonant.description}</div>)}
        </div>
      </div>
    </div>
  );
};
