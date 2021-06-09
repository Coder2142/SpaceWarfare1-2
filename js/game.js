class Game{
    constructor(){    
    }

    getGameState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",(data)=>{
            gameState = data.val();
        });
    }
    
    updateGameState(state){
        var gameStateRef = database.ref("/");
        gameStateRef.update({
            gameState:state
        });
    }


    start(){
        if(gameState === 0){
            player = new Player();
            player.getPlayerCount();
            form = new Form();
            form.display();
        }
       
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Starts", 120, 100)
    }

}