items = [];

$(document).ready(function(){

	newGrid(16);

	$("button").click(function() {
		var num = prompt("Enter New Grid Size");
		$(".row").remove();
		newGrid(num);
	});

	$(document).on('mouseenter', '.grid-item', function() {
		$(this).css('background-color','#ccc');
	});
})

function newGrid(gridSize) {
	for (var i=0;i<gridSize;i++) {
		$(".wrapper").append('<div class="row"></div>');
		for (var j=0;j<gridSize;j++) {
			$($(".row").get(i)).append('<div class="grid-item"></div>')
		}
	}
	$(".row").height($(".wrapper").height()/gridSize);
	$(".grid-item").width($(".wrapper").width()/gridSize);
	items = $(".grid-item");
}