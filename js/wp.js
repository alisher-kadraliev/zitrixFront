function cookieAcceptWhatsapp() {
  createCookie("wp-cookie", "1", 5);
}

function createCookie(name, value, days) {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie =
    encodeURIComponent(name) +
    "=" +
    encodeURIComponent(value) +
    expires +
    "; path=/";
}

function readCookie(name) {
  var nameEQ = encodeURIComponent(name) + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0)
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}

var yesCookie = readCookie("p-cookie");
if (yesCookie == 1) {
  $(".cookie-policy").hide();
}

const firstSession = readCookie("wp-cookie");
$(document).on("click", "#whatsapp-popup", function () {
  $(".whatsapp-wrapper").toggleClass("hide-whatsapp show-whatsapp");
  setTimeout(function () {
    $(".loading-animation").hide();
    $(".whatsapp-message-wrapper").css("display", "flex").hide().fadeIn("slow");
  }, 1000);
});
$(document).on("click", ".close_whatsapp", function () {
  $("#whatsapp-chat");
  $(".whatsapp-wrapper").toggleClass("hide-whatsapp show-whatsapp");
});
if (firstSession == "1") {
  $(".whatsapp-wrapper").removeClass("show-whatsapp");
  $(".whatsapp-wrapper").addClass("hide-whatsapp");
} else {
  cookieAcceptWhatsapp();
  $(".whatsapp-wrapper")
    .delay(10000)
    .queue(function () {
      $(this).addClass("show-whatsapp");
      $(this).removeClass("hide-whatsapp");
    });
  $(".whatsapp-message-wrapper")
    .delay(13000)
    .queue(function () {
      $(this).addClass("di");
      $(this).removeClass("loading-animation");
    });
  $(".loading-animation")
    .delay(13000)
    .queue(function () {
      $(this).addClass("dinone");
    });
}
