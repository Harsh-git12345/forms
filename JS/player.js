class Player {
    constructor () {


    }

    getCount() {
        var countRef = database.ref("playerCount");
        countRef.on("value", function (Data) {
            playerCount = Data.val();
            

        });

    }

    updateCount(count) {
        database.ref("/").update({
            playerCount:count,

        })

    }

    update(name) {
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            name: name,
        });
        
    }
}