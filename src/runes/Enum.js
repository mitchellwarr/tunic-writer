export const RUNE_KEY = {
  VTR: 'VTR',
  VTL: 'VTL',
  VL: 'VL',
  VBL: 'VBL',
  VBR: 'VBR',
  CTL: 'CTL',
  CTT: 'CTT',
  CTR: 'CTR',
  CBL: 'CBL',
  CBB: 'CBB',
  CBR: 'CBR',
  SWAP: 'SWAP'
};

export const RUNE_LABEL = {
  [RUNE_KEY.VTL]: 'Vowel sound, top left',
  [RUNE_KEY.VTR]: 'Vowel sound, top right',
  [RUNE_KEY.CTL]: 'Consonant sound, top left',
  [RUNE_KEY.CTT]: 'Consonant sound, top directly',
  [RUNE_KEY.CTR]: 'Consonant sound, top right',
  [RUNE_KEY.VL]: 'Vowel sound, left',
  [RUNE_KEY.CBL]: 'Consonant sound, bottom left',
  [RUNE_KEY.CBB]: 'Consonant sound, bottom directly',
  [RUNE_KEY.CBR]: 'Consonant sound, bottom right',
  [RUNE_KEY.VBL]: 'Vowel sound, bottom left',
  [RUNE_KEY.VBR]: 'Vowel sound, bottom right',
  [RUNE_KEY.SWAP]: 'Set vowel sound first',
};

const RUNE_KEYS_KEY = (arr) => [...arr].sort().join(';');
export const GET_PARTS_OF_RUNE = rune => {
  if (!rune) return {};
  const keys = [...rune];
  if (!keys.length) return {};
  return {
    vowel: VOWEL[RUNE_KEYS_KEY(keys.filter(x => x[0] == 'V'))],
    consonant: CONSONANT[RUNE_KEYS_KEY(keys.filter(x => x[0] == 'C'))],
  };
};

const K = RUNE_KEY;
const VOWEL = {
  [RUNE_KEYS_KEY([K.VL, K.VTL, K.VTR])]: {
    letter: 'A',
    description: 'A (æ) (as in Glass)',
    phonetic: 'æ',
  },
  [RUNE_KEYS_KEY([K.VTL, K.VTR, K.VBL, K.VBR])]: {
    letter: 'AR',
    description: 'AR (ɑ:) (as in Arm)',
    phonetic: 'ɑ:',
  },
  [RUNE_KEYS_KEY([K.VTL, K.VL])]: {
    letter: 'AH',
    description: 'AH (ɒ) (as in Swan)',
    phonetic: 'ɒ',
  },
  [RUNE_KEYS_KEY([K.VTL])]: {
    letter: 'AY',
    description: 'AY (eɪ) (as in Bay)',
    phonetic: 'eɪ',
  },
  [RUNE_KEYS_KEY([K.VL, K.VBL, K.VBR])]: {
    letter: 'E',
    description: 'E (e) (as in End)',
    phonetic: 'e',
  },
  [RUNE_KEYS_KEY([K.VTL, K.VL, K.VBL, K.VBR])]: {
    letter: 'EE',
    description: 'EE (i:) (as in Bee)',
    phonetic: 'i:',
  },
  [RUNE_KEYS_KEY([K.VTL, K.VL, K.VBR])]: {
    letter: 'EER',
    description: 'EER (ɪəʳ) (as in Beer)',
    phonetic: 'ɪəʳ',
  },
  [RUNE_KEYS_KEY([K.VTL, K.VTR])]: {
    letter: 'EH',
    description: 'EH (ə) (as in The)',
    phonetic: 'ə',
  },
  [RUNE_KEYS_KEY([K.VL, K.VBR])]: {
    letter: 'ERE',
    description: 'ERE (eəʳ) (as in Air)',
    phonetic: 'eəʳ',
  },
  [RUNE_KEYS_KEY([K.VBL, K.VBR])]: {
    letter: 'I',
    description: 'I (ɪ) (as in Bit)',
    phonetic: 'ɪ',
  },
  [RUNE_KEYS_KEY([K.VTR])]: {
    letter: 'IE',
    description: 'IE (aɪ) (as in Guy)',
    phonetic: 'aɪ',
  },
  [RUNE_KEYS_KEY([K.VTR, K.VL, K.VBL, K.VBR])]: {
    letter: 'IR',
    description: 'IR (ɜ:ʳ) (as in Bird)',
    phonetic: 'ɜ:ʳ',
  },
  [RUNE_KEYS_KEY([K.VTL, K.VTR, K.VL, K.VBL, K.VBR])]: {
    letter: 'OH',
    description: 'OH (aʊ) (as in Toe)',
    phonetic: 'aʊ',
  },
  [RUNE_KEYS_KEY([K.VBL])]: {
    letter: 'OI',
    description: 'OI (ɔɪ) (as in Toy)',
    phonetic: 'ɔɪ',
  },
  [RUNE_KEYS_KEY([K.VTL, K.VTR, K.VL, K.VBL])]: {
    letter: 'OO',
    description: 'OO (u:) (as in Too)',
    phonetic: 'u:',
  },
  [RUNE_KEYS_KEY([K.VL, K.VBL])]: {
    letter: 'OU',
    description: 'OU (ʊ) (as in Wolf)',
    phonetic: 'ʊ',
  },
  [RUNE_KEYS_KEY([K.VBR])]: {
    letter: 'OW',
    description: 'OW (aʊ) (as in How)',
    phonetic: 'aʊ',
  },
  [RUNE_KEYS_KEY([K.VTL, K.VTR, K.VL, K.VBR])]: {
    letter: 'ORE',
    description: 'ORE (ʊəʳ) (as in Your)',
    phonetic: 'ʊəʳ',
  },
};
 
