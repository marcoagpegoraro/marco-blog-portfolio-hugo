(() => {
  const cue = document.querySelector('.hero-scroll-cue');

  if (!cue) return;

  let idleTimer;
  const inFirstScreen = () => window.scrollY < window.innerHeight;
  const hide = () => cue.classList.remove('is-visible');
  const show = () => {
    if (inFirstScreen()) cue.classList.add('is-visible');
  };
  const scheduleAfterIdle = () => {
    window.clearTimeout(idleTimer);
    if (inFirstScreen()) idleTimer = window.setTimeout(show, 5000);
  };
  const handleScroll = () => {
    hide();
    scheduleAfterIdle();
  };

  idleTimer = window.setTimeout(show, 1000);
  window.addEventListener('scroll', handleScroll, { passive: true });
  cue.addEventListener('click', hide);
})();
