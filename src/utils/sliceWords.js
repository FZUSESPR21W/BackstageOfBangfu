const sliceWords = (text, num) =>
  text.length > num ? text.slice(0, num) + "..." : text;

export { sliceWords };
