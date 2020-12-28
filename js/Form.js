class Form {
  constructor() {
     
    this.input = createInput("Name");
    this.input.size(200,50);
    this.button = createButton('Play');
    this.button.size(100,50)
    this.input.style('text-align','center');
    this.greeting = createElement('h3');
    this.reset= createButton('Reset');
  }
  
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }
  display(){
    var title = createElement('h2');
    title.html("Car Racing Game");
    title.position(displayWidth/2,20);
   this.input.position(displayWidth/2-50,displayHeight/2-150);
   this.button.position(displayWidth/2,displayHeight/2+70);
   this.reset.position(displayWidth-100,20);
   this.button.mousePressed(()=>{
     this.input.hide();
     this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index=playerCount;
      player.update(player);
      player.updateCount(playerCount);
      this.greeting.html("welcome " + player.name);
      this.greeting.position(displayWidth/2, displayHeight/2)
    });
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      //finishedPlayers.update(0);
      database.ref("/").update({
        players:null,
        finishedPlayers:0
      })
    })

  }
}
