class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
     
      
      form = new Form()
      form.display();
    }

    car = createSprite(-81.5,831);
    car.addImage(carImage);
    car.scale = 0.35;
    car.velocityY = 1
    

  }

  play(){
    form.hide();
    //image(backgroundImage,0,0,displayWidth,displayHeight)
    //image(track2Image,displayWidth,-900,displayWidth,displayHeight)
    image(trackImage,-200,0,displayWidth,displayHeight)
    //camera.x = car.x
    //camera.y = car.y
    camera.x = car.x
    camera.y = car.y
    console.log(car.x)
    console.log(car.y)
    if(keyWentDown(UP_ARROW)){
      car.velocityY=car.velocityY-1
      car.velocityX = 0
      car.addImage(carImage)
    }
    if(keyDown("B")){
      //car.velocityY=car.velocityY+1
      car.velocityX = 0
      car.velocityY = 0

    }
    if(keyWentDown(LEFT_ARROW)){
      car.velocityX=car.velocityX-0.5
      car.velocityY = 0
      car.addImage(carLeftImage)
    }
    if(keyWentUp(RIGHT_ARROW)){
      car.velocityX=car.velocityX+0.5
      car.velocityY = 0
      car.addImage(carRightImage)
    }if(keyWentUp(DOWN_ARROW)){
      car.velocityY=car.velocityY+0.5
      car.velocityX = 0
      car.addImage(carDownImage)
    }

      //write code here to spawn the ambulances
      if (frameCount % 300 === 0) {
        var ambulance = createSprite(displayWidth/2,displayHeight-50,100,100);
        ambulance.y = Math.round(random(80,120));
        ambulance.x = Math.round(random(-81.5,-5));

        ambulance.addImage(ambulanceImage);
        ambulance.scale = 0.15
        ambulance.velocityY = +3;
        text("Move To The Side",)
         //assign lifetime to the variable
        ambulance.lifetime = 200;
        
        //adjust the depth
       
        //add each ambulance to the group
        ambulanceGroup.add(ambulance);
      }if (frameCount % 250 === 0) {
        var bus = createSprite(displayWidth/2,displayHeight-50,100,100);
        bus.y = Math.round(random(80,120));
        bus.x = Math.round(random(274.4,347));

        bus.addImage(busImage);
        bus.scale = 0.65
        bus.velocityY = +2.5;
        text("Move To The Side",)
         //assign lifetime to the variable
        bus.lifetime = 200;
        
        //adjust the depth
       
        //add each bus to the group
        busGroup.add(bus);
      }
      if (frameCount % 290 === 0){
        var tram = createSprite(displayWidth/2,displayHeight-50,100,100);
        tram.y = Math.round(random(690,640));
        tram.x = Math.round(random(1024.5,1121));

        tram.addImage(tramImage);
        tram.scale = 0.4
        tram.velocityY = -2.2;
        text("Move To The Side",)
         //assign lifetime to the variable
        tram.lifetime = 200;
        
        //adjust the depth
       
        //add each bus to the group
        tramGroup.add(tram);
      }
      
    

    drawSprites();
  }
}
