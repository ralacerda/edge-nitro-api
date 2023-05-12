export default eventHandler((event) => {
  // setResponseHeader(event, "Cache-Control", "public, max-age=604800");
  return { nitro: "Is Awesome!" };
});
