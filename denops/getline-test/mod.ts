import { start } from "https://deno.land/x/denops_std@v0.3/mod.ts";

start(async (vim) => {
  vim.register({
    async benchmarkGetLines(): Promise<void> {
      const start = Date.now();
      const content = await vim.call("getline", 1, "$") as string[];
      const end = Date.now();
      const diff = end - start;
      await vim.execute("echomsg printf('%s %s %s %s', s, e, d, c)", {
        s: start,
        e: end,
        d: diff,
        c: content.length,
      });
    },
  });

  console.log(`${vim.name} has loaded`);
});
