export function getIsDesktop(size) {
  console.log('get is desktop value',  window.matchMedia(`(min-width: ${size})`).matches)
  return window.matchMedia(`(min-width: ${size})`).matches;
}

export function triggerOnSizeChange(fn) {
  window.addEventListener('resize', fn);
}