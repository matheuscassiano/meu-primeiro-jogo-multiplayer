import createGame from './game.js'
import createKeyboardListener from './keyboard-listener.js'
import renderScreen from './render-screen.js'

const game = createGame()
const keyboardListener = createKeyboardListener(document)
keyboardListener.subscribe(game.movePlayer)

const screen = document.getElementById('screen')
renderScreen(screen, game, requestAnimationFrame)

game.addPlayer({playerId: 'player1', playerX:10, playerY:9})
game.addPlayer({playerId: 'player2', playerX:10, playerY:5})
game.addPlayer({playerId: 'player3', playerX:7, playerY:10})
game.addFruit({fruitId: 'fruit1', fruitX:10, fruitY:10})
game.addFruit({fruitId: 'fruit2', fruitX:5, fruitY:3})
