import { RUNE_LABEL } from './Enum';
import { RuneContainer } from './RuneContainer';
import './RunePad.scss';

const LINES = Object.entries(RUNE_LABEL)
  .map(([key, label]) => ({ key, label }));

export const RunePad = (props) => {
  const {
    rune,
    onRuneChange,
    onRuneInsert,
    onRuneDelete,
  } = props;
  
  return (
    <RuneContainer
      onRuneInsert={onRuneInsert}
      onRuneDelete={onRuneDelete}
      selectedKeys={rune}
      autoFocus={true}
      onSelectionChange={onRuneChange}
      shouldFocusOnHover={true}
      shouldFocusWrap={true}
      selectionMode={'multiple'}
      disallowEmptySelection={false}
      items={LINES}
    />
  );
};
