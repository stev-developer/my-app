export const triggerConfetti = () => {
  import("canvas-confetti").then((confetti) => {
    confetti.create(document.getElementById("confetti-canvas"), {
      resize: true,
      useWorker: true,
    })({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
    });
  });
};
