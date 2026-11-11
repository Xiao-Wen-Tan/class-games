# Class games for IMS 3310

Two in-class phone games with live results on the projector. Students scan a QR code; nobody signs in, and no names are stored.

| Game | Source exercise | Used in |
|---|---|---|
| Layoff decision | "Forced Retrenchment at Atkinson", Gregory G. Dess (UT Dallas) and Stephanie Newport | Week 11, Ch15 Human Resource Management |
| Alliance game | "The Strategic Alliance Game", Bell et al. (2017) | Week 7, Ch12 Alliances and Acquisitions |

The SWOT game lives separately at https://wen-tan.com/swot-game/. Its source files, facilitator script and phone mockups are in the `SWOT game` folder next to this one.

## Files

| Path | What it is |
|---|---|
| `index.html` | Start page with links to each game |
| `layoff/` | Student phone page and the eight manager profiles (`data.js`, from the student handout) |
| `alliance/` | Group phone page. Each group opens it from its own QR code |
| `screen/` | Projector page for the instructor (needs the instructor password) |
| `common.js`, `style.css` | Shared by all pages. `common.js` holds the server address |
| `worker/` | The small Cloudflare server that stores game sessions and answers |

## Running a game in class

**Layoff game (about 25 minutes, or 5 minutes in short form)**
1. Open `wen-tan.com/class-games/screen/?game=layoff`, type the instructor password and press **Start a new game**. A 4-letter access code and a QR code appear. Students without a camera type the address shown under the QR code, then the access code. "Open the student view" shows what students see.
2. Students scan, read the scenario, tap the eight managers in layoff order, pick what mattered most and type one reason. The charts update every few seconds.
3. For the group round, press **Start group round**. One student per group enters the group's ranking and group number. Press **Showing: individuals (switch)** to compare.
4. Press **Close answers**, then **Summarize reasons with AI** for the debrief themes. The debrief questions are at the bottom of the page.
5. To reopen the same game later, use `screen/?code=ABCD`.

**Alliance game (about 35 minutes)**
1. Open `screen/?game=alliance` and start a new game. Six QR codes appear, one per group. Under each one are the address, the access code, the group number and a group key, for students who type them in instead. "Show the group codes" brings them back after the clock starts. Use **Print the group codes** to hand them out on paper.
2. Each group scans its own code. Group 1 sees the secret specification (37 units); the others see their production units. Give 10 minutes to plan.
3. Press **Start the 20-minute clock**. Groups can now give units to other groups and build products on their phones. The server checks that each product totals exactly 37 and that the group holds the units. A group may submit 3 wrong products; after that the customer stops looking (this limit is new in the phone version, so guessing cannot replace the specification).
4. Press **End and reveal**, then **Summarize the game with AI** for the debrief.

Each product earns 5 bonus points, as in the Week 7 slides. Groups that combine resources agree on the split themselves.

## Setting up the server (one time)

You need a terminal in the `worker` folder, the Cloudflare login used for the course helper, and the Anthropic API key.

1. `npm install`
2. `npx wrangler d1 create class-games` and paste the printed `database_id` into `wrangler.toml`.
3. `npx wrangler d1 execute class-games --remote --file=schema.sql`
4. `npx wrangler secret put ADMIN_TOKEN` and type a password for the projector page.
5. `npx wrangler secret put ANTHROPIC_API_KEY` and paste the API key (used only by the Summarize buttons).
6. `npx wrangler deploy`. The address it prints must match `API` in `common.js`.

The free Cloudflare plan is enough. A summary costs about 1 to 3 cents on `claude-sonnet-5`.

## Testing on this computer

```
cd worker
npx wrangler d1 execute class-games --local --file=schema.sql
npx wrangler dev --port 8787 --ip 127.0.0.1
```
In a second terminal, from this folder, run `python -m http.server 8765 --bind 127.0.0.1` and open http://127.0.0.1:8765/. On localhost the pages use the local server automatically. Put `ADMIN_TOKEN=...` and `ALLOWED_ORIGINS=http://127.0.0.1:8765` in `worker/.dev.vars` (not committed).
