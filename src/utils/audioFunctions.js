import * as Tone from "tone";

const playFrequency = (frequency, volume) => {
  const audioNode = new Tone.Synth();
  const vol = new Tone.Volume(volume);
  audioNode.chain(vol, Tone.Destination);
  audioNode.triggerAttackRelease(frequency, "8n");
};

export { playFrequency };
