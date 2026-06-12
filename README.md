# dean.id

The personal site of Dean Benson, served as a JSON API response by a Cloudflare Worker.

Routes: / (holding page), /v1/me (real JSON endpoint), /badge.svg (the stamp), /badge (embed snippets). www redirects to apex.

Pushed to main = auto-deployed by Cloudflare Workers Builds.

Local dev: npm install && npm run dev
