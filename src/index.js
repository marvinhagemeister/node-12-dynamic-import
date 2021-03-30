(async () => {
  const mod = await import("./foo.mjs");
  const mod2 = await import("./bar.mjs?t=123");
  const mod3 = await import("./cjs.js");
  const mod4 = await import("./cjs2.js?t=123");
  console.log(mod.value, mod2.value, mod3.default.value, mod4.default.value);
})();
