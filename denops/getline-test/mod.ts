import { start } from "https://deno.land/x/denops_std@v0.5/mod.ts";

start(async (vim) => {
  vim.register({
    async benchmarkGetLines(): Promise<void> {
      console.log("1000");
      await vim.call("getline", 1, 1000) as string[];
      console.log("2000");
      await vim.call("getline", 1, 2000) as string[];
      console.log("5000");
      await vim.call("getline", 1, 5000) as string[];
      console.log("10000");
      await vim.call("getline", 1, 10000) as string[];
      console.log("all");
      await vim.call("getline", 1, "$") as string[];
      console.log("complete");
    },
  });

  console.log(`${vim.name} has loaded`);
});
