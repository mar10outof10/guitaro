const eStandardTuning = [
  { id: 1, frequency: 82.4 },
  { id: 2, frequency: 110.0 },
  { id: 3, frequency: 146.8 },
  { id: 4, frequency: 196.0 },
  { id: 5, frequency: 247.0 },
  { id: 6, frequency: 329.6 },
];

const ebStandardTuning = [
  { id: 1, frequency: 77.8 },
  { id: 2, frequency: 103.8 },
  { id: 3, frequency: 138.6 },
  { id: 4, frequency: 185.0 },
  { id: 5, frequency: 233.0 },
  { id: 6, frequency: 311.2 },
];

const dStandardTuning = [
  { id: 1, frequency: 73.4 },
  { id: 2, frequency: 98.0 },
  { id: 3, frequency: 130.8 },
  { id: 4, frequency: 174.6 },
  { id: 5, frequency: 220.0 },
  { id: 6, frequency: 293.6 },
];

const dropDTuning = [
  { id: 1, frequency: 73.4 },
  { id: 2, frequency: 110.0 },
  { id: 3, frequency: 146.8 },
  { id: 4, frequency: 196.0 },
  { id: 5, frequency: 247.0 },
  { id: 6, frequency: 329.6 },
];

const dropATuning = [
  { id: 1, frequency: 55.0 },
  { id: 2, frequency: 110.0 },
  { id: 3, frequency: 146.8 },
  { id: 4, frequency: 196.0 },
  { id: 5, frequency: 247.0 },
  { id: 6, frequency: 329.6 },
];

const openATuning = [
  { id: 1, frequency: 82.4 },
  { id: 2, frequency: 110.0 },
  { id: 3, frequency: 138.6 },
  { id: 4, frequency: 164.8 },
  { id: 5, frequency: 220.0 },
  { id: 6, frequency: 329.6 },
];

const openBTuning = [
  { id: 1, frequency: 61.8 },
  { id: 2, frequency: 92.6 },
  { id: 3, frequency: 123.4 },
  { id: 4, frequency: 185.0 },
  { id: 5, frequency: 247.0 },
  { id: 6, frequency: 311.0 },
];

const openCTuning = [
  { id: 1, frequency: 65.4 },
  { id: 2, frequency: 98.0 },
  { id: 3, frequency: 130.8 },
  { id: 4, frequency: 196.0 },
  { id: 5, frequency: 261.6 },
  { id: 6, frequency: 329.6 },
];

const openDTuning = [
  { id: 1, frequency: 73.4 },
  { id: 2, frequency: 110.0 },
  { id: 3, frequency: 146.8 },
  { id: 4, frequency: 185.0 },
  { id: 5, frequency: 220.0 },
  { id: 6, frequency: 293.6 },
];

const openETuning = [
  { id: 1, frequency: 82.4 },
  { id: 2, frequency: 123.4 },
  { id: 3, frequency: 164.8 },
  { id: 4, frequency: 207.6 },
  { id: 5, frequency: 247.0 },
  { id: 6, frequency: 329.6 },
];

const openFTuning = [
  { id: 1, frequency: 65.4 },
  { id: 2, frequency: 87.4 },
  { id: 3, frequency: 130.8 },
  { id: 4, frequency: 174.6 },
  { id: 5, frequency: 220.0 },
  { id: 6, frequency: 349.2 },
];

const openGTuning = [
  { id: 1, frequency: 73.4 },
  { id: 2, frequency: 98.0 },
  { id: 3, frequency: 146.8 },
  { id: 4, frequency: 196.0 },
  { id: 5, frequency: 247.0 },
  { id: 6, frequency: 293.6 },
];

const DADGADTuning = [
  { id: 1, frequency: 73.4 },
  { id: 2, frequency: 110.0 },
  { id: 3, frequency: 146.8 },
  { id: 4, frequency: 196.0 },
  { id: 5, frequency: 220.0 },
  { id: 6, frequency: 293.6 },
];

