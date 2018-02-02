// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// function makeGrid() {

// // Your code goes here!

// }
$(document).ready(function () {

	const setSize = $("#sizeButton");
	const resetGridBut = $('#resetGrid');
	const table = $('#pixelCanvas');
	

	function makeGrid() {
		const rows = $('#inputHeight').val();
		const columns = $('#inputWeight').val();
		

		// Canvas set up
		for (let x = 0; x < rows; x++) {
			table.append("<tr></tr>");
			for (let y = 0; y < columns; y++) {
				table.children().last().append("<td></td>");
			}
		}};

	setSize.click(function() {
		drawCanvas();	
	});

	resetGridBut.click(function() {
		drawCanvas();
	});

	// Function Listener to User
	table.on('click', 'td', function() {
		var color = $("#colorPicker").val(); // Get color from input
		$(this).attr('bgcolor', color);
	});

	$('td').contextmenu(function(a) {
		a.preventDefault();
		$('this').css('bgcolor', '#fff');
	});
	
	function removeGrid() {
		table.children().remove();
	};

	function drawCanvas() {
		if (table.children().length > 0 ) {
			removeGrid();
			makeGrid();
		} else {
			makeGrid();
		}
	}
	

});
	