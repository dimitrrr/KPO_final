$(document).ready(function () {
	$('[data-toggle="toggle"]').change(function () {
		$(this).parents().next('.hide').toggle();
	});
});

$('[data-toggle="toggle"]').each(function () {
	$(this).parents().next('.hide').hide();
});

$('.find input').on('input', function () {
	$('tbody td').each(function () {
		$(this).parent().show();
	});
	let value = $(this).val();
	$('.labels td:nth-child(1)').each(function () {
		let a = $(this).html().toLowerCase();
		if (a.indexOf(value.toLowerCase()) < 0)
			$(this).parent().hide();
			$(this).parent().next('.hide').hide();
	});
});