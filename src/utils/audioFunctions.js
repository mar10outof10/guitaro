import * as Tone from "tone";

const playFrequency = (frequency) => {
  const audioNode = new Tone.Synth().toDestination();
  audioNode.triggerAttackRelease(frequency, "8n");
};

export { playFrequency };
