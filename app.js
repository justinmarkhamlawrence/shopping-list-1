$(document).ready(function() {
	$('button[type="submit"]').click(function(e) {
		e.preventDefault();
		// alert('working');
		var userInput = $('input').val();
		// $('.shopping-list').append(
		// 	'<li><span class="shopping-item">userInput</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
		console.log(userInput);
	});
});
//Enter items by clicking "add item" or clicking return
	//enter text into item field
		//trigger function
			//listen for mouseclick and enter key
				//enter nothing to input if field is empty
			//call function to add input to span of li
			//add span to li with all additional pieces(ie. buttons, spans, etc.)
			//append or prepend li to ul
//check and uncheck items
	//use "this" to target specific element
	//if class not present, add class to span
	//else remove class
//rm items using button
	//rm "this" item from ul