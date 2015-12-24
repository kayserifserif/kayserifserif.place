$('#mid ul li a').click(function() {
	$('#mid ul li.current').removeClass("current");
	$('#main section.current').removeClass("current");

	$(this).parent().addClass("current");
	$('#main section' + $(this).attr('href')).addClass("current");
	// $('#main section' + $(this).attr('href')).slideDown();
});
//