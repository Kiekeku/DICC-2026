# Prompty

Prompty is a React and TypeScript prototype for starting a conversation around a prompt. Choose a moral, creative, or AI skill development prompt, write a response, and react to it or to an example response.

![Prompty showing a discussion prompt, two example responses, and emoji reaction controls](references/screenshots/prompty-reactions.png)

## My contributions

I’m Justin Hoang (@Kiekeku). I built the initial React layout from our [design references](references), integrated the custom icons, and implemented the flow from choosing a prompt to writing a response and reacting to it. The interaction logic is in [`src/App.tsx`](src/App.tsx), and the prompts are in [`src/content/sections.json`](src/content/sections.json).

## Run locally

Use Node.js 22.12 or newer.

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. Run `npm run lint` to check the source. The development server works, but `npm run build` currently stops at a TypeScript error in the prompt lookup.

## Prototype scope

Responses and reactions are stored in browser memory and reset on reload. The **Copy link** button generates a URL, but opening it does not restore the response or join a shared session. The sign-in control is a placeholder.
