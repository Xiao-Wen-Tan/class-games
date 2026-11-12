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

// Rules of the alliance game, from the Week 7 slides (Bell et al. 2017), shown on the phones and the
// projector before play. The clock length, points and wrong tries come from the server.
function allianceRules(d) {
  return [
    "The class is six groups. Each group is a firm.",
    "<b>Goal:</b> make the exact product the customer wants.",
    "Every group starts with a packet of resources. Some groups hold production units, slips worth 1, 5, 10 or 25. Only one group knows the product specification, and that is a business secret.",
    "A product must match the specification exactly. For example, if the customer wanted 13 units, a 10-unit slip plus three 1-unit slips would work, and so would thirteen 1-unit slips.",
    "<b>10 minutes of planning.</b> Look at what you have, work out how to get what you need, and decide whom you can trust. No trading yet.",
    `<b>Then a ${d.minutes}-minute clock.</b> Trade with other groups, form alliances and combine resources. On the phone, <b>Give units</b> sends slips to another group and <b>Build a product</b> shows a product to the customer.`,
    `Each correct product earns <b>${d.points_per_product} bonus points</b>. Groups that combine resources agree on how to split the points (whole numbers only).`,
    `The customer stops looking at a group's products after ${d.wrong_tries} wrong ones.`,
  ];
}
