# apoorvkhanna.com

A personal site that is a Windows XP desktop. No build step, no framework — `index.html`, `style.css`, `app.js`, and a folder of public-domain paintings.

- **Wallpaper** rotates through eleven classic paintings (Wikimedia Commons, public domain) every 45s. Right-click the desktop → Properties to pick one or stop the rotation.
- **Desktop icons** open XP-style windows for Vaaya, ClaudePoker and AskPaxo, an About Me explorer window, and links to GitHub / X / LinkedIn / email.
- **Winamp** (2.x skin, in CSS) plays 18 of the greatest 90s rock songs via the YouTube IFrame API. The video shows in the docked "Nullsoft Video" window; the playlist, seek bar, volume, shuffle and repeat all work.
- Boot screen → click → startup chime → music starts (the click is the user gesture browsers need for autoplay).

Everything editable — name, links, projects, paintings, playlist — is in `CONFIG`, `PROJECTS`, `PAINTINGS` and `PLAYLIST` at the top of [app.js](app.js).

## Run locally

```sh
python3 -m http.server 8787   # then open http://localhost:8787
```

Preview shortcuts: `?desktop` skips the boot screen; `&open=about,vaaya` opens windows; `&start` opens the Start menu.

## Deploy

Static site on Vercel. Push to `main` and it deploys.
