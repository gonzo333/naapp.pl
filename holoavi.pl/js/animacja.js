const ICON_MUTED = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`;
const ICON_UNMUTED = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`;

export function initHologramAnimation() {
  const PATH_TALKING_VIDEO = "/assets/animation-start.webm";
  const PATH_IDLE_VIDEO = "/assets/animation-loop.webm";

  const container = document.getElementById("hologram-container");
  const statusText = document.getElementById("status-text");
  const laserLine = document.getElementById("laser-line");
  const muteBtn = document.getElementById("muteToggle");

  const staticImg = document.getElementById("avatar-static-img");
  const talkingVideo = document.getElementById("avatar-talking-video");
  const idleVideo = document.getElementById("avatar-idle-video");
  const talkingSource = document.getElementById("talking-source");
  const idleSource = document.getElementById("idle-source");

  if (
    !container ||
    !talkingVideo ||
    !idleVideo ||
    !staticImg ||
    !talkingSource ||
    !idleSource
  )
    return;

  const preventContext = (e) => e.preventDefault();
  talkingVideo.addEventListener("contextmenu", preventContext);
  idleVideo.addEventListener("contextmenu", preventContext);

  talkingVideo.muted = true;
  idleVideo.muted = true;

  if (muteBtn) {
    muteBtn.innerHTML = ICON_MUTED;
    muteBtn.addEventListener("click", () => {
      const newState = !talkingVideo.muted;
      talkingVideo.muted = newState;
      idleVideo.muted = newState;
      muteBtn.innerHTML = newState ? ICON_MUTED : ICON_UNMUTED;
    });
  }

  statusText.innerText = "Ładowanie awatara...";

  function startSequence() {
    statusText.innerText = "Budowanie awatara z obrazka...";

    if (laserLine) {
      laserLine.style.display = "block";
      laserLine.style.animation = "laserScanAnimation 4s infinite ease-in-out";
    }

    talkingSource.src = PATH_TALKING_VIDEO;
    idleSource.src = PATH_IDLE_VIDEO;

    talkingVideo.load();
    idleVideo.load();

    talkingVideo.oncanplaythrough = () => {
      talkingVideo.oncanplaythrough = null;

      setTimeout(() => {
        statusText.innerText = "Inicjalizacja strumienia...";

        setTimeout(() => {
          if (laserLine) laserLine.style.display = "none";
          staticImg.classList.remove("scanning");

          statusText.innerText = "Awatar aktywny (Online)";
          staticImg.classList.remove("active");
          talkingVideo.classList.add("active");

          talkingVideo.play().catch((err) => console.log(err));
        }, 600);
      }, 2500);
    };
  }

  if (staticImg.complete && staticImg.naturalHeight !== 0) {
    startSequence();
  } else {
    staticImg.onload = startSequence;
    staticImg.onerror = startSequence;
  }

  talkingVideo.ontimeupdate = () => {
    const timeLeft = talkingVideo.duration - talkingVideo.currentTime;

    if (timeLeft > 0 && timeLeft < 0.3) {
      talkingVideo.ontimeupdate = null;

      idleVideo
        .play()
        .then(() => {
          talkingVideo.classList.remove("active");
          idleVideo.classList.add("active");
          statusText.innerText = "Oczekiwanie na Twój głos.";

          idleVideo.loop = false;
          idleVideo.ontimeupdate = () => {
            if (
              idleVideo.duration &&
              idleVideo.duration - idleVideo.currentTime < 0.2
            ) {
              idleVideo.currentTime = 0;
              console.log("hit ontimeupdate: ", idleVideo.ontimeupdate);
            }
          };
        })
        .catch((err) =>
          console.log("Gładkie przejście pętli zablokowane:", err),
        );
    }
  };

  talkingVideo.onended = () => {
    if (!idleVideo.classList.contains("active")) {
      statusText.innerText = "Oczekiwanie na Twój głos.";
      talkingVideo.classList.remove("active");
      idleVideo.classList.add("active");
      idleVideo.play();
    }
  };

  return function cleanup() {
    talkingVideo.removeEventListener("contextmenu", preventContext);
    idleVideo.removeEventListener("contextmenu", preventContext);
    talkingVideo.ontimeupdate = null;
    idleVideo.ontimeupdate = null;
    talkingVideo.pause();
    idleVideo.pause();
  };
}
