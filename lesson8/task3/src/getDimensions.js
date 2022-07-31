export default () => {
  const { innerWidth, innerHeight } = window;
  document.title = `${innerWidth}px - ${innerHeight}px`;

  return { width: innerWidth, height: innerHeight };
};
