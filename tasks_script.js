$(function(){
	$('#button-main').on('click', function(){
		if($('#name-add-new').val() != 0 && $('#discription-add-new').val() != 0)
		{
			$('#clear').css('display', 'none');
			let nameVal = $('#name-add-new').val();
			let discriptionVal = $('#discription-add-new').val();
			$('#discription-add-new').val(undefined);
			$('#name-add-new').val(undefined);
			let newTask = $('<div id="view-of-task" style="width: 400px;"></div>');
			$('#list-of-tasks').prepend(newTask);
			let newName = $('<div id="name-new-here"></div>');
			let newD = $('<div id="d-new-here"></div>');
			let deleteButton = $('<button class="delete-button"><i class="bi bi-x-lg"></button>');
			let hideButton = $('<button class="hide-button"><i class="bi bi-caret-down-fill"></button>');
			let showButton = $('<button class="show-button"><i class="bi bi-caret-up-fill"></button>');
			newName.text(nameVal);
			newD.text(discriptionVal);
			$('#view-of-task').prepend(newName);
			$('#view-of-task').prepend(hideButton);
			$('#view-of-task').prepend(showButton);
			$('#view-of-task').prepend(deleteButton);
			$('#view-of-task').append(newD);
			function checkClear() 
			{
				let element = document.getElementById('name-new-here');
				if(!element){
					$('#clear').css('display', 'inline-block');
				}
			}
			setInterval(checkClear, 100);
			deleteButton.on('click', function(){
				$(newTask).remove();
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
				setTimeout(function(){
					$(newName).css({
						'border-bottom': '0px'
					});
				}, 300);
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
				setTimeout(function(){
					$(newName).css({
						'border-bottom': '1px solid #c9c9c9'
					});
				}, 100);
			}); 
		}
		if($('#name-add-new').val() != 0 && $('#discription-add-new').val() == 0)
		{
			$('#clear').css('display', 'none');
			let nameVal = $('#name-add-new').val();
			$('#name-add-new').val(undefined);
			let newTask = $('<div id="view-of-task" style="width: 400px;"></div>');
			$('#list-of-tasks').prepend(newTask);
			let newName = $('<div id="name-new-here" style="border-bottom: 0px"></div>');
			let deleteButton = $('<button class="delete-button"><i class="bi bi-x-lg"></button>');
			newName.text(nameVal);
			$('#view-of-task').prepend(newName);
			$('#view-of-task').prepend(deleteButton);
			function checkClear() 
			{
				let element = document.getElementById('name-new-here');
				if(!element){
					$('#clear').css('display', 'inline-block');
				}
			}
			setInterval(checkClear, 100);
			deleteButton.on('click', function(){
				$(newTask).remove();
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
// При создании сохраняются данные в 2 видах localStorage(описания и названия), при загрузке - проверка - есть или нет
// если сохраняется только названиние, то  сохраняется в сторэдж с описание пустота, на которую при прогрузке проверяем
// при загрузке, если что-то есть, разбиваем оба массива на отдельные объекты и херачим на страницу