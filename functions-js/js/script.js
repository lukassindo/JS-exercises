
function drawTree(height) {
	for (i = 0; i < height; i++) {
		var star = ' ';
		for (j = 0; j < i + 1; j++) {
			var star = star += '*'; 
		}
		for (k = 0; k < (height - i); k++) {
				var star = ' '+star;
			}
		console.log(star);
	}	
		
}