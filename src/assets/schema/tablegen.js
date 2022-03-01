// run in node, console output is js object for a frequency table

let freq = `A1 55.00 Bb1 58.27 B1 61.74 C2 65.41 Db2 69.30 D2 73.42 Eb2 77.78 E2 82.41 F2 87.31 Gb2 92.50 G2 98.00 Ab2 103.83 A2 110.00 Bb2 116.54 B2 123.47 C3 130.81 Db3 138.59 D3 146.83 Eb3 155.56 E3 164.81 F3 174.61 Gb3 185.00 G3 196.00 Ab3 207.65 A3 220.00 Bb3 233.08 B3 246.94 C4 261.63 Db4 277.18 D4 293.66 Eb4 311.13 E4 329.63 F4 349.23 Gb4 369.99 G4 392.00 Ab4 415.30 A4 440.00 Bb4 466.16 B4 493.88 C5 523.25 Db5 554.37 D5 587.33 Eb5 622.25 E5 659.25 F5 698.46 Gb5 739.99 G5 783.99 Ab5 830.61 A5 880.00`;

let freqList = freq.split(" ");

for (let i = 0; i < freqList.length; i += 2) {
  console.log(
    `"${freqList[i]}":
    {
      low: ${
        i > 0
          ? (
              (parseFloat(freqList[i + 1]) + parseFloat(freqList[i - 1])) /
              2
            ).toFixed(2)
          : 53
      },
      high: ${
        i < freqList.length - 2
          ? (
              (parseFloat(freqList[i + 1]) + parseFloat(freqList[i + 3])) /
              2
            ).toFixed(2)
          : 900
      },
    },`
  );
}
