
var booSound;
var fft;
var playing = false;

function preload() {
    booSound = loadSound('https://raw.githubusercontent.com/dannyli0109/sound_test/master/sounds/aww.wav');
}

function setup() {
    createCanvas(512, 512);

    fft = new p5.FFT(0, 128)
    frameRate(30)

    booSound.onended(function () {
        console.log("ended")
        playing = false;
    })

    var button = createButton("boo sound")
    button.position(5, 520)
    button.mousePressed(playBoo)
}

function draw() {
    if (!playing) {
        return
    }
    var spectrum = fft.analyze()
    console.log(spectrum)
    background(0);
    stroke(255)
    for (var i = 0; i < spectrum.length; i++) {
        var height = map(spectrum[i], 0, 256, 0, 512)
        rect(i * 8, 512 - height, 4, height)
    }
}

function playBoo() {
    booSound.play()
    playing = true;
}