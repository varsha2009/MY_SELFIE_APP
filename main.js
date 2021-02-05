var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function start(){
    console.log('inside start function');
    document.getElementById("textbox").innerHTML = " ";
    recognition.start();    
}
recognition.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    
    if (content == 'take my selfie'){
        speak(); 
    }
}
function speak(){
    var synth = window.speechSynthesis;
    var speak_data = 'taking your selfie in 5 seconds';
    var talk = new SpeechSynthesisUtterance(speak_data);
    synth.speak(talk);
    Webcam.attach( '#camera' );
    setTimeout(function(){
        take_selfie();
        save();
    },5000 );
    
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
   
function take_selfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id = 'result_img' src="+data_uri+">";
    });

}
function save(){
  document.getElementById("link").href = document.getElementById('result_img').src;
  document.getElementById("link").click();
}