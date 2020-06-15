class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
   // this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.greeting2 = createElement('h6');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    //textSize(50)
    fill("red");
    text("Cyberscape", 500, 500);
   //this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
       this.input.hide();
       this.button.hide();

       player.name = this.input.value();
       playerCount+=1;
       player.index = playerCount;

       player.update();
       player.updateCount(playerCount);

       this.greeting.html("Welcome " + player.name + ". Get ready to fight!!!")
       this.greeting.position(displayWidth/2 - 70, displayHeight/4 - 50);

      // this.greeting.html("Waiting for your enemy");
      // this.greeting.position(displayWidth/2 - 70, displayHeight/4-20);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
