const setClsPrefixHOC =
  (prefix) =>
  (...names) =>
    [prefix, ...names].join("-");

export { setClsPrefixHOC };
