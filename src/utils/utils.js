export function getIsDesktop(size) {
  return window.matchMedia(`(min-width: ${size})`).matches;
}

export function triggerOnSizeChange(fn) {
  window.addEventListener('resize', fn);
}