function preload() {
}

function setup() {
canvas = createCanvas(400, 400);
canvas.position(350, 200);
video = createCapture(VIDEO);
video.hide();
}

function draw() {
    image(video, 100, 100, 200, 200);
    fill("green");
    rect(50, 50, 300, 10);
    rect(50, 50, 10, 300);
    rect(50, 350, 300, 10);
    rect(50, 50, 10, 300);
    rect(350, 50,10, 300);
    fill("red")
    circle(50, 50, 60);
    circle(50, 350, 60);
    circle(350, 50, 60);
    circle(350, 350, 60);
}

function take_snapshot() {
    save('student_name.png');
}