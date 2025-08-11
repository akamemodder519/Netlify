
// Create cash sound effect using Web Audio API
function createCashSound() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  
  // Create cash register sound effect
  const oscillator1 = audioContext.createOscillator();
  const oscillator2 = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator1.connect(gainNode);
  oscillator2.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // First tone (ding)
  oscillator1.frequency.setValueAtTime(800, audioContext.currentTime);
  oscillator1.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
  
  // Second tone (harmonics)
  oscillator2.frequency.setValueAtTime(1600, audioContext.currentTime);
  oscillator2.frequency.exponentialRampToValueAtTime(2400, audioContext.currentTime + 0.1);
  
  // Volume envelope
  gainNode.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
  
  oscillator1.start(audioContext.currentTime);
  oscillator2.start(audioContext.currentTime);
  oscillator1.stop(audioContext.currentTime + 0.3);
  oscillator2.stop(audioContext.currentTime + 0.3);
}

window.playCashSound = createCashSound;
