$(document).ready(function() {
	$("nav a").click(function() {
		$("nav .current").removeClass("current");
		$("#main section.current").removeClass("current");

		$(this).addClass("current");
		$("#main section" + $(this).attr("href")).addClass("current");
		// $("#main section" + $(this).attr("href")).slideDown();
	});
});