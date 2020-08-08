class Game {
    constructor () {


    }
    getState() {
        var stateRef = database.ref("gameState");
        stateRef.on("value", function (Data) {
            gameState = Data.val();
            

        });

    }


    update(state) {
        database.ref("/").update({
            gameState: state,
        })

    }

    Start() {
        if(gameState == 0) {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }

    }

}