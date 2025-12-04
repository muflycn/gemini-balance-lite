import { handleRequest } from "./handle_request.js";

async function denoHandleRequest(req: Request): Promise<Response> {
  const url = new URL(req.url);
  console.log('Request URL:', req.url);
  return handleRequest(req);
};

const port = parseInt(Deno.env.get("PORT") || "8000");
Deno.serve({ port }, denoHandleRequest);