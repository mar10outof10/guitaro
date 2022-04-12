import * as Tone from "tone";

const initTone = async () => {
  await Tone.start();
};

const playFrequency = (frequency, volume) => {
  const audioNode = new Tone.Synth();
  const vol = new Tone.Volume(volume);
  audioNode.chain(vol, Tone.Destination);
  audioNode.triggerAttackRelease(frequency, "8n");
  setTimeout(() => audioNode.dispose(), 1000);
};

export { playFrequency, initTone };
