import { serve } from "https://deno.land/std@0.123.0/http/server.ts";

const port = 10000;

const handler = (request: Request): Response => {
  let body = "Hello from Deno!\n\n";
  body += "Your user-agent is:\n\n";
  body += request.headers.get("user-agent") || "Unknown";

  return new Response(body, { status: 200 });
};

console.log(`HTTP webserver running on port ${port}.`);
await serve(handler, { hostname: "0.0.0.0", port: port });
