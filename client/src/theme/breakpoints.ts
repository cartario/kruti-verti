

export default function createBreakpoints(breakpoints:  any) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values = {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
    unit = 'px',
    step = 5,
    ...other
  } = breakpoints;

  const keys = Object.keys(values);

  function up(key: string | number) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }

  function down(key: string | number) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }

  function between(start: string | number, end: string) {
    const endIndex = keys.indexOf(end);

    return (
      `@media (min-width:${
        typeof values[start] === 'number' ? values[start] : start
      }${unit}) and `
      + `(max-width:${
        (endIndex !== -1 && typeof values[keys[endIndex]] === 'number'
          ? values[keys[endIndex]]
          : end)
        - step / 100
      }${unit})`
    );
  }

  function only(key: string) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }

    return up(key);
  }

  function width(key: string | number) {
    return values[key];
  }

  return {
    keys,
    values,
    up,
    down,
    between,
    only,
    width,
    ...other,
  };
}
