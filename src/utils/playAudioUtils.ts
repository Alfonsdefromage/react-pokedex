export const playAudio = (audioUrl: string) => {
  try {
    const audio = new Audio(audioUrl);
    console.log(audioUrl);
    audio.play().catch((error) => {
      console.error("Audio playback failed:", error);
    });
  } catch (error) {
    console.error("Error initializing audio:", error);
  }
};