const CONSONANT = {
  [RUNE_KEYS_KEY([K.CTT, K.CBR])]: {
    letter: 'B',
    description: 'B (b) (as in Baby)',
    phonetic: 'b',
  },
  [RUNE_KEYS_KEY([K.CTL, K.CBB])]: {
    letter: 'CH',
    description: 'CH (tʃ) (as in Chat)',
    phonetic: 'tʃ',
  },
  [RUNE_KEYS_KEY([K.CTT, K.CBL, K.CBR])]: {
    letter: 'D',
    description: 'D (d) (as in Dog)',
    phonetic: 'd',
  },
  [RUNE_KEYS_KEY([K.CTR, K.CBL, K.CBB])]: {
    letter: 'F',
    description: 'F (f) (as in Fox)',
    phonetic: 'f',
  },
  [RUNE_KEYS_KEY([K.CTR, K.CBR, K.CBB])]: {
    letter: 'G',
    description: 'G (g) (as in Gun)',
    phonetic: 'g',
  },
  [RUNE_KEYS_KEY([K.CTT, K.CBR, K.CBB])]: {
    letter: 'H',
    description: 'H (h) (as in Hop)',
    phonetic: 'h',
  },
  [RUNE_KEYS_KEY([K.CTT, K.CBL])]: {
    letter: 'J',
    description: 'J (dʒ) (as in Jam)',
    phonetic: 'dʒ',
  },
  [RUNE_KEYS_KEY([K.CTT, K.CTR, K.CBR])]: {
    letter: 'K',
    description: 'K (k) (as in Kart)',
    phonetic: 'k',
  },
  [RUNE_KEYS_KEY([K.CTT, K.CBB])]: {
    letter: 'L',
    description: 'L (l) (as in Live)',
    phonetic: 'l',
  },
  [RUNE_KEYS_KEY([K.CBL, K.CBR])]: {
    letter: 'M',
    description: 'M (m) (as in Man)',
    phonetic: 'm',
  },
  [RUNE_KEYS_KEY([K.CTL, K.CBL, K.CBR])]: {
    letter: 'N',
    description: 'N (n) (as in Net)',
    phonetic: 'n',
  },
  [RUNE_KEYS_KEY([K.CTL, K.CTT, K.CTR, K.CBL, K.CBB, K.CBR])]: {
    letter: 'NG',
    description: 'NG (ŋ) (as in Ring)',
    phonetic: 'ŋ',
  },
  [RUNE_KEYS_KEY([K.CTR, K.CBB])]: {
    letter: 'P',
    description: 'P (p) (as in Poppy)',
    phonetic: 'p',
  },
  [RUNE_KEYS_KEY([K.CTT, K.CTR, K.CBB])]: {
    letter: 'R',
    description: 'R (r) (as in Run)',
    phonetic: 'r',
  },
  [RUNE_KEYS_KEY([K.CTT, K.CTR, K.CBL, K.CBB])]: {
    letter: 'S',
    description: 'S (s) (as in Sit)',
    phonetic: 's',
  },
  [RUNE_KEYS_KEY([K.CTL, K.CTR, K.CBL, K.CBR, K.CBB])]: {
    letter: 'SH',
    description: 'SH (ʃ) (as in Shut)',
    phonetic: 'ʃ',
  },
  [RUNE_KEYS_KEY([K.CTL, K.CTR, K.CBB])]: {
    letter: 'T',
    description: 'T (t) (as in Tunic)',
    phonetic: 't',
  },
  [RUNE_KEYS_KEY([K.CTL, K.CTT, K.CTR, K.CBB])]: {
    letter: 'TH',
    description: 'TH (θ) (as in Thick)',
    phonetic: 'θ',
  },
  [RUNE_KEYS_KEY([K.CTT, K.CBL, K.CBB, K.CBR])]: {
    letter: 'TH',
    description: 'TH (ð) (as in This)',
    phonetic: 'ð',
  },
  [RUNE_KEYS_KEY([K.CTL, K.CTT, K.CBR])]: {
    letter: 'V',
    description: 'V (v) (as in Vine)',
    phonetic: 'v',
  },
  [RUNE_KEYS_KEY([K.CTL, K.CTR])]: {
    letter: 'W',
    description: 'W (w) (as in Wit)',
    phonetic: 'w',
  },
  [RUNE_KEYS_KEY([K.CTL, K.CTT, K.CBB])]: {
    letter: 'Y',
    description: 'Y (j) (as in You)',
    phonetic: 'j',
  },
  [RUNE_KEYS_KEY([K.CTL, K.CTT, K.CBB, K.CBR])]: {
    letter: 'Z',
    description: 'Z (z) (as in Zit)',
    phonetic: 'z',
  },
  [RUNE_KEYS_KEY([K.CTL, K.CTT, K.CTR, K.CBL, K.CBR])]: {
    letter: 'ZH',
    description: 'ZH (ʒ) (as in Azure)',
    phonetic: 'ʒ',
  },
};
