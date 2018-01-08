
function drawTree(height) {
	for (var i = 0; i < height; i++) {
		var star = ' ';
		for (var j = 0; j < i + 1; j++) {
			star += '* '; 
		}
		for (var k = 0; k < (height - i); k++) {
			star = ' ' + star;
			}
		console.log(star);
	}	
		
}

drawTree(8);
