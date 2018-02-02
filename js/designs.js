// This JavaScript program was developed for the Google Challenge Scholarship by
// Isabella Navarro in February, 2018.

$(document).ready(function() {
	// Important elements definition
	const setSize = $("#sizeButton");
	const resetGridBut = $('#resetGrid');
	const table = $('#pixelCanvas');

//Function to create the Drawing Area
	function makeGrid() {
		// Get values of input 
		const rows = $('#inputHeight').val();
		const columns = $('#inputWeight').val();
		const alert = $('.alert');

		// Add an alert message above the grid.
		function alertMessageAdd() {
			alert.css('display', 'block');
		};

		// Removes the alert message above the grid.
		function alertMessageRemoval() {
			alert.css('display', 'none');
		};

		// Input validation to restrict canvas size.
		// If input is empty, smaller than one or bigger than 100, it breaks.
		// Otherwise, the canvas is created.
		if (isNaN(rows) || rows < 1 || rows > 100 || isNaN(columns) || columns < 1 || columns > 100) {			
	    	alertMessageAdd();
	    } else {
	    	alertMessageRemoval();
	    	for (let x = 0; x < rows; x++) {
			table.append("<tr></tr>");
			for (let y = 0; y < columns; y++) {
				table.children().last().append("<td></td>");
			}
		}}};

	// Function Listener to user's action and coloring of selected cell.
	table.on('click', 'td', function() {
		const color = $("#colorPicker").val(); // Get color from input
		$(this).attr('bgcolor', color);		 // Paints the canvas pixel
	});

	// Function Listener to user's right click of mouse and cell cleaning
	table.on('contextmenu', 'td', function(event) {
		event.preventDefault();
		$(this).attr('bgcolor', '#fff');
	});

	// Left click functionalities
	// Function Listener for holding down mouse left button
	let holdLeft = false;
	$('td').mousedown(function(event) {
		if (event.which === 1) {
			holdLeft = true;
		}
	});

	$('td').mouseup(function(event) {
		if (event.which === 1) {
			holdLeft = false;
		}
	});

	// Dragging mouse for painting
	$('td').mouseover(function() {
		if (holdLeft) {
			const color = $("#colorPicker").val();
			$(this).attr('bgcolor', color);
		}
	});

	// Right mouse click functionalities
	// Function Listener for holding down mouse right button
	let holdRight = false;
	$('td').mousedown(function(event) {
		if (event.which === 3) {
			holdRight = true;
		}
	});

	$('td').mouseup(function(event) {
		if (event.which === 3) {
			holdRight = false;
		}
	});

	// Dragging mouse for cleaning
	$('td').mouseover(function() {
		if (holdRight) {
			$(this).attr('bgcolor', '#fff');
		}
	});

	// Canvas is made if 'Submit' button is clicked
	setSize.click(function(event) {
		event.preventDefault();
		drawCanvas();	
	});

	// Canvas is cleaned if 'Submit' button is clicked
	resetGridBut.click(function() {
		drawCanvas();
	});
		
	// Removes the canvas if existing
	function removeGrid() {
		table.children().remove();
	};

// If there's an existing canvas, call 'removeGrid()' function before creating a new one
	function drawCanvas() {
		if (table.children().length > 0 ) {
			removeGrid();
			makeGrid();
		} else {
			makeGrid();
		}
	};

});
