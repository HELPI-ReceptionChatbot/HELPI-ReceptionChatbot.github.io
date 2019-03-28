function on() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("fax").style.display = "none";
}

function off() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("fax").style.display = "block";
}


$(".messages").animate({ scrollTop: $(document).height() }, "fast");

function newMessage() {
  message = $(".message-input input").val();
  reply = '';
  if($.trim(message) == '') {
    return false;
  }
  if(message.search("hello")!=-1)
	  reply="Hello!! How are you?";
  else
	  reply="Please ask again!!";
  $('<li class="replies"><p>' + message + '</p></li>').appendTo($('.messages ul'));
  $('<li class="sent"><img src="img/helpi.png" alt="" /><p>' + reply + '</p></li>').appendTo($('.messages ul'));
  $('.message-input input').val(null);
  $(".messages").animate({ scrollTop: $(document).height() }, "fast");
};

$('.submit').click(function() {
  newMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    newMessage();
    return false;
  }
});
