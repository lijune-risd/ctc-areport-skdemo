var video = $("#SpeechID");
var video2 = $("#SpeechID2");

var speechBubble = $("#SpeechBubble");
var speechBubble2 = $("#SpeechBubble2");


// The the user hovers the mouse over
// the rectangle the "expand-bounce"
//animation is called and the duration
// is set to 250 miliseconds.
// When the user moves the mouse away
// the "shrink" animation gets called
// and the duration is set to 100
// miliseconds.
video.hover(
  function() {
    speechBubble.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.25s"
    });
  },
  function() {
    speechBubble.css({
      "animation-name": "shrink",
      "animation-duration": "0.1s"
    });
  }
);



video2.hover(
    function() {
      speechBubble2.css({
        "animation-name": "expand-bounce",
        "animation-duration": "0.25s"
      });
    },
    function() {
      speechBubble2.css({
        "animation-name": "shrink",
        "animation-duration": "0.1s"
      });
    }
  );
  