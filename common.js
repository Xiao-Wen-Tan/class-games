// Shared by every page: where the class games server lives, and small helpers.
// On this computer (localhost) the pages talk to the test server started with `npx wrangler dev`.
const LOCAL = ["localhost", "127.0.0.1"].includes(location.hostname);
const API = LOCAL ? "http://127.0.0.1:8787" : "https://class-games.theawen0111.workers.dev";

async function api(path, body) {
  const r = await fetch(API + path, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
  const text = await r.text();
  if (!r.ok) throw new Error(text || "The game server did not answer.");
  return JSON.parse(text);
}

const $ = (sel, root = document) => root.querySelector(sel);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const params = new URLSearchParams(location.search);

// The folder this site is served from, so links work both at wen-tan.com/class-games/ and locally.
const SITE_ROOT = location.href.replace(/[?#].*$/, "").replace(/\/(layoff|alliance|screen)\/[^/]*$/, "/").replace(/[^/]*$/, "");

function mmss(sec) {
  sec = Math.max(0, Math.round(sec));
  return `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;
}
