const screen = document.getElementById('screen')
const context = screen.getContext('2d')
const currentPlayerId = 'player1'


const state = {
    players: {
        'player1': { x: 1, y: 1 },
        'player2': { x: 9, y: 9 },
    },
    fruits: {
        'fruit1': { x: 3, y: 1 }
    }
}

function createGame(){
    function movePlayer(command){
        console.log(`Moving ${command.playerId} with ${command.keyPress}`)

        const keyPress = command.keyPress
        const player = state.players[command.playerId]

        if(keyPress === 'ArrowUp' && player.y - 1 >= 0){
            player.y -= 1
            return
        }
        if(keyPress === 'ArrowDown' && player.y + 1 < screen.height){
            player.y += 1
            return
        }
        if(keyPress === 'ArrowLeft'  && player.x - 1 >= 0){
            player.x -= 1
            return
        }
        if(keyPress === 'ArrowRight' && player.x + 1 < screen.width){
            player.x += 1
            return
        }
    }

    return {
        movePlayer,
        state
    }
}

const game = createGame()
const keyboardListener = createKeyboardListener()
keyboardListener.subscribe(game.movePlayer)

function createKeyboardListener(){
    const state = {
        observers: []
    }

    function subscribe(observerFunction){
        state.observers.push(observerFunction)
    }

    function notifyAll(command){
        console.log(`Notify ${state.observers.length} observers`)

        for(const observerFunction of state.observers){
            observerFunction(command)
        }
    }

    document.addEventListener('keydown' ,handleKeydown)

    function handleKeydown(event){
        const keyPress = event.key
        
        const command = {
            playerId: 'player1',
            keyPress
        }

        notifyAll(command)
    }

    return {
        subscribe,
    }
}

renderScreen()

    function renderScreen(){
        context.clearRect(0, 0, 20, 20)
        
        for(const playerId in state.players){
            const player = state.players[playerId]
            context.fillStyle = 'black'
            context.fillRect(player.x, player.y, 1, 1)
        }

        for(const fruitId in state.fruits){
            const fruit = state.fruits[fruitId]
            context.fillStyle = 'green'
            context.fillRect(fruit.x, fruit.y, 1, 1)
        }

        requestAnimationFrame(renderScreen)
    }
