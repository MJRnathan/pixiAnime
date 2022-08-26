//const { Loader } = require("pixi.js");

const { Howl } = require("howler");

const Application=PIXI.Application;

const app=new Application({
    width:500,
    height:400,
    transparent:false,
    antialias:true
});

app.renderer.backgroundColor=0xfafa0;

app.renderer.resize(window.innerWidth,window.innerHeight);

app.renderer.view.style.position='absolute';

document.body.appendChild(app.view);

const Graphics=PIXI.Graphics;

const rectangle=new Graphics();

rectangle.beginFill(0xAA33BB).lineStyle(4,0xFFEA00,1).drawRect(100,100,200,200).endFill();

//app.stage.addChild(rectangle);

// const poly=new Graphics();
// poly.beginFill(0xFF66FF)
// .lineStyle(5,0xFFEA00,1)
// .drawPolygon([
//     200,200,
//     800,100,
//     900,150,
//     800,210
// ])
// .endFill();




// const circle=new Graphics();

// circle.beginFill(0x22AACC)
// .lineStyle(5,0xFFEA00,1)
// .drawCircle(900,147,80)
// .endFill();

// app.stage.addChild(circle);



// const line=new Graphics();
// line.lineStyle(10,0xFFEA00,1)
// .moveTo(200,200)
// .lineTo(900,150);



// const torus=new Graphics();
// torus.beginFill(0x00DD00)
// .drawTorus(200,200,80,100,Math.PI/2,0)
// .endFill();

// const star=new Graphics();
// star.beginFill(0x00ff00)
// .drawStar(900,150,8,80)
// .endFill();


// // Text Style
// const style=new PIXI.TextStyle({
//     fontFamily:'Montserrat',
//     fontSize:48,
//     fill:'deepskyblue',
//     stroke:'#ffffff',
//     strokeThickness:4,
//     dropShadow:true,
//     dropShadowDistance:10,
//     dropShadowAngle:Math.PI/2,
//     dropShadowBlur:5,
//     dropShadowColor:'#000000'
// });

// const myText=new PIXI.Text('PIXI World',style);

// app.stage.addChild(myText);



// app.stage.addChild(star);

// app.stage.addChild(torus);

// app.stage.addChild(poly);

// app.stage.addChild(line);

// // Text can be changed
// myText.text='Text changed!';

// //Style can be added
// myText.style.wordWrap=true;
// myText.style.wordWrapWidth=100;
// myText.style.align='center';


// // app.ticker.add(delta=>loop(delta));

// // function loop(delta){
// //     // Draws infinite rectangles.
// //     const rect=new Graphics();
// //     rect.beginFill(0xFFFFFF)
// //     .drawRect(Math.random()*app.screen.width,Math.random()*app.screen.height,10,10)
// //     .endFill();
// //     app.stage.addChild(rect);

// //     // Draw infinite stars.
// //     const star=new Graphics();

// //     star.beginFill(0xff0fff).drawStar(Math.random()*app.screen.width,Math.random()*app.screen.height,8,8).endFill();
    
// //     app.stage.addChild(star);

// // }

// // const char1Texture=PIXI.Texture.from('./images/heart.png');
// // const char1Sprite=new PIXI.Sprite(char1Texture);
// // OR
// const char1Sprite=PIXI.Sprite.from('./images/Rajesh1.jpg');
// app.stage.addChild(char1Sprite);

// // char1Sprite.width=500;
// // char1Sprite.height=400;
// //  char1Sprite.position.set(200,300);
// // OR we can change with Scale using relative values instead of absolute ones...

// // char1Sprite.scale.x=1.5;
// // char1Sprite.scale.y=2;

// // To change both the values we can use Set(x,y)

// // char1Sprite.scale.set(2,3);

// //To change the Position we can use the x and y properties.
// char1Sprite.x=318;
// char1Sprite.y=242;

// app.ticker.add(delta=>loop(delta));

// function loop(delta){
//     //char1Sprite.x+=1;
//     //char1Sprite.rotation+=0.01;
    
