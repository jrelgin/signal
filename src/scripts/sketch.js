export default function Sketch(p5) {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth - 64, p5.windowHeight - 207);
    p5.noStroke();
  };

  p5.draw = () => {
    let y = p5.color('#FD5825');

    p5.fill(y);
    p5.circle(30, 30, 40);

    if (p5.mouseIsPressed) {
      p5.fill(p5.color('#FD5825'));
    } else {
      p5.fill(p5.color('#19BDFC'));
    }
    p5.circle(p5.mouseX, p5.mouseY, 24, 24);
  };
}
