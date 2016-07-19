$(document).ready(function() {
	$('button[type="submit"]').click(function(e) {
		e.preventDefault();
		var userInput = $('input').val();
		if (userInput === "") {
			alert('Please input an item!')
		}
		else {
		$('.shopping-list').append(
			'<li><span class="shopping-item">' + userInput + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
		$('input').val('');
		}	
	});
	
});
//Enter items by clicking "add item" or clicking return
				//enter nothing to input if field is empty
//check and uncheck items
	//use "this" to target specific element
	//if class not present, add class to span
	//else remove class
//rm items using button
	//rm "this" item from ul