$(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;
switch (nextCard){
	case "card--setup":
		moveAlong = true;
		break;
		case "card--batteground":
        moveAlong = true;
        break;
}
if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
});