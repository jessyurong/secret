/**
 * Audio Synthesizer & Music Controller using Web Audio API
 * Plays precisely at the final "hugot" scene for maximum impact!
 */

class SoundController {
  constructor() {
    this.audioCtx = null;
    this.isMuted = false;
    this.bgMusicEl = null;
    this.activeOscillators = [];
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.bgMusicEl) {
      this.bgMusicEl.muted = this.isMuted;
    }
    if (this.isMuted) {
      this.stopAll();
    }
    return this.isMuted;
  }

  // Dramatic, emotional hugot chord progression with gentle ambient arpeggios
  playFinalHugotSound() {
    if (this.isMuted) return;
    this.init();

    // If custom audio file exists, try playing it
    if (this.bgMusicEl) {
      const playPromise = this.bgMusicEl.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If no local mp3 file is provided or autoplay prevented, play synthesized melody!
          this.playSynthesizedHugotMelody();
        });
      }
    } else {
      this.playSynthesizedHugotMelody();
    }
  }

  playSynthesizedHugotMelody() {
    if (!this.audioCtx) return;
    this.stopAll();

    try {
      const now = this.audioCtx.currentTime;

      // Romantic melancholic notes (A Minor progression: E4, G4, A4, C5, B4, A4, F4, E4)
      const melody = [
        { freq: 329.63, time: 0.0, dur: 0.7 }, // E4
        { freq: 392.00, time: 0.7, dur: 0.7 }, // G4
        { freq: 440.00, time: 1.4, dur: 1.2 }, // A4
        { freq: 523.25, time: 2.6, dur: 0.8 }, // C5
        { freq: 493.88, time: 3.4, dur: 0.8 }, // B4
        { freq: 440.00, time: 4.2, dur: 1.4 }, // A4
        { freq: 349.23, time: 5.6, dur: 1.0 }, // F4
        { freq: 329.63, time: 6.6, dur: 2.5 }  // E4 (fade out)
      ];

      // Bass pad drone for warmth
      const bassNotes = [220.00, 174.61, 220.00]; // A3, F3, A3
      bassNotes.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 2.8);

        gain.gain.setValueAtTime(0.001, now + idx * 2.8);
        gain.gain.linearRampToValueAtTime(0.12, now + idx * 2.8 + 0.6);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 2.8 + 2.7);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + idx * 2.8);
        osc.stop(now + idx * 2.8 + 2.8);
        this.activeOscillators.push(osc);
      });

      // Lead melody
      melody.forEach(note => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(note.freq, now + note.time);

        gain.gain.setValueAtTime(0.001, now + note.time);
        gain.gain.linearRampToValueAtTime(0.18, now + note.time + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + note.time + note.dur);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + note.time);
        osc.stop(now + note.time + note.dur + 0.05);
        this.activeOscillators.push(osc);
      });

    } catch (e) {
      console.warn('Audio synthesized melody error:', e);
    }
  }

  stopAll() {
    if (this.bgMusicEl) {
      this.bgMusicEl.pause();
      this.bgMusicEl.currentTime = 0;
    }
    this.activeOscillators.forEach(osc => {
      try { osc.stop(); } catch (e) {}
    });
    this.activeOscillators = [];
  }
}

export const sound = new SoundController();

