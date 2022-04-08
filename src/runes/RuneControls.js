import { VisuallyHidden } from 'react-aria';
import { Button } from 'elements/Button';

export const RuneControls = (props) => {
  const {
    onRuneInsert,
    onRuneDelete
  } = props;

  return (
    <div className={'rune-pad__control'}>
      <Button onPress={onRuneDelete}>
        <VisuallyHidden>Delete this rune</VisuallyHidden>
        <svg
          xmlns={'http://www.w3.org/2000/svg'}
          viewBox={'0 0 576 512'}
          aria-hidden={true}
          width={16}
          height={16}
        >
          <path
            stroke={'currentColor'}
            d={'M576 384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 256C0 247.5 3.372 239.4 9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64H512C547.3 64 576 92.65 576 128V384zM271 208.1L318.1 256L271 303C261.7 312.4 261.7 327.6 271 336.1C280.4 346.3 295.6 346.3 304.1 336.1L352 289.9L399 336.1C408.4 346.3 423.6 346.3 432.1 336.1C442.3 327.6 442.3 312.4 432.1 303L385.9 256L432.1 208.1C442.3 199.6 442.3 184.4 432.1 175C423.6 165.7 408.4 165.7 399 175L352 222.1L304.1 175C295.6 165.7 280.4 165.7 271 175C261.7 184.4 261.7 199.6 271 208.1V208.1z'}
          />
        </svg>
      </Button>
      <Button onPress={onRuneInsert} >
        <VisuallyHidden>Insert new rune</VisuallyHidden>
        <svg
          xmlns={'http://www.w3.org/2000/svg'}
          viewBox={'0 0 448 512'}
          aria-hidden={true}
          width={16}
          height={16}
        >
          <path
            stroke={'currentColor'}
            d={'M34.28 331.9c5.016 12.53 17.03 20.12 29.73 20.12c3.953 0 7.969-.7187 11.88-2.281l320-127.1C408 216.9 416 205.1 416 192s-7.969-24.85-20.11-29.72l-320-128c-16.47-6.594-35.05 1.406-41.61 17.84C27.72 68.55 35.7 87.17 52.11 93.73l245.7 98.28L52.11 290.3C35.7 296.9 27.72 315.5 34.28 331.9zM416 416H32c-17.67 0-32 14.31-32 31.99s14.33 32.01 32 32.01h384c17.67 0 32-14.32 32-32.01S433.7 416 416 416z'}
          />
        </svg>
      </Button>
    </div>
  );
};
