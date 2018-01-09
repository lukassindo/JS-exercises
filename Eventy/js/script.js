var list = document.getElementById('list');
var add = document.getElementById('addElem');


add.addEventListener('click', function(e) {
	var element = document.createElement('li');
	var liElement = document.getElementsByTagName('li');
	element.innerHTML = 'item' + liElement.length;
    list.appendChild(element);
})
