export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const isStaging = env.ENVIRONMENT === "staging";

    // Health check endpoint
    if (url.pathname === "/api/health") {
      return new Response(
        JSON.stringify({
          status: "ok",
          environment: env.ENVIRONMENT,
          site: env.SITE_NAME,
          timestamp: new Date().toISOString(),
        }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    // List R2 objects
    if (url.pathname === "/api/files") {
      try {
        const objects = await env.BUCKET.list();
        return new Response(
          JSON.stringify({
            count: objects.objects?.length || 0,
            objects: objects.objects || [],
          }),
          { headers: { "Content-Type": "application/json" } }
        );
      } catch (e) {
        return new Response(
          JSON.stringify({ error: e.message }),
          { status: 500, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    // D1 database query
    if (url.pathname === "/api/db") {
      try {
        const result = await env.DB.prepare("SELECT 1 as test").all();
        return new Response(
          JSON.stringify({
            success: result.success,
            results: result.results,
          }),
          { headers: { "Content-Type": "application/json" } }
        );
      } catch (e) {
        return new Response(
          JSON.stringify({ error: e.message }),
          { status: 500, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    // Preview page
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${env.SITE_NAME} - ${isStaging ? "Staging" : "Production"}</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; color: #1e293b; }
    h1 { color: #2563eb; margin-bottom: 4px; }
    .badge { background: #f0fdf4; color: #16a34a; padding: 2px 10px; border-radius: 999px; font-size: 12px; font-weight: 600; }
    .endpoint { padding: 14px 18px; margin: 10px 0; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; }
    a { color: #2563eb; text-decoration: none; font-weight: 500; }
    a:hover { text-decoration: underline; }
    .label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; }
  </style>
</head>
<body>
  <h1>Zentro Store <span class="badge">${env.ENVIRONMENT}</span></h1>
  <p>Cloudflare Worker serving static assets from R2 and queries via D1.</p>
  <hr>

  <h3>Endpoints:</h3>
  <div class="endpoint">
    <div class="label">Health</div>
    <a href="/api/health">Health Check</a> — Server status and environment info
  </div>
  <div class="endpoint">
    <div class="label">R2 Files</div>
    <a href="/api/files">List Files (R2)</a> — Object listing from R2 bucket
  </div>
  <div class="endpoint">
    <div class="label">D1 Query</div>
    <a href="/api/db">Database Query (D1)</a> — D1 test query
  </div>
</body>
</html>`;

    return new Response(html, {
      headers: { "Content-Type": "text/html;charset=UTF-8" },
    });
  },
};
