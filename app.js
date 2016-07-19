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
	$('ul').on('click', '.shopping-item-toggle', function(e) {
		$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
		e.preventDefault();
	});
	$('ul').on('click', '.shopping-item-delete', function(e) {
		$(this).closest('li').remove();
		e.preventDefault();
	});
});
