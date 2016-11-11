
/*function sortListData() {
	var divs = document.getElementsByClassName('box');
	var sortArray = [];

	for (var i = 0; i < divs.length; i++) {
		var div = divs[i];
		var value = divs[i].attributes[1].nodeValue;

		sortArray.push([ value, div ]);
	};

	sortArray.sort(compareNumeric);

	var parent = document.getElementById('boxes');
	parent.innerHTML = "";

	for(var i = 0, l = sortArray.length; i < l; i++) {
		parent.appendChild(sortArray[i][1]);
	};
};
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
};*/


/*function sortListData() {
	var divs = document.getElementById('boxes').children;
	var sortArray = [];

	for (var i = 0; i < divs.length; i++) {
		var div = divs[i];
		var value = divs[i].attributes[1].nodeValue;

		sortArray.push([ value, div ]);
	};

	sortArray.sort(compareNumeric);

	var parent = document.getElementById('boxes');
	parent.innerHTML = "";

	for(var i = 0, l = sortArray.length; i < l; i++) {
		parent.appendChild(sortArray[i][1]);
	};
};
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
};*/

function sortListData() {
	var divs = document.querySelectorAll("[data-sort]");
	var arr = [].slice.call(divs);

	arr.sort(function(a, b) {
		return a.getAttribute("data-sort") - b.getAttribute("data-sort");
	});

	var parent = document.getElementById('boxes');
	parent.innerHTML = "";

	for(var i = 0, l = arr.length; i < l; i++) {
		parent.append(arr[i]);
	};
};

function sortListTtile() {
	var divs = document.querySelectorAll("[title]");
	var arr = [].slice.call(divs);

	arr.sort(function(a, b) {
		return a.getAttribute("title").localeCompare(b.getAttribute("title"));
	});

	var parent = document.getElementById('boxes');
	parent.innerHTML = "";

	for(var i = 0, l = arr.length; i < l; i++) {
		parent.append(arr[i]);
	};
};

console.log(arr);
