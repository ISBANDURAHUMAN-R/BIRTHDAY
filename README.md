<p align="center">
  <img src="assets/banner.png" alt="BIRTHDAY Banner" width="100%">
</p>

# ◈ Interactive Birthday Celebration Experience

[![CI](https://github.com/ISBANDURAHUMAN-R/BIRTHDAY/actions/workflows/ci.yml/badge.svg)](https://github.com/ISBANDURAHUMAN-R/BIRTHDAY/actions/workflows/ci.yml)

## ◆ About the Project
This repository hosts a self-contained interactive web greeting application built with modern front-end styling. Designed as a digital greeting card, it guides the user through an animated storytelling progression leading to a celebration reveal and personalized greeting.

## ❖ Key Features
- Multi-stage interactive story progression with smooth section transitions.
- Dark-mode visual presentation with starfield animations and glassmorphism cards.
- HTML5 Canvas particle confetti burst upon reaching the reveal screen.
- Responsive, lightweight client-side architecture requiring no backend or external frameworks.

## ◆ System Architecture
```mermaid
graph TD
    subgraph UIProgression ["&nbsp; Multi-Stage Interactive Flow &nbsp;"]
        Start["&nbsp; Landing Screen &amp; &nbsp;<br/>&nbsp; Ambient Stars &nbsp;"] --> Step1["&nbsp; Stage 1: &nbsp;<br/>&nbsp; Narrative Journey &nbsp;"]
        Step1 --> Step2["&nbsp; Stage 2: &nbsp;<br/>&nbsp; Memory Timeline &nbsp;"]
        Step2 --> Reveal["&nbsp; Celebration &nbsp;<br/>&nbsp; Reveal Stage &nbsp;"]
    end

    subgraph AnimationFX ["&nbsp; Visual &amp; Canvas FX Engine &nbsp;"]
        Start --> Starfield["&nbsp; CSS3 Keyframe &nbsp;<br/>&nbsp; Ambient Stars &nbsp;"]
        Reveal --> TriggerConfetti["&nbsp; Confetti Trigger &nbsp;<br/>&nbsp; Event &nbsp;"]
        TriggerConfetti --> ConfettiEngine["&nbsp; HTML5 Canvas &nbsp;<br/>&nbsp; Particle Emitter &nbsp;<br/>&nbsp; Gravity • Drag &nbsp;"]
        ConfettiEngine --> CanvasOverlay["&nbsp; Canvas Overlay &nbsp;<br/>&nbsp; Renderer Pass &nbsp;"]
    end

    subgraph StateMachine ["&nbsp; Client Transition Controller &nbsp;"]
        NavButton["&nbsp; Next / Advance &nbsp;<br/>&nbsp; Actions &nbsp;"] --> TransitionState["&nbsp; Active Stage &nbsp;<br/>&nbsp; Transitioner &nbsp;"]
        TransitionState --> DOMMutation["&nbsp; CSS Swapping &amp; &nbsp;<br/>&nbsp; Opacity Fades &nbsp;"]
        DOMMutation --> UIProgression
    end
```

## ⬢ Technologies Used
- HTML5 & CSS3
- JavaScript (ES6 Vanilla)
- HTML5 Canvas API

## § Requirements
- Modern web browser

## ▲ Installation & Execution
```bash
# Open index.html directly or serve locally
python -m http.server 8000
```
Open `http://localhost:8000` in your web browser.

## ※ Developer
Developer: ISBANDU RAHUMAN R  
GitHub: https://github.com/ISBANDURAHUMAN-R
