
var booSound;
var fft;

function preload() {
    booSound = loadSound('https://raw.githubusercontent.com/dannyli0109/sound_test/master/sounds/cheer.wav');
}

function setup() {
    createCanvas(512, 512);

    fft = new p5.FFT(0.8, 128)
    frameRate(60)

    booSound.onended(function () {
        console.log("ended")
        noLoop()
    })

    var button = createButton("boo sound")
    button.position(5, 520)
    button.mousePressed(playBoo)
    noLoop()

}

function draw() {
    var spectrum = fft.analyze()
    console.log(spectrum)
    background(0);
    stroke(255)
    for (var i = 0; i < spectrum.length; i++) {
        var height = map(spectrum[i], 0, 256, 0, 512)
        rect(i * 8, 512 - height, 1, height)
    }
}

function playBoo() {
    booSound.play()
    loop()
}