class Form {
    constructor () {


    }
    display() {
        var title = createElement("h2");   
        title.html("Car Racing Game");
        title.position(130, 10);
        var input = createInput("NAME");
        input.position(130, 160);
        var button = createButton("Play");
        button.position(250, 200);
        button.mousePressed(function() {
            input.hide();
            button.hide();
            var name = input.value();
            playerCount = playerCount + 1;
            player.update(name);
            player.updateCount(playerCount);
            var greeting = createElement("h3");
            greeting.html("Hello " + name);
            greeting.position(130, 160);
        })
    }
}