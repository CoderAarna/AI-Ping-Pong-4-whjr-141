rightWristX = "";
rightWristY = "";
score_right_wrist = "";

function preload() {
	world_start = loadSound("missed.wav");
}
function gotPoses(results){
	if(length.results > 0){
		rightWristX = results[0].pose.rightWrist.x;
		rightWristY = results[0].pose.rightWrist.y;
		score_right_wrist = results[0];
	}
}

function setup() {
	canvas = createCanvas(650,400);
	video = createCapture(VIDEO);
	video.size(600, 300);
    canvas.parent('canvas');
    video.hide();
	
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function modelLoaded(){
	console.log('Model Loaded!');
}
function draw(){
    image(img, 0, 0, 650, 400);

	if(score_right_wrist > 0.2){
		fill("#b87f54");
		stroke("#875f40");
		circle(rightWristX, rightWristY, 20);
	}
}