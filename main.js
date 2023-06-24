function setup(){
    video=createCapture(VIDEO);
    video.size(400,400);
    video.position(250,150)
    canvas=createCanvas(400,400);
    canvas.position(900,150);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotposes);
}
function draw(){
    background("white");
}
function modelLoaded(){
    console.log("Model is Loaded.");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
    }
}
