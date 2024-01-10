textInput = document.getElementById("inputText");
var msg = new SpeechSynthesisUtterance();

function speech(){
    msg.text = textInput.value;
    window.speechSynthesis.speak(msg);
}