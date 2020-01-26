const screen = document.getElementById('screen')
const context = screen.getContext('2d')
const currentPlayerId = 'player1'


const game = {
    players: {
        'player1': { x: 1, y: 1 },
        'player2': { x: 9, y: 9 },
    },
    fruits: {
        'fruit1': { x: 3, y: 1 }
    }
}

document.addEventListener('keydown' ,handleKeydown)

function handleKeydown(event){
    const keyPress = event.key
    const player = game.players[currentPlayerId]

    if(keyPress === 'ArrowUp' && player.y - 1 >= 0){
        player.y -= 1
        console.log('Up')
        return
    }
    if(keyPress === 'ArrowDown' && player.y + 1 < screen.height){
        player.y += 1
        console.log('Down')
        return
    }
    if(keyPress === 'ArrowLeft'  && player.x - 1 >= 0){
        player.x -= 1
        console.log('Left')
        return
    }
    if(keyPress === 'ArrowRight' && player.x + 1 < screen.width){
        player.x += 1
        console.log('Right')
        return
    }
}

renderScreen()

    function renderScreen(){
        context.clearRect(0, 0, 10, 10)
        
        for(const playerId in game.players){
            const player = game.players[playerId]
            context.fillStyle = 'black'
            context.fillRect(player.x, player.y, 1, 1)
        }

        for(const fruitId in game.fruits){
            const fruit = game.fruits[fruitId]
            context.fillStyle = 'green'
            context.fillRect(fruit.x, fruit.y, 1, 1)
        }

        requestAnimationFrame(renderScreen)
    }
