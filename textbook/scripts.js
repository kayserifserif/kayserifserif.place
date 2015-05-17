$(document).ready(function() {
	pageJump(1);
	// writePageControls();
    $("#page1").load("content.txt");
});

var pageTotal = $(".page").length;

// BELOW CODE FROM http://www.peachpit.com/articles/article.aspx?p=464632

var pageCurrent = 1;
var objPage = null;

function writePageControls() {
	$("body").append("<div class='toolBar'>");
	$("body").append("<div class='pagination'>");
	// document.writeln ('<div class="toolBar">');
	// document.writeln ('<div class="pagination">');
	if (pageCurrent != 1) {
		$("body").append("<div class='arrow' id='left'><a href='javascript:pageTurn(\"prev\")'>&lt;</a></div>");
		// document.writeln ('<div class="arrow" id="left"><a href="javascript:pageTurn(\'prev\')">&lt;</a></div>');
	}
	document.writeln ('Pages ');
	for (i = 1; i <= pageTotal; i++) {
		if (i == pageCurrent) {
			document.write (i);
		}
		else {
			document.write ('<a href="javascript:pageJump('+i+')">'+i+'</a>');
		}
		if (i != pageTotal) {
			document.write('  ');
		}
	}
	if (pageCurrent != pageTotal) {
		document.writeln ('<div class="arrow" id="right"><a href="javascript:pageTurn(\'next\')">&gt;</a></div>');
	}
	document.writeln ('</div>');
	document.writeln (' <br clear="all"/></div>');
	if (pageCurrent == pageTotal) {
		pageCurrent = 1;
	}
	else {
		pageCurrent++;
	}
}

function pageTurn(direction) {
	if ((direction == 'prev') && (pageCurrent != 1)) {
		pageCurrent--;
	}
	if ((direction == 'next') && (pageCurrent != pageTotal)) {
		pageCurrent++;
	}
	if (objPage) {
		objPage.style.display = 'none';
	}
	pageName = 'page' + pageCurrent;
	objPage = document.getElementById(pageName);
	objPage.style.display = 'block';
 }

function pageJump(pageName) {
	if(!pageName) {
		pageName = 1;
	}
	if (objPage) {
		objPage.style.display = 'none';
	}
	pageCurrent = pageName;
	pageName = 'page' + pageCurrent;
	objPage = document.getElementById(pageName);
	objPage.style.display = 'block';
}