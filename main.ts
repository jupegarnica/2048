import { serveDir } from "@std/http/file-server";

Deno.serve((req) => {
  const pathname = new URL(req.url).pathname;

  // Do dynamic responses
  return new Response();
});
