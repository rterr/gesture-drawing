# gesture-drawing
A timed slideshow app with choices for what images to display and how long each image should stay up.

Be sure to run `npm run build` before `npm run watch` and `node ./server/server`

## Features
- Selecting what category of images to display
- Selecting how long the timer should last for
- Next image / Previous image controls
- A Pause button for the timer

## Components
- display.js = where the images appear
- menu.js = has two "modes" (not sure whether to separate into separate .js files)
  - the settings panel, where you choose your session options (only appears when the sessionOn is false)
  - the controls panel, which has Next/Previous/Pause/Stop buttons (only appears when sessionOn is true)

## To-Do
- Radio buttons to select what category of images / timer
- Timer + Toggle Pause timer
  - Display the timer (time remaining) ONLY when paused.
