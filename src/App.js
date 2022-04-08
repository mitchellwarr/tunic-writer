import { useCallback, useMemo, useState } from 'react';
import { useLocale } from 'react-aria';
import { Row, RowItem } from 'elements/Row';
import { Word } from './Word';
import { GET_PARTS_OF_RUNE, RUNE_KEY } from './runes/Enum';

const EDIT_WORD = (index, cb) => words => {
  words = [...words];
  words[index] = cb(words[index]);
  return words;
};

const EDIT_RUNE = (index, rune) => runes => {
  runes = [...runes];
  runes[index] = rune;
  return runes;
};

export const App = () => {
  const [words, setWords] = useState(
    // () => [new Set()]
    () => {
      let x = JSON.parse('[[["VTL","VTR","CTT","VL","CBB","CBR","VBL","VBR"],["CTT","CBB"],["CTT","CBL","CBR"]],[["CTT","CBL","VBL","VBR","CBR","CBB"],["CTT","CTR","CBL","CBB"]],[["VTL","VTR","CTL","CTR","VL","CBB","VBL"]],[["VTL","VTR","CTR","VL","CBL","VBL","CBB","VBR"],["VTL","CTT","VTR","CTR","CBR"],["CTT","CTR","CBL","CBB"]],[["VTL","CTL","VL","CBL","CBR","SWAP"]],[["VTL","VTR"]],[["VTL","CTL","VL","CBL","CBR","VBR"],["VTR","CTT","CBR"]],[["VTL","VTR","CTR","VL","CBL","VBL","CBB","VBR"]]]');
      return x.map(
        x => x.map(
          x => new Set(x)
        )
      );
    }
  );

  const onRuneChange = useCallback(
    (wordIndex, runeIndex) => rune => setWords(
      EDIT_WORD(
        wordIndex,
        EDIT_RUNE(
          runeIndex,
          rune
        )
      )
    ),
    [setWords]
  );
  
  const onRuneInsert = useCallback(
    (wordIndex, runeIndex) => () => setWords(
      EDIT_WORD(
        wordIndex,
        runes => [...runes.slice(0, runeIndex +1), new Set(), ...runes.slice(runeIndex +1)]
      )
    ),
    [setWords]
  );

  const onAddWord = useCallback(
    wordIndex => () => setWords(
      words => [...words.slice(0, wordIndex +1), [new Set()], ...words.slice(wordIndex +1)]
    ),
    [setWords]
  );

  const onRuneDelete = useCallback(
    (wordIndex, runeIndex) => () => setWords(
      words => {
        words = [...words];
        if (words[wordIndex].length == 1) {
          words = [...words.slice(0, wordIndex), ...words.slice(wordIndex +1)];
          return words;
        }
        let runes = words[wordIndex];
        words[wordIndex] = [...runes.slice(0, runeIndex), ...runes.slice(runeIndex +1)];
        return words;
      }
    ),
    [setWords]
  );

  const {
    locale,
    direction
  } = useLocale();

  const sentence = useMemo(
    () => words.map(
      runes => runes.map(
        rune => {
          const {
            vowel: { phonetic: vowel = '' } = {},
            consonant: { phonetic: consonant = '' } = {}
          } = GET_PARTS_OF_RUNE(rune);

          return rune.has(RUNE_KEY.SWAP)
            ? vowel+consonant
            : consonant+vowel;
        }
      ).join('')
    ).join(' '),
    [words]
  );

  return (
    <div lang={locale} dir={direction} >
      <div style={{ fontSize: '1.2em', marginBottom: 16 }} >{sentence}</div>
      <Row wrap spacing={24} alignItems={'flex-start'}>
        {words.map(
          (runes, wordIndex) => (
            <RowItem key={wordIndex} inflexible >
              <Word
                runes={runes}
                wordIndex={wordIndex}
                onRuneChange={onRuneChange}
                onRuneInsert={onRuneInsert}
                onRuneDelete={onRuneDelete}
                onAddWord={onAddWord}
              />
            </RowItem>
          )
        )}
      </Row>
    </div>
  );
};
