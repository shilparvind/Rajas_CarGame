class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameStateP = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state,
    });
  }

  start() {
    if (gameStateP === 0) {
      player = new Player();
      player.getCount();
      form = new Form();
      form.display();
    }
    car1 = createSprite(100, 200);
    car1.addImage(car1i);
    car2 = createSprite(300, 200);
    car2.addImage(car2i);
    car3 = createSprite(500, 200);
    car3.addImage(car3i);
    car4 = createSprite(700, 200);
    car4.addImage(car4i);
    cars = [car1, car2, car3, car4];
    console.log("start");
  }
  play() {
    form.hide();
    textSize(30);
    text("gameStart ", 120, 100);
    Player.getPlayerInfo(); // calling getPlayerInfo function from Player class
    player.getfinishedPlayers();

    if (allPlayers !== undefined) {
      // var displayPosition=130;

      //  if(plr === "player"+player.index){
      //  fill("red");
      //}
      // / else{
      //   fill("black");
      //   }
      //displayPosition=displayPosition+20;
      //textSize(15);
      //text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,displayPosition);
      background("#c68767");
      image(track, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
      var index = 0;
      var x = 0;
      var y;
      for (var plr in allPlayers) {
        x = x + 275;
        index = index + 1;
        y = displayHeight - allPlayers[plr].distance;
        cars[index - 1].x = x;
        cars[index - 1].y = y;
        if (index === player.index) {
          stroke(3);
          fill("blue");
          ellipse(x, y, 70, 70);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth / 2;
          camera.position.y = cars[index - 1].y;
          console.log(camera.position.x);
          console.log(camera.position.y);
        }
      }
    }
    if (keyDown("up") && player.index !== null && passed === false) {
      player.distance = player.distance + 50;
      player.update();
    }
    if (player.distance > 250 && passed === false) {
      //gameStateP=2;
      passed = true;
      Player.updatefinishedPlayers();
      player.rank = finishedPlayers;
      player.update();
    }
    drawSprites();
  }
  end() {
    //camera.position.x = 0;
    //camera.position.y = 0;
    Player.getPlayerInfo();

    console.log("gameEnded");
    //camera.position.x=0;
    //camera.position.y=0;
    for (var plr in allPlayers) {
      if (allPlayers[plr].rank === 1) {
        console.log("in end display");
        text("first: " + allPlayers[plr].name, displayWidth / 2, 100);
      }
      if (allPlayers[plr].rank === 2) {
        text("second: " + allPlayers[plr].name, displayWidth / 2, 200);
      }
      if (allPlayers[plr].rank === 3) {
        text("third: " + allPlayers[plr].name, displayWidth / 2, 300);
      }
      if (allPlayers[plr].rank === 4) {
        text("loser: " + allPlayers[plr].name, displayWidth / 2, 400);
      }
    }
  }
}
