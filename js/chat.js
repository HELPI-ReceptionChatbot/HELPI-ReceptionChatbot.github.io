function on() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("fax").style.display = "none";
}

function off() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("fax").style.display = "block";
}

function reply() {
  temp=document.getElementById("in").value;
  if (temp=="hello") {
	document.getElementById("in").value = "Welcome";
  }
}


$(".messages").animate({ scrollTop: $(document).height() }, "fast");

function newMessage() {
  message = $(".message-input input").val();
  if($.trim(message) == '') {
    return false;
  }
  $('<li class="sent"><p>' + message + '</p></li>').appendTo($('.messages ul'));
  $('<li class="replies"><img src="img/helpi.png" alt="" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
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