const freqTable = {
  A1: {
    freq: 55,
    low: 53,
    high: 56.64,
  },
  Bb1: {
    freq: 58.2,
    low: 56.64,
    high: 60.01,
  },
  B1: {
    freq: 61.74,
    low: 60.01,
    high: 63.58,
  },
  C2: {
    freq: 65.4,
    low: 63.58,
    high: 67.35,
  },
  Db2: {
    freq: 69.4,
    low: 67.35,
    high: 71.36,
  },
  D2: {
    freq: 73.4,
    low: 71.36,
    high: 75.6,
  },
  Eb2: {
    freq: 77.8,
    low: 75.6,
    high: 80.09,
  },
  E2: {
    freq: 82.4,
    low: 80.09,
    high: 84.86,
  },
  F2: {
    freq: 87.4,
    low: 84.86,
    high: 89.91,
  },
  Gb2: {
    freq: 92.6,
    low: 89.91,
    high: 95.25,
  },
  G2: {
    freq: 98,
    low: 95.25,
    high: 100.91,
  },
  Ab2: {
    freq: 103.8,
    low: 100.91,
    high: 106.91,
  },
  A2: {
    freq: 110,
    low: 106.91,
    high: 113.27,
  },
  Bb2: {
    freq: 116.6,
    low: 113.27,
    high: 120.0,
  },
  B2: {
    freq: 123.4,
    low: 120.0,
    high: 127.14,
  },
  C3: {
    freq: 130.8,
    low: 127.14,
    high: 134.7,
  },
  Db3: {
    freq: 138.6,
    low: 134.7,
    high: 142.71,
  },
  D3: {
    freq: 146.8,
    low: 142.71,
    high: 151.19,
  },
  Eb3: {
    freq: 155.6,
    low: 151.19,
    high: 160.19,
  },
  E3: {
    freq: 164.8,
    low: 160.19,
    high: 169.71,
  },
  F3: {
    freq: 174.6,
    low: 169.71,
    high: 179.81,
  },
  Gb3: {
    freq: 185,
    low: 179.81,
    high: 190.5,
  },
  G3: {
    freq: 196,
    low: 190.5,
    high: 201.82,
  },
  Ab3: {
    freq: 207.6,
    low: 201.82,
    high: 213.82,
  },
  A3: {
    freq: 220,
    low: 213.82,
    high: 226.54,
  },
  Bb3: {
    freq: 233,
    low: 226.54,
    high: 240.01,
  },
  B3: {
    freq: 247,
    low: 240.01,
    high: 254.28,
  },
  C4: {
    freq: 261.6,
    low: 254.28,
    high: 269.4,
  },
  Db4: {
    freq: 277.2,
    low: 269.4,
    high: 285.42,
  },
  D4: {
    freq: 293.6,
    low: 285.42,
    high: 302.39,
  },
  Eb4: {
    freq: 311,
    low: 302.39,
    high: 320.38,
  },
  E4: {
    freq: 329.6,
    low: 320.38,
    high: 339.43,
  },
  F4: {
    freq: 349.2,
    low: 339.43,
    high: 359.61,
  },
  Gb4: {
    freq: 370,
    low: 359.61,
    high: 381.0,
  },
  G4: {
    freq: 392,
    low: 381.0,
    high: 403.65,
  },
  Ab4: {
    freq: 415.4,
    low: 403.65,
    high: 427.65,
  },
  A4: {
    freq: 440,
    low: 427.65,
    high: 453.08,
  },
  Bb4: {
    freq: 466.2,
    low: 453.08,
    high: 480.02,
  },
  B4: {
    freq: 494,
    low: 480.02,
    high: 508.56,
  },
  C5: {
    freq: 523.2,
    low: 508.56,
    high: 538.81,
  },
  Db5: {
    freq: 554.4,
    low: 538.81,
    high: 570.85,
  },
  D5: {
    freq: 587.4,
    low: 570.85,
    high: 604.79,
  },
  Eb5: {
    freq: 622.2,
    low: 604.79,
    high: 640.75,
  },
  E5: {
    freq: 659.2,
    low: 640.75,
    high: 678.86,
  },
  F5: {
    freq: 698.4,
    low: 678.86,
    high: 719.23,
  },
  Gb5: {
    freq: 740,
    low: 719.23,
    high: 761.99,
  },
  G5: {
    freq: 784,
    low: 761.99,
    high: 807.3,
  },
  Ab5: {
    freq: 830.6,
    low: 807.3,
    high: 855.31,
  },
  A5: {
    freq: 880,
    low: 855.31,
    high: 900,
  },
};

export {
  freqTable,
  eStandardTuning,
  ebStandardTuning,
  dStandardTuning,
  dropDTuning,
  dropATuning,
  openATuning,
  openBTuning,
  openCTuning,
  openDTuning,
  openETuning,
  openFTuning,
  openGTuning,
  DADGADTuning,
};
