Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90 ,

constraint: {
  facingMode:"environment"
}

  });

  
  camera=document.getElementById("camera");
Webcam.attach(camera);

console.log("ml5 version: ",ml5.version);


function captureImage() {
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='captured_photo' src='" + data_uri + "'>";
  });

}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/JaO51YUfN/model.json",modelLoaded);


function modelLoaded(){
  console.log("modelLoaded");

  function identifyObject() {
    
      var image = document.getElementById("result");
      classifier.classify(image , gotresult);
        
  }

function  gotresult(error, results){
if(error){
  console.log(error);
}
else {
  console.log(results);
  document.getElementById("object").innerHTML =results[0].label ;
 
}
}

}