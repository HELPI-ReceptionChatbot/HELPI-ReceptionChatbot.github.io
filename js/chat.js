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

  if ($.trim(message) == '') {
    return false;
  }

  $('<li class="replies"><p>' + message + '</p></li>').appendTo($('.messages ul'));

  message = message.toLowerCase();

  if (message.indexOf("hello")!=-1) {
	  reply = "Hello!! How are you?";
  }
  else if (message.indexOf("principal")!=-1) {
    reply = "Dr. Latesh B. Chaudhari is the principal of FETR";
  }
  else if (message.indexOf("head")!=-1 || message.indexOf("hod")!=-1) {
    if (message.indexOf("computer")!=-1) {
      reply = "Miss Bhavini R. Bhatt is the Head of Computer Science & Engineering Department";
    }
    if (message.indexOf("civil")!=-1) {
      reply = " is the Head of Civil Engineering Department";
    }
    if (message.indexOf("chemical")!=-1) {
      reply = " is the Head of Chemical Engineering Department";
    }
    if (message.indexOf("electrical")!=-1) {
      reply = " is the Head of Electrical Engineering Department";
    }
    if (message.indexOf("mechanical")!=-1) {
      reply = " is the Head of Mechanical Engineering Department";
    }
    if (message.indexOf("humanity")!=-1) {
      reply = "Dr. Dinesh A. Dhadania is the Head of Science & Humanity Engineering Department";
    }
  }
  else
	  reply="Please ask again!!";

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
