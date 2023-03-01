const Application = PIXI.Application;

const app = new Application({
  width: 500,
  height: 500,
  transparent: false,
  antialias: true,
});

app.renderer.backgroundColor = "0x23395D";

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = "absolute";

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

const rectangle = new Graphics();
rectangle
  .beginFill(0xaa33bb)
  .lineStyle(4, 0xffeabe)
  .drawRect(200, 200, 100, 120)
  .endFill();

const poly = new Graphics();
poly.beginFill(0xff66ff).drawPolygon([600, 50, 800, 150, 900, 300]).endFill();

const circle = new Graphics();
circle.beginFill(0x22aacc).drawCircle(440, 200, 80).endFill();

const line = new Graphics();
line.lineStyle(5, 0x22aacc, 5).moveTo(500, 100).lineTo(500, 800);

const torus = new Graphics();
torus.beginFill(0xfffddd).drawTorus(100, 700, 80, 100, Math.PI).endFill();

const star = new Graphics();
star.beginFill(0xadadad).drawStar(900, 700, 300, 80).endFill();

const style = new PIXI.TextStyle({
  fontFamily: "Montserrat",
  fontSize: 48,
});

const text = new PIXI.Text("Hellloo ipix", style);
app.stage.addChild(text);
app.stage.addChild(circle);
app.stage.addChild(poly);
app.stage.addChild(rectangle);
app.stage.addChild(line);
app.stage.addChild(torus);
app.stage.addChild(star);

text.text = "it change";

app.ticker.add((delta) => loop(delta));

function loop(delta) {
  //   const recta = new Graphics();
  //   recta
  //     .beginFill(0xffffff)
  //     .drawRect(
  //       Math.random() * app.screen.width,
  //       Math.random() * app.screen.height,
  //       10,
  //       10
  //     )
  //     .endFill();
  //   app.stage.addChild(recta);
  char1Sprite.rotation += 0.01;
}

// const char1Texture = PIXI.Texture.from("./images/char1.png");
// const char1Sprite = new PIXI.Sprite(char1Texture);

const char1Sprite = PIXI.Sprite.from("./images/char1.png");
app.stage.addChild(char1Sprite);

char1Sprite.position.set(800, 400);
char1Sprite.anchor.set(0.5, 0.5);

const container = new PIXI.Container();

const char2Sprite = PIXI.Sprite.from("./images/char2.png");
const char3Sprite = PIXI.Sprite.from("./images/char3.png");

container.addChild(char2Sprite);
container.addChild(char3Sprite);

app.stage.addChild(container);

char2Sprite.position.set(500, 500);
console.log(char3Sprite.getGlobalPosition());

container.x = 300;
