var images;
var index;
var animating = false

runAnimation = function(){
  $(images[index]).addClass('focussed');

  setTimeout(function(){
    $(".focussed").each(function(index, element){
      $(element).removeClass('focussed');
      $(element).addClass('discarded');

      setTimeout(function(){
        $(element).removeClass('discarded');
      }, 1000);
    });
    index++;
    index = index % images.length;
    if(animating) {
      runAnimation();
    } else {
      selectItem();
    }
  }, 300);
}

selectItem = function(){
  setTimeout(function(){
    $(images[index]).addClass('focussed');
    $('#roullete_audio').get(0).pause();
    $('#cheer_audio').get(0).play();
    $('.payment').slideDown();
  }, 1000);
}

$(function(){
  images = $(".roulette img");
  index = 0;

  $('#play_btn').click(function(){
    animating = true;
    runAnimation();
    $('#roullete_audio').get(0).play();
    $('#play_btn').hide();
    $('.payment').hide();
    $('#stop_btn').show();
  });

  $('#stop_btn').click(function(){
    animating = false;
    $('#play_btn').show();
    $('#stop_btn').hide();
  });
});
