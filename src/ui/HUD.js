export class HUD {
  constructor() {
    this.modeBadge = document.getElementById('mode-badge');
    this.clockDisplay = document.getElementById('clock-display');
    this.toggleTimeBtn = document.getElementById('toggle-time-btn');
    this.interactionPrompt = document.getElementById('interaction-prompt');
    this.speedoContainer = document.getElementById('speedo-container');
    this.speedVal = document.getElementById('speed-val');
    this.toastMessage = document.getElementById('toast-message');
    this.viewModeLabel = document.getElementById('view-mode-label');
    this.gpsWidget = document.getElementById('gps-nav-widget');
    this.gpsIcon = document.getElementById('gps-icon');
    this.gpsText = document.getElementById('gps-text');
    this.gpsArrow = document.getElementById('gps-arrow');

    this.controlsModal = document.getElementById('controls-modal');
    this.isControlsOpen = false;

    this.initClock();
    this.initControlsModal();
  }

  // Real local device system time!
  initClock() {
    const updateTime = () => {
      if (!this.clockDisplay) return;
      const now = new Date();
      this.clockDisplay.textContent = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
    };

    updateTime();
    setInterval(updateTime, 1000);
  }

  initControlsModal() {
    const toggleBtn = document.getElementById('toggle-controls-btn');
    const closeBtn = document.getElementById('close-controls-btn');
    const dismissBtn = document.getElementById('dismiss-controls-btn');

    const handleClose = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      this.toggleControls(false);
    };

    if (toggleBtn) toggleBtn.addEventListener('click', () => this.toggleControls());
    if (closeBtn) {
      closeBtn.addEventListener('click', handleClose);
      closeBtn.addEventListener('pointerdown', handleClose);
      closeBtn.addEventListener('touchend', handleClose);
    }
    if (dismissBtn) {
      dismissBtn.addEventListener('click', handleClose);
      dismissBtn.addEventListener('pointerdown', handleClose);
      dismissBtn.addEventListener('touchend', handleClose);
    }

    // Close on backdrop click (outside card)
    if (this.controlsModal) {
      this.controlsModal.addEventListener('click', (e) => {
        if (e.target === this.controlsModal) {
          this.toggleControls(false);
        }
      });
      this.controlsModal.addEventListener('touchend', (e) => {
        if (e.target === this.controlsModal) {
          this.toggleControls(false);
        }
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.code === 'KeyH') {
        this.toggleControls();
      } else if (e.code === 'Escape' && this.isControlsOpen) {
        this.toggleControls(false);
      }
    });
  }

  toggleControls(force = null) {
    if (!this.controlsModal) return;
    this.isControlsOpen = (force !== null) ? force : !this.isControlsOpen;
    if (this.isControlsOpen) {
      this.controlsModal.classList.remove('controls-modal-hidden');
    } else {
      this.controlsModal.classList.add('controls-modal-hidden');
    }
  }

  updateViewMode(mode) {
    if (!this.viewModeLabel) return;
    const labels = { chase: 'Chase', free: 'Free', topDown: 'Top' };
    this.viewModeLabel.textContent = labels[mode] || mode;
  }

  updateGps(gpsData, playerAngle = 0) {
    if (!this.gpsWidget || !gpsData) return;
    const targetName = gpsData.name.split(' ')[1] || 'Target';
    const distText = `${targetName}: ${gpsData.distance}m`;

    if (this._lastGpsText !== distText) {
      this._lastGpsText = distText;
      if (this.gpsIcon && this.gpsIcon.textContent !== gpsData.icon) {
        this.gpsIcon.textContent = gpsData.icon || '✈️';
      }
      if (this.gpsText) this.gpsText.textContent = distText;
    }

    if (this.gpsArrow) {
      let relativeAngle = gpsData.angle - playerAngle;
      const deg = Math.round((relativeAngle * 180) / Math.PI);
      if (this._lastGpsDeg !== deg) {
        this._lastGpsDeg = deg;
        this.gpsArrow.style.transform = `rotate(${deg}deg)`;
      }
    }
  }

  setMode(mode) {
    if (!this.modeBadge) return;
    if (mode === 'vehicle') {
      this.modeBadge.textContent = 'Drive';
      this.speedoContainer.classList.remove('hidden');
    } else {
      this.modeBadge.textContent = 'Explore';
      this.speedoContainer.classList.add('hidden');
    }
  }

  showPrompt(htmlText) {
    if (!this.interactionPrompt) return;
    if (this._lastPromptHtml !== htmlText) {
      this._lastPromptHtml = htmlText;
      const span = this.interactionPrompt.querySelector('.prompt-text');
      if (span) span.innerHTML = htmlText;
    }
    this.interactionPrompt.classList.remove('hidden');
  }

  showInteraction() {
    this.showPrompt('Click or press <kbd>F</kbd> to enter vehicle');
  }

  hideInteraction() {
    if (!this.interactionPrompt) return;
    this._lastPromptHtml = '';
    this.interactionPrompt.classList.add('hidden');
  }

  updateSpeed(speedKmh) {
    if (!this.speedVal) return;
    if (this._lastSpeed !== speedKmh) {
      this._lastSpeed = speedKmh;
      this.speedVal.textContent = speedKmh;
    }
  }

  showToast(message, duration = 3200) {
    if (!this.toastMessage) return;
    this.toastMessage.innerHTML = message;
    this.toastMessage.style.visibility = 'visible';
    this.toastMessage.style.opacity = '1';
    this.toastMessage.style.transform = 'translate(-50%, 0)';

    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.toastMessage.style.opacity = '0';
      this.toastMessage.style.transform = 'translate(-50%, -14px)';
      setTimeout(() => {
        if (this.toastMessage && this.toastMessage.style.opacity === '0') {
          this.toastMessage.style.visibility = 'hidden';
        }
      }, 260);
    }, duration);
  }
}
