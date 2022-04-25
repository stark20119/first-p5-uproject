function preload() {
}

function setup() {
    canvas = createCanvas(500 , 500);
    video = createCapture(VIDEO);
    video.hide();
    canvas.position(600 , 200);
}

function draw() {
fill("purple");
stroke("black");
rect(30, 20, 55, 55);

fill("crimson");
stroke("black")
circle(450,50,55)

fill("crimson");
stroke("black")
circle(50, 450, 55);

fill("purple");
stroke("black");
rect(420,420,55,55) 

fill("red");
stroke("black");
rect(50, 80, 10, 330 );

fill("red");
stroke("black");
rect(445, 80, 10, 330 );

fill("red");
stroke("black");
rect(90,60,335 ,10)  //rect at 90, 60 and size 335, 10  

fill("red");
stroke("black");
rect(80, 440, 335, 10 );

    image(video , 100 , 100 , 300 , 300);
}

function take_snapshot() {
    save("birthday_image.png");
        }