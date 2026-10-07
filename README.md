# AI Animation Studio

Production dashboard for an AI-assisted adult 2D animation workflow.

## Current stage
UI and production-domain scaffold only. Video providers are intentionally mocked.

## Planned pipeline
Project → Episode → Scene → Shot → Reference → Storyboard → Generation → Review → Approved Shot

## Planned providers
- Sora
- Runway
- Kling
- Seedance

API keys will be server-side only when providers are implemented.

## Run
```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## First production shot
Harley: "Puddin'... you've got blood on your cheek."
Joker: "Yours?"
Harley: "Don't remember."
Joker: "Then it was a good night."

The uploaded keyframe should be treated as the approved visual reference for Shot 001.