// }

// // char1Sprite.anchor.x=0.5;
// // char1Sprite.anchor.y=0.5; 

// // Calling one method .set 
    
// char1Sprite.anchor.set(0.5,0.5);

// char1Sprite.interactive=true;
// char1Sprite.buttonMode=true;

// char1Sprite.on('pointerdown',function(){
//     char1Sprite.scale.x += 0.1;
//     char1Sprite.scale.y += 0.1;
// })


// // Add event listener and move image Up, Down, Right, Left with arrow keys
// document.addEventListener('keydown',function(e){
//     if(e.key==='ArrowRight')
//         char1Sprite.x+=10;
//     if(e.key==='ArrowLeft')
//         char1Sprite.x-=10;
//     if(e.key==='ArrowDown')
//         char1Sprite.y+=10;
//     if(e.key==='ArrowUp')
//         char1Sprite.y-=10;
// });

// // Creating a Container
// const container=new PIXI.Container();

// const char2Sprite=PIXI.Sprite.from('./images/heart.png');
// container.addChild(char2Sprite);

// //  
// app.stage.addChild(container);

// char2Sprite.position.set(600,50);
// //Container can also be placed at x, y
// container.x=200;

// console.log(char3Sprite.x);
// console.log(char3Sprite.getGlobalPosition());
// console.log(container.children);

// // PIXI Particle Container

// const particleContainer=new PIXI.ParticleContainer(1000,{
//     position:true,
//     rotation:true,
//     vertices:true,
//     tint:true,
//     uvs:true
// });

//    const loader = PIXI.Loader.shared;

// loader.add('char4Texture','./images/iceland.jpg');
// loader.add('char5Texture','./images/Rajesh1.jpg');
// loader.load(setup);


// we can change call the above with...

// loader.add('char4Texture','./images/heart.png')
// .add('char5Texture','./images/Rajesh1.jpg')
// .load(setup);


// function setup(loader, resources){
//     const char4Sprite = new PIXI.Sprite(
//         resources.char4Texture.texture
//     );
//     char4Sprite.y=200;
//     app.stage.addChild(char4Sprite);

// }
// // Loader is loaded EACH time an asset is LOADED

// loader.onLoad.add(function(){
//     console.log('on load'); 
// });

// loader.onError.add(function(){
//     console.log('errored the...');
// });

// loader.onProgress.add(function(){
//     console.log('Successfully loaded of Failed...');
// });

// const loader = PIXI.Loader.shared;
// loader.add('tileset','./images/boyRunning.jpg')
// .add('char5Texture','./images/Rajesh1.jpg')
// .load(setup);

// function setup(loader, resources){
//     const texture1=resources.tileset.texture;
//     const rect1=new PIXI.Rectangle(1,1,76,86);
//     texture1.frame=rect1;
  
//     const spr1=new PIXI.Sprite(texture1);
//     spr1.scale.set(2,2);
//     app.stage.addChild(spr1);
// }

// const loader = PIXI.Loader.shared;
// loader.add('tileset','./images/spritesheet.json')
// .load(setup);

// function setup(loader,resources){
//     const drag1Texture=PIXI.Texture.from('g1.png');
//     const drag1Sprite=new PIXI.Sprite(drag1Texture);
//     drag1Sprite.position.set(200,200);
//     drag1Sprite.scale.set(2,2);
//     app.stage.addChild(drag1Sprite);

// }

const loader = PIXI.Loader.shared;
loader.add('tileset','./images/spritesheet.json')
.load(setup);

function setup(loader,resources){
    const textures=[];
    for (let i=1;i<4;i++){
        const texture=PIXI.Texture.from(`g${i}.png`);
        textures.push(texture);  
    }
    const drag=new PIXI.AnimatedSprite(textures);
    drag.position.set(800,300);
    drag.scale.set(2,2);
    app.stage.addChild(drag);
    drag.play();
    drag.animationSpeed=0.1;
      
}

// const sound=new Howl({
//     src:['./sound/pelimusaa.wav']
// });

// sound.play();