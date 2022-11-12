$(function(){
	$('#button-main').on('click', function(){
		if($('#name-add-new').val() != 0 && $('#discription-add-new').val() != 0)
		{
			$('#clear').css('display', 'none');
			var nameVal = $('#name-add-new').val();
			var discriptionVal = $('#discription-add-new').val();
			$('#discription-add-new').val(undefined);
			$('#name-add-new').val(undefined);
			var newTask = $('<div id="view-of-task"></div>');
			$('#list-of-tasks').prepend(newTask);
			var newName = $('<div id="name-new-here"></div>');
			var newD = $('<div id="d-new-here"></div>');
			var deleteButton = $('<button class="delete-button"></button>');
			var hideButton = $('<button class="hide-button"></button>');
			var showButton = $('<button class="show-button"></button>');
			newName.text(nameVal);
			newD.text(discriptionVal);
			$('#view-of-task').prepend(newName);
			$('#view-of-task').prepend(hideButton);
			$('#view-of-task').prepend(showButton);
			$('#view-of-task').prepend(deleteButton);
			$('#view-of-task').append(newD);
			function checkClear() 
			{
				var element = document.getElementById('name-new-here');
				if(!element){
					$('#clear').css('display', 'inline-block');
				}
			}
			setInterval(checkClear, 100);
			deleteButton.on('click', function(){
				$(newName).remove();
				$(newD).remove();
				$(this).remove();
				$(hideButton).remove();
				$(showButton).remove();
			});
			hideButton.on('click', function(){
				$(this).hide();
				$(showButton).show();
				$(newD).animate({
					height: 0,
					padding: 0,
				}, 400);
				setTimeout(function(){
					$(newD).hide();
				}, 400);
			}); 
			showButton.on('click', function(){
				$(this).hide();
				$(hideButton).show();
				$(newD).animate({
					'padding-right': '15px',
					'padding-left': '20px',
					'padding-top': '15px',
					'padding-bottom': '40px',
				}, 400);
				setTimeout(function(){
					$(newD).show();
				}, 100);
			}); 
		}
	});
	$(document).keydown(function(event) {
    if (event.which === 13)
    	{
     	   $('#button-main').click();
   		}
	});
	
});