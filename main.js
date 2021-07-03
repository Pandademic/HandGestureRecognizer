camera= document.getElementById("Camera");
Webcam.attach(camera);
Webcam.set({
    height:450,
    width:500,
    image_format:'png',
    png_quality:90

});
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';

    });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zYuTbZ1v5/model.json',modelLoaded);
function modelLoaded(){
    console.log('Model Loaded!');
    
}