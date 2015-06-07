// PAGINATION (http://www.peachpit.com/articles/article.aspx?p=464632)

var pageTotal = document.querySelectorAll(".page").length;
var pageCurrent = 1;
var objPage = null;
var left = "<a class='arrow' id='left' onclick='pageTurn(\"prev\")'><div class='triangle'></div></a>";
var right = "<a class='arrow' id='right' onclick='pageTurn(\"next\")'><div class='triangle'></div></a>";

function writePageControls() {
	$("#left").remove();
	$("#right").remove();
	if (pageCurrent != 1) {
		$("body").append(left);
	}
	if (pageCurrent != pageTotal) {
	    $("body").append(right);
	}
}

function pageTurn(direction) {
	if ((direction == "prev") && (pageCurrent != 1)) {
		pageCurrent--;
	}
	if ((direction == "next") && (pageCurrent != pageTotal)) {
		pageCurrent++;
	}
	if (objPage) {
		objPage.hide();
	}
	objPage = $(".page:nth-of-type(" + pageCurrent + ")");
	objPage.show();
	writePageControls();
 }

function pageJump(pageName) {
	pageCurrent = pageName;
	objPage = $(".page:nth-of-type(" + pageCurrent + ")");
	objPage.show();
}

// FROM http://stackoverflow.com/questions/13150264/jquery-pagination-go-to-page-on-input-value-change
// $(".pageNumberForm").submit(function() {
//     var pageInput = $(this).children(".pageNumber").first();
//     var pageInputValue = pageInput.val();

//     if (pageInputValue < pageInput.attr("min") || pageInputValue > pageInput.attr("max") || !pageInputValue.match(/\d+/)) {
//         alert("Please enter a value between " + pageInput.attr("min") + " and " + pageInput.attr("max"));
//         return false;
//     }
//     else {
//     	pageJump(pageInputValue);
//     }
// });




// DRAG AND DROP (http://www.html5rocks.com/en/tutorials/dnd/basics/)
// var dragSrcEl = null;

// function handleDragStart(e) {
// 	dragSrcEl = this;
// 	e.dataTransfer.effectAllowed = 'move';
// }

// function handleDragOver(e) {
// 	if (e.preventDefault) {
// 		e.preventDefault();
// 	}

// 	e.dataTransfer.dropEffect = 'move';

// 	return false;
// }

// function handleDragEnter(e) {
// 	this.classList.add('hover');
// }

// function handleDragLeave(e) {
// 	this.classList.remove('hover');
// }

// function handleDrop(e) {
//   // this / e.target is current target element.

//   if (e.stopPropagation) {
//     e.stopPropagation(); // stops the browser from redirecting.
//   }

//   // See the section on the DataTransfer object.

//   return false;
// }

// function handleDrop(e) {
//   // this / e.target is current target element.

//   if (e.stopPropagation) {
//     e.stopPropagation(); // stops the browser from redirecting.
//   }

//   // See the section on the DataTransfer object.

//   return false;
// }

// function handleDragEnd(e) {
//   // this/e.target is the source node.

//   [].forEach.call(descriptions, function (description) {
//     description.classList.remove('hover');
//   });
// }

// var descriptions = document.querySelectorAll(".descriptions div");
// [].forEach.call(descriptions, function(description) {
// 	description.addEventListener('dragstart', handleDragStart, false);
// 	description.addEventListener('dragenter', handleDragEnter, false);
// 	description.addEventListener('dragover', handleDragOver, false);
// 	description.addEventListener('dragleave', handleDragLeave, false);
// });

function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    console.log(data);
    console.log(document.getElementById(data));
    console.log(e.target);
    e.target.appendChild(document.getElementById(data));
    console.log(e.target);
}




// GLOSSARY
var glossary = {} // create an object

var dls = document.getElementsByTagName("dl"); // get all definition lists
for (var i = 0; i < dls.length; i++) {
	glossary[i] = new Array(dls[i].getElementsByTagName("dt")[0].textContent); // get text of definition term
	glossary[i]["term"] = dls[i].getElementsByTagName("dt")[0].textContent; // get text of definition term
	glossary[i]["pinyin"] = dls[i].getElementsByTagName("dd")[0].textContent; // get text of pinyin
	glossary[i]["definition"] = dls[i].getElementsByTagName("dd")[1].textContent; // get text of definition

	var element = document.createElement("li"); // create a list item
	element.innerHTML = 
		"<a href='#'>" + glossary[i] + "</a>" 
		+ "<div class='mp-level'>" 
			+ "<h2>" + glossary[i]["term"] + "</h2>" 
			+ "<a class='mp-back' href='#'>back / 返回</a>" 
			+ "<h3>" + glossary[i]["pinyin"] + "</h3>" 
			+ "<p>" + glossary[i]["definition"] + "</p>" 
		+ "</div>"; // fill the list item with above
	document.querySelector(".mp-level ul").appendChild(element); // add list item to unordered list in menu
}
