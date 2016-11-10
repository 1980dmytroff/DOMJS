// 1
var boxLabel = document.getElementById('age-list');
var labels = boxLabel.getElementsByTagName('label');

for (var i = 0; i < labels.length; i++) {
	var label = labels[i];
	console.log(label);
};
// 2
var elem = document.getElementById('age-list');
var age = elem.previousElementSibling.innerHTML; // previousElementSibling, nextElementSibling – соседи-элементы.
console.log(age);
// 3
var form2 = document.getElementsByName('search-person');
console.log(form2);
// 4
var form1 = document.querySelector('form[name="search"]');
console.log(form1);
// 5
var input1 = form1.getElementsByTagName('input')[0];
console.log(input1);
// 6
var info = document.getElementsByName('info[0]')[0];
console.log(info);
// 7
var info2 = document.querySelector('form[name="search-person"] [name="info[0]"]');
console.log(info2);