$(document).ready(function() {


playtheme();


  $('.ryu').mouseenter(function() {
    $('.ryu-still, .ryu-cool, .ryu-throwing').hide();
    $('.ryu-ready').show();
  })

  .mouseleave(function() {
    $('.ryu-ready, .ryu-throwing, .ryu-cool').hide();
    $('.ryu-still').show();
  })

  .mousedown(function() {
    playHadouken();    
    $('.ryu-ready, .ryu-cool .ryu-still').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate(
      {'left': '1000px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '465px');
      }
    );
  })

  .mouseup(function() {
    $('.ryu-throwing, .ryu-still, .ryu-cool').hide();
    $('.ryu-ready').show();
  });

  $(document).keydown(function(e) {
  if (e.keyCode == 88 ) {
    $('.ryu-ready, .ryu-throwing, .ryu-still').hide();
    $('.ryu-cool').show();
  }
})

.keyup(function(e) {
  if (e.keyCode == 88){
    $('.ryu-still').show();
    $('.ryu-cool, .ryu-ready, .ryu-throwing').hide();
  };
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playtheme () {
  $('#play-stage')[0].volume = 0.5;
  $('#play-stage')[0].load();
  $('#play-stage')[0].play();
  }
});

