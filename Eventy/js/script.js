var list = document.getElementById('list');
var add = document.getElementById('addElem');
var liElement = document.getElementsByTagName('li');

add.addEventListener('click', function(e) {
	var element = document.createElement('li');
	element.innerHTML = 'item ' + liElement.length;
    list.appendChild(element);
})
