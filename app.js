
var sound;
var fft;

function preload() {
    sound = loadSound('https://raw.githubusercontent.com/dannyli0109/sound_test/master/boo1.mp3');
}

function setup() {
    createCanvas(512, 512);

    sound.play();
    fft = new p5.FFT(0, 512)
    frameRate(60)

}

function draw() {
    // console.log(fft.analyze())
    var spectrum = fft.analyze()
    background(0);
    stroke(255)
    for (var i = 0; i < spectrum.length; i++) {
        var height = map(spectrum[i], 0, 256, 0, 512)
        rect(i, 512 - height, 1, height)
    }

}