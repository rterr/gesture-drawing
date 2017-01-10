# gesture-drawing
An app for gesture drawing, which is an exercise that focuses drawing quick sketches that emphasize movement and form over detail. It is a timed slideshow app with options to select what subject you would like to draw as well as slide time length.

Photographs of models or animals would be ideal for use in this app; public domain sketches by George Bridgman have been used as placeholders.

## Features
- Selecting what category of images to display
- Selecting how long the timer should last for
- Next image / Previous image controls
- A pause button for the timer
- The timer is not displayed to allow the artist to focus on the image rather than the time remaining

## Components
- display.js = where the images appear
- menu.js = has two "modes"
  - the settings panel, where you choose your session options (only appears when the sessionOn is false)
  - the controls panel, which has Next/Previous/Pause/End buttons (only appears when sessionOn is true)
