function setup() {
    var cnv = createCanvas(100, 100);
    cnv.parent('tela');
    cnv.style('display', 'block');
    cnv.style('height', '100%');
    cnv.style('width', '100%');
}

function draw() {
    background(color('#dff9fb'))

    let a = map(sin(millis() * 0.008), -1, 1, 200, 255)
    let fll = color(189, 226, 228, a)
    noStroke()
    fill(fll)
    rect(0, 0, 100, 100)
}

