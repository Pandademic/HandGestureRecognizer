var speak_data_1;
var thumbs_up="&#128077;";
var thumbs_down="&#128078;";
var VforVictory="&#128406;";
var img;
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
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hkJmYpDSK/model.json',modelLoaded);
function modelLoaded(){
    console.log('Model Loaded!');
    
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="Your gesture is a  "+prediction_1;
        var utterThis=new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
  
  }
function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
      console.error(error);

    }
    else{
       console.log(results);
       document.getElementById("name_of_gesture").innerHTML=results[0].label;
       prediction_1=results[0].label;
       speak();
       if(results[0].label=="thumbs Up"){
           document.getElementById("emoji_of_gesture").innerHTML=thumbs_up
       }
       if(results[0].label=="Thumbs Down"){ 
        document.getElementById("emoji_of_gesture").innerHTML="&#128078;";
       }
       if(results[0].label=="V for Victory"){
        document.getElementById("emoji_of_gesture").innerHTML="&#128406;";
       }
    }
}