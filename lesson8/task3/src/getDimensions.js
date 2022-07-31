export default () => {
  const { innerWidth, innerHeight } = window;
  document.title = `${innerWidth} x ${innerHeight}`;

  return { width: innerWidth, height: innerHeight };
};
