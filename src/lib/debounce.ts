function debounce(fn: () => void, delay_ms: number) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (...args: Parameters<typeof fn>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay_ms);
  };
}

export default debounce;
