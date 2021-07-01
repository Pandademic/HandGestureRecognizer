camera= document.getElementById("Camera");
Webcam.attach(camera);
Webcam.set({
    width:700,
    height:700,
    image_format:'png',
    png_quality:90

});