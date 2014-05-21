$(document).ready(function() {
	$("a.poplight[href^=#]").click(function() {
		var popID, popURL, query, dim, popWidth, popMargTop, popMargLeft;
		popID = $(this).attr("rel");
		popURL = $(this).attr("href");
		query = popURL.split("?");
		dim = query[1].split("&");
		popWidth = dim[0].split("=")[1];
		$("#" + popID).fadeIn().css({"width":Number(popWidth)}).prepend("<a href='#' class='close'><img src='http://tiny.cc/closeimg' class='btn_close' title='Close Window' alt='Close' /></a>");
		popMargTop = ($("#" + popID).height() + 80) / 2;
		popMargLeft = ($("#" + popID).width() + 80) / 2;
		$("#" + popID).css({"margin-top":-popMargTop,"margin-left":-popMargLeft});
		$("body").append("<div id='fade'></div>");
		$("#fade").css({"filter":"alpha(opacity=80)"}).fadeIn();
		return false;
	});
	
	$("a.close, #fade").live("click", function() {
		$("#fade, .popup_block").fadeOut(function() {
			$("#fade, a.close").remove();
		});
		return false;
	});
});