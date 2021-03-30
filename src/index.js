(async () => {
  const mod = await import("./foo.mjs");
  console.log(mod.foo);
})();
