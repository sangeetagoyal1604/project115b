function preload() {
    
}
function setup() {
canvas=createCanvas(400,400);
 webcam=createCapture(VIDEO); 
   webcam.size(300,300);
webcam.hide();
posenet=ml5.poseNet(webcam,modeloaded);
posenet.on('pose',gotresult);
function gotresult(result) {
    if (result.length>0) {
    console.log(result);
        console.log("x="+result[0].pose.leftEar.x);
     console.log("y="+result[0].pose.leftEar.y); 
    }
}
function modeloaded() {
    console.log("photoloaded");
}
}
function draw() {
 image(webcam,0,0,400,400);   
}
function result() {
    save('filter.png');
}