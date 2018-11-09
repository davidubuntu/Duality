Game link: https://davidubuntu.github.io/duality/

Duality
Ironhack Web-Development 2018
David Díez

Description of the game:

The style of the game is visual capacity
The game draws two balls boards.The right board is the computer board and shows different black balls in a random position. The left board is the player board
The challenge of the game is clicking on the player board to create the simetric shape that the computer board shows

Leveling

Each correctly clicked simetric shape will pass through the next level. 
There are 5 levels configurated.
- Level 1: Board 3x3 static balls
- Level 2: Board 4x3 static balls
- Level 3: Board 5x3 static balls
- Level 4: Board 5x4 moving balls
- Level 5: Board 5x4 moving blinking balls

Sequence of the game:

1. Presentation page with an animation of Duality
2. The actual game play starts
3. Levels are passed from 1 to 6 with a countdown chronometer for each level
5. Upon game over, the user can click a button to start a new game. The game will be reset.
6. When finished, the user can click  button to reload the game.

Working Plan:

I created a game board and ball constructors. They are the main elements of the game
I started with 3x3 simple fixed board.This was done in javascript and canvas.
When  board was ready i just worked to make the logic work, so that when clicking on a ball position it changes to black.
Once player could select balls in a board i worked in comparing the two boards to pass through next level.
Once all the levels were finished i created css styles and windows flow for the game.

Technologies:

HTML5
Canvas
CSS3
Javascript

Techncal Challenge:

The biggest challenge was to work with matrixes in canvas and more specific how to move all the balls and make bounce with laterals. 
Other challenge was to work with times to hide and show diferent windows when loaded

Future game improvements:

- Make the game levels configurable
- Rotate the board 90 degrees in next levels
- Make some ball position  explote if player clicks on it in next levels

Future technical improvements:

- Make game as an object no instanced and then all the other objects as classes if there are going to be created more than one
- Begin organizing code from paper and draw al classes and each methods from zero 




